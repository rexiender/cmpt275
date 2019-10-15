let name="rex"
console.log(name);
let interestRate=0.3;
console.log(interestRate);


function calculatePercentage(grade,total,percent){
  var g1=document.getElementById(grade);
  var t1=document.getElementById(total);

  let p1=g1.value/t1.value;
  console.log(2312312312);
  document.getElementById(percent).innerHTML =p1.toFixed(3);


  return percent;
}

function calculateMean(percent1,percent2,percent3,percent4){

  //var percent1 = calculatePercentage('grade1')
  var g1 = document.getElementById('g1');
  var g2 = document.getElementById('g2');
  var g3 = document.getElementById('g3');
  var g4 = document.getElementById('g4');

  var t1 = document.getElementById('t1');
  var t2 = document.getElementById('t2');
  var t3 = document.getElementById('t3');
  var t4 = document.getElementById('t4');

  let result=(g1.value/t1.value+g2.value/t2.value+g3.value/t3.value+g4.value/t4.value)/4;

  //document.getElementById(result).innerHTML = result;
  console.log(result);

  document.getElementById("result").innerHTML =result.toFixed(2);

  //console.log("hello world");
  //var g1=document.getElementByName("g1");
  //var t1=document.getElementByName("t1");
  //document.getElementByName("o1").innerHTML=g1/t1;
};

function calculateWeighted(){

  var g1 = document.getElementById('g1');
  var g2 = document.getElementById('g2');
  var g3 = document.getElementById('g3');
  var g4 = document.getElementById('g4');
  var t1 = document.getElementById('t1');
  var t2 = document.getElementById('t2');
  var t3 = document.getElementById('t3');
  var t4 = document.getElementById('t4');
  var w1 = document.getElementById('W1');
  var w2 = document.getElementById('W2');
  var w3 = document.getElementById('W3');
  var w4 = document.getElementById('W4');

  var p1=g1.value/t1.value*w1.value;
  var p2=g2.value/t2.value*w2.value;
  var p3=g3.value/t3.value*w3.value;
  var p4=g4.value/t4.value*w4.value;

  let result=(p1+p2+p3+p4)/(Number(w1.value)+Number(w2.value)+Number(w3.value)+Number(w4.value));
  document.getElementById("result").innerHTML =result.toFixed(2);
  //document.getElementById(result).innerHTML = result;

  console.log(result);


};
console.log(calculateWeighted(0.7,10,0.25,5,1.0,3,0.625,0));
