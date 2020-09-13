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
            <v-menu
              ref="isStartDate"
              v-model="isStartDate"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  clearable
                  readonly
                  v-model="startDate"
                  label="StartDate"
                  prepend-icon="mdi-calendar-weekend-outline"
                  v-bind="attrs"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker locale="th" v-model="startDate" no-title @input="isStartDate=false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col cols="12" lg="6">
            <v-date-picker v-model="endDate" color="green lighten-1" header-color="primary"></v-date-picker>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data: (vm) => ({
    startDate: null,
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