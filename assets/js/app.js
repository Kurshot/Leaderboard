let viewButton  = document.querySelector('#btnViewUsers'); // View Users butonu
let lboardBody = document.querySelector('.lboard__body'); // Son 30 gün listesindeki kullanıcıları kapsayan div.
let userDivs = lboardBody.querySelectorAll(':scope > .lboard__user'); // Son 30 gün listesindeki kullanıcılar arrayi.
let last30Button = document.querySelector('#last30'); // Last 30 Days butonu
let allTime = document.querySelector('#allTime'); // All-Time butonu
let allTimeUsers = document.querySelector('.lboard__allTimeBody'); // All-time listesindeki kullancıları kapsayan div. 
let count_allTimeUsers = allTimeUsers.querySelectorAll(':scope > .lboard__user').length; // All-time listesindeki kullanıcı sayısını tutar. 

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
        allTimeUsers.style.display = "none";
        lboardBody.style.display = "none";
        allTime.classList.remove('active');
        last30Button.classList.add('active');

    }
})

allTime.addEventListener('click', function(){
    if(viewButton.classList.contains('usersVisible')){
        allTimeUsers.style.display = "block";
        last30Button.classList.remove('active');
        allTime.classList.add('active');
    }
})

last30Button.addEventListener('click', function(){
    if(viewButton.classList.contains('usersVisible')){
        allTimeUsers.style.display = "none";
        allTime.classList.remove('active');
        last30Button.classList.add('active');
    }
})