<template>
  <VTextField ref="input" v-currency="options" :value="formattedValue" @input="onInput" show-current="false" clearable autocomplete="off" />
</template>

<script>
export default {
  name: 'currencyInput',
  props: {
    value: {
      type: Number,
      default: null,
    },
    options: {
      type: Object,
      default: () => null,
    },
  },
  data() {
    return {
      formattedValue: null,
      optionsData: {
        currency: null,
        locale: 'en',
        precision: 2,
        distractionFree: {
          hideNegligibleDecimalDigits: false,
          hideCurrencySymbol: false,
          hideGroupingSymbol: false,
        },
      },
    };
  },
  mounted() {
    debugger
    if (this.options) {
      this.optionsData = _.cloneDeep(this.options);
    }
  },
  watch: {
    value(value) {
      this.setValue(value);
    },
  },
  mounted() {
    this.setValue(this.value);
  },
  methods: {
    setValue(value) {
      this.$ci.setValue(this.$refs.input, value);
    },
    onInput(value) {
      this.$emit('input', this.$ci.getValue(this.$refs.input));
      this.formattedValue = value;
    },
    onChange(value) {
      this.$emit('change', this.$ci.getValue(this.$refs.input));
      this.formattedValue = value;
    },
  },
};
</script>
