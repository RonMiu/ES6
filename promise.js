// {
//   //基本定义
//   let ajax=function(callback){
//     console.log('执行');
//     setTimeout(function(){
//       callback&&callback.call()//判断是否存在回调,存在的话执行callback函数
//     },1000)
//   }
//   ajax(function(){
//     console.log('timeout1');
//   })
// }
//
// {
//   let ajax=function(){
//     console.log('执行2');
//     return new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve();
//       },2000)
//     })
//   }
//   ajax().then(
//     //resolve参数未下面方法
//     function(){
//     console.log('promise','timeout2');
//   })
// }

// {
//   var p1 = new Promise(function(resolve, reject) {
//     resolve('Success1');
//   });
//   p1
//   .then(function(value) {
//     console.log(value); // "成功!"
//     // return Promise.reject('oh, no!');
//     return new Promise(function(resolve,reject){
//       reject('Success2');
//     })
//   })
//   .catch(function(e) {
//     console.log(e); // "oh, no!"
//   })
//   .then(function() {
//     console.log('after a catch the chain is restored');
//   }, function() {
//     console.log('Not fired due to the catch');
//   })
//   .catch(function(e){
//     console.log(e);
//   });
// }

{
  let ajax=function(){
    console.log('执行3-1');
    return new Promise(function(resolve,reject){
      setTimeout(function(){
        resolve();
      },1000)
    })
  }
  ajax()
    .then(
      //resolve参数未下面方法
      function(){
      console.log('timeout2');
      return new Promise(function(resolve,reject){
        setTimeout(function(){
          resolve()
        },1000)
      })
    }
  )
    .then(function(){
      console.log('timeout3');
    })
}

{
  //所有图片都加载完再执行then
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src=src;
      img.onclick=function(){
        console.log('1');
      }
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showimg(imgs){
    console.log(imgs);
    imgs.forEach(function(img){
      document.body.appendChild(img);
    })
  }

  Promise.all([
    loadImg('http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'),
    loadImg('http://img06.tooopen.com/images/20170106/tooopen_sy_195890124133.jpg'),
    loadImg('http://img06.tooopen.com/images/20170106/tooopen_sy_195880644198.jpg')
  ]).then(showimg)

}

{
  //哪个图最快加载完就添加谁到页面
  function loadImg(src){
    return new Promise((resolve,reject)=>{
      let img = document.createElement('img');
      img.src=src;
      img.onclick=function(){
        console.log('1');
      }
      img.onload=function(){
        resolve(img)
      }
      img.onerror=function(err){
        reject(err);
      }
    })
  }

  function showimg(imgs){
    //imgs参数为loadImg的resolve()里的参数,即为img
    let p =document.createElement('p');
    p.appendChild(imgs);
    document.body.appendChild(p);
    console.log(imgs);
  }

  Promise.race([
    loadImg('http://pic04.ishuhui.com/cartoon/book-1/1/879-9498/00.png'),
    loadImg('http://img06.tooopen.com/images/20170106/tooopen_sy_195890124133.jpg'),
    loadImg('http://img06.tooopen.com/images/20170106/tooopen_sy_195880644198.jpg')
  ]).then(showimg)

}
