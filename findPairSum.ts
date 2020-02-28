/*
  * finding pair sum from sorted number array
*/
class FindPair {
    data: number[];
    leftIndex: number = 0;
    rightIndex: number = 0;
    pairedObj: any = [];
    constructor(item: number[]) {
        this.data = item;
        this.leftIndex = 0;
        this.pairedObj = [];
        this.rightIndex = this.data.length - 1;
    }
    /* 
      *@number //input
      *@boolean //output
     */
    isPairAvailable(sum: number): boolean {
        let tempData = this.data[this.leftIndex] + this.data[this.rightIndex];
        if (this.rightIndex == this.leftIndex) {
            return false;
        }
        if (tempData == sum) {
            return true;
        } else if (tempData > sum) {
            this.rightIndex = this.rightIndex - 1;
            return this.isPairAvailable(sum)
        } else if (tempData < sum) {
            this.leftIndex = this.leftIndex + 1;
            return this.isPairAvailable(sum);
        }
        return false;
    }
    /* 
      *@number //input
      *@any[] //output
     */
    findPariedObject(sum: number): any[] {
        let tempData = this.data[this.leftIndex] + this.data[this.rightIndex];
        if (this.rightIndex == this.leftIndex) {
            return this.pairedObj;
        }
        if (tempData == sum) {
            this.pairedObj.push('(' + this.data[this.leftIndex] + ',' + this.data[this.rightIndex] + ')')
            this.leftIndex = this.leftIndex + 1;
            return this.findPariedObject(sum);
        } else if (tempData > sum) {
            this.rightIndex = this.rightIndex - 1;
            return this.findPariedObject(sum)
        } else if (tempData < sum) {
            this.leftIndex = this.leftIndex + 1;
            return this.findPariedObject(sum);
        }
        return this.pairedObj;
    }
}
let findPairObj = new FindPair([-1, 1, 2, 3, 4, 4, 5, 8, 9, 11]);
console.log(findPairObj.isPairAvailable(8));
console.log(findPairObj.findPariedObject(8));
