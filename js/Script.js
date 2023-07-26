const button = document.getElementByTagName("button")[0];
const username = document.querySelector("ussername");
const email = document.querySelector("email");
const password = document.querySelector("password");
const errorBox=document.querySelector(".errrorBox")
const ALPHABETS="abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_ALPHABETS=ALPHABETS.toUpperCase();

button.onClick = function () {
  const usernameValue = username.value;
  const emailValue=email.value;
  const passwordvalue=password.value;
  //validation
  if (username!="" && emailVAlue!=="" && passwordValue!=" "){
    console.log(please  make sure to input all the fields);
    return;
  }
  if(passwordValue.length<=10){
    console.log("password must be more than 1o characters long...")
    return;
  }
  //consolling the vvalue to console
  console.log({usernameValue,emailValue,passwordValue});
  //resetting input fields after submit
 username.value="";
  email.value="";
  password.value="";
  //on sucessful validation
  
};
function containsUppercase(input){
    for(let x of UPPERCASE_ALPHABETS{
        if (input.includes(x)){
return true;

        }
   
      }
      return false;
}
button.addEventListener("click",function(){});


