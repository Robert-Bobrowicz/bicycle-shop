
//IFEE by uniknąć kolizji definicji zmiennych globalnych
(() => {

    function runCounter(endTime) {

        const counter = document.querySelector('#promotion-counter');

        function getSecondsToEnd(date) {
            const end = new Date(date);
            const seconds = end.getTime() / 1000;
            const startSeconds = Date.now() / 1000;

            return seconds - startSeconds;
        };

        const getCounterFormat = (seconds) => {
            if (seconds <= 0) return 'Promotion time has expired.';

            const h = Math.floor(seconds / 3600);
            const m = Math.floor((seconds - h * 3600) / 60);
            const s = Math.floor(seconds - h * 3600 - m * 60);

            return `${h} h ${m} min ${s} sec`;
        }

        const sec = getSecondsToEnd(endTime);
        counter.innerHTML = getCounterFormat(sec);
    };

    // const endTime = "2023-06-02T11:38:59Z"; //na sztywno

    const date = new Date();
    date.setHours(date.getHours() + 23); //+24 godzin
    date.setMinutes(date.getMinutes() + 59); //+ 2 min od obecnej chwili
    date.setSeconds(date.getSeconds() + 59);

    const endTime = date.toISOString();

    runCounter(endTime);

    const intervalId = setInterval(() => {
        runCounter(endTime);
    }, 1000);

    if (Date.now() > date.getTime()) {
        clearInterval(intervalId);
    };

})()