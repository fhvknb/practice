<template>
  <div class="my-step-wrap">
    <template v-for="(item, index) in taskList">
      <div
        class="step-item"
        :class="{
          'is-finished': isActive > index,
          'is-waiting': index > isActive,
          checked: isChecked === index,
        }"
        :key="index"
        @click="isChecked = void 0"
      >
        <div
          class="step-mark"
          :class="{
            head: index === 0,
            last: taskList.length === index + 1,
            inner: index > 0 && index < taskList.length - 1,
            done: isActive > index,
            done2: isActive - index === 1,
          }"
          @click="
            (e) => {
              handleSelect(index, e);
            }
          "
        >
          <div class="step">{{ index + 1 }}</div>
        </div>
        <div class="title">{{ item.name }}</div>
        <div class="desc">{{ item.desc }}</div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: ["taskList", "isActive"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // isActive: 0, // 任务完成 索引 （0,...)
      isChecked: void 0, // 选中任务 索引 （0,...)
    };
  },
  created() {
    console.log(this);
  },
  methods: {
    handleSelect: function (index, e) {
      // console.log(index);
      e.preventDefault();
      e.stopPropagation();
      this.isChecked = index;
    },
  },
};
</script>


