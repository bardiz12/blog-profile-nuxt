<template>
  <div>
    <!-- <MobileMenubar /> -->
    <div class="mx-10 md:m-auto">
      <div class="bg-white dark:bg-gray-800 dark:text-white fixed top-0 left-0 w-full z-20 px-3 md:px-10  transition-all duration-100">
        <div
          class="transition-all duration-200 flex items-center w-full justify-between max-w-screen-lg m-auto mt-5 rounded-md py-3 px-0"
          :class="{'border border-gray-300 dark:border-gray-500 transition-shadow duration-200 shadow-lg hover:shadow-2xl px-2' : showIconPhoto}"
        >
          <div class="p-3 font-extrabold flex">
            <div class="flex items-center" v-show="showIconPhoto">
              <img
                src="~/assets/portrait.jpg"
                class="w-8 transition-all rounded-full border border-white mr-2"
              />
              <div>Bardizba</div>
            </div>
            <div class="cursor-pointer">
              <div class="text-2xl pl-3" @click="$store.commit('site/toggle')">
                <span>{{$store.state.site.isDark ? '🌚' : '🌝' }}</span>
              </div>
            </div>
          </div>
          <div class="py-3 pr-5">
            <!-- This example requires Tailwind CSS v2.0+ -->
            <div class="inline-block text-left md:hidden">
              <div>
                <button
                  type="button"
                  class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                  id="options-menu"
                  aria-haspopup="true"
                  aria-expanded="true"
                  @click="showMenu = !showMenu"
                >
                  Menu
                  <!-- Heroicon name: chevron-down -->
                  <i class="fa fa-bars text-lg pl-2"></i>
                </button>
              </div>

              <!--
    Dropdown panel, show/hide based on dropdown state.

    Entering: "transition ease-out duration-100"
      From: "transform opacity-0 scale-95"
      To: "transform opacity-100 scale-100"
    Leaving: "transition ease-in duration-75"
      From: "transform opacity-100 scale-100"
      To: "transform opacity-0 scale-95"
  -->
              <div
                v-show="showMenu"
                class="transition origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
              >
                <div
                  class="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Account settings</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >Support</a
                  >
                  <a
                    href="#"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                    role="menuitem"
                    >License</a
                  >
                  <form method="POST" action="#">
                    <button
                      type="submit"
                      class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                      role="menuitem"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div class="hidden md:block">
              <div class="flex flex-row space-x-5 text-sm uppercase font-extrabold">
                <NuxtLink to="/" class="nav-link">Home</NuxtLink>
                <NuxtLink to="/about" class="nav-link">About</NuxtLink>
                <NuxtLink to="/blog" class="nav-link">Blog</NuxtLink>
              </div>
            </div>
          </div>
        </div>
        <!-- <Profile/> -->
      </div>
    </div>
  </div>
</template>

<script>
import MobileMenubar from "@/components/MobileMenubar";
export default {
  data() {
    return {
      showMenu: false,
      showIconPhoto : false,
    };
  },
  components : {
    MobileMenubar
  },
  created(){
    window.addEventListener('scroll',this.handleScroll)
  },
  destroyed(){
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll(event){
        this.showIconPhoto = (window.scrollY > 330)
    }
  },
};
</script>