// importo VUE sul main
const { createApp } = Vue;

createApp({
  data() {
    return {
      message: "Hello Vue!",
      image: "./img/02.webp",
    };
  },
}).mount("#app");
