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
              <v-card>
                <v-card-text>
                  <v-container fluid>
                    <v-row>
                      <v-col cols="12" sm="6">
                        <v-text-field
                          outlined
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
                          clearable
                          hide-details
                          outlined
                        ></v-select>
                      </v-col>
                      <v-col cols="12" sm="2">
                        <v-btn
                          color="primary"
                          class="font-weight-bold"
                          block
                          dark
                          x-large
                        >
                          Search
                        </v-btn>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>
              </v-card>
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
import { mapGetters } from "vuex";

export default {
  name: "HomePage",
  data: () => ({
    cabinClasses: [
      { text: "Economy", value: "m" },
      { text: "First", value: "f" },
      { text: "Business", value: "c" },
      { text: "Premium", value: "p" },
    ],
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
  }),
  computed: {
    ...mapGetters(["flightResults"]),
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