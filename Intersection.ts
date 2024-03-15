function Intersection(nums1: number[], nums2: number[]): number[] {
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    const finalArr:number[]=[],
    selectedArrayName: string = nums1.length>=nums2.length ? 'nums1': 'nums2',
    obj: any = new Set(selectedArrayName === 'nums1' ? nums2 :nums1);
    (selectedArrayName === 'nums1' ? nums1 :nums2).forEach((val)=> {
        obj.has(val) && (finalArr.push(val));
    })
    return finalArr;
};

console.log(Intersection([1,2,3], [2, 3,4]));