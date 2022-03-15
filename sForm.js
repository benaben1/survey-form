function validate(){
   var name1 = document.forms["form"]["names"];
   var age1 = document.forms["form"]["age"];
   var one = document.forms["form"]["one"];
   var two = document.forms["form"]["two"];
   var three = document.forms["form"]["three"];


if (name1.value == ""){
   window.alert("please enter your full name");
   name1.focus();
   return false;}
   alert("successful");

   
if (age1.value == ""){
   window.alert("please enter your age");
   age1.focus();
   return false;}
   alert("successful");

   
if (one.value == ""){
   window.alert("required field");
   gender1.focus();
   return false;}
   alert("successful");

   
   
if (three.value == ""){
   window.alert("required field");
   gender1.focus();
   return false;}
   alert("successful");

   
   
if (two.value == ""){
   window.alert("required field");
   gender1.focus();
   return false;}
   alert("successful");

}
