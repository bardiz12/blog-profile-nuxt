<template>
  <div :class="{ dark: this.$store.state.site.isDark }">
    <div
      class="bg-gray-50 dark:bg-gray-800 dark:text-white transition-colors duration-100"
      style="min-height: 100vh"
    >
      <Navbar />
      <Nuxt class="pt-40" />
    </div>
  </div>
</template>


<script>
import "animate.css/animate.css";
import Navbar from "@/components/Navbar";

export default {
  data() {
    return {
      mql: null,
    };
  },
  components: {
    Navbar,
  },
  created() {
    this.initThemeListener();
  },
  methods: {
    initThemeListener() {
      if (process.client) {
        this.mql = window.matchMedia("(prefers-color-scheme: dark)");

        this.mql.addEventListener("change", this.themeListener);
        const isDark = window.localStorage.getItem('is_dark') === null
                                    ? (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)
                                    : JSON.parse(window.localStorage.getItem('is_dark'));
        this.$store.commit("site/changeThemeSetting", { isDark});
      }
    },
    themeListener(event) {
      const { matches } = event;
      this.$store.commit("site/changeThemeSetting", { isDark: matches });
    },
  },
};
</script>
<style>
html {
  font-family: "Quicksand", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
</style>
