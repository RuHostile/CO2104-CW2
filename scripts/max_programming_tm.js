//DOM elements
const taskForm = document.getElementById("taskForm");
const taskContainer = document.querySelector(".taskDiv");

const nameInput = taskForm["name"];
const timeStartInput = taskForm['start'];
const timeEndInput = taskForm['end'];

const tasks = JSON.parse(localStorage.getItem("tasks")) || []

const addTask = (name, start,end) => {
   tasks.push({
      name,
      start,
      end
   });


   localStorage.setItem("tasks", JSON.stringify(tasks));

   return {name, start, end}; 
};

const createTaskElement = ({name, start, end}) => {

   //Create elements
   const taskDiv = document.createElement("div");
   const taskName = document.createElement("h2");
   const taskStart = document.createElement("p");
   const taskEnd = document.createElement("p");

   // Fill the content
   taskName.innerText = "Task Name: " + name;
   taskStart.innerText = "Task Start: " + start;
   taskEnd.innerText = "Task End: " + end;

   // Add to the DOM
   taskDiv.append(taskName, taskStart, taskEnd);
   taskContainer.appendChild(taskDiv);

};

tasks.forEach(createTaskElement);

taskForm.onsubmit = e => {
   e.preventDefault();

   const newTask = addTask(
      nameInput.value,
      timeStartInput.value,
      timeEndInput.value
   );

   createTaskElement(newTask)

   nameInput.value = "";
   timeStartInput.value = "";
   timeEndInput.value = "";

};