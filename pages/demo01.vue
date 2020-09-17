<template>
  <div>
    <v-form @submit.prevent="onSubmit('1')">
      <!-- <v-container fluid> -->
      <v-card tile outlined elevation="2">
        <v-toolbar flat dense><v-icon>mdi-magnify</v-icon></v-toolbar>
        <v-divider></v-divider>
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
              <v-btn class="btn-df mr-2" tile color="warning" elevation="2">Clear <v-icon>mdi-reload</v-icon></v-btn>
              <v-btn type="submit" class="btn-df" tile color="primary" elevation="2" :loading="isLoading"> Search <v-icon>mdi-magnify</v-icon> </v-btn>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
      <!-- </v-container> -->
    </v-form>

    <v-card class="mt-5" tile outlined elevation="2" :loading="isLoading" :disabled="isLoading">
      <v-toolbar flat dense><v-icon>mdi-format-list-bulleted</v-icon></v-toolbar>
      <v-divider></v-divider>
      <v-card-text>
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5"></v-data-table>
      </v-card-text>
    </v-card>
  </div>
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
      model: {},
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
      headers: [
        {
          text: 'Dessert',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' },
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%',
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%',
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%',
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%',
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%',
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%',
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%',
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%',
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%',
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%',
        },
      ],
    };
  },
  computed: {},
  methods: {
    onSubmit(val) {
      console.log('submit:' + val);
    },
  },
  mounted() {
    this.model = _.cloneDeep(this.data);
  },
  watch: {},
};
</script>

<style>
</style>