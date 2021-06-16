// /// 
const wrapper = document.querySelector("#wrapper");
console.log(wrapper.childElementCount);
console.log(wrapper.children);
/////
const children = wrapper.children;
for (let index = 0; index < children.length; index++) {
    console.log(children[index].children);
    console.log(children[index].childElementCount);

};

// console.log(children[1].classList);

////
const amounts = [];
for (let index = 0; index < children.length; index++) {
    const element = children[index];
    const elementList = element.classList;
    const counter = elementList.length;
    amounts.push(counter);
    if (Math.max(amounts) === counter) { console.log({ element, counter }); };

};