import { newPrjBtn, newTskDsp, popNewTsks } from "./disp";

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

  getPrjList() {
    return this.arrays;
  }
}

const project = new ProjectsArray("Default");

const primary: MyTask[] = [];

const task = new MyTask("sleep", "zzzz", "24 oct", "high");
primary.push(task);

// Forms

export function handleProjectEntry(event: SubmitEvent) {
  event.preventDefault();
  const newPrj = (document.getElementById("project-name") as HTMLInputElement)
    .value;
  project.setActiveArray(newPrj);
  newPrjBtn(newPrj);
}

// primary

export function handleTaskEntry(event: SubmitEvent) {
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
  project.addValueToActiveArray(task);
  newTskDsp(taskTitle, taskDescription, taskDueDate, taskPriority);
}

//swithcing projects

const allPrjBtn = document.getElementById("prj-buttons") as HTMLButtonElement;

allPrjBtn.addEventListener("click", (event: MouseEvent) => {
  const actPrj = (event.target as HTMLButtonElement).textContent;
  const cmp = project.getPrjList();
  popNewTsks();
  if (actPrj in cmp) {
    const lst = cmp[actPrj];
    lst.forEach((item) => {
      console.log(item);
      newTskDsp(item.title, item.description, item.dueDate, item.priority);
    });
  }
});

export { primary };
