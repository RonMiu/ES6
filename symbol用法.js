{
  //声明
  let a1=Symbol();
  let a2=Symbol();
  console.log(a1===a2);
  let a3=Symbol.for('a');
  let a4=Symbol.for('a');
  console.log(a3===a4);
}

{
  let a1=Symbol.for('abc');
  let o={
    [a1]:'132',
    abc:345,
    c:456
  }
  console.log(o);
  for(let [key,value] of Object.entries(o)){
    console.log(key,value);
  }
  console.log( Object.getOwnPropertySymbols(o));
  Object.getOwnPropertySymbols(o).forEach(function(item){
    console.log(o[item],item);
  })

  Reflect.ownKeys(o).forEach(function(item,value){
    console.log(item,o[item],value);
  })
}
