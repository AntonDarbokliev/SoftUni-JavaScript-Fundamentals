
function getGradeStatus(grade) {
  let status = "";
  if (grade < 3) {
        status = "Fail";
  }else if(grade < 3.5){
    status = "Poor";
  }else if(grade < 4.5) {
    status = "Good";
  }else if( grade < 5.5){
    status = "Very good";
  } else if( grade > 5.5){
    status = "Excellent";
  }           
  
grade < 3 ?  console.log(`${status} (${2})`)  :console.log(`${status} (${grade.toFixed(2)})`)

}
getGradeStatus(2.75)
