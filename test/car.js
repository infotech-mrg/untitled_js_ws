class Car {

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
    drive() {
        console.log("I'm driving");
    }
    stop() {
        console.log("I'm stoppig");
    }
    tuenLeft() {
        console.log("I'm turning left");
    }
    turnRight() {
        console.log("I'm turning right");
    }
}

}

export default new Car();
