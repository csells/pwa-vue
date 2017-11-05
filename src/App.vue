<template>
  <div id='app'>
    <b-navbar toggleable="md" type="dark" variant="dark" fixed="top">
      <b-nav-toggle target="nav_collapse"></b-nav-toggle>
      <b-navbar-brand :to="'/'">pwa-vue</b-navbar-brand>
        <b-collapse is-nav id="nav_collapse">
          <b-nav is-nav-bar>
            <b-nav-item :to="'/page2'">Page2</b-nav-item>
            <b-nav-item :to="'/page3'">Page3</b-nav-item>
          </b-nav>
        </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
/* show content under the nav-bar */
body {
  padding-top: 3.5rem;
}

/* speed up the navbar menu speed */
.collapsing {
  -webkit-transition: height 0.1s ease;
  -o-transition: height 0.1s ease;
  transition: height 0.1s ease;
}
</style>
