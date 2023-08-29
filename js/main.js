// importo VUE sul main
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
    };
  },
}).mount("#app");
