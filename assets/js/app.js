let viewButton  = document.querySelector('#btnViewUsers');
let lboardBody = document.querySelector('.lboard__body');
let userDivs = document.querySelectorAll('.lboard__user');

viewButton.addEventListener('click', function(){
    if(!viewButton.classList.contains('usersVisible')){
        lboardBody.style.display = "block";
        viewButton.classList.add('usersVisible');
        viewButton.innerHTML = "Hide Everyone";
        

    }
    else{
        viewButton.innerHTML = "View Everyone";
        viewButton.classList.remove('usersVisible');
        viewButton.classList.add('usersHidden');
        lboardBody.style.display = "none";

    }
})