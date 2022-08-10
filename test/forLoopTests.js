describe("For Loop",  () => {

    it("For Loop should go over array values", () => {
        const myCars = [ "1st", "2end", "3rd"]
        for (i = 0; i <myCars.length; i++){
            console.log(myCars[i])
        }
    });

    it("For Loop should go over array values + undefiened el 4", () => {
        const myCars = [ "1st", "2end", "3rd"]
        for (i = 0; i <= myCars.length; i++){
            console.log(myCars[i])
        }
    });
    
})