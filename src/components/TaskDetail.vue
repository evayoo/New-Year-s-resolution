<template>
    <div class="task">
        <h3>{{ task.title }}</h3>
        <div class="icons">
            <i class="material-icons"
            @click="taskStore.deleteTask(task.id)">delete</i>
            <i class="material-icons"
            :class="{active: task.isFav}"
            @click="taskStore.toggleFav(task.id)">favorite</i>

            <input type="date" :value="task.dday"
            @input="taskStore.formatDate(task.id, $event.target.value)">
        
        </div>
    </div>
</template>

// html element check what kind of events you have, and pass the date into the formatDAted

<script>
import { useTaskStore } from '@/store/TaskStore';

export default {
props: ['task'],
setup() {
    const taskStore = useTaskStore()

    return { taskStore }
}
}
</script>