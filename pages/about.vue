<template>
  <div>
    <div>
      <div
        class="from-current via-green-400 overflow-hidden relative transition-all duration-100"
      >
        <div class="max-w-screen-xl mx-auto">
          <div class="w-full pt-5">
            <div class="flex justify-center">
              <aos animation-class="animate__animated animate__bounceIn">
                <div class="flex items-center">
                  <Profile />
                </div>
              </aos>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5 max-w-screen-xl mx-auto">
        <div class="container lg:px-40 pt-20 mx-auto">
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-1/2 ml-4 md:ml-0"
              v-for="content in aboutData"
              :key="content.name"
            >
              <h3 class="font-bold text-xl mt-5 mb-2">
                <i :class="content.icon"></i> {{ content.name }}
              </h3>

              <AboutItemCard
                v-for="item in content.items"
                :text="item.text"
                :sub-text="item.subText"
                :title="item.title"
                :logo="item.logo"
                :key="item.text"
                :color="content.color"
              >
              </AboutItemCard>
            </div>
          </div>
        </div>
      </div>
      <SocialBanner />
    </div>
  </div>
</template>

<script>
import Profile from "@/components/Profile";
import SocialBanner from "@/components/SocialBanner";
import AboutItemCard from "@/components/AboutItemCard";

export default {
  components: {
    Profile,
    SocialBanner,
    AboutItemCard,
  },
  data() {
    return {
      aboutData: [
        {
          name: "Work Experience",
          icon: "fa fa-pen",
          color: "indigo",
          items: [
            {
              subText: "Backend Developer",
              text: "PT Surya Anugrah Mulya",
              title: "2021 - Now",
              logo: "https://www.surya-am.com/webroot/images/logo-surya-kecil.png",
            },
            {
              subText: "Programmer",
              text: "UPT TIK Universitas Negeri Semarang",
              title: "2020 - 2021",
              logo: require("~/assets/image/unnes.png"),
            },
            {
              subText: "Freelance Software Engineer",
              text: "IDivisionTech Semarang",
              title: "2019 - 2020",
              logo: require("~/assets/image/idivisition.jpeg"),
            },
            {
              subText: "Web Programmer Intern",
              text: "IKITAS Semarang",
              title: "2018",
              logo: require("~/assets/image/ikitas.png"),
            },
            {
              subText: "Self Employee",
              text: "Freelance Fullstack Developer",
              title: "2016 - now",
              logo: null,
            },
          ],
        },
        {
          name: "Achievement",
          icon : "fa fa-trophy",
          color : "purple",
          items : [
            {
              subText : "Scholarship",
              text : "PPA Unnes",
              title : "2017-2019",
              logo: require("~/assets/image/unnes.png")
            },
            {
              subText : "Finalist of Capture The Flag Competition",
              text : "JOINTS 2019 Universitas Gadjah Mada",
              title : "2019",
              logo: null
            },
            {
              subText : "Finalist of Capture The Flag Competition",
              text : "Arkavidia 5.0 Institut Teknologi Bandung",
              title : "2019",
              logo: null
            },
                        {
              subText : "Finalist of Mobile Applcation Competition",
              text : "Institut Teknologi Bandung Cooperative Day",
              title : "2018",
              logo: "https://itbcd.files.wordpress.com/2015/12/logoitbcd.png?w=680"
            },
            {
              subText : "Finalist of Capture The Flag Competition",
              text : "JOINTS 2018 Universitas Gadjah Mada",
              title : "2018",
              logo: null
            },
          ]
        },
        {
          name: "Education",
          icon: "fa fa-graduation-cap",
          color: "blue",
          items: [
            {
              text: "Universitas Negeri Semarang",
              subText: "Computer Science (S1)",
              title: "2016 - 2020",
              logo: require("~/assets/image/unnes.png"),
            },
            {
              text: "SMA N 1 Rembang",
              subText: "MIPA",
              title: "2013 - 2016",
              logo: require("~/assets/image/smansa.png"),
            },
          ],
        },
        {
          name: "Organizations",
          icon: "fa fa-users",
          color: "red",
          items: [
            {
              subText: "Specialized Staff of Design & Animation Division",
              text: "Screenshot Ilmu Komputer Unnes",
              title: "2017",
              logo: null,
            },
            {
              subText: "Specialized Staff of Programming Division",
              text: "I-Secret Ilmu Komputer Unnes",
              title: "2017",
              logo: null,
            },
            {
              subText: "Chief of Screenshot Underbow",
              text: "Hima Ilmu Komputer Unnes",
              title: "2017",
              logo: null,
            },
            {
              subText: "Information Technology Division",
              text: "OSIS SMA N 1 Rembang",
              title: "2015",
              logo: null,
            },
          ],
        },
      ],
    };
  },
  head() {
    return {
      title: "About | Bardizba Z - Fullstack Web Developer",
    };
  },
};
</script>

<style>
</style>
