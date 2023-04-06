function schoolGrades(grades) {
  let list = {};

  for (let person of grades) {
    let personGrades = person.split(" ");
    let name = personGrades.splice(0, 1);
    if (!list.hasOwnProperty(name)) {
      list[name] = personGrades;
    } else {
      let currentPersonGrades = list[name];
      for (let grade of personGrades) {
        currentPersonGrades.push(grade);
      }

      list[name] = currentPersonGrades;
    }
  }

  let sortedStudents = Object.keys(list).sort((a,b)=> a.localeCompare(b))

  for (let key of sortedStudents) {
    let avgGrade = list[key].reduce((a, b) => Number(a) + Number(b)) / list[key].length;
    console.log(`${key}: ${avgGrade.toFixed(2)}`);
  }
}
schoolGrades(["Lilly 4 6 6 5", "Tim 5 6", "Tammy 2 4 3", "Tim 6 6"]);
