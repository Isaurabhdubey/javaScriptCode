function consecutiveSum(num){
    let sum=0, summArr=[];
    for (let index = 1; index < num; index++) {
        sum+=index;
        summArr.push(index);
        if(sum===num) break;
        else if(sum>num) {
            let diff= (sum-num), sliceIndex, newSum =0;
            for (let index2 = 0; index2 < summArr.length; index2++) {
                if(diff>=summArr[index2]) {
                    diff-=summArr[index2];
                } else {
                    newSum +=  summArr[index2];
                    if(sliceIndex==undefined) {
                        sliceIndex=index2;
                    }
                }
            }
            sum = newSum;
            summArr.splice(0, sliceIndex);
        }
        if(sum===num) break;
    };
    return summArr;
}
consecutiveSum(24);//[7, 8, 9]
consecutiveSum(90);//[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
