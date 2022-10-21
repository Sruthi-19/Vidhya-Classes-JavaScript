// EXECUTION CONTEXT WITH TIMEOUT AND NESTED FUNCTIONS
setTimeout(()=>{
    window.alert("Iam timeout");
},0);


function abc(){
    window.alert(a);
    var a="Hi";
}
abc();

function abc(v3){console.log(v3*2);}
function func1(){
  let v1=10;
  let v2=20;
  let v3=v1+v2;
  console.log(v3);

  abc(v3);
}
func1();

let name1="Sruthi";
let age=20;

console.log(name1 +" "+age);