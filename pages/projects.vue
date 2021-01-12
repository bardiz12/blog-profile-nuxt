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
                <div class="flex space-x-2 items-center">
                  <i class="fa fa-code fa-3x"></i>
                  <h1>Some projects that i build</h1>
                </div>
              </aos>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-5 max-w-screen-xl">
        <div class="container lg:px-40 pt-20 mx-auto">
          <div class="flex flex-wrap">
            <div
              class="w-full md:w-1/3"
              v-for="project in projects"
              :key="project.title"
            >
              <!-- <h3 class="font-bold text-xl">
                <i :class="project.icon"></i> {{ project.title }}
              </h3> -->
              <ProjectCard :project="project" class="mx-auto md:mx-2 max-w-sm mb-5" />
            </div>
          </div>
        </div>
      </div>
      <SocialBanner />
    </div>
  </div>
</template>

<script>
import dataProject from "@/data/dataProject";
import ProjectCard from "@/components/ProjectCard";

export default {
  components: {
    ProjectCard,
  },
  data() {
    return {
      projects: dataProject.getAllData(),
    };
  },
  head() {
    return {
      title: "Projects | Bardizba Z - Fullstack Web Developer",
    };
  },
};
</script>