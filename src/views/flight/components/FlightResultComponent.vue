<template>
  <v-card outlined class="rounded-xl mb-2" hover>
    <v-card-text class="black--text">
      <v-container fluid>
        <v-row>
          <v-col cols="7" md="10">
            <v-row>
              <v-col md="4" class="d-flex align-center justify-start ml-n4">
                <div class="">
                  <div class="font-weight-medium">{{ item.origin }}</div>
                  <div class="text-h7 font-weight-bold">
                    {{ item.departureTime }}
                  </div>
                </div>
                <div class="mx-1">
                  <v-icon color="black">
                    mdi-transit-connection-horizontal
                  </v-icon>
                </div>
                <div>
                  <div class="font-weight-medium">{{ item.destination }}</div>
                  <div class="text-h7 font-weight-bold">
                    {{ item.arrivalTime }}
                  </div>
                </div>
              </v-col>
              <v-col md="8" class="d-flex align-start justify-start ml-n4">
                <div>
                  <div class="font-weight-medium">Duration</div>
                  <div class="text-h7 font-weight-bold">
                    {{ item.duration }}
                  </div>
                </div>
                <div class="ml-4">
                  <div class="font-weight-medium">Connection</div>
                  <div class="text-h7 font-weight-bold">Nonstop</div>
                </div>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="5" md="2" class="d-flex align-start justify-end">
            <div class="">
              <div class="font-weight-medium">Flight from:</div>
              <div class="text-h5 font-weight-bold text-center">
                {{ $n(item.price.amount, "currency") }}
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "FlightResultComponent",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data: () => ({}),
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
