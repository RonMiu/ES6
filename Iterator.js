{
  let arr=['hello','world'];
  for(let k of arr){
    console.log(k);
  }
  let map=arr[Symbol.iterator]();
  console.log(map.next());
  console.log(map.next());
  console.log(map.next());
}


{
  let o={
    start:[1,2,3],
    end:[4,5,6],
    [Symbol.iterator](){
      let self=this;
      let index=0;
      let arr=self.start.concat(self.end);
      console.log(arr);
      let length=arr.length;
      return {
        next(){
          if(index<length){
            return {
              value:arr[index++],
              done:false
            }
          }else{
            return {
              value:arr[index++],
              done:true
            }
          }
        }
      }
    }
  }
  console.log(o);
  for(let key of o){
    console.log(key);
  }
}

{
  let arr=['hhhh','aaaa'];
  for(let value of arr){
    console.log(value);
  }
}
