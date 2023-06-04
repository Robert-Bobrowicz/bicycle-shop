//form data read and save
// const buyBtn = document.querySelector('#buy');
const form = document.querySelector('form');


//validation 
function validateName(name) {
    if (!name) return 'Name and surname is required.';
    if (name.length < 3) return 'Name should be at least 3 characters long.';
};

function validateTel(number) {
    if (!number) return 'Telephone number is required.';
    if (number.length < 3) return 'Number should be at least 9 digits.';
};

function validateEmail(email) {
    if (!email) return 'Email is required.';
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) return 'Email is not correct format.';
};

function validateEmailConfirm(value, email) {
    if (value !== email) return 'Email and confirm email are not the same.';
};

const validate = (key, value, allValues) => {
    switch (key) {
        case 'name': return validateName(value);
        case 'tel': return validateTel(value);
        case 'email': return validateEmail(value);
        case 'email-confirm': return validateEmailConfirm(value, allValues.email);
    }
}

function validateFormValues(values) {
    //validate and show errors
    const errors = [];

    Object.entries(values).forEach(([key, value]) => {
        const error = validate(key, value, values);
        if (error) errors.push(error);
    });

    document.querySelector('#errors').innerHTML = errors
        .map(error => `<li>${error}</li>`)
        .join('');

    return errors.length > 0;
};

function onSubmit(event) {
    event.preventDefault();

    const elements = document.querySelector('form').elements;
    const formValues = {
        name: elements['name'].value,
        email: elements['email'].value,
        'email-confirm': elements['email-confirm'].value,
        tel: elements['tel'].value,
        payment: elements['payment'].value
    };
    console.log(formValues);
    //validate form
    const hasErrors = validateFormValues(formValues);

    //show loading up to a server icon
    if (!hasErrors) {
        document.querySelector('.loading').style.display = 'flex';
        // localStorage.removeItem('items');
        // localStorage.removeItem('totalPrice');
        localStorage.clear();
        setTimeout(() => window.location.href = 'acknowledge.html', 2000);
    };
};

// buyBtn.addEventListener('click', onSubmit);
if (form) form.addEventListener('submit', onSubmit);


//show date of the order
const dateContainer = document.querySelector('#dateContainer');

if (dateContainer) dateContainer.innerHTML = new Date().toLocaleString();


//display summary
const itemsContainer = document.querySelector('#items-list');
items = JSON.parse(localStorage.getItem('items')) || [];

function showSummary(items, displayElement) {
    const html = items.map(item => `<li>${item.quantity} x ${item.title}</li>`).join('');

    displayElement.innerHTML = html;

}

if (itemsContainer) showSummary(items, itemsContainer);


//display total price in summary
const priceContainer = document.querySelector('#price-container');
const priceSummary = localStorage.getItem('totalPrice') || 0;

if (priceContainer) priceContainer.innerHTML = priceSummary;

// if (el) for DOM elements is required to avoid DOMCOntent Loaded errors - shows null when not loaded yet in DOM