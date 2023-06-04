//IIFE Immediately Invoked Function Expression to funkcja, najczęściej anoniowa, w której jest inna funckcja - ograniczenie zasięgu zmiennych. Musi być wzięta w nawiasy (function() {})() i od razu wywołana

"use strict";

(function () {
    //items 
    const cart = {
        price: 0,
        getPrice: function (cb) {
            this.price = cb(this.items, this.getDiscountIfEnabled());
            if (this.price < 0) this.price = 0;
            return this.price;
        },
        getDiscount() {
            return this.discount.amount
        },
        getDiscountIfEnabled() {
            if (this.discount.enabled) { return this.getDiscount() } else { return 0; };
        },
        removeItem(id) {
            // console.log(id);
            const index = this.items.findIndex(item => item.id === id);
            // console.log(this.items[index]);
            this.items.splice(index, 1);

            localStorage.setItem('items', JSON.stringify(this.items));
        },
        discount: {
            amount: 0.05,
            enabled: false
        },
        items: []
        // items: [
        //     {
        //         id: 1,
        //         price: 1000,
        //         title: "Bicycle 1",
        //         quantity: 1
        //     },
        //     {
        //         id: 2,
        //         price: 1000,
        //         title: "Bicycle 2 electric power",
        //         quantity: 2
        //     },
        //     {
        //         id: 3,
        //         price: 1000,
        //         title: "Bicycle 3 super electric power",
        //         quantity: 1
        //     },
        //     {
        //         id: 4,
        //         price: 1000,
        //         title: "Bicycle 4 sun electric power",
        //         quantity: 1
        //     }
        // ]
    };

    //read items added to localStorage from addItem() from homepage 

    cart.items = JSON.parse(localStorage.getItem('items'));

    //variables
    const discountElement = document.querySelector('#discount');
    const discountCheckbox = document.querySelector('#add-discount');
    const itemsContainer = document.querySelector('#items');
    let counter = 1;

    //sortowanie wg ceny, rosnąco
    cart.items.sort((a, b) => a.price - b.price);

    //nowy sposób na wypełnienie tabeli koszyka z wykorzystaniem map() i join()
    itemsContainer.innerHTML = cart.items
        .map(item => `
                        <tr data-item-id="${item.id}">
                        <td>${counter++}</td>
                        <td>${item.title}</td>
                        <td><input type="number" class="quantity" value="${item.quantity}"></td>
                        <td>${item.price}</td>
                        <td><button class="delete">x</button></td>
                        </tr>`)
        .join('');


    //change background of tr
    function markBg(event) {
        if (event.target.tagName === 'TD') {
            event.target.closest('tr').classList.toggle('marked');
        }
    };

    //row delete <tr>
    function removeRow(event) {
        if (event.target.tagName === 'BUTTON') {
            const row = event.target.closest('tr');
            console.log(row.dataset.itemId);
            cart.removeItem(Number(row.dataset.itemId));
            row.remove();
            calculatePrice();
        }
    };

    //row delete when input value is rqual zero
    function removeRowFromQuantity(event) {
        if (Number(event.target.value) === 0) {
            const row = event.target.closest('tr');
            cart.removeItem(Number(row.dataset.itemId));
            row.remove();
            calculatePrice();
        };
    };

    //add discount
    function addDiscount(event) {
        this.discount.enabled = event.target.checked;
        if (this.discount.amount > 0) {
            document.querySelector('#discount-amount').innerHTML = `-${Math.floor(cart.discount.amount * 100)}%`;
            document.querySelector('#discount').classList.toggle('hidden'); //sposób ukrywania elementu DOM poprzez klasę .hidden
        };
        return calculatePrice();
    };


    //price calculations options for regular and super client - callback functions
    const getPriceRegularClient = (items, discount) => {
        let price = 0;
        items.forEach((item) => {
            price += item.price * item.quantity;
        });
        price -= price * discount; //discount is percent not a value of money

        return price;
    };

    const getPriceSuperClient = (items, discount) => {
        let price = 0;
        items.forEach((item) => {
            // price += item.price * item.quantity;
            price += (item.price * (1 - 0.05)) * item.quantity; // more 5% discount from item price
        });
        // discount += 0.15; //dodatkowe 15% dla super client UWAGA: nie liczy porawnie total 
        price -= price * discount; //discount is percent not a value of money

        return price;
    };

    const superClient = false;

    //total price calculation
    function calculatePrice() {
        let cb;
        if (!superClient) cb = getPriceRegularClient;
        if (superClient) cb = getPriceSuperClient;
        let total = cart.getPrice(cb);

        document.querySelector("#total-price").innerHTML = total;
    };

    //cart item quantity handler
    function itemQuantityHandler(event) {
        if (event.target.tagName === 'INPUT') {
            const row = event.target.closest('tr');
            const index = row.dataset.itemId;

            cart.items.forEach(item => {
                if (item.id === +index) {
                    item.quantity = +event.target.value;
                    localStorage.setItem('items', JSON.stringify(cart.items));
                    calculatePrice();
                };
            });
        };
    };

    calculatePrice();


    //listeners
    discountCheckbox.addEventListener('click', addDiscount.bind(cart));
    itemsContainer.addEventListener('click', markBg);
    itemsContainer.addEventListener('click', removeRow);
    itemsContainer.addEventListener('change', removeRowFromQuantity);
    itemsContainer.addEventListener('input', itemQuantityHandler);


    //automatically check box discount if true
    const discountDataset = discountElement.dataset;
    const discountShouldBeEnabled = Number(discountDataset.discountShouldBeEnabled);

    if (discountShouldBeEnabled) {
        const clickEvent = new MouseEvent('click'); // metoda poprzez MouseEvent
        discountCheckbox.dispatchEvent(clickEvent);
    };


    //save total price (with or without discount) to memory
    const goToSummary = document.querySelector('#go-to-summary');

    function savePriceToMemory() {
        console.log('order clicked');
        localStorage.setItem('totalPrice', cart.price);
    };

    goToSummary.addEventListener('click', savePriceToMemory);

})();





