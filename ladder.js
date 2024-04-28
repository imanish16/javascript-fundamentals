let ladder = {
    steps: 0,
    up() {
        this.steps++;
        return this;
    },
    down() {
        this.steps--;
        return this;
    },
    showSteps() {
        return this.steps;
    }
}
ladder.up().up().down();
console.log(ladder.showSteps());