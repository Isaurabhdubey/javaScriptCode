class SortingAndSquaring { 
    data: number[];
    left = 0;
    right = 0;
    sortedArray: number[];
    constructor(item: number[]) {
        this.data = item;
        this.sortedArray = new Array(this.data.length);
        this.right = this.data.length - 1;
    }
    squaringAndSoring() {
        for (let i = this.data.length - 1; i >= 0; i--) { 
            if (Math.abs(this.data[this.left]) > Math.abs(this.data[this.right])) {
                this.sortedArray[i] = this.data[this.left] * this.data[this.left];
                this.left = this.left + 1;
            } else {
                this.sortedArray[i] = this.data[this.right] * this.data[this.right];
                this.right = this.right - 1;
            }
        }
        return this.sortedArray;
    }
    
}

let newSorting = new Sorting([-7,-1, 2, 4, 8])
console.log(newSorting.squaringAndSoring());
