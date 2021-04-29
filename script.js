function passByValue() {
    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
    document.write("before calling pass by value: num1="+a+" , &nbsp &nbsp num2="+b+ "<br>");
    pbv(a,b);
    document.write("\n after calling pass by value: num1="+a+" , &nbsp &nbsp num2="+b+ "<br>");
  }

  function pbv(a,b)
  {
    console.log("Before Swapping"); 
    console.log("VALUE1 =" + a +" VALUE2 =" +b); 
      let temp=a;
      a=b;
      b=temp;

    console.log("After Swapping "); 
    console.log("VALUE1 =" + a +" VALUE2 =" +b); 
    document.write("\n inside pass by value function: num1="+a+" ,&nbsp &nbsp num2="+b+ "<br>");
    
  }



  function passByRef()
  {
      var obj = { 
          c : document.getElementById("num3").value ,
          d : document.getElementById("num4").value
      }
      document.write("before calling pass by reference: num3="+obj.c+" , &nbsp &nbsp num4="+obj.d+ "<br>");
      pbr(obj);
      document.write("after calling pass by reference: num3="+obj.c+" , &nbsp &nbsp num4="+obj.d+ "<br>");
  }
  function pbr(obj)
  {
      obj.temp=obj.c;
      obj.c=obj.d;
      obj.d=obj.temp;
      document.write("inside pass by reference function: num3="+obj.c+" , &nbsp &nbsp num4="+obj.d+ "<br>");
  }