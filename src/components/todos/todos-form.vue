<script lang="ts" setup>

import {ref} from "vue";
import type Task from "@/types/task";

const emits = defineEmits<{
  'submit': [value: Task]
}>();

const task = ref<string>("");

const updateTask = (value: string) => {
  task.value = value;
}

const submit = () => {
  const taskInput: Task = {
    id: Math.floor(Math.random() * 1000),
    author: "guest",
    title: task.value,
    createAt: new Date("2024-03-02"),
    finished: false
  }
  emits("submit", taskInput);
}
</script>

<template>
  <form>
    <label>Add a task</label>
    <input :v-model="task" placeholder="Enter..." @input="(e) => updateTask(e.target.value)"/>
    <button @click.prevent="submit">Submit</button>
  </form>
</template>

<style scoped>

</style>