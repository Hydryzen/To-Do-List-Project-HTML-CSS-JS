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

function renderTasks() {
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

renderTasks();

function addTask() {
  const input = document.getElementById('new-task-input');
  const text = input.value.trim();
  const daySelect = document.getElementById('day-select');
  const selectedDay = daySelect.value;

  if (text === '') {
    alert('Escribe una tarea antes de agregar.');
    return;
  }

  const newTask = {
    id: Date.now(),
    day: selectedDay,
    text: text,
    completed: false,
    subTasks: []
  };

  tasks.push(newTask);
  input.value = '';
  renderTasks();
}

document.getElementById('add-task-btn').addEventListener('click', addTask);

document.getElementById('new-task-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    addTask();
  }
});

// FORMULARIO
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

// ---------- DARK MODE ----------
const darkModeBtn = document.getElementById('darkmode');

function applyTheme(theme) {
  if (theme === 'dark') {
    document.body.classList.add('dark-theme');
    if (darkModeBtn) darkModeBtn.textContent = 'Light Mode';
  } else {
    document.body.classList.remove('dark-theme');
    if (darkModeBtn) darkModeBtn.textContent = 'Dark Mode';
  }
}

function toggleTheme() {
  const isDark = document.body.classList.toggle('dark-theme');
  const newTheme = isDark ? 'dark' : 'light';
  localStorage.setItem('preferred-theme', newTheme);
  applyTheme(newTheme);
}

if (darkModeBtn) {
  darkModeBtn.addEventListener('click', toggleTheme);
}

document.addEventListener('DOMContentLoaded', function() {
  const savedTheme = localStorage.getItem('preferred-theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme('light');
  }
});
