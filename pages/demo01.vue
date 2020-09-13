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
            <DatePickerTH v-model="startDate" :labelInput="'StartDate'"></DatePickerTH>
          </v-col>
          <v-col cols="12" lg="6">
            <DatePickerTH v-model="endDate" :labelInput="'EndDate'"></DatePickerTH>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import DatePickerTH from '@/components/datePickerTH';

export default {
  components: {
    DatePickerTH,
  },
  data: (vm) => ({
    startDate: '2020-01-20',
    endDate: null,
    date: null, //new Date().toISOString().substr(0, 10),
    dateFormatted: null, //vm.formatDate(new Date().toISOString().substr(0, 10)),
    isStartDate: false,
    isEndtDate: false,
  }),

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
};
</script>

<style>
</style>