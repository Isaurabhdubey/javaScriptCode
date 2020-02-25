class Stack {
    constructor() {
        this.data = [];
        this.top = 0;
    }
    push(element) {
        this.data[this.top] = element;
        this.top = this.top + 1;
    }
    length() {
        return this.top;
    }
    peek() {
        return this.data[this.top - 1];
    }
    isEmpty() {
        return this.top === 0;
    }
    pop() {
        if (!this.isEmpty()) {
            this.top = this.top - 1;
            return this.data.pop();
        }
    }
    findByTaskName(taskName) {
        if (!this.isEmpty()) {
            return this.data.filter(element => element.taskName === taskName);
        }
    }
    findTaskByPriority(priority) {
        if (!this.isEmpty()) {
            return this.data.filter(element => element.priority === priority);
        }
    }
    print() {
        var top = this.top - 1;
        while (top >= 0) {
            console.log(this.data[top]);
            top--;
        }
    }
}
let stackList = new Stack();
console.log(stackList);
stackList.push({
	taskName: 'Requirement details screen',
	priority: 'P0'
});
stackList.push({
	taskName: 'Assessment Ui Screen',
	priority: 'P1'
});
stackList.push({
	taskName: 'Quick interview Configration based',
	priority: 'P2'
});
stackList.print();
