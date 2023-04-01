function determinePasswordValidation(password) {
  let validateLength = checkForCorrectLength(password);
  let validateSymbols = checkForOnlyLettersAndDigits(password);
  let validateDigitCount = checkForTwoDigits(password);

  return printValidators(validateLength, validateSymbols, validateDigitCount);

  function checkForCorrectLength(password) {
    if (password.length > 5 && password.length < 11) {
      return true;
    } else {
      return false;
    }
  }

  function checkForOnlyLettersAndDigits(password) {
    let flag = false;
    for (let i = 0; i < password.length; i++) {
      flag = false;
      let symbol = password[i];
      let symbolInCharCode = symbol.charCodeAt(0);
      if (symbolInCharCode > 47 && symbolInCharCode < 58) {
        flag = true;
      } else if (symbolInCharCode > 64 && symbolInCharCode < 91) {
        flag = true;
      } else if (symbolInCharCode > 96 && symbolInCharCode < 123) {
        flag = true;
      }
if(!flag){
    break;
}


    }
    if (!flag) {
      return false;
    }

    return true;
  }

  function checkForTwoDigits(password) {
    let digitCounter = 0;
    for (let i = 0; i < password.length; i++) {
      let symbol = password[i];
      let symbolInCharCode = symbol.charCodeAt(0)
      if (symbolInCharCode > 47 && symbolInCharCode < 58) {
        digitCounter++;
      }
    }
    if (digitCounter >= 2) {
      return true;
    }

    return false;
  }
  function printValidators(a, b, c) {
    if (!a) {
      console.log("Password must be between 6 and 10 characters");
    }
    if (!b) {
      console.log("Password must consist only of letters and digits");
    }
    if (!c) {
      console.log("Password must have at least 2 digits");
    }

    if (a && b && c) {
      console.log("Password is valid");
    }
  }
}
determinePasswordValidation('Pa$s$s');
