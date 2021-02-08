<template lang="html">
  <div>
    <h1>Route Dynamique</h1>
    <router-link to="/dynamic-route/98">Route 98 </router-link> <br />
    <router-link to="/dynamic-route/ford">Route ford </router-link> <br />
    <router-link to="/dynamic-route/8">Route 8 </router-link> <br />
    <router-link to="/dynamic-route/88">Route 88 </router-link> <br />
    <pre>
parametre :
      {{ $route.params }}
    </pre>
  </div>
</template>

<script>
//
//import magentoSynchroListSites from "./ListSites.vue";
export default {
  name: "DynamicRoute",
  props: {
    //
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
    console.log("route charger :", this.$route.params);
  },
  watch: {
    //
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
