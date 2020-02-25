class LinearSearch {
    data: any = [];
    constructor(item: any) {
        this.data = item;
    }
    findElement(element: number|string): string {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === element) {
                return `yes its present at ${i} position`;
            }
        }
    return `No ${element} is not present in this array`;
    }
}
let arr = new LinearSearch([2, 3, 5, 6, 1]);
console.log(arr.findElement(5));
