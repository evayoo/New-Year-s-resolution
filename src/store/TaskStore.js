import { defineStore } from "pinia"
export const useTaskStore = defineStore('taskStore', {
state: () => ({
    tasks: [],
    loading: false
    //     {id: 1, title: "buy some milk", isFav: false},
    //     {id: 2, title: "pdlay Gloomhaven", isFav: true}
    // ]
}),
getters: {
    favs() {
        return this.tasks.filter(t => t.isFav)
    }, 
    favCount() {
        return this.tasks.reduce((p, c) => {
            return c.isFav ? p + 1 : p
        }, 0)
    },
    totalCount: (state) => {
        return state.tasks.length
    }
}, 
actions: {
    async getTasks() {
        this.loading = true

        const res = await fetch('http://localhost:3000/tasks')
        const data = await res.json()

        this.tasks = data
        this.loading = false 
    },
    async addTask(task) {
        this.tasks.push(task)

        const res = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {'Content-Type': 'application/json' }
        })

        if(res.error) {
            console.log(res.error)
        }
    }, 
    async deleteTask(id) {
        this.tasks = this.tasks.filter(t => {
            return t.id !== id
        })

        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method: 'DELETE',
        })

        if (res.error) {
            console.log(res.error)
        }
    },
    async toggleFav(id) {
        const task = this.tasks.find(t => t.id === id)
        task.isFav = !task.isFav

        const res = await fetch('http://localhost:3000/tasks' + id, {
            method: 'PATCH',
            body: JSON.stringify({ isFav: task.isFav }),
            headers: {'Content-Type': 'application/json' }
        })

        if (res.error) {
            console.log(res.error)
        }
    }, 

    async formatDate(id, selectedDate) {
        console.log(id, selectedDate)
        // Find the task with the given id in the local tasks array
        const task = this.tasks.find(t => t.id === id);
    
        // Use the selected date if available, otherwise use the current date
        const formattedDate = selectedDate || new Date().toISOString().split("T")[0];
    
        // Save the selected/formatted date to the 'dday' property in the task object
        task.dday = formattedDate;
    
        // Send a PATCH request to the server to update the 'dday' property of the task
        const res = await fetch('http://localhost:3000/tasks/' + id, {
            method: 'PATCH',
            body: JSON.stringify({ dday: formattedDate }),
            headers: { 'Content-Type': 'application/json' },
        });
    
        // Check if there was an error in the response and log it
        if (res.error) {
            console.log(res.error);
        }
    }
    
    
    

}
})