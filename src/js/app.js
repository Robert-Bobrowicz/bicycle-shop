// callback hell

//sprawdzenie czy produkty są dostępne - request to backend -> response status from backend
// sprawdzenie czy cena jest poprawna
//złożenie zamówienia
//w podziękowaniu pobranie promocji


//czy produkty są dostępne
const checkProducts = (data, callback) => {
    setTimeout(() => {
        callback({ status: 'ok' });  //symulacja odp. z serwera - obiekt ze statusem
    }, 2000);
};

//spr. ceny
const checkPrice = (data, callback) => {
    setTimeout(() => {
        callback({ status: 'ok', data: data });  //symulacja odp. z serwera - obiekt ze statusem
    }, 2000);
};

//złożenie zamówienia
const orderProducts = (data, callback) => {
    setTimeout(() => {
        callback({ orderId: 12345, data });  //symulacja odp. z serwera - obiekt ze statusem
    }, 2000);
};

//promocje
const checkPomotions = (data, callback) => {
    setTimeout(() => {
        callback(['Bicycle 3: 50% off']);  //symulacja odp. z serwera - obiekt ze statusem
    }, 2000);
};

const orderData = {};
checkProducts(orderData, (response) => {
    const { status } = response;
    console.log('Czy produkty są dostępne: ', status);

    checkPrice(orderData, (response2) => {
        const { status, data } = response2;
        console.log('Cena poprawna: ', status);

        orderProducts(orderData, (response3) => {
            const { orderId, data } = response3;
            console.log('Numer zamówienia: ', orderId);

            checkPomotions(orderId, (response4) => {
                const [promotions] = response4;
                console.log(`Znizka na dodatkowe zamówienie: `, promotions);
            }, 2000);
        }, 2000);
    }, 2000);

    //...... itd. itp.
    //tworzy sie piramida callbacków - rozwiązanie tego problemu to promise.

});