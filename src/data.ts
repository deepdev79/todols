const taskForm = document.getElementById("form2") as HTMLFormElement;
const prjctForm = document.getElementById("form1") as HTMLFormElement;

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
interface ArraysObject {
  [key: string]: object[];
}

class ProjectsArray {
  arrays: ArraysObject = {};
  activeArrayName: string;

  constructor(defaultArrayName: string) {
    this.activeArrayName = defaultArrayName;
    this.arrays[defaultArrayName] = [];
  }

  setActiveArray(name: string) {
    if (!this.arrays[name]) {
      this.arrays[name] = [];
    }
    this.activeArrayName = name;
  }

  addValueToActiveArray(value: object) {
    this.arrays[this.activeArrayName].push(value);
    console.log(this.arrays[this.activeArrayName]);
  }
}

const project = new ProjectsArray("default");

const primary: MyTask[] = [];

const task = new MyTask("sleep", "zzzz", "24 oct", "high");
primary.push(task);

// Forms

function handleProjectEntry(event: SubmitEvent) {
  event.preventDefault();
  const newPrj = (document.getElementById("project-name") as HTMLInputElement)
    .value;
  project.setActiveArray(newPrj);
  prjctForm.reset();
}

prjctForm.addEventListener("submit", handleProjectEntry);

// primary

function handleTaskEntry(event: SubmitEvent) {
  event.preventDefault();
  const taskTitle = (document.getElementById("title") as HTMLInputElement)
    .value;
  const taskDescription = (
    document.getElementById("description") as HTMLInputElement
  ).value;
  const taskDueDate = (document.getElementById("due-date") as HTMLInputElement)
    .value;
  const taskPriority = (
    document.getElementById("priority") as HTMLSelectElement
  ).value;
  const task = new MyTask(
    taskTitle,
    taskDescription,
    taskDueDate,
    taskPriority
  );
  // console.log(task);
  // primary.push(task);
  project.addValueToActiveArray(task);
  taskForm.reset();
}

taskForm.addEventListener("submit", handleTaskEntry);

export { primary };
