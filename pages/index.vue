<template>
  <div>
    <div>
      <div
        class="bg-gray-50 dark:bg-gray-800 dark:text-white from-current via-green-400 overflow-hidden relative mt-20 transition-all duration-300"
      >
        <div class="max-w-screen-xl mx-auto">
          <div class="w-full mt-20">
            <div class="flex justify-center">
              <div class="py-10">
                <Profile />
              </div>
            </div>
          </div>
        </div>
      </div>
      <SocialBanner />
      <div class="dark:bg-gray-800 dark:text-white">
        <div class="max-w-screen-lg mx-auto pt-20">
          <div class="w-full py-20">
            <!-- 2681f9 -->
            <div class="flex flex-col-reverse md:flex-row flex-wrap mx-5">
              <div class="w-full md:w-1/2 mt-4 md:mt-0">
                <div class="flex justify-center">
                  <img src="~/assets/illustration/tech.svg" class="md:w-72" />
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <div class="md:pl-10">
                  <h1 class="font-bold text-3xl mt-5">My Tech Stacks</h1>
                  <span class="text-sm text-gray-600"
                    >Technologies that i often use</span
                  >
                  <div class="md:w-4/5 flex flex-wrap">
                    <img class="w-16 p-2" src="~/assets/stacks/php.png" />
                    <img class="w-16 p-2" src="~/assets/stacks/node.svg" />
                    <img class="w-16 p-2" src="~/assets/stacks/python.svg" />
                    <img
                      class="w-16 p-2"
                      src="~/assets/stacks/androidstudio.svg"
                    />

                    <img class="w-16 p-2" src="~/assets/stacks/laravel.png" />
                    <img class="w-16 p-2" src="~/assets/stacks/vue.svg" />
                    <img class="w-16 p-2" src="~/assets/stacks/tailwind.svg" />
                    <img class="w-16 p-2" src="~/assets/stacks/bootstrap.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full py-20">
            <!-- 2681f9 -->
            <div class="flex flex-wrap mx-5">
              <div class="w-full md:w-1/2">
                <div class="md:pl-10">
                  <h1 class="font-bold text-3xl mt-5">
                    I Do Write, <span class="italic">...sometimes</span>
                  </h1>
                  <div class="text-sm text-gray-600 pb-2">
                    Some blogpost that i writ :
                  </div>
                  <div class="md:w-4/5">
                    <ul class="fa-ul space-y-2">
                      <li>
                        <a href="#"
                          ><i class="fa fa-pen fa-li"></i> Writeup JHDigitalCTF
                          (John Hammond Digital CTF) 2019 [INDEX]</a
                        >
                      </li>
                      <li>
                        <a href="#"
                          ><i class="fa fa-pen fa-li"></i> Writeup JHDigitalCTF
                          (John Hammond Digital CTF) 2019 [INDEX]</a
                        >
                      </li>
                      <li>...</li>
                    </ul>
                    <div class="flex justify-center">
                      <button
                        class="mt-5 justify-center rounded-md border border-gray-300 shadow-sm px-5 py-3 bg-white font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500 hover:bg-gray-200 transition-all duration-300"
                      >
                        <i class="fa fa-search"></i> Browse All
                      </button>
                    </div>
                    <!-- <div class="border px-1 py-2 border-gray-200 w-full flex">
                    <i class="fa fa-pen"></i>
                    <div>
                      Writeup JHDigitalCTF (John Hammond Digital CTF) 2019 [INDEX]
                    </div>
                  </div> -->
                  </div>
                </div>
              </div>
              <div class="w-full md:w-1/2 mt-4 md:mt-0">
                <div class="flex justify-center">
                  <img src="~/assets/illustration/writer.svg" class="md:w-72" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import SocialBanner from "@/components/SocialBanner";
import TechIllustration from "~/assets/illustration/tech.svg?inline";

export default {
  components: {
    Profile,
    SocialBanner,
    TechIllustration,
  },
  head() {
    return {
      title: "Bardizba Z - Fullstack Web Developer",
    };
  },
};
</script>

<style>
</style>
