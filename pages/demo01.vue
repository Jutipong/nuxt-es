<template>
  <!-- <v-form> -->
  <v-container fluid>
    <v-card tile outlined elevation="2">
      <v-toolbar flat dense><v-icon>mdi-magnify</v-icon></v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-row dense>
          <v-col cols="12" md="4" lg="4">
            <DatePicker :locale="'th'" :endDate="endDate" :label="'StartDate'" v-model="startDate"></DatePicker>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <DatePicker :locale="'th'" :startDate="startDate" :label="'EndDate'" v-model="endDate"></DatePicker>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <v-text-field v-model="numberValue" hide-details single-line type="number" />
          </v-col>
        </v-row>
        <v-row dense>
          <v-col cols="12" md="4" lg="4">
            <v-text-field name="Name" label="Name" autocomplete="off"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <v-text-field name="Last" label="Last" autocomplete="off"></v-text-field>
          </v-col>
          <v-col cols="12" md="4" lg="4">
            <v-autocomplete v-model="status" :items="items" multiple label="Status" clearable></v-autocomplete>
          </v-col>
          <v-col cols="12" class="text-right">
            <v-btn class="btn-df" tile color="warning" elevation="1">Clear <v-icon>mdi-reload</v-icon></v-btn>
            <v-btn class="btn-df" tile color="primary" elevation="1"> Search <v-icon>mdi-magnify</v-icon> </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
  <!-- </v-form> -->
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
      items: ['foo', 'bar', 'fizz', 'buzz'],
      status: null,
    };
  },
  computed: {},
  methods: {},
  watch: {},
};
</script>

<style>
</style>