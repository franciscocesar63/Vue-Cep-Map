<template>
  <div>
    <div>
      <div>
        <b-navbar type="dark" variant="dark">
          <b-navbar-nav>
            <b-nav-item
              class="nav-link"
              v-for="routes in links"
              :key="routes.id"
              :to="routes.path"
            >
              {{ routes.name }}
            </b-nav-item>
          </b-navbar-nav>
          <b-navbar-nav class="ms-auto" align="right">
            <span v-if="currentRouteName=='Sobre'"> 
              <b-nav-item right>
                <b-button v-b-toggle.sidebar-1><b-icon icon="list"></b-icon></b-button>
              </b-nav-item>
            </span>
          </b-navbar-nav>
        </b-navbar>
      </div>
    </div>

    
  </div>
</template>

<script>
// console.log(this.$route);
export default {
  computed: {
    currentRouteName() {
      console.log(this.$route.name);
      return this.$route.name;
    },
  },
  created() {
    this.$router.options.routes.forEach((route) => {
      this.links.push({
        name: route.name,
        path: route.path,
      });
    });
  },
  data() {
    return {
      links: [],
      isApiPage: false,
    };
  },
};
</script>

<style scoped></style>
