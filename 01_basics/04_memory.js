//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// stack(primitive) heap(non primitive)

let element1 = "Arpit Das"
let anotherElement = element1

anotherElement = " I dont know"
console.log(element1);
console.log(anotherElement);


let userOne = {
    id : 45666,
    mail : "i dont knoe"
}

let anotherUser = userOne

anotherUser.mail = "arpitdas716@gmail.com"

console.log(userOne.mail);
console.log(anotherUser.mail);

