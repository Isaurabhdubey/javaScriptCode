interface formData {
  email: string;
  country: string;
  state: string;
}
interface filterOption {
  [propName: string]: string;
}
class CheckValidFilterCondition {
  currentData: formData;
  filterOption: filterOption;
  predefinedValueObj: any = {
    email: {
      In: ["yahoo.com", "gmail.com"],
      NotIn: ["outlook.com"]
    },
    country: {
      In: ["India", "USA"],
      NotIn: ["PAK"]
    },
    state: {
      In: ["Karnataka", "California"],
      NotIn: ["Tamil", "Texas"]
    }
  };

  constructor(currentData: formData, filterOption: filterOption) {
    this.currentData = currentData;
    this.filterOption = filterOption;
  }

  private getEmailDomainByEmailId(emailId: string): string {
    const rx = /^.*@(\S+)$/,
      match = rx.exec(emailId);
    return !!match ? match[1] : '';
  }

  private isValid(domains: any, currentValue: string, option: any): boolean {
    const index = domains[option].indexOf(currentValue);
    return this.optionConditionVerify(index, option);
  }

  private optionConditionVerify(index: number, option: string): boolean {
    return option === 'In' ?
      index > -1 ? true : false
      : index > -1 ? false : true
  }

  isValidData(): boolean {
    let emailDomain = this.getEmailDomainByEmailId(this.currentData.email);
    return this.isValid(this.predefinedValueObj['email'], emailDomain, this.filterOption.email)
      && this.isValid(this.predefinedValueObj['country'], this.currentData.country, this.filterOption.country)
      && this.isValid(this.predefinedValueObj['state'], this.currentData.state, this.filterOption.state);
  }
}

let objRef = new CheckValidFilterCondition({
    email: "abc.d@gmail.com",
    country: "India",
    state: "Karnataka"
}, {
    email: 'In',
    country: 'In',
    state: 'In'
});
console.log(objRef.isValidData());
