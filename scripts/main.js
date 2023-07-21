const btn = document.getElementById('btn');
let price = btn.previousSibling.previousSibling.innerHTML;
const basketPrice = document.querySelector('.price')
const page = document.querySelector('shop_tittle').innerHTML;
let basket = 0;
price = price.replace(' ', '');
price = parseInt(price);
console.log(price);
//localStorage.clear();
var buyf = 0

if(localStorage.getItem('basket') !==null) {
    basket = localStorage.getItem('basket');
    basketPrice.innerHTML = basket;
}

function buy() {
    if(localStorage.getItem('page') !==null) {
        buyf = localStorage.getItem('page')
        buyf = parseInt(buyf)
    
        if(!buyf) {
            btn.style.background = "green"
            btn.innerText = "в корзине"
            basket = parseInt(basket) + price;
            buyf = 1;
        }
        else {
            btn.style.background = "silver"
            btn.innerText = "купить"
            basket = parseInt(basket) - price;
            buyf = 0;
        }        
    }

    basketPrice.innerHTML = basket
    localStorage.setItem('basket', basket);
    localStorage.setItem(page, parseInt(buyf))
}
window.addEventListener("DOMContentLoaded", function (){
    document.querySelector("#btn-menu").addEventListener("click", function() {
        document.querySelector("#menu").classList.toggle("IsActive")
    })
})

let btnTheme = document.querySelector (".btn-theme")

btnTheme.addEventListener("click", function(){
    document.body.classList.toggle("dark-theme")
})