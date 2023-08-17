const jobs = [
  { id: 1, title: "Learn HTML", done: false },
  { id: 2, title: "Learn CSS", done: false },
  { id: 3, title: "Learn Javascript", done: false },
  { id: 4, title: "Learn DOM", done: false },
  { id: 5, title: "Learn React", done: false },
  { id: 6, title: "Learn Node.js", done: false }
];

let editIdx = -1;
let replaceTitle = "";
let sortZA= true;

let jobList = document.querySelector(".job-list")
let jobForm = document.querySelector(".job-form")

function render() {
  let allJobItems = jobs.map((el, i) => {
    if (i !== editIdx) {
      return `
      <div class='job-item'>
      <input type="text" readonly value="${el.title}" onclick="changeStatus(${el.id})" class="${el.done ? "done" : "undone"}"/>
      <button onclick="setEdit(${el.id})">Edit</button>
      <button onclick="deleteJob(${el.id})">Delete</button>
      </div>
      `;
    } else {
      return `
      <div class='job-item'>
      <input type="text" value="${el.title}" class="editmode" onkeyup="setReplaceTitle(event)"/>
      <button onclick="changeTitle(${el.id})">Save</button>
      <button onclick="deleteJob(${el.id})">Delete</button>
      </div>
      `;
    }
  });
  
  // console.log(allJobItems);
  // console.log((allJobItems).join(""));
  jobList.innerHTML = (allJobItems.join("")); //join ไว้รวม string
  if (editIdx !== -1) {
      let input = jobList.children[editIdx].children[0];
      let end = input.value.length;
      input.setSelectionRange(0, end);
      jobList.children[editIdx].children[0].focus();
  }
}

//main
  

  render();
  jobForm.addEventListener("submit",(e) => {
  e.preventDefault();
  console.log(e.target.children[0].value)
  // console.log(e.target.elements['title'].value)
  let newTitle = e.target.elements[0].value;
  if (!newTitle.trim()) return;
  let newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
  let newJob = {
    id: newId,
    title: newTitle,
    done: false
  };
  jobs.push(newJob);
  // console.log(jobs)
  jobForm.reset();
  render();
});

function deleteJob(id) {
  let idx = jobs.findIndex((el) => el.id === id);
  jobs.splice(idx, 1);
  render();
}
function changeStatus(id) {
  let idx = jobs.findIndex((el) => el.id === id);
  jobs[idx].done = !jobs[idx].done;
  render();
}
function setEdit(id)
{
  let idx = jobs.findIndex((e)=> e.id === id );
  editIdx = idx;
  replaceTitle = jobs[idx].title;
  render();
}
function setReplaceTitle(e)
{
  
  if(e.key ==="Escape")
  {
      editIdx = -1;
      render();
  }
  console.log(e.target);
  
  if(e.target.value.trim())
  {
      replaceTitle = e.target.value;
  }
}

function changeTitle(id)
{
  let idx = jobs.findIndex((e)=>e.id == id);
  jobs[idx].title = replaceTitle;
  editIdx = -1;
  render();
}