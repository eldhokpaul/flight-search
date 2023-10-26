<template>
  <v-container
    fluid
    class="down-top-padding"
    style="height: 100%; display: flex; flex-direction: column"
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
              <v-card flat>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          outlined
                          dense
                          prepend-inner-icon="mdi-airplane-takeoff"
                          label="Departure airport"
                          clearable
                          hide-details
                          placeholder="Departure airport"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          outlined
                          prepend-inner-icon="mdi-airplane-landing"
                          dense
                          clearable
                          hide-details
                          label="Destination airport"
                          placeholder="Destination airport"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-text-field
                          outlined
                          prepend-inner-icon="mdi-calendar-range"
                          clearable
                          dense
                          label="Outgoing flight"
                          hide-details
                          placeholder="Outgoing flight"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col cols="12" sm="4">
                        <v-text-field
                          outlined
                          prepend-inner-icon="mdi-calendar-range"
                          clearable
                          dense
                          hide-details
                          label="Return flight"
                          placeholder="Return flight"
                        >
                        </v-text-field>
                      </v-col>
                      <v-col class="d-flex" cols="12" sm="2">
                        <v-select
                          :items="cabinClasses"
                          label="Cabin Class"
                          placeholder="Cabin Class"
                          dense
                          clearable
                          hide-details
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <v-btn
                          color="primary"
                          class="font-weight-bold my-n1"
                          block
                          dark
                          large
                        >
                          Search
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        <!-- <div class="d-flex"> -->
        <v-card flat class="my-3" outlined>
          <v-col class="pa-3" cols="12" sm="2">
            <v-select
              class="font-weight-medium"
              :items="sortItems"
              label="Sort by"
              placeholder="Sort by"
              dense
              clearable
              hide-details
              outlined
            ></v-select>
          </v-col>
        </v-card>
        <!-- </div> -->
      </v-col>
      <v-col cols="12" class="ma-0 pa-0" v-for="i in 10" :key="i + 'result'">
        <v-card outlined class="rounded-xl mb-3" hover>
          <v-container fluid>
            <v-row>
              <v-col cols="10">
                <!-- <v-img height="100"></v-img> -->
                <v-card-text>
                  <v-row>
                    <v-col cols="4">
                      <v-row>
                        <v-col cols="auto">
                          <div class="font-weight-medium">ZHR</div>
                          <div class="text-h5 font-weight-bold">8:00</div>
                        </v-col>
                        <v-col cols="auto">
                          <p></p>
                          <v-icon color="black">
                            mdi-transit-connection-horizontal
                          </v-icon>
                        </v-col>
                        <v-col cols="auto">
                          <div class="font-weight-medium">ZHR</div>
                          <div class="text-h5 font-weight-bold">8:00</div>
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="2">
                      <div class="font-weight-medium">Travel time</div>
                      <div class="text-h4 font-weight-bold">8:00h</div>
                    </v-col>
                    <v-col cols="2">
                      <div class="font-weight-medium">Connection</div>
                      <div class="text-h4 font-weight-bold">Nonstop</div>
                    </v-col>
                  </v-row>
                </v-card-text>
              </v-col>
              <v-col cols="2" class="d-flex align-center">
                <div class="d-flex flex-column">
                  <div class="font-weight-medium">Flight from:</div>
                  <div class="text-h5 font-weight-bold text-right">$100</div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "FlightSearch",
  data: () => ({
    sortItems: [
      { text: "Departure time", value: "departureTime" },
      { text: "Price", value: "price" },
      { text: "Arrival time", value: "arrivalTime" },
      { text: "Departure airport", value: "departureAirport" },
      { text: "Destination airport", value: "destinationAirport" },
    ],
    cabinClasses: [
      { text: "Economy", value: "m" },
      { text: "First", value: "f" },
      { text: "Business", value: "c" },
      { text: "Premium", value: "p" },
    ]
  }),
  computed: {
    // completedTasks() {
    //   return this.tasks.filter((task) => task.done).length;
    // },
    // progress() {
    //   return (this.completedTasks / this.tasks.length) * 100;
    // },
    // remainingTasks() {
    //   return this.tasks.length - this.completedTasks;
    // },
  },

  methods: {
    create() {
      this.tasks.push({
        done: false,
        text: this.task,
      });

      this.task = null;
    },
  },
};
</script>
<style lang="scss" scoped>
.card-active-item {
  color: white;
  &::before {
    background-color: $primary;
    opacity: 1;
  }
  &:hover::before {
    opacity: 0.8;
  }
  &::after {
    background-color: $primary;
    opacity: 1;
  }
  &:hover::after {
    background-color: $primary;
    opacity: 0.8;
  }
}
</style>
