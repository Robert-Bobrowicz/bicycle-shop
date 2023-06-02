//error - try/catch do obsługi błędów

//przykład: pojawi się bład: ReferenceError: item is not defined
// at addToCartHandler (app.js:11:21)
// at app.js:17:5
// ale nie spowoduje zatrzymania programu, który przejdzie do linii 20
{

    const addItem = (item) => {
        console.log(`Dodoaję produkt ${item} do koszyka`);
    };

    function addToCartHandler() {
        try {
            // addItem(item)
            throw new Error('błąd!');
            console.log('kod po throw nie jest wykonywany - wyszarzony w edytorze');
        } catch (error) {
            console.log('coś poszło nie tak:', error);
        }
        console.log('refresh cart');
    };

    addToCartHandler();
}