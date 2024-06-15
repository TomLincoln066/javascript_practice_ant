// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength
// – replaces the end of str with the ellipsis character "...", to make its length equal to maxlength.
// The result of the function should be the truncated (if needed) string.
// truncate("What I'd like to tell on this topic is:", 20) = "What I'd like to te..."
// truncate("Hi everyone!", 20) = "Hi everyone!"

function truncate(str, maxlength){
    if(str.length>maxlength){
        return str.slice(0,maxlength-3)+"...";

    }
    return str;
}

console.log(truncate("I love your hair so much!", 20));