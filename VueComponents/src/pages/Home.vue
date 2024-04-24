<template>
  <div>
    <h3>{{ title }}</h3>
    <my-step :task-list="taskList" :is-active="1"></my-step>
  </div>
</template>

<script>
// import MyStep from "../components/MyStep.vue";
import "../components/MyStep";
import "../assets/g.css";

export default {
  name: "HelloWorld",
  props: [],
  data() {
    return {
      title: "这是首页",
      taskList: [
        {
          name: "task1",
          desc: "任务描述",
        },
        {
          name: "task2",
          desc: "任务描述",
        },
        {
          name: "task3",
          desc: "任务描述",
        },
        {
          name: "task4",
          desc: "任务描述",
        },
      ],
    };
  },

  //   components: {
  //     MyStep: MyStep,
  //   },
};
</script>

<style scoped>
</style>
