<template>
<main>
  <div class="new-task-form">
        <TaskForm />
    
      </div>

  <nav class="filter">
    <button @click="filter = 'all'">All plans</button>
    <button @click="filter = 'favs'">Fav plans</button>
  </nav>

  <div class="loading" v-if="loading">Loading plans...</div>

  <div class="task-list" v-if="filter === 'all'">
   <p>You have {{ totalCount }} plans </p>
    <div v-for="task in tasks">
    <TaskDetails :task="task"/>
    </div>
  </div>
  <div class="task-list" v-if="filter === 'favs'">
    <p>You have {{ favCount }} plans </p>
    <div v-for="task in favs">
    <TaskDetails :task="task"/>
    </div>
  </div>

  <button id="reset" @click="taskStore.$reset">reset</button>

</main>
</template>

<script>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import TaskDetails from './TaskDetail.vue'
import TaskForm from './TaskForm.vue'
import { useTaskStore } from '../store/TaskStore'

export default {
  components: { TaskDetails, TaskForm },
setup() {
  const taskStore = useTaskStore()

  const { tasks, loading, favs, totalCount, favCount } = storeToRefs(taskStore)

  taskStore.getTasks()
const filter = ref('all')

  return { taskStore, filter, tasks, loading, favs, totalCount, favCount   }
}
}
</script>

<style>


</style>