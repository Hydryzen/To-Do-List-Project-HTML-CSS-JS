const tasks = [
  { id: 1, day: "Monday", text: "Eat Breakfast", completed: false, subTasks: ["Wash the dishes"] },
  { id: 2, day: "Monday", text: "Go to Work", completed: false, subTasks: ["Fill files"] },
  { id: 3, day: "Monday", text: "Eat Lunch", completed: false, subTasks: ["Prepare dessert"] },
  { id: 4, day: "Monday", text: "Eat Dinner", completed: false, subTasks: ["Eat fruit"] },
  { id: 5, day: "Tuesday", text: "Eat Breakfast", completed: false, subTasks: ["Wash the dishes"] },
  { id: 6, day: "Tuesday", text: "Go to Work", completed: false, subTasks: ["Join the meeting"] },
  { id: 7, day: "Tuesday", text: "Read Books", completed: false, subTasks: ["Study math"] },
  { id: 8, day: "Tuesday", text: "Do Exercise", completed: false, subTasks: ["Do pull-ups"] }
];

function rendertasks() {
  const mondayList = document.getElementById('monday-list');
  const tuesdayList = document.getElementById('tuesday-list');

  mondayList.innerHTML = '';
  tuesdayList.innerHTML = '';

  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = `
      <label>
        <input type="checkbox" ${task.completed ? 'checked' : ''}>
        ${task.text}
      </label>
      <ul class="sub-item">
        ${task.subTasks.map(sub => `<li><a class="sub-link" href="#">${sub}</a></li>`).join('')}
      </ul>
    `;

    if (task.day === "Monday") {
      mondayList.appendChild(li);
    } else if (task.day === "Tuesday") {
      tuesdayList.appendChild(li);
    }
  }); 
}


rendertasks();

const form = document.getElementById('todo-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  const checkedTasks = [];

  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      const label = checkbox.parentElement.textContent.trim();
      checkedTasks.push(label);
    }
  });

  if (checkedTasks.length > 0) {
    alert('Submitted!\nCompleted tasks:\n- ' + checkedTasks.join('\n- '));
  } else {
    alert('Submitted!\nNo tasks were selected.');
  }
});
