//callback function explained
//przekazanie funcki do innej funcji jako parametr (referencję)

const prepareTask = (calback) => {
    setTimeout(() => {
        console.log('collect necessary info');
        console.log('design and develop main issues');
        console.log('write down your ideas and task to do and announce it.');
        calback();
    }, 2 * 1000);
}

const notifyTask = () => {
    console.log('Task is ready to start.');
}

prepareTask(notifyTask);


//example

const doSmthWithNumbers = (a, b, callback) => {
    console.log(callback(a, b));
}

const add = (a, b) => a + b;
const sub = (a, b) => a - b;

doSmthWithNumbers(2, 2, add);
doSmthWithNumbers(2, 2, sub);
// -------------------------------------------//
