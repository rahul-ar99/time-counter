 function decrease(){
     var num = document.getElementById("count");
     console.log(typeof(num.innerHTML))

     if (num.innerHTML > 1){
         num.innerHTML -= 1
     }

 }
 function increase(){
     var num = document.getElementById("count");
     console.log(num.innerHTML)
     num.innerHTML -= -1
 }
 function reset(){
     let num = document.getElementById("count");
     num.innerHTML =0
    
 }


 function start(){
     var num = document.getElementById("count");
     if (num.innerHTML <= 0){
         alert("Countdown is finished")
     }
     else{
         setTimeout(start,1000)
         num.innerHTML -= 1
     }
 }

// console.log("hello world");
// console.log(document.getElementById('count').innerText)
// console.log(document.getElementById('count').innerText); 
