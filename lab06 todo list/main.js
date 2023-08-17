const jobs = [
    { id: 1, title: "Learn HTML", done: false },
    { id: 2, title: "Learn CSS", done: false },
    { id: 3, title: "Learn Javascript", done: false },
    { id: 4, title: "Learn DOM", done: false },
    { id: 5, title: "Learn React", done: false },
    { id: 6, title: "Learn Node.js", done: false }
];

let editIdx = -1;
let replacedTitle = "";
let sortZA = true;

let jobList = document.querySelector(".job-list");
let jobForm = document.querySelector(".job-form");



// code เน่า somehow
// function render() {
//     let allJobItems = jobs.map((el, i ) => {
//         if(i !== editIdx) {
//             return `
//             <div class ="job-item'>
//             <input type="text" readonly value="${el.title}" onclick="changestatus(${
//                 el.id
//             })" class="${el.done ? "done" : "undone"} "/>
//             <button onclick="setEdit(${el.id})">Edit</button>
//             <button onclick="deleteJob(${el.id})">Delete</button>
//             </div>
//             `;
//         } else {
//             return `
//             <div class="job-item" >
//             <input type="text" value="${el.title}" class="editemode" onkeyup="setReplaceTitle(event)"/>
//             <button onclick="changeTitle(${el.id})">save</button>
//             <button onclick="deleteJob(${el.id})">Delete</button>
//             </div>
//             `;
//         }
//     });

//     jobList.innerHTML = allJobItem.join("");
//     if (editIdx !== -1) {
//       let input = jobList.children[editIdx].children[0];
//       let end = input.ariaValueMax.length;
//       input.setSelectionRanfe(0, end);
//       jobList.children[editIdx].children[0].focus();
//     }
// }

// render()
function render() {
    let allJobItems = jobs.map((el, i) => {
      if (i !== editIdx) {
        return `
        <div class='job-item'>
        <input type="text" readonly value="${el.title}" onclick="changeStatus(${
          el.id
        })" class="${el.done ? "done" : "undone"}"/>
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
  
    jobList.innerHTML = allJobItems.join("");
    if (editIdx !== -1) {
      let input = jobList.children[editIdx].children[0];
      let end = input.value.length;
      input.setSelectionRange(0, end);
      jobList.children[editIdx].children[0].focus();
    }
  }

  render()

  jobForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target.children[0])
    // console.log(e.target.elements['title'].value)
    let newTitle = e.target.elements[0].value;
    if (!newTitle.trim()) return;
    let newId = jobs.length > 0 ? jobs[jobs.length - 1].id + 1 : 1;
    let newJob = {
      id: newId,
      title: newTitle,
      status: false
    };
    jobs.push(newJob);
    // console.log(jobs)
    jobForm.reset();
    render();
  });