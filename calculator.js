let calculator = {
    num1: 0,
    num2: 0,
    read: function () {
        this.num1 = prompt('Enter a number', '');
        this.num2 = prompt('Enter a second number', '');
    },
    sum: function () {
        console.log(+this.num1 + +this.num2);
    },
    mul: function () {
        console.log(this.num1 * this.num2);
    }
}

calculator.read();
calculator.sum();
calculator.mul();