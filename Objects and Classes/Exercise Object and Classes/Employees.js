function employees(data){
let employees = {

}

for(let name of data){
    employees.name = name
    employees.personalNumber = name.length
    console.log(`Name: ${employees.name} -- Personal Number: ${employees.personalNumber}`);
}


}
employees([

    'Silas Butler',
    
    'Adnaan Buckley',
    
    'Juan Peterson',
    
    'Brendan Villarreal'
    
    ])