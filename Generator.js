// {
//   //Generator函数
//   let tell=function* (){
//     yield 'a';
//     yield 'b';
//     return 'c'
//   }
//   let k=tell();
//   console.log(k.next());
//   console.log(k.next());
//   console.log(k.next());
//   console.log(k.next());
// }

// {
//   let o={};
//   o[Symbol.iterator]=function* (){
//     yield 1;
//     yield 2;
//     yield 3;
//   }
//   for(let i of o){
//     console.log(i);
//   }
// }

{
  let state=function*(){
    while(true){
      yield 'A';
      yield 'B';
      yield 'C';
    }
  }
  let status = state();
  console.log(status.next());
  console.log(status.next().value);
  console.log(status.next());
  console.log(status.next().value);
  console.log(status.next());
  console.log(status.next().value);
  console.log(status.next());
  console.log(status.next().value);
  console.log(status.next());
  console.log(status.next().value);
  console.log(status.next());
  console.log(status.next().value);

}

{
  //抽奖功能
  let draw=function(count){
    console.log(`剩余${count}次`);
  }

  let residue =function*(count){
    console.log(`可抽奖${count}次`);
    while(count>0){
      count--;
      yield draw(count)
    }
  }

  let start=residue(5);
  let btn=document.createElement('button');
  btn.id='start';
  btn.textContent='抽奖';
  document.body.appendChild(btn);
  document.getElementById('start').addEventListener('click',function(){
    start.next();
  },false)
}

{
  //长轮询?
  let ajax=function*(){
    yield new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve({
          code:0
        });
      },1000)
    })
  }

  let pull=function(){
    let generator = ajax();
    let step=generator.next();//step有两个属性, value,done
    console.log(step);
    //step.value是yield 返回的值
    step.value
    .then(function(d){
      if(d.code!=0){
        setTimeout(function(){
          console.log('wait');
          pull();
        },2000)
      }else{
        console.log(d);
      }
    })
  }
  pull()
}
