<template>
  <v-container
    fluid
    class="down-top-padding"
    style="height: 100%; display: flex; flex-direction: column"
  >
    <v-row>
      <v-col cols="12">
        <v-card outlined flat>
          <v-tabs grow background-color="transparent" color="primary" left>
            <v-tab>
              <v-icon left> mdi-airplane </v-icon>
              <strong> Flight </strong>
            </v-tab>
            <v-tab-item>
              <search-component
                @searchFlight="searchFlights"
                v-model="flightSearchData"
              />
            </v-tab-item>
          </v-tabs>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-carousel>
          <v-carousel-item
            v-for="(item, i) in images"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>


<script>
import SearchComponent from "./components/SearchComponent.vue";
export default {
  name: "HomePage",
  components: {
    SearchComponent,
  },
  data: () => ({
    images: [
      {
        src: require("@/assets/slider1.jpg"),
      },
      {
        src: require("@/assets/slider2.jpg"),
      },
      {
        src: require("@/assets/slider3.jpg"),
      },
    ],
    flightSearchData: {
      from: "",
      to: "",
      outgoingDate: "",
      returnDate: "",
      class: "",
    },
  }),
  computed: {},
  mounted() {},
  methods: {
    searchFlights(data) {
      this.$router.push({
        name: "Results",
        params: {
          origin: data.from,
          destination: data.to,
          departureDate: data.outgoingDate,
          returnDate: data.returnDate,
          classType:data.class
        },
      });
    },
  },
};
</script>