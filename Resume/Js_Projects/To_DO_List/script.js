

document.addEventListener("DomContentLoaded", ()=>{
    const storedTask = JSON.parse(localStorage.getItem('task'));
    if(storedTask){
        storedTask.forEach((task)=>task.push(task))
    updateTaskList();
    updateStatus();
    }
})

let task = [];

const saveTasks =()=>{
    localStorage.setItem('task', JSON.stringify(task))
}

const addTask = () => {
    let inputTask = document.getElementById("taskInput");
    const text = inputTask.value.trim();
    if (text) {
        task.push({ text: text, completed: false });
        taskInput.value = "";
        updateTaskList();
        updateStatus();
        saveTasks();
    }
    // console.log(task);
};

const toggletastkComplete = (index) => {
    task[index].completed = !task[index].completed;
    // console.log(task);
    updateTaskList();
    updateStatus();
    saveTasks();
};

const deleteTask = (index) => {
    task.splice(index, 1);
    updateTaskList();
    updateStatus();
    saveTasks();
};
const editTask = (index) => {
    const taskInput = document.getElementById("taskInput");
    taskInput.value = task[index].text;
    task.splice(index, 1);
    updateTaskList();
    updateStatus();
    saveTasks();
};
const updateStatus = () => {
    const completeTasks = task.filter((task) => task.completed).length;
    const totalTasks = task.length;
    const progress = (completeTasks / totalTasks) * 100;
    const progressBar = document.getElementById("progress");
    progressBar.style.width = `${progress}%`;
    document.getElementById('numbers').innerText = `${completeTasks} / ${totalTasks}`
    if(task.length && completeTasks === totalTasks) {
        blaskfetti();
    }
};
const updateTaskList = () => {
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = "";

    task.forEach((task, index) => {
        const listItem = document.createElement("li");

        listItem.innerHTML = `
        <div class= "taskItem">
        <div class="task ${task.completed ? "completed" : ""}">
        <input type ="checkbox" class="checkbox" ${task.completed ? "checked" : ""
            }/>
        <p> ${task.text}</p>
        </div>
        <div class = "icons">
        <img src= "./pen-to-square-solid.svg" onClick="editTask(${index})" />
        <img src= "./trash-solid.svg" onClick="deleteTask(${index})" />
            </div>
        </div>
        `;
        listItem.addEventListener("change", () => toggletastkComplete(index));
        taskList.appendChild(listItem);
    });
};
document.getElementById("newtask").addEventListener("click", function (e) {
    e.preventDefault();
    addTask();
});


const blaskfetti=()=>{
    const count = 200,
  defaults = {
    origin: { y: 0.7 },
  };

function fire(particleRatio, opts) {
  confetti(
    Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio),
    })
  );
}

fire(0.25, {
  spread: 26,
  startVelocity: 55,
});

fire(0.2, {
  spread: 60,
});

fire(0.35, {
  spread: 100,
  decay: 0.91,
  scalar: 0.8,
});

fire(0.1, {
  spread: 120,
  startVelocity: 25,
  decay: 0.92,
  scalar: 1.2,
});

fire(0.1, {
  spread: 120,
  startVelocity: 45,
});
}