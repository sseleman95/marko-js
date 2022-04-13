import { types as t } from "@marko/compiler";
import { writeHTMLHydrateStatements } from "../../util/apply-hydrate";
import { callRuntime } from "../../util/runtime";
import { flushInto } from "../../util/writer";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default {
  translate: {
    exit(program: t.NodePath<t.Program>) {
      flushInto(program);
      writeHTMLHydrateStatements(program);

      const renderContent: t.Statement[] = [];

      for (const child of program.get("body")) {
        if (!isStatic(child)) {
          renderContent.push(child.node);
          child.remove();
        }
      }

      const rendererId = program.scope.generateUidIdentifier("renderer");
      const { attrs } = program.node.extra;
      program.pushContainer("body", [
        t.variableDeclaration("const", [
          t.variableDeclarator(
            rendererId,
            t.arrowFunctionExpression(
              [attrs ? (attrs.var as any) : t.identifier("input")],
              t.blockStatement(renderContent)
            )
          ),
        ]),

        t.exportDefaultDeclaration(rendererId),

        t.exportNamedDeclaration(
          t.variableDeclaration("const", [
            t.variableDeclarator(
              t.identifier("render"),
              callRuntime("createRenderer", rendererId)
            ),
          ])
        ),
      ]);
    },
  },
};

function isStatic(path: t.NodePath<any>) {
  if (path.isImportDeclaration()) {
    return true;
  }
  if (path.isExportDeclaration()) {
    return true;
  }

  // TODO include more cases here.

  return false;
}
