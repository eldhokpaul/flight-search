<template>
  <v-container
    fluid
    class="down-top-padding"
    style="height: 100%; display: flex; flex-direction: column"
  >
    <template v-if="initialLoadTask">
      <v-skeleton-loader type="card" />
      <v-skeleton-loader type="table" />
    </template>
    <template
      v-else-if="
        !initialLoadTask &&
        flightResults &&
        (flightResults.outbound || flightResults.inbound).length
      "
    >
      <v-row align-content="start">
        <v-col cols="12" class="ma-0 pa-0">
          <v-expansion-panels accordion tile>
            <v-expansion-panel>
              <v-expansion-panel-header
                class="white--text font-weight-bold"
                color="primary"
              >
                Change search
                <template v-slot:actions>
                  <v-icon color="white"> $expand </v-icon>
                </template></v-expansion-panel-header
              >
              <v-expansion-panel-content>
                <search-component
                  @searchFlight="modifyFlights"
                  :value="flightSearchData"
                  button-text="Change Search"
                />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
          <v-card flat class="my-3" outlined>
            <v-col class="pa-3" cols="12" sm="2">
              <v-select
                class="font-weight-medium"
                :items="sortItems"
                label="Sort by"
                placeholder="Sort by"
                dense
                v-model="sortBy"
                clearable
                hide-details
                outlined
              ></v-select>
            </v-col>
          </v-card>
        </v-col>
        <template
          v-if="flightResults.outbound && flightResults.outbound.length"
        >
          <v-col cols="12" class="ma-0 pa-0">
            <v-card-title>
              <div class="text-h5 font-weight-bold">Select outgoing flight</div>
            </v-card-title>
          </v-col>
          <v-col
            cols="12"
            class="ma-0 pa-0"
            v-for="(item, key) in filteredFlightResults.outbound"
            :key="'outbound' + key"
          >
            <flight-result-component :item="item" />
          </v-col>
        </template>
        <template v-if="flightResults.inbound && flightResults.inbound.length">
          <v-col cols="12" class="ma-0 pa-0">
            <v-card-title>
              <div class="text-h5 font-weight-bold">Select return flight</div>
            </v-card-title>
          </v-col>
          <v-col
            cols="12"
            class="ma-0 pa-0"
            v-for="(item, key) in filteredFlightResults.inbound"
            :key="'inbound' + key"
          >
            <flight-result-component :item="item" />
          </v-col>
        </template>
      </v-row>
    </template>

    <template v-else>
      <!-- Display a message when no results are found -->
      <v-card
        flat
        height="800"
        color="#f4f6f9"
        class="d-flex align-center"
        tile
      >
        <v-container fluid>
          <v-row>
            <v-col class="text-center">
              <v-alert color="accent" light icon="mdi-alert-circle">
                No results found.
              </v-alert>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </template>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import FlightResultComponent from "./components/FlightResultComponent.vue";
import SearchComponent from "./components/SearchComponent.vue";
export default {
  name: "FlightSearch",
  components: {
    FlightResultComponent,
    SearchComponent,
  },
  props: ["origin", "destination", "departureDate", "returnDate", "classType"],
  data: () => ({
    sortBy: "",
    sortItems: [
      { text: "Price", value: "price" },
      { text: "Departure airport", value: "origin" },
      { text: "Destination airport", value: "destination" },
    ],
    cabinClasses: [
      { text: "Economy", value: "m" },
      { text: "First", value: "f" },
      { text: "Business", value: "c" },
      { text: "Premium", value: "p" },
    ],
    initialLoadTask: false,
  }),
  watch: {
    "$route.params": {
      handler: function () {
        this.initialLoad();
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {
    ...mapState({
      flightResults: (state) => state.flight.flightResults,
    }),
    flightSearchData: {
      get: function () {
        return {
          from: this.origin,
          to: this.destination,
          outgoingDate: this.departureDate,
          returnDate: this.returnDate,
          class: this.classType,
        };
      },
    },
    filteredFlightResults() {
      const results = JSON.parse(JSON.stringify(this.flightResults));
      switch (this.sortBy) {
        case "origin": {
          const sortedInbound = this.sortFlights(results.inbound, this.sortBy);
          const sortedOutbound = this.sortFlights(
            results.outbound,
            this.sortBy
          );
          return { inbound: sortedInbound, outbound: sortedOutbound };
        }
        case "destination": {
          const sortedInbound = this.sortFlights(results.inbound, this.sortBy);
          const sortedOutbound = this.sortFlights(
            results.outbound,
            this.sortBy
          );
          return { inbound: sortedInbound, outbound: sortedOutbound };
        }
        case "price": {
          const sortedInbound = this.sortFlights(results.inbound, this.sortBy);
          const sortedOutbound = this.sortFlights(
            results.outbound,
            this.sortBy
          );
          return { inbound: sortedInbound, outbound: sortedOutbound };
        }
        default: {
          return results;
        }
      }
    },
  },
  // beforeMount() {
  //   this.initialLoad();
  // },
  methods: {
    ...mapActions([
      "getFlightResults", // -> this.getFlightResults()
    ]),
    async initialLoad() {
      this.initialLoadTask = true;
      await this.getFlightResults({
        origin: this.origin,
        destination: this.destination,
        departureDate: this.departureDate,
        returnDate: this.returnDate,
      });
      this.initialLoadTask = false;
    },
    sortFlights(flights, criteria) {
      return flights.sort((a, b) => {
        if (criteria === "origin") {
          return a.origin.localeCompare(b.origin);
        } else if (criteria === "destination") {
          return a.destination.localeCompare(b.destination);
        } else if (criteria === "price") {
          return a.price.amount - b.price.amount;
        } else {
          return [];
        }
      });
    },
    modifyFlights(data) {
      this.$router.push({
        name: "Results",
        params: {
          origin: data.from,
          destination: data.to,
          departureDate: data.outgoingDate,
          returnDate: data.returnDate,
          classType: data.class,
        },
      });
    },
  },
};
</script>