<template>
  <div>
    <v-menu ref="isShow" v-model="isShow" :close-on-content-click="false" transition="scale-transition" offset-y max-width="290px" min-width="290px">
      <template v-slot:activator="{ on, attrs }">
        <v-text-field clearable readonly v-model="dateShow" :label="label" append-icon="mdi-calendar-month-outline" v-bind="attrs" v-on="on"></v-text-field>
      </template>
      <v-date-picker :locale="locale" :min="startDate" :max="endDate" v-model="dateData" no-title @input="isShow = false"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    locale: {
      type: String,
      default: 'en',
    },
    label: {
      type: String,
      default: null,
    },
    startDate: {
      type: String,
      default: '',
    },
    endDate: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      isShow: false,
      dateData: null,
      dateShow: null,
    };
  },
  mounted() {
    this.dateData = _.cloneDeep(this.value);
  },
  methods: {
    clearInput() {
      this.$emit('input', this.dateShow);
    },
  },
  watch: {
    dateData() {
      if (this.$moment(this.dateData).isValid()) {
        this.dateShow = this.$moment(this.dateData, 'YYYY-MM-DD')
          .add(this.locale === 'th' ? 543 : 0, 'year')
          .format('DD/MM/YYYY');
      } else {
        console.warning(`date value invalid: ${this.dateData}`);
      }
      this.$emit('input', this.dateData);
    },
    dateShow() {
      if (!this.dateShow) {
        console.log('dateShow');
        this.$emit('input', this.dateShow);
      }
    },
  },
  destroyed() {
    // this.$destroy();
  },
};
</script>