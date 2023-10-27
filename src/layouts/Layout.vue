<template>
  <v-app id="inspire">
    <Header v-model="expandOnHover"></Header>
    <v-main>
      <v-container class="fill-height" fluid>
        <router-view />
      </v-container>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Header from "./header/Header";
import Footer from "./footer/Footer";
// import { mapState, mapMutations } from "vuex";
export default {
  name: "PageLayout",

  components: {
    Header,
    Footer
  },

  props: {
    source: String
  },
  data: () => ({
    expandOnHover: false
  }),
  computed: {
    // ...mapState(["Customizer_drawer"])
  },

  methods: {
    // ...mapMutations({
    //   setCustomizerDrawer: "SET_CUSTOMIZER_DRAWER"
    // })
  }
};
</script>
