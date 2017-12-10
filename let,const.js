function test(){
  let a =1;
  var b =2;
  for(let i=0;i<3;i++){
    console.log(i);
  }
}

function constTest(){
  const P=3.14159;
  // P=P+1;
  const k={
    a:1
  }
  k.b=2;
  console.log(P);
  // console.log(k)
}
// constTest();
