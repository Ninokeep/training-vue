<script lang="ts">
import {defineComponent, type PropType} from "vue";
import TodolistItem from "./TodolistItem.vue";
import type Task from "../../types/task";
import TodosForm from "@/components/todos/todos-form.vue";

export default defineComponent({
  props: {
    item: {
      type: Object as PropType<Task[]>,
      required: true
    },
  },
  components: {
    TodosForm,
    TodolistItem,
  },
  data() {
    return {
      tasks: this.item as Task[]
    }
  },
  methods: {
    setTasks(task: Task) {
      this.tasks.push(task);
    },
    deleteTask(id: number) {
      this.tasks = this.tasks.filter(e => e.id !== id)
    },
    finishedTask(id: number) {
      this.tasks.forEach((task: Task) => {
        if (task.id === id) {
          task.finished = !task.finished;
        }
      })
    }
  }
});
</script>

<template>
  <div>
    <ul>
      <todos-form @submit="(task: Task) => setTasks(task)"/>
      <div v-if="tasks.length > 0">
        <TodolistItem
            v-for="item in tasks"
            :class="{ 'text-underline': item.finished }"
            v-bind="item"
            @deleted="(id: number)=> deleteTask(id)"
            @finished="(id:number) => finishedTask(id)"
        />
      </div>
      <p v-else>Not tasks ...</p>
    </ul>
  </div>
</template>

<style scoped>
.text-underline {
  text-decoration: line-through;
}
</style>
