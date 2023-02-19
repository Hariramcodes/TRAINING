function oddishorevenish(n){
k=0;
while(n>0){
var k=k+n%10;
n=Math.floor(n/10);
}
if((k%2)===0){
  
console.log("evenish");
}
else{
alert("odd");
}
}
oddishorevenish(12)
