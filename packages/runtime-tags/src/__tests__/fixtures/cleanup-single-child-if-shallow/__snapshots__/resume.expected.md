# Render {}
```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      mounted
    </div>
    <!--M_*0 #div/1-->
    <div>
      child
    </div>
    <!--M_$2-->
    <!--M_|0 #text/2 1-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},1:_.b,2:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),2,"__tests__/components/child.marko_0_input",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div2/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      destroyed
    </div>
    <!--M_*0 #div/1-->
    <!--M_|0 #text/2 1-->
    <!--M_$2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},1:_.b,2:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),2,"__tests__/components/child.marko_0_input",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
removed #document/html0/body1/#comment4 after #document/html0/body1/#comment5
inserted #document/html0/body1/#comment4
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed div after #document/html0/body1/#comment4
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      mounted
    </div>
    <!--M_*0 #div/1-->
    <div>
      child
    </div>
    <!--M_$2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},1:_.b,2:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),2,"__tests__/components/child.marko_0_input",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/div4
removed #comment after #document/html0/body1/div4
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
```


# Render 
container.querySelector("button").click()

```html
<html>
  <head />
  <body>
    <button>
      Toggle
    </button>
    <!--M_*0 #button/0-->
    <div>
      destroyed
    </div>
    <!--M_*0 #div/1-->
    <!--M_|0 #text/2 1-->
    <!--M_$2-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e={0:_.a={show:!0,"#text/2(":_._["__tests__/template.marko_1_renderer"],"#text/2!":_.b={"#childScope/0":_.d={input:_.c={}}}},1:_.b,2:_.d},_.b._=_.a,_.c.write=_._["__tests__/template.marko_1/write"](_.b),_.e),2,"__tests__/components/child.marko_0_input",0,"__tests__/template.marko_0_show",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
inserted #document/html0/body1/#comment4
removed #text in #document/html0/body1/div2
inserted #document/html0/body1/div2/#text0
removed div after #document/html0/body1/#comment4
```