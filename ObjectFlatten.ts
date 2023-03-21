class ObjectFlatten {
      data: any;
      constructor(data: any) {
            this.data = data;
      }
      private flatten(acc: any, obj: any, parentName: string): any { 
            Object.keys(obj).forEach((key) => {
                  let propertyName = parentName ? parentName + '.' + key : key;
                  if (typeof obj[key] == 'object') {
                        this.flatten(acc, obj[key], propertyName);
                  } else {
                        acc[propertyName] = obj[key];
                  }
            });
            return acc;
      }
      public get() { 
            return this.flatten({}, this.data, '');
      }
}

const objRef = new ObjectFlatten({
    a: 10,
    b: {
        ba: 20,
        bb: 333,
        bc: 2
    },
    c: 30,
    d: {
      da: 50
    },
    e: {
        f: {
            g: {
                h: 40
            }
        }
    }
});
console.log(objRef.get())
