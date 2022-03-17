function palindrome(str) {
  const oldStr = str
    .toLowerCase()
    .replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, "")
    .replace(/\s/g, "");
  const newStr = oldStr.replace(/\s/g, "").split("").reverse().join("");

  if (oldStr === newStr) {
    // return console.log("true", oldStr, "===", newStr);
    return true;
  }
  // return console.log("false", oldStr, "===", newStr);
  return false;
}

palindrome("eye");
