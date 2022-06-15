let last30Btn = document.querySelector('#last30');
let allTimeBtn = document.querySelector('#allTime');
let seeAllBtn  = document.querySelector('#seeAll');

let last30Body = document.querySelector('.lboard__last30Body');
let allTimeBody = document.querySelector('.lboard__allTimeBody');
let seeAllBody = document.querySelector('.lboard__seeAllBody');

function btnClick(a, b, c){
    b.style.display = "none";
    c.style.display = "none";
    a.style.display = "block";
}

last30Btn.addEventListener('click', function(){
    btnClick(last30Body, allTimeBody, seeAllBody);
});
allTimeBtn.addEventListener('click', function(){
    btnClick(allTimeBody, last30Body, seeAllBody);
});
seeAllBtn.addEventListener('click', function(){
    btnClick(seeAllBody, allTimeBody, last30Body);
});