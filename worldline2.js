//palindrome quntion 

const palindrome = (str) => {
    const isPalindrome = str.split('').reverse().join ('');
    console.log(str===isPalindrome);

}
palindrome("hannah");