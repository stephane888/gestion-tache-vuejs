<template lang="html">
  <div>
    <h1>Route Dynamique V2</h1>
    <router-link to="/dynamic-route-v2/98">Route 98 </router-link> <br />
    <router-link to="/dynamic-route-v2/ford">Route ford </router-link> <br />
    <router-link to="/dynamic-route-v2/8">Route 8 </router-link> <br />
    <router-link to="/dynamic-route-v2/88">Route 88 </router-link> <br />
    <pre>
        parametre :
      {{ $route.params }}
      //
      {{ id }}
    </pre>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "DynamicRouteV2",
  props: {
    id: {
      type: String
    }
  },
  components: {
    //
  },
  data() {
    return {
      //
    };
  },
  mounted() {
    console.log("route V2 charger :", this.$route.params);
  },
  watch: {
    $route(to, from) {
      console.log("watch Route ", to, "\n : ", from);
    }
  },
  computed: {
    //
  },
  methods: {
    //
  }
};
</script>

<style lang="scss" scoped></style>

<!--
 //nom du fichier en pascal.
 //<template>
 - le nom des attributs en kebab-case;
 - la valeur des attributs et des variables en camelCase;
 - function en PascalCase
 //props, data
 - variable en camelCase
 //methods
 - variable en PascalCase
-->
