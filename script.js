const task = [
  {
    id: 1,
    day: "monday",
    text: "Eat breakfast",
    completed: false,
    subtasks: "Wash the dishes"
  },
];



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
