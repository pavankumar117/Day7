var username = 'pavan';
var password = 'kumar';

var x = document.getElementById('username').value;
var y = document.getElementById('password').value;

function compare() {
  console.log(x + "" + y);
  //console.log(username + "" + password);
if(username == x && password == y) {
  console.log('correct username');
}
else{
  console.log('wrong username or password');
}
}
