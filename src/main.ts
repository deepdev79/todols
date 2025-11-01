import "./style.css";
import { handleProjectEntry, handleTaskEntry } from "./data";
import { dispPrjForm, hidePrjForm, dispTskForm, hideTskForm } from "./disp";

const taskForm = document.getElementById("form2") as HTMLFormElement;
const prjctForm = document.getElementById("form1") as HTMLFormElement;

taskForm.addEventListener("submit", (event: SubmitEvent) => {
  handleTaskEntry(event);
  taskForm.reset();
  hideTskForm();
});
prjctForm.addEventListener("submit", (event: SubmitEvent) => {
  handleProjectEntry(event);
  prjctForm.reset();
  hidePrjForm();
});

const addPrjBtn = document.getElementById("add-prj") as HTMLButtonElement;
const canPrjBtn = document.getElementById("cancel-prj") as HTMLButtonElement;

const addTskBtn = document.getElementById("add-task") as HTMLButtonElement;
const canTskBtn = document.getElementById("cancel-task") as HTMLButtonElement;

addPrjBtn.addEventListener("click", dispPrjForm);
canPrjBtn.addEventListener("click", hidePrjForm);

addTskBtn.addEventListener("click", dispTskForm);
canTskBtn.addEventListener("click", hideTskForm);
