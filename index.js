function validatePassword(str1, str2){
    let valid = false;

    if(str1.length >= 8 && str2.length >= 8){
        let hasUpper = false, hasLower = false, hasNum = false;

        for(let i = 0; i < str1.length; i++){
            if(str1.charCodeAt(i) >= 48 && str1.charCodeAt(i) <= 57){
                hasNum = true;
            } else if(str1.charCodeAt(i) >= 65 && str1.charCodeAt(i) <= 90){
                hasUpper = true;
            } else if(str1.charCodeAt(i) >= 97 && str1.charCodeAt(i) <= 122){
                hasLower = true;
            }
        }

        if(hasNum && hasUpper && hasLower && str1 === str2){
            valid = true;
        }
    }

    return valid;
}

function reverse(str){
    let newString = [];

    for(let i = str.length-1; i >= 0; i--){
        newString.push(str[i]);
    }

    return newString.join('');
}

function storePassword(name, pass1, pass2){
    if(validatePassword(pass1, pass2)){
        return {name: name, newpassword: reverse(pass1)};
    }
    return {name: name, newpassword: pass1};
}

console.log(validatePassword("Hello1234", "Hello1234"));
console.log(reverse("test"));
console.log(storePassword("John", "Pass1234", "Pass1234"));
console.log(storePassword("John", "Pass123", "Pass12345"));