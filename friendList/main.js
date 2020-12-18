class Person{
    constructor(name,age,sex){
        this.name = name
        this.age = age
        this.sex = sex
    }

}
class UI{
    static displayPerson() {
        const persons = Store.getPerson();
        persons.forEach((person)  => UI.addPersonToList(person));
    }
    static addPersonToList(person){
        const list = document.querySelector('#person-list');
        const row = document.createElement('tr');
        row.innerHTML =`
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.sex}</td>
        <td><a href="#" class="btn btn-danger delete" >X</a></td>`;
        list.appendChild(row);
    }
    static showAlert(message,className){
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.container');
        const form = document.querySelector('#person-form');
        container.insertBefore(div,form);
        // vanish in 5 second
        setTimeout(()=>document.querySelector('.alert').remove(),5000);
    }
    static clearFields(){
        document.querySelector('#name').value='';
        document.querySelector('#age').value='';
        document.querySelector('#sex').value='';
    }
    static deletePerson(el){
        if (el.classList.contains("delete")){
            el.parentElement.parentElement.remove();
        }

    }
}
// ? storage for person
// we can't store object in storage we have to stringify it 
class Store{
    static getPerson(){
        let persons;
        if(localStorage.getItem('persons')===null){
            persons = [];

        }else{
            persons = JSON.parse(localStorage.getItem('persons'));

        }
        return persons;
    }
    static addPerson(person){
        const persons = Store.getPerson();
        persons.push(person);
        localStorage.setItem('persons',JSON.stringify(persons));

    }
    static removePerson(sex){
        const persons = Store.getPerson();
        persons.forEach((person,index)=>{
            if(person.sex === sex){
                persons.splice(index, 1);
            }

        });
        localStorage.setItem('persons',JSON.stringify(persons));

    }
}
// ! event displayPerson
document.addEventListener('DOMContentLoaded',UI.displayPerson);
// ? event add person 
document.querySelector("#person-form").addEventListener('submit',(e)=>{
    // prevent actual
    e.preventDefault();
    // get form values
    const name = document.querySelector("#name").value;
    const age = document.querySelector("#age").value;
    const sex = document.querySelector("#sex").value;
    // validate
    if(name ===""||age ===''||sex ===''){
        UI.showAlert('fill the list','danger');
    }else{
        // instantiate person object
        const person = new Person(name, age, sex);
        // # add person to list
        UI.addPersonToList(person);
        //add person to store
        Store.addPerson(person);
        //show success message
        UI.showAlert('person added','success');
        // clear field
        UI.clearFields();
    }
});

//! remove person from list
document.querySelector('#person-list').addEventListener('click',(e)=>{

    UI.deletePerson(e.target)
    // remove from Store
    Store.removePerson(e.target.parentElement.previousElementSibling.textContent);
    // message
    UI.showAlert('person removed','info');

});
