const studentsJSON = localStorage.getItem("students");
const studentsArray = studentsJSON !== null ? JSON.parse(studentsJSON) : [];

const sortArray = (sort) => {
  let newArray = studentsArray;
  newArray =
    sort === 1
      ? studentsArray.sort((a, b) => a.name.localeCompare(b.name))
      : studentsArray.sort((a, b) => b.name.localeCompare(a.name));

  return [...newArray];
};

const addStudent = (obj) => {
  studentsArray.push(obj);
  localStorage.setItem("students", JSON.stringify(studentsArray));
  return [...studentsArray];
};

export { studentsArray, sortArray, addStudent };
