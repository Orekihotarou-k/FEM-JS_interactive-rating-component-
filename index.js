// Variables

const submitBtn = document.querySelector('.submit-btn')
const rating = document.querySelector('.rating')
const thankState = document.querySelector('.thanks-state')
const rates = document.querySelectorAll('.btn')
const addRate = document.getElementById('add-rate')

submitBtn.addEventListener('click', function(){
    thankState.style.display = 'block';
    rating.style.display = 'none';
})

for (let i = 0; i < rates.length; i++){
    rates[i].addEventListener('click', function(){
        addRate.innerHTML = rates[i].innerHTML
    })
}
