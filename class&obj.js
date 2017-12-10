{
  ////基本定义类和生成实例
  class Parent{
    constructor(name='ron'){
      this.name=name;
    }
  }
  let v_parent = new Parent('karen');
  console.log(v_parent);
}

{
  //继承
  class Parent{
    constructor(name='ron'){
      this.name=name;
    }
  }
  class Child extends Parent{

  }
  let child = new Child('rronn');
  console.log(child)
}

{
  //继承
  class Parent{
    constructor(name='ron'){
      this.name=name;
    }
  }
  class Child extends Parent{
    constructor(name='child'){
      super(name);//更新父类中name的值
      this.type='child';
    }
  }
  let child = new Child();
  console.log(child)
}

{
  class Parent{
    constructor(name='ron'){
      this.name=name;
    }
    // 获取属性
    get longName(){
      return 'mk+'+this.name
    }
    //设置属性
    set longName(value){
      this.name=value
    }
  }

  let v= new Parent();
  console.log(v.longName);
  v.longName='hello';//赋值,相当于了进行set操作
  console.log(v.longName);
  console.log(v);
}

{
  //静态方法
  class Parent{
    constructor(name='ron'){
      this.name=name;
      this.type='';
    }

    //静态方法, 不需要实例就能使用
    static log(m){
      console.log('log',m+2)
    }

    //如要使用tell方法, 需要对parent实例化
    tell(){
      console.log('tell');
    }


  }
  // console.log(Parent.log(11));
  let pp=new Parent();//实例化parent类
  pp.tell();//引用非静态tell()方法
  Parent.log(11)
  Parent.type='test';
  console.log(Parent.type);
}
