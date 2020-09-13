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
          v-model="dateData"
          label="labelInput"
          prepend-icon="mdi-calendar-weekend-outline"
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker locale="th" v-model="dateData" no-title @input="isShow=false"></v-date-picker>
    </v-menu>
  </div>
</template>

<script>
export default {
  props: {
    dateInput: {
      type: String,
      default: null,
    },
    labelInput: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      isShow: false,
      dateData: null,
    };
  },
  mounted() {
    this.dateData = _.cloneDeep(this.dateInput);
  },
  watch: {
    dateData() {
      debugger;
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