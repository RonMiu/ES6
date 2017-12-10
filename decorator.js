// {
//   let readonly =function(target,name,desc){
//     desc.writable=false;
//     console.log('desc.value',desc.value);
//     console.log('target',target);
//     return desc
//   };
//
//   class Test{
//     @readonly
//     time(){
//       return '2017-11-11'
//     }
//   }
//   let test = new Test();
//   // test.time=function(){
//   //   console.log('time');
//   // }
//   console.log(test.time());
// }
//
// {
//   let typename=function(target,name,desc){
//     target.myname='hello';
//   }
//   @typename
//   class Test{
//     constructor(){
//       this.o={
//         a:'a'
//       }
//     }
//   }
//   let test=new Test();
//   console.log(Test.myname);
//   console.log(test.o);
//
//   //第三方库修饰器的js库: core-decorators: npm install core-decorators
// }

{
  let log=(type)=>{
    return function(target,name,desc){
      console.log(target)
      console.log(desc.value)
      let src_method=desc.value;
      desc.value=(...arg)=>{

        src_method.apply(target,arg);
        console.info(`log ${type}`)
      }
    }
  }

  class AD{
    @log('show')
    show(){
      console.info('ad is show')
    }
    @log('click')
    click(){
      console.info('ad is click')
    }
  }
  let ad =new AD();
  ad.show();
  ad.click();
}
