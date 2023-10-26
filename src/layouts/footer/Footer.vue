<template>
  <v-footer app color="white" class="footerpart text-center" inset>
    <v-col cols="12">
      <span class="">© {{ new Date().getFullYear() }} - Flight Search</span>
    </v-col>
  </v-footer>
</template>
<script>
export default {
  name: "PageFooter",
};
</script>
<style lang="scss">
.v-application .footerpart {
  border-top: 1px solid rgba(0, 0, 0, 0.1) !important;
}
</style>