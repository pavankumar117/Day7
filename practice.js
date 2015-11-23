//var x = document.getElementById('mypractice');
var a = '2.57';
//var a = 'text'
var b =parseInt((10+100)*a);
//math.ceil(a);
document.write(b + '\n');
document.write(a);
document.write('\n');
var a = 'text';
var b = (10/3)*(10/'a');
document.write(b);
document.write('value of a');
document.write(a);

var a=0,b=1,c;
for (var i=0;i<20;i++){
  a=b;
  b=a;
  c=a+b;
  document.write(c);
}

var n;
for(i=0;i<20;i++) {
  if (i%10==0){
    document.write('odd');
  }
  else{
    document.write('even');
  }
}
