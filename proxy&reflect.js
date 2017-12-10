// {
//   let o={
//     time:'2017-09-23',
//     name:'ron',
//     _r:123
//   };
//   //创建代理商
//   let monitor = new Proxy(o,{
//     //拦截对象属性的读取
//     get(target,key){
//       console.log(key)
//       return target[key].replace('2017', '2018')
//     },
//
//     //拦截对象设置属性
//     set(target,key,value){
//       return target[key]=value
//       // if(key==='name'){
//       //   return target[key]=value
//       // }else{
//       //   return target[key]
//       // }
//     },
//
//     has(target,key){
//       if(key==="name"){
//         return target[key]
//       }else{
//         return false
//       }
//     },
//
//     deleteProperty(target, key){
//       if(key.indexOf('_')>-1){
//         delete target[key];
//         return true
//       }else{
//         return target[key]
//       }
//     },
//
//   });
//   monitor.name='Ron&Karen';
//   monitor.age="18";
//   // console.log(monitor);
//   // console.log(monitor.name);
//   // console.log('time' in monitor);
//   // delete monitor._r;
//   console.log(monitor);
//   console.log(o);
//   console.log(Reflect.get(monitor,'time'));
// }
//
// {
//   let o={
//     time:'2017-09-23',
//     name:'ron',
//     _r:123
//   };
//   console.log(o);
//   console.log(Reflect.get(o,"time"));
//   Reflect.set(o,'age', 19);
//   console.log(o);
// }

{
  function valid(target, validator){
    // target对象:
    // person{
    //   name:'',
    //   age:''
    // }
    // const personVal={
    //   name(val){
    //     return typeof val==='string'
    //   },
    //   age(val){
    //     return typeof val==='number' && val>18
    //   }
    // }
    return new Proxy(target,{
      _validator:validator,
      set(target,key,value,proxy){
        if(target.hasOwnProperty(key)){
          //this是_validator对象
          console.log(this);
          let va = this._validator[key];
          if(!!va(value)){
            return Reflect.set(target,key,value,proxy)
          }else{
            throw Error(`不能设置${key}到${value}`)
          }
        }else{
          throw Error(`${key}不存在`)
        }
      }
    })
  }

  const personVal={
    name(val){
      return typeof val==='string'
    },
    age(val){
      return typeof val==='number' && val>18
    }
  }

  class Person{
    constructor(name,age){
      this.name=name;
      this.age=age;
      return valid(this, personVal)
    }
  }

  const person = new Person('Ron',18);
  console.log(person);
  person.age=48;
  console.log(person);
}
