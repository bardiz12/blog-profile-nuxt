<template>
  <div>
    <div>
      <div
        class="from-current via-green-400 overflow-hidden relative transition-all duration-100"
      >
        <div class="max-w-screen-xl mx-auto">
          <div class="w-full">
            <div class="flex justify-center">
              <aos animation-class="animate__animated animate__bounceIn">
                <div
                  class="flex items-center"
                  style="min-height: calc(100vh - 300px)"
                >
                  <Profile />
                </div>
              </aos>
            </div>
          </div>
        </div>
      </div>
      <div class="p-5 dark:bg-gray-800 transition-colors duration-100"></div>
      <SocialBanner />
      <div>
        <div class="max-w-screen-lg mx-auto pt-20">
          <div class="w-full py-20">
            <!-- 2681f9 -->
            <div class="flex flex-col-reverse md:flex-row flex-wrap mx-5">
              <div class="w-full md:w-1/2 mt-4 md:mt-0">
                <div class="flex justify-center">
                  <TechIllustration class="md:w-72 h-64 hover:animate-bounce" />
                </div>
              </div>
              <div class="w-full md:w-1/2">
                <aos
                  animation-class="animate__animated animate__fadeInRight"
                  threshold="0"
                >
                  <div class="md:pl-10">
                    <h1 class="font-bold text-3xl mt-5">Tech Stacks</h1>
                    <span class="text-sm text-gray-600">
                      Technologies that i often use
                    </span>
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
                      <img
                        class="w-16 p-2"
                        src="~/assets/stacks/tailwind.svg"
                      />
                      <img
                        class="w-16 p-2"
                        src="~/assets/stacks/bootstrap.png"
                      />
                    </div>
                  </div>
                </aos>
              </div>
            </div>
          </div>
          <div class="w-full py-20">
            <!-- 2681f9 -->
            <div class="flex flex-wrap mx-5">
              <div class="w-full md:w-1/2">
                <div class="md:pl-10">
                  <h1 class="font-bold mt-5">
                    <span class="text-3xl"> I Do Write, </span>
                    <span class="italic">...sometimes</span>
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
                      <Button>Read Blog</Button>
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
                  <WriterIllustration class="md:w-72 h-64" />
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
import WriterIllustration from "~/assets/illustration/writer.svg?inline";

export default {
  components: {
    Profile,
    SocialBanner,
    TechIllustration,
    WriterIllustration,
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
