let viewButton  = document.querySelector('#btnViewUsers'); // View Users butonu
let lboardBody = document.querySelector('.lboard__body'); // Son 30 gün listesindeki kullanıcıları kapsayan div.
let userDivs = lboardBody.querySelectorAll(':scope > .lboard__user'); // Son 30 gün listesindeki kullanıcılar arrayi.
let last30Button = document.querySelector('#last30'); // Last 30 Days butonu
let allTime = document.querySelector('#allTime'); // All-Time butonu
let allTimeUsers = document.querySelector('.lboard__allTimeBody'); // All-time listesindeki kullancıları kapsayan div. 
let count_allTimeUsers = allTimeUsers.querySelectorAll(':scope > .lboard__user').length; // All-time listesindeki kullanıcı sayısını tutar. 

let click = 0;

viewButton.addEventListener('click', function(){
    if(!viewButton.classList.contains('usersVisible')){
        lboardBody.style.display = "block";
        viewButton.classList.add('usersVisible');
        viewButton.innerHTML = "Hide Everyone";
        
    }
    else if(allTime.classList.contains('active') && viewButton.classList.contains('usersVisible')){
        decreaseNumber();
        viewButton.innerHTML = "View Everyone";
        viewButton.classList.remove('usersVisible');
        viewButton.classList.add('usersHidden');
        allTimeUsers.style.display = "none";
        lboardBody.style.display = "none";
        allTime.classList.remove('active');
        last30Button.classList.add('active');
    }
    else{
        viewButton.innerHTML = "View Everyone";
        viewButton.classList.remove('usersVisible');
        viewButton.classList.add('usersHidden');
        allTimeUsers.style.display = "none";
        lboardBody.style.display = "none";
        allTime.classList.remove('active');
        last30Button.classList.add('active');
    }
})

function increaseNumber(){
    for(i=0; i < userDivs.length; i++){
        userDivs[i].firstElementChild.firstElementChild.innerHTML = parseInt(userDivs[i].firstElementChild.firstElementChild.textContent, 10) + count_allTimeUsers +  `<img src="assets/images/pp${i + 1}.jpg">`; 
    }
    click++;
}
function decreaseNumber(){
    for(i=0; i < userDivs.length; i++){
        userDivs[i].firstElementChild.firstElementChild.innerHTML = parseInt(userDivs[i].firstElementChild.firstElementChild.textContent, 10) - count_allTimeUsers +  `<img src="assets/images/pp${i + 1}.jpg">`; 
    }
}

allTime.addEventListener('click', function(){
    if(viewButton.classList.contains('usersVisible') && !allTime.classList.contains('active')){
        allTimeUsers.style.display = "block";
        last30Button.classList.remove('active');
        allTime.classList.add('active');
        increaseNumber();
    }
})

last30Button.addEventListener('click', function(){
    if(viewButton.classList.contains('usersVisible') && !last30Button.classList.contains('active')){
        allTimeUsers.style.display = "none";
        allTime.classList.remove('active');
        last30Button.classList.add('active');
        decreaseNumber();
    }
})