/*
  * find first non repeating character from string
*/
class NonRepeatingCharacter {
    data: string;
    charCountObj: any = {};
    //initializing
    constructor(item: string) {
        this.data = item;
    }
    firstNonRepeatingChar(): string {
        for (let i = 0; i < this.data.length; i++) {
            if (this.charCountObj[this.data.charAt(i)]) {
                this.charCountObj[this.data.charAt(i)] = this.charCountObj[this.data.charAt(i)] + 1;
            } else {
                this.charCountObj[this.data.charAt(i)] = 1;
            }
        }
        for (let j = 0; j < this.data.length; j++) {
            if (this.charCountObj[this.data.charAt(j)] === 1) {
                return `First Non repeating character is ${this.data.charAt(j)}`;
            }
        }
        return `No Repeating character found`;
    }
}
let findPairObj = new NonRepeatingCharacter('aaabccd');
console.log(findPairObj.firstNonRepeatingChar());
