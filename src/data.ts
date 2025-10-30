const taskForm = document.getElementById("form2") as HTMLFormElement;

class MyTask {
  title: string;
  description: string;
  dueDate: string;
  priority: string;

  constructor(
    title: string,
    description: string,
    dueDate: string,
    priority: string
  ) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const tasks: MyTask[] = [];

const task = new MyTask("sleep", "zzzz", "24 oct", "high");
tasks.push(task);

function handleTaskEntry(event: SubmitEvent) {
  event.preventDefault();
  const taskTitle = document.getElementById("title") as HTMLInputElement;
  const taskDescription = document.getElementById(
    "description"
  ) as HTMLInputElement;
  const taskDueDate = document.getElementById("due-date") as HTMLInputElement;
  const taskPriority = document.getElementById("priority") as HTMLSelectElement;
  console.log(
    `${taskTitle.value}  ${taskDescription.value} ${taskDueDate.value}  ${taskPriority.value}`
  );
  const task = new MyTask(
    taskTitle.value,
    taskDescription.value,
    taskDueDate.value,
    taskPriority.value
  );
  console.log(task);
  tasks.push(task);
  taskForm.reset();
  // console.log(tasks);
}

taskForm.addEventListener("submit", handleTaskEntry);

export { tasks };
