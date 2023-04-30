const checkboxes = document.querySelectorAll('input[type="checkbox"]');
//add event listner to all the check box
checkboxes.forEach((checkbox)=>{
    checkbox.addEventListener('click',(event)=>{
        console.log(event.target.id);
        window.location.href = `/toggle-check/?id=${event.target.id}`;
    });
});

//function to display add or update form
function displayForm(id){
    document.getElementById(id).style.display = "block";
    console.log(id);
}
//function to hide form
function hideForm(id){
    document.getElementById(id).style.display = "none";
}

function deleteCompleted(){
    window.location.href="/delete-completed";
}

function deleteOne(id){
    window.location.href=`/delete-one/?id=${id}`;
}