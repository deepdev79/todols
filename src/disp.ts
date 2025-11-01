const prjDiv = document.querySelector(".prj-form") as HTMLDivElement;
const tskDiv = document.querySelector(".task-form") as HTMLButtonElement;
const appndBtn = document.querySelector(".prj-button") as HTMLButtonElement;
const appndTsk = document.querySelector(".tasksB") as HTMLDivElement;
//display/hide Project forms
function dispPrjForm(): void {
  prjDiv.classList.remove("hidden");
}
function hidePrjForm(): void {
  prjDiv.classList.add("hidden");
}

//display/hide task forms

function dispTskForm(): void {
  tskDiv.classList.remove("hidden");
}
function hideTskForm(): void {
  tskDiv.classList.add("hidden");
}

export { dispPrjForm, hidePrjForm, dispTskForm, hideTskForm };

//create button for new project

export function newPrjBtn(btnName: string): void {
  if (btnName === "") return;
  const btn = document.createElement("button") as HTMLButtonElement;
  btn.classList.add("btn");
  btn.classList.add("prj-button");
  btn.textContent = btnName;
  appndBtn.insertAdjacentElement("afterend", btn);
}

export function newTskDsp(
  title: string,
  description: string,
  dueDate: string,
  priority: string
): void {
  const p = document.createElement("p") as HTMLParagraphElement;
  p.classList.add("task-style");
  p.textContent = `${title}.......${description}..........${dueDate}..........${priority}`;
  appndTsk.insertAdjacentElement("afterbegin", p);
}

//Populate full task list when project button changes

export function popNewTsks() {
  while (appndTsk?.firstChild) {
    appndTsk.removeChild(appndTsk.firstChild);
  }
}
