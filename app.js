 console.log(localStorage.getItem("inputs"));
      if (localStorage.getItem("inputs") === null) {
        console.log("null");
      } else {
 console.log("hai");
}
// through jquery


    // $(".test").click(function () {
    //     let a = $("#title").text();
    //     console.log(a);
    //     localStorage.setItem("title", a);
    //     let i = localStorage.getItem("title");
    //     console.log(i);
    //     console.log("hello ");
    //   });  



// ending jqueryyy
// const todoInput = document.querySelector(".form-control");
// const todoButton = document.querySelector(".btn");


//Event Listeners


var test;
adddata();
// function adddata(){
// let data = document.getElementById('title').value;
// console.log(data);
// localStorage.setItem("books",data)
// } 

    function adddata(){
       var i = [];
        let data = document.getElementById('title').value;
        console.log(data);
         i=localStorage.getItem("inputs");
        i.push(data);
        localStorage.setItem("inputs",i);
     
    
    }
   
    function datadisplay(){

    }

   // $(".test1").click(function () {
      //   let a = $(".2").text();
      //   console.log(a);
      //   let i = localStorage.getItem("cart");
      //   i.push(a);
      //   localStorage.setItem("cart", i);
      // });
      // }



















