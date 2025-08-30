const accountId = 2005456
let accountEmail = "Imad@.com"
var accountCity = "Kolkata"
accountName = "Arpit"
let myName;
// accountId = 3  // not allowed
console.log(accountId);

accountEmail = "nobody"
console.table([accountCity,accountEmail,accountId, accountName, myName])


// prefer not to write in var because of issues in block scope and functional scope