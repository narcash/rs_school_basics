// перевод числа построчно
function logDigits() {
    function dividing(num) {
        console.log('\nLog num digits dividing by 10:');
        let digit;

        console.log(`\nNumber is ${num}`);

        while(num) {
            digit = num % 10;
            num = Math.floor(num / 10);
            console.log(` next digit - ${digit}`);
        }
    }

    function fromString(num) {
        console.log(`\nLog num digits casting to string:`);

        let str = num.toString();
        let digit;

        console.log(`\nNumber is ${num}`);

        for (let i = 0; i < str.length; i++) {
            digit = str[i];
            console.log(` next digit - ${digit}`);
        }
    }
    dividing(num);
    fromString(num);
}
// перевод число в двоичную систему
function toBinaryString(num) {
    let bin = num.toString(2);

    console.log(`\n${num} as binary string is ${bin}`);
}

// сумма всех чисел 

function sumDigit(num) {
    console.log(`\nNumber is ${num}`);

    let sum = 0;

    while(num) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    console.log(` digits sum is ${sum}`);
}

function reverse(num) {
    console.log(`\nNumber is ${num}`);

    let reversed = 0

    while(num) {
        reversed = reversed * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    console.log(` reversed num is ${reversed}`); //think about zero at the end of num
}
let num = 65123;
// logDigits(num);

// toBinaryString(5);
// toBinaryString(13);
// toBinaryString(num);

// sumDigit(num);

reverse(num); 