<template>
    <div class="todo-container">
      <h2>To-Do List</h2>
  
      <div class="input-section">
        <input
          type="text"
          v-model="newTask"
          placeholder="Add a new task"
        />
        <button @click="addTask">Add</button>
      </div>
  
      <ul>
        <li
          v-for="(task, index) in tasks"
          :key="index"
          class="task-item"
        >
          <span
            :class="{ completed: task.completed }"
            @click="toggleComplete(index)"
          >
            {{ task.name }}
          </span>
          <button @click="removeTask(index)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newTask: "", // เก็บข้อความของงานใหม่ที่กำลังเพิ่ม
        tasks: [], // เก็บรายการงานทั้งหมด
      };
    },
    methods: {
      // ฟังก์ชันเพิ่มงานใหม่
      addTask() {
        if (this.newTask.trim()) {
          this.tasks.push({ name: this.newTask, completed: false });
          this.newTask = ""; // ล้างช่องป้อนข้อความหลังเพิ่มงาน
        }
      },
      // ฟังก์ชันลบงาน
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      // ฟังก์ชันเปลี่ยนสถานะงาน (เสร็จ/ไม่เสร็จ)
      toggleComplete(index) {
        this.tasks[index].completed = !this.tasks[index].completed;
      },
    },
  };
  </script>
  
  <style>
  .todo-container {
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .input-section {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .input-section input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .input-section button {
    padding: 8px 12px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .task-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .task-item span {
    cursor: pointer;
  }
  
  .task-item .completed {
    text-decoration: line-through;
    color: gray;
  }
  
  .task-item button {
    background-color: red;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  </style>
  