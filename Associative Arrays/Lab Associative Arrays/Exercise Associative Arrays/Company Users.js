function companyUsers(arr){
let companyEmployeeData = new Map()

for(let data of arr){
    let [company,employee] = data.split(" -> ")
    if(!companyEmployeeData.has(company)){
        companyEmployeeData.set(company,new Set())
    }   
    companyEmployeeData.get(company).add(employee)
}

let sortedCompanies = Array.from(companyEmployeeData).sort((a,b) => a[0].localeCompare(b[0]))

for(let [company,employees] of sortedCompanies){
    console.log(company);
    console.log(`-- ${Array.from(employees).join("\n-- ")}`);
}

}companyUsers([ 'SoftUni -> AA12345', 'SoftUni -> CC12344', 'Lenovo -> XX23456', 'SoftUni -> AA12345', 'Movement -> DD11111' ])