/* all non-alphanumeric characters (punctuation, spaces and symbols) are removed
 and the string is turned into lower case in order to check for palindromes. */ 
function checkPalindrome(){
    
    const input_string = document.querySelector(".input_string").value;
    const output_string = document.querySelector(".answer_container");
    const string = input_string.replace(/[\W+\s]/g, "").toLowerCase();
    const s = string.split("").reverse().join("")
  
    if(s === string){ 
       output_string.innerHTML = "Yes! That's a Palindrome."
    } else {
       output_string.innerHTML = "Nah! That's not a Palindrome."
    }
}
/* Checks for click events on the 'Check' button */
document.querySelector(".check_string").addEventListener("click", checkPalindrome)