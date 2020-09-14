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
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split('-');
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
  },
  destroyed() {
    this.destroyed();
  },
};
</script>

<style>
</style>