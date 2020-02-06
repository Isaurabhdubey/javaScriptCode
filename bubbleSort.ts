// create class
class BubbleSort {
//declaring class variable
    inputArray: Array<number>;
    // initializing class variable
    constructor(inputArray: Array<number>) {
        this.inputArray = inputArray;
    }
    // sorting function to sort data
    sortData(): Array<number> {
        for (let i = 0; i < this.inputArray.length; i++) {
            for (let j = i; j < (this.inputArray.length-1 -i); j++) {
                if (this.inputArray[j] > this.inputArray[j+1]) {
                this.inputArray[j] = this.inputArray[j+1] + (this.inputArray[j+1]=this.inputArray[j], 0)
                }
            }
        }
        return this.inputArray;
    }
}

let b = new BubbleSort([2, 8, 3, 4, 5]);
console.log(b.sortData());
