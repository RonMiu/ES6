{
  let list= new Set();
  list.add(5);
  list.add(7);
  console.log(list.size);
  console.log(list);
  console.log(Object.prototype.toString(list));
}

{
  let arr=[1,2,3,4,5,6,11,'1',{aa:'111'}];
  let s=new Set(arr);
  console.log(s);
  s.add({a:'a'})
}
//
// {
//   let arr=[1,2,3,4,5,6,11,'1',{aa:'111'}];
//   let s = new Set(arr);
//   for(let key of s.keys()){
//     console.log(key);
//   }
//   for(let value of s.values()){
//     console.log(value);
//   }
//   for(let value of s){
//     console.log(value);
//   }
//   s.forEach(function(i){
//     console.log(i);
//   })
// }

{

  let a={name:"qqq",age:18};
  let wl=new WeakSet();
  wl.add(a);
  console.log(wl);
}

{
  let map=new Map();
  let arr=['acc','asd',12,3];
  map.set(arr, 456);
  console.log(map);
}

{
  let map = new Map([['a',123],['b',456]]);
  map.set({name:"ron"},789);
  console.log(map);

  for(let item of map){
    console.log(item);
    // for(let i in item){
    //   console.log(item[i]);
    // }
  }
}

{
  //map与数组对比
  //数据结构横向对比, 增,删,查,改
  let map=new Map();
  let arr =new Array();
  //增
  map.set('a',1);
  map.set('b',2);
  arr.push({a:1,b:2});
  arr.push({a:2,b:10});
  arr.push({c:12});
  console.log(map,arr);
  //查:查询
  let map_exist=map.has('a');
  let arr_exist=arr.find(item=>item.a===2)
  console.log(map_exist,arr_exist);
  //改
  map.set('a',10);
  console.log(map);
  arr.forEach(item=>item.a?item.a=0:'');
  console.log(arr);
  //删除
  map.delete('a');
  let index=arr.findIndex(item=>item.b)
  arr.splice(index,1);
  console.log(arr);
}

{
  let set =new Set();
  let arr= new Array();

  set.add({a:10});
  console.log(set);
}
