import Car from "./car";

describe('my Car test suite', () => {

    it('car should be equal to turn and stop', function () {
        let myCar = new Car("Ford", 2004);
        myCar.tuenLeft()
        myCar.stop()
        let another = new Car("Toyota", 2005)
        another.tuenLeft();
    });
});
