"use strict";

//variables
const itemsList = document.querySelector('.item-list');
const itemsCounter = document.querySelector('.counter');
const cartButtons = document.querySelectorAll('.btn-cart');
let items = [];

//click handler auxiliary function with closure concept
function createCart() {

    function updateStorage() {
        localStorage.setItem('items', JSON.stringify(items) || []);
    };

    function setItems(newItems) {
        items = newItems;
        //save items to localStorage
        updateStorage();
        refreshCartItems();
    };

    function refreshCartItems() {
        itemsCounter.innerText = +items.length;
    };

    function hasItem(id) {
        return items.find(item => item.id === id);
    };

    function addToCart(id, title, price, quantity = 1) {
        console.log(title + ':', price, quantity);
        items.push({
            id: id,
            title: title,
            price: price,
            quantity: quantity
        });
        refreshCartItems();
        console.log(items)
        //save items to localStorage
        updateStorage();

    };

    function removeFromCart(id) {
        const index = items.findIndex(item => item.id === id);
        console.log('delete: ', items[index]);
        items.splice(index, 1);
        refreshCartItems();
        updateStorage();
    };

    return {
        add: addToCart,
        remove: removeFromCart,
        setItems,
        hasItem
    }
};

//initial check and set localStorage (it may happen storage is empty or manually deleted by someone)
if (!localStorage.getItem('items')) localStorage.setItem('items', JSON.stringify(items));


const cart = createCart();

//read items from localStorage
cart.setItems(JSON.parse(localStorage.getItem('items')));

//change color of button after click - add clas in-cart
function addClass(className, element) {
    element.classList.add(className);
};

//remove class 'in-cart' from classList
function removeClass(className, element) {
    console.log('class in-cart removed');
    element.classList.remove(className);
};

//click handler main function
function addItemToCart(event) {
    if (event.target.tagName !== "BUTTON") return;
    const title = event.target.dataset.title;
    const price = Number(event.target.dataset.price);
    const id = Number(event.target.dataset.id);



    console.log([...event.target.classList].includes('in-cart'));
    if ([...event.target.classList].includes('in-cart')) {
        console.log('usuń');
        cart.remove(id);
        removeClass('in-cart', event.target);
        event.target.innerText = 'Add to cart';
    } else {
        cart.add(id, title, price);
        addClass('in-cart', event.target);
        event.target.innerText = 'Remove from cart';
    };

};

//listeners
itemsList.addEventListener('click', addItemToCart);


//default color of buttons when added item to a cart (hasItem)
cartButtons.forEach(button => {
    if (cart.hasItem(+button.dataset.id)) {
        addClass('in-cart', button);
        button.innerText = "Remove from cart";
    }
});