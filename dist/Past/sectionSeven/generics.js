"use strict";
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergedObj = merge({ name: 'jesse' }, { age: 38 });
console.log('merged: ', mergedObj.name);
function countAndDescribe(element) {
    let descriptionText = 'Got no Value. ';
    if (element.length > 0) {
        descriptionText = 'Got ' + element.length + ' Element(s)';
    }
    return [element, descriptionText];
}
console.log(countAndDescribe('Hi There'));
function extractAndConvert(obj, key) {
    return 'Value: ' + obj[key];
}
extractAndConvert({ name: 'jesse' }, 'name');
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem('jesse');
textStorage.addItem('gert');
textStorage.removeItem('gert');
console.log(textStorage.getItems());
function createCourseGoal(title, description, date) {
    let courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = date;
    return courseGoal;
}
const names = ['jesse', 'gerty'];
//# sourceMappingURL=generics.js.map