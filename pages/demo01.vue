<template>
  <v-form @submit.prevent="onSubmit('1')">
    <v-container fluid>
      <v-card tile outlined elevation="2" :loading="isLoading">
        <!-- <v-toolbar flat dense><v-icon>mdi-magnify</v-icon></v-toolbar> -->
        <!-- <v-divider></v-divider> -->
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="4" lg="4">
              <DatePicker :locale="'th'" :endDate="data.endDate" :label="'StartDate'" v-model="data.startDate"></DatePicker>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <DatePicker :locale="'th'" :startDate="data.startDate" :label="'EndDate'" v-model="data.endDate"></DatePicker>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <CurrencyInput v-model="data.amount"></CurrencyInput>
            </v-col>
          </v-row>
          <v-row dense>
            <v-col cols="12" md="4" lg="4">
              <v-text-field name="Name" label="Name" autocomplete="off" clearable></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-text-field name="Last" label="Last" autocomplete="off" clearable></v-text-field>
            </v-col>
            <v-col cols="12" md="4" lg="4">
              <v-autocomplete v-model="data.status" :items="master.items" label="Status" clearable></v-autocomplete>
            </v-col>
            <v-col cols="12" class="text-right">
              <v-btn class="btn-df mr-2" tile color="warning" elevation="1">Clear <v-icon>mdi-reload</v-icon></v-btn>
              <v-btn type="submit" class="btn-df" tile color="primary" elevation="1"> Search <v-icon>mdi-magnify</v-icon> </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-container>
  </v-form>
</template>

<script>
import DatePicker from '@/components/datePicker';
import currencyInput from '@/components/currencyInput';

export default {
  components: {
    DatePicker,
    currencyInput,
  },
  data() {
    return {
      isLoading: false,
      data: {
        amount: null,
        startDate: null,
        endDate: null,
        status: null,
      },
      master: {
        items: ['foo', 'bar', 'fizz', 'buzz'],
      },
    };
  },
  computed: {},
  methods: {
    onSubmit(val) {
      console.log('submit:' + val);
    },
  },
  watch: {},
};
</script>

<style>
</style>