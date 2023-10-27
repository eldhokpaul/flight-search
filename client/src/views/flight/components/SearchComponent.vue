<!-- eslint-disable vue/no-mutating-props -->
<template>
  <v-card flat>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-container fluid>
          <v-row>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :filter="airportFilter"
                :items="airports"
                outlined
                prepend-inner-icon="mdi-airplane-takeoff"
                label="Departure airport"
                dense
                clearable
                item-value="iata"
                item-text="name"
                required
                :rules="[checkAirportsDifferent]"
                v-model="value.from"
                placeholder="Departure airport"
              />
            </v-col>
            <v-col cols="12" sm="6">
              <v-autocomplete
                :filter="airportFilter"
                :items="airports"
                item-value="iata"
                item-text="name"
                outlined
                prepend-inner-icon="mdi-airplane-landing"
                v-model="value.to"
                dense
                clearable
                required
                :rules="[checkAirportsDifferent]"
                label="Destination airport"
                placeholder="Destination airport"
              />
            </v-col>
            <v-col cols="12" sm="4">
              <v-menu
                v-model="menu1"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="value.outgoingDate"
                    outlined
                    prepend-inner-icon="mdi-calendar-range"
                    clearable
                    label="Outgoing flight"
                    placeholder="Outgoing flight"
                    :rules="rule"
                    readonly
                    dense
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="value.outgoingDate"
                  @input="(menu1 = false), (value.returnDate = '')"
                  :min="minDate"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col cols="12" sm="4">
              <v-menu
                v-model="menu2"
                :close-on-content-click="false"
                :nudge-right="40"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="value.returnDate"
                    outlined
                    prepend-inner-icon="mdi-calendar-range"
                    clearable
                    label="Return flight"
                    placeholder="Return flight"
                    :rules="rule"
                    required
                    :disabled="!value.outgoingDate"
                    dense
                    readonly
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="value.returnDate"
                  :min="value.outgoingDate"
                  @input="menu2 = false"
                ></v-date-picker>
              </v-menu>
            </v-col>
            <v-col class="d-flex" cols="12" sm="2">
              <v-select
                :items="cabinClasses"
                label="Cabin Class"
                placeholder="Cabin Class"
                v-model="value.class"
                :rules="rule"
                clearable
                dense
                outlined
              ></v-select>
            </v-col>
            <v-col cols="12" sm="2">
              <v-btn
                color="primary"
                class="font-weight-bold"
                block
                @click="searchFlights"
                dark
                large
              >
                {{ buttonText }}
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SearchComponent",
  props: {
    value: {
      type: Object,
      // required: true,
      default: () => {
        return {
          from: "",
          to: "",
          outgoingDate: "",
          returnDate: "",
          class: "",
        };
      },
    },
    buttonText: {
      type: String,
      default: "Search Flights",
    },
  },
  data: () => ({
    valid: false,
    cabinClasses: [
      { text: "Economy", value: "m" },
      { text: "First", value: "f" },
      { text: "Business", value: "c" },
      { text: "Premium", value: "p" },
    ],
    menu1: false,
    menu2: false,
    rule: [(v) => !!v || "Required field"],
    minDate: new Date().toISOString().slice(0, 10),
  }),
  computed: {
    ...mapState({
      airports: (state) => state.flight.airports,
    }),
  },
  mounted() {},
  methods: {
    checkAirportsDifferent() {
      if (this.value.from === this.value.to) {
        return "Departure and destination airports cannot be the same.";
      }
      return true;
    },
    airportFilter(item, queryText) {
      const textOne = item.name.toLowerCase();
      const textTwo = item.iata.toLowerCase();
      const searchText = queryText.toLowerCase();

      return (
        textOne.indexOf(searchText) > -1 || textTwo.indexOf(searchText) > -1
      );
    },
    async searchFlights() {
      await this.$refs.form.validate();
      if (this.valid) {
        this.$emit("searchFlight", this.value);
      }
    },
  },
};
</script>