document.addEventListener("DOMContentLoaded", () => {
  // your code here

  const form = document.getElementById('create-task-form');
  const input = document.getElementById('new-task-description');
  // const list = document.getElementById('list');
  const tasks = document.getElementById('tasks');

  // console.log(form);
  // console.log(input);

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    let inputValue = input.value;
    // console.log(inputValue);

    // create li for list tasks
    const li = document.createElement('li');
    li.innerText = input.value;

    // append the li to the ul element
    tasks.appendChild(li);

    form.reset();


  });
});
