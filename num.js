
var result='';
var Output='f(x)= ';
var check=0;
function output(){
    Output='f(x)= ';
    result='';
    check=0;
    var input1 = document.getElementById("one").value;
    var input2 = document.getElementById("two").value;
    input1=parseInt(input1);
    input2=parseInt(input2);

    trans(input2,input1);
    makeFunc();
    if(check!=input1){
      Output= '다항식이 존재하지 않습니다. 계산실수가 있는지 확인해주세요.';
    }
    document.getElementById("output").innerText = Output;
  }


function trans(n, k) {
  if(n<=0){return;}
  trans(parseInt(n/k),k);
  if(n%k>=10){
    result+=String.fromCharCode(n%k-10+65);
  }
  else{
    result+=String(n%k);
  }
    return;
}

function makeFunc(){
  var i;
  for(i=0;i<result.length;i++){

    if(result.charCodeAt(i)>=65&&result.charCodeAt(i)<=90){
      Output+=(result.charCodeAt(i)-65+10);
      check+=parseInt(result.charCodeAt(i)-65+10);
    }else{
      Output+=result.charAt(i);
      check+=parseInt(result.charAt(i));
    }

    if(i!=result.length-1){
      Output+="x^"+(result.length-i-1)+"+";
    }
  }
  return; 
}
