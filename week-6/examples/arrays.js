function addStudent(student) {
  var li = document.createElement("li");
  li.textContent = student;
  document.querySelector("ol").appendChild(li);
}

for (var i = 0; i < students.length; i++) {
  addStudent(students[i]);
}

document.querySelector("#count").textContent = students.length;
