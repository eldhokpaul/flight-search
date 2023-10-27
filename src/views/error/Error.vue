<template>
  <v-col class="d-flex align-center justify-center">
    <div class="d-flex flex-row-fluid flex-column">
      <!-- begin:: Content -->
      <h1
        class="font-size-sm-100 font-weight-boldest text-dark-75 mt-15"
        style="font-size: 150px"
      >
        404
      </h1>
      <p class="font-size-h3 font-weight-light">
        OOPS! Something went wrong here
      </p>
      <!-- end:: Content -->
    </div>
  </v-col>
</template>
<script>
export default {
  name: "Error-6",
  mounted() {},
  computed: {
    backgroundImage() {
      return process.env.BASE_URL + "media/bg5.jpg";
    },
  },
};
</script>
