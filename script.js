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
}




const form = document.getElementById('todo-form');

    form.addEventListener('submit', function(e) {
      e.preventDefault(); // prevents page reload


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
