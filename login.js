var arr =[
  {
    'username' : 'pavan',
    'password' : 'kumar'
  }];
  var keys = Object.keys(arr[0]);
  var length = keys.length;
  var dvv = document.getElementById('login');
      for( var m = 0; m < length; m++) {
        var but = document.createElement('BUTTON');
        var butText = document.createTextNode('Submit');
          but.setAttribute('onclick','compare(' + m + ')');
        but.appendChild(butText);
      dvv.appendChild(but);
    }


// function for comparision
function compare(c) {
  var x = document.getElementById('username').value;
  var y = document.getElementById('password').value;
  for(var i = 0; i < arr.length ; i++){
    for(var j = i+1; j < arr.length; j++) {
        console.log(x + "" + y);
      if(arr[i][keys[c]] == x && arr[j][keys[c]] == y){
        console.log(c);
        console.log('sucess');
      }
      else{
        console.log('failure');
      }
    }
  }
}
