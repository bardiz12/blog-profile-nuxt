<template>
  <div class="md:hidden" v-show="showMenu">
    <div class="fixed top-0 left-0 w-full z-30">
      <div
        class="h-screen w-screen w-full absolute bg-gray-800 opacity-50"
      ></div>
    </div>
    <div class="fixed top-0 left-0 w-full z-40 px-3">
      <div
        class="bg-white dark:bg-gray-900 flex flex-col w-full justify-between max-w-screen-lg m-auto border border-gray-100 mt-5 rounded-md transition-shadow shadow-md hover:shadow-lg py-3"
      >
        <div class="w-full  text-right p-3">
          
            <i class="fa fa-times fa-2x pr-5" @click="toggleMobileMenu"></i>
          
        </div>
        <div
          class="py-1 w-full text-center"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div v-for="link in links" :key="link.text" @click="toggleMobileMenu">
            <NuxtLink
              
              v-if="link.external === false"
              :to="link.to"
              class="w-full block px-4 py-2 text-sm dark:text-white text-gray-700 dark-hover:bg-gray-600 hover:bg-gray-100 hover:text-gray-900"
              >{{ link.text }}</NuxtLink
            >
            <a
              v-if="link.external === true"
              :href="link.to"
              class="w-full block px-4 py-2 text-sm dark:text-white text-gray-700 dark-hover:bg-gray-600 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              >{{ link.text }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    showMenu: {
      type: Boolean,
      default: false,
      required: true,
    },
    links: {
      type: Array,
      required: true,
    },
  },
  methods:{
    toggleMobileMenu(){
      this.$emit('toggleMenu', !this.showMenu)
    }
  }
};
</script>