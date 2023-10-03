const students = [];

function addStudent(name, phone) {
    students.push({ name, phone });
    updateStudentList();
}

function updateStudentList() {
    const studentList = document.getElementById('student-ul');
    studentList.innerHTML = '';
    students.forEach(student => {
        const listItem = document.createElement('li');
        listItem.textContent = `Имя: ${student.name}, Телефон: ${student.phone}`;
        studentList.appendChild(listItem);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('add-btn');
    addBtn.addEventListener('click', () => {
        const nameInput = document.getElementById('name');
        const phoneInput = document.getElementById('phone');
        const name = nameInput.value;
        const phone = phoneInput.value;
        if (name && phone) {
            addStudent(name, phone);
            nameInput.value = '';
            phoneInput.value = '';
        }
    });
});