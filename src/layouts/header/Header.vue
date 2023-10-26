<template>
  <v-app-bar flat app clipped-left clipped-right color="white" light>
    <v-toolbar-title class="align-center d-flex">
      <!-- <span class="logo-icon">
        <img src="@/assets/eurowings_logo.png" />
      </span> -->
      <span class="logo-text ml-2">
        <img src="@/assets/eurowings_logo.png" class="mt-2" />
      </span>
    </v-toolbar-title>
    <v-spacer />
    <!---right part -->
    <!-- <v-menu bottom left transition="scale-transition">
      <template v-slot:activator="{ on }">
        <v-btn large icon v-on="on">
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in userprofile" :key="i" @click="href">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> -->
  </v-app-bar>
</template>
<script>
// Utilities
import { mapState, mapMutations } from "vuex";
export default {
  name: "PageHeader",

  components: {},

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    userprofile: [
      { title: "My Profile" },
      { title: "My Balance" },
      { title: "Inbox" },
      { title: "Account Setting" },
      { title: "Logout" },
    ],
    href() {
      return undefined;
    },
  }),

  computed: {
    ...mapState(["Sidebar_drawer"]),
  },

  methods: {
    ...mapMutations({
      setSidebarDrawer: "SET_SIDEBAR_DRAWER",
    }),
  },
};
</script>
