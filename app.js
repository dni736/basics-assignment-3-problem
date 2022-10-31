Vue.createApp({
  data() {
    return {
      value: 0,
    };
  },
  computed: {
    result: function () {
      if (this.value > 37) {
        return "Too much!";
      } else {
        return this.value == 37 ? "37" : "Not there yet";
      }
    },
  },
  watch: {
    result: function () {
      var vm = this;
      setTimeout(function () {
        vm.value = 0;
      }, 5000);
    },
  },
}).mount("#assignment");
