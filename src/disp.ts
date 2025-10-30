const prjDiv = document.querySelector(".prj-form") as HTMLDivElement;
const tskDiv = document.querySelector(".task-form") as HTMLButtonElement;

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
