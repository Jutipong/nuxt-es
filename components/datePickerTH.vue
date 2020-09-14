<template>
  <div>
    <v-menu
      ref="isShow"
      v-model="isShow"
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
          v-model="dateShow"
          :label="labelInput"
          prepend-icon="mdi-calendar-weekend-outline"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        locale="en"
        :min="startDate"
        :max="endDate"
        v-model="dateData"
        no-title
        @input="isShow=false"
      ></v-date-picker>
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
    labelInput: {
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
      dateMin: '',
      dateMax: '',
    };
  },
  mounted() {
    debugger;
    this.dateData = _.cloneDeep(this.value);
  },
  watch: {
    dateData() {
      debugger;
      if (this.$moment(this.dateData).isValid()) {
        this.dateShow = this.$moment(this.dateData, 'YYYY-MM-DD').add(543, 'year').format('DD/MM/YYYY');
      } else {
        console.warning(`date value invalid: ${this.dateData}`);
      }
      this.$emit('input', this.dateData);
    },
  },
  destroyed() {
    this.$destroy();
  },
};
</script>

<style>
</style>