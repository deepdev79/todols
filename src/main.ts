import "./style.css";
import { primary } from "./data";
import { dispPrjForm, hidePrjForm, dispTskForm, hideTskForm } from "./disp";
console.log(primary);

const addPrjBtn = document.getElementById("add-prj") as HTMLButtonElement;
const canPrjBtn = document.getElementById("cancel-prj") as HTMLButtonElement;

const addTskBtn = document.getElementById("add-task") as HTMLButtonElement;
const canTskBtn = document.getElementById("cancel-task") as HTMLButtonElement;

addPrjBtn.addEventListener("click", dispPrjForm);
canPrjBtn.addEventListener("click", hidePrjForm);

addTskBtn.addEventListener("click", dispTskForm);
canTskBtn.addEventListener("click", hideTskForm);
