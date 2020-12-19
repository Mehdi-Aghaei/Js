const employees = [
    {name:"john Doe", position:"manager", start:1999, end:2005},
    {name:"jacki ", position:"coworker", start:2000, end:2015},
    {name:"brad", position:"monkey", start:2006, end:2020},
    {name:"Dock", position:"finance", start:1989, end:2017},
    {name:"mamad", position:"monkey", start:2010, end:2019}
];

const ages = [33,44,55,68,78,20,52,32]

/*for(let i =0;i < employees.length;i++){
    console.log(employees[i]);
    simple for example
}*/
//employees.forEach( emp => console.log(emp.name));
const monkey = employees.filter(emp => emp.position === "monkey");
const underage = ages.filter(age => age >= 50 );
