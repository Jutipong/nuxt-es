<template>
  <v-container grid-list-xl>
    <v-card elevation="2">
      <v-toolbar color="info" flat dense dark>
        <v-icon>mdi-magnify</v-icon>Search
      </v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" lg="6">
            <DatePicker :locale="'th'" :endDate="endDate" :label="'StartDate'" v-model="startDate"></DatePicker>
          </v-col>
          <v-col cols="12" lg="6">
            <DatePicker :locale="'th'" :startDate="startDate" :label="'EndDate'" v-model="endDate"></DatePicker>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import DatePicker from '@/components/datePicker';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      startDate: null,
      endDate: null,
    };
  },
  computed: {},
  methods: {},
  watch: {},
  destroyed() {
    this.destroyed();
  },
};
</script>

<style>
</style>