
interface TextData {
      [propName: string]: string[];
}

/**
 * steps:
 *    1. flatten the object with al sstring will be there in one array
 *          1.1 ['ram', 'mahesh', 'city', 'shyam', 'ramesh', 'city1', 'balram', 'mahesh', 'city1', 'ram', 'dinesh', 'city3']
 *    2. get all the occurence index of the string
 *          2.1 [0, 9]
 *    3. Itterate through data with key
 *          3.1 allIndex array is enpty then leave the loop this condition will check everytime
 *          3.1 find the between cound value so that if the value is present againest the selected key it will push the key
 *          3.3 once we found the index is present between the current key
 *                3.3.1 push into allOccuredData
 *                3.3.2 delete the first index of the allIndex
 */
class SearchAllOccurrence {
      data: TextData;
      constructor(data: TextData) {
            this.data = data;
      }

      private getFlattenData() {
            const allData = Object.values(this.data),
                  flattenData = allData.flat(2);
            return flattenData;
      }

      public searchTest(filterText: string): void {
            const flattenData = this.getFlattenData(),
                  allIndex = flattenData.reduce((acc: [], val: string, index: number) => {
                        if (val === filterText) {
                              acc.push(index);
                        }
                        return acc;
                  }, []),
                  allOccuredData = [];
            let count = -1;
            if (allIndex.length) {
                  for (let key in this.data) {
                        if (!allIndex.length) break;
                        const betweenCount = count + this.data[key].length;
                        if (count < allIndex[0] && betweenCount >= allIndex[0]) {
                              allOccuredData.push(key);
                              allIndex.shift();
                        }
                        count += this.data[key].length;
                  }
            }

            console.log(allOccuredData);
      }
}

const refObj = new SearchAllOccurrence({
      a: ['ram', 'mahesh', 'city'],
      b: ['shyam', 'ramesh', 'city1'],
      c: ['balram', 'mahesh', 'city1'],
      d: ['ram', 'dinesh', 'city3']
});
refObj.searchTest('ram');
