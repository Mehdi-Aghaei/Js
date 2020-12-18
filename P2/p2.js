// get input
let filterInput = document.querySelector("#filterInput");
//add event listener
filterInput.addEventListener('keyup',filterNames);
function filterNames() {
    // get value
    let filterValue = document.querySelector("#filterInput").value.toUpperCase();
    const ul = document.querySelector("#names");
    const li = ul.querySelectorAll('li.list-group-item');
    // loop throgh
    for(let i=0;i < li.length;i++){
        let a = li[i].getElementsByTagName('a')[0];
        // if match
        if(a.innerHTML.toUpperCase().indexOf(filterValue)> -1){
            li[i].style.display='';
        }else{
            li[i].style.display='none';
        }
    }
}