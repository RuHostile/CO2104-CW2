function goHome() {
   window.location.href = "home.html";
}

function goToTaskManager() {
   window.location.href = "index-2.html";
}

function goToLogin() {
	window.location.href = "login.html"
}

//DOM elements
const taskForm = document.getElementById("taskForm");
const taskContainer = document.querySelector(".taskDiv");

const nameInput = taskForm["name"];
const timeStartInput = taskForm['start'];
const timeEndInput = taskForm['end'];
const dateInput = taskForm['date']

const tasks = JSON.parse(localStorage.getItem("tasks")) || []

const addTask = (name, start,end, date) => {
   tasks.push({
      name,
      start,
      end,
      date
   });


   localStorage.setItem("tasks", JSON.stringify(tasks));

   return {name, start, end, date}; 
};

const delTask = (name) => {

}

const createTaskElement = ({name, start, end, date}) => {

   //Create elements
   const taskDiv = document.createElement("div");
   taskDiv.className = "strikethrough"
   const taskName = document.createElement("h2");
   taskName.className = "strikethrough"
   const taskStart = document.createElement("p");
   taskStart.className = "strikethrough"
   const taskEnd = document.createElement("p");
   taskEnd.className = "strikethrough"
   const taskDate = document.createElement("p");
   taskDate.className = "strikethrough"
   const taskFinishText = document.createElement("p");
   taskFinishText.className = "strikethrough"
   const taskFinish = document.createElement("input");
   taskFinish.setAttribute("type", "checkbox");

   // Fill the content
   taskName.innerText = name;
   taskStart.innerText = "Start: " + start;
   taskEnd.innerText = "End: " + end;
   taskDate.innerText = "Date: " + date;
   taskFinishText.innerText = "Finished?"


   // Add to the DOM
   taskDiv.append(taskName, taskStart, taskEnd, taskDate,taskFinishText, taskFinish);
   taskContainer.appendChild(taskDiv);

};

tasks.forEach(createTaskElement);

taskForm.onsubmit = e => {
   e.preventDefault();

   const newTask = addTask(
      nameInput.value,
      timeStartInput.value,
      timeEndInput.value,
      dateInput.value
   );

   createTaskElement(newTask)

   nameInput.value = "";
   timeStartInput.value = "";
   timeEndInput.value = "";
   dateInput.value = "";

};

taskContainer.addEventListener('click', () => {
   
})