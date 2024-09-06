const fs = require("fs");
const uuid = require("uuid");

const TASKS_FILE = "tasks.json";

// Load tasks from file
function loadTasks() {
  try {
    //Reading file
    const tasks = fs.readFileSync(TASKS_FILE, "utf8");
    return JSON.parse(tasks);
  } catch (err) {
    return [];
  }
}

// Save tasks to file
function saveTasks(tasks) {
  fs.writeFileSync(TASKS_FILE, JSON.stringify(tasks, null, 2));
}

// Add a new task
function addTask(description) {
  const tasks = loadTasks();
  const task = {
    id: uuid.v4(),
    description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Task added successfully (ID: ${task.id})`);
}

// Update a task
function updateTask(id, description) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.error(`Task not found (ID: ${id})`);
    return;
  }
  task.description = description;
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task updated successfully (ID: ${id})`);
}

// Delete a task
function deleteTask(id) {
  const tasks = loadTasks();
  const index = tasks.findIndex((task) => task.id === id);
  if (index === -1) {
    console.error(`Task not found (ID: ${id})`);
    return;
  }
  tasks.splice(index, 1);
  saveTasks(tasks);
  console.log(`Task deleted successfully (ID: ${id})`);
}

// Mark a task as in progress
function markInProgress(id) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.error(`Task not found (ID: ${id})`);
    return;
  }
  task.status = "in-progress";
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task marked as in progress (ID: ${id})`);
}

// Mark a task as done
function markDone(id) {
  const tasks = loadTasks();
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    console.error(`Task not found (ID: ${id})`);
    return;
  }
  task.status = "done";
  task.updatedAt = new Date().toISOString();
  saveTasks(tasks);
  console.log(`Task marked as done (ID: ${id})`);
}

// List all tasks
function listTasks(status) {
  const tasks = loadTasks();
  if (status) {
    tasks = tasks.filter((task) => task.status === status);
  }
  console.log(
    tasks
      .map((task) => `${task.id} - ${task.description} (${task.status})`)
      .join("\n")
  );
}

// Main entry point
function main() {
  const args = process.argv.slice(2);
  switch (args[0]) {
    case "add":
      addTask(args[1]);
      break;
    case "update":
      updateTask(args[1], args[2]);
      break;
    case "delete":
      deleteTask(args[1]);
      break;
    case "mark-in-progress":
      markInProgress(args[1]);
      break;
    case "mark-done":
      markDone(args[1]);
      break;
    case "list":
      listTasks(args[1]);
      break;
    default:
      console.error("Invalid command");
  }
}

main();

const array = [45, 234, 234, 2343];
array.splice(1);
console.log(array);
