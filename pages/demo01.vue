<template>
  <v-form>
    <v-container fluid>
      <v-card elevation="2">
        <v-toolbar color="info" flat dense dark>
          <v-icon>mdi-magnify</v-icon>Search
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          <v-row>
            <v-col cols="12" md="4" lg="4">
              <DatePicker
                :locale="'th'"
                :endDate="endDate"
                :label="'StartDate'"
                v-model="startDate"
              ></DatePicker>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <DatePicker
                :locale="'th'"
                :startDate="startDate"
                :label="'EndDate'"
                v-model="endDate"
              ></DatePicker>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-text-field v-model="numberValue" hide-details single-line type="number" small />
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-text-field name="Name" label="Name" autocomplete="off" small></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-text-field name="Last" label="Last" autocomplete="off" small></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4"></v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import DatePicker from '@/components/datePicker';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      numberValue: null,
      startDate: null,
      endDate: null,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  destroyed() {
    // this.destroy();
  },
};
</script>

<style>
</style>