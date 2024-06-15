//Write a function checkEmailId(str) that returns true if str contains '@' and ‘.’, otherwise false. Make sure
// '@' must come before '.' and there must be some characters between '@' and '.'
// The function must be case-insensitive

function checkEmailID(str){
    const regex = /@.+?\./i;
    return regex.test(str)
}

console.log(checkEmailID("example@email.com")); // true
console.log(checkEmailID("example@Emailcom"));  // false (no '.')
console.log(checkEmailID("exampleemail.com"));  // false (no '@')
console.log(checkEmailID("example@.com"));      // false (no characters between '@' and '.')
console.log(checkEmailID("example@e.mail.com"));// true