$(document).ready(function gamePlay() {
   var qTime = 30
   var Int  
   Timing()
   decrease()
    function Timing (){
   
      Int = setInterval(decrease, 1000)

    }

    function decrease(){
       $('#timer').html("<h2>" + qTime + "</h2>");
      if (qTime > 0){
        qTime  --;
       
     }

       else if (qTime === 0){
        location.reload();
        clearInterval(Int)
      }

    }

    var correct = 0 

    function eval (){

    
      
    
    $("#Question1 input[type='radio']"). click(function(){
    var radioValue1 = $("input[name='q1']:checked"). val()
      if (radioValue1 === 1) {
        correct ++ 
        } 
    })

      $("#Question2 input[type='radio']"). click(function(){
    var radioValue2 = $("input[name='q2']:checked"). val(); 
      if (radioValue2 === 0) {
         correct ++ 
       } 
       })

        $("#Question3 input[type='radio']"). click(function(){
    var radioValue3 = $("input[name='q3']:checked"). val();
        if (radioValue3 === 3) {
        correct ++ 
       }

       if ($("#Question1").prop("checked", true) && $("#Question2").prop("checked", true) && $("#Question3").prop("checked", true)){
          console.log(correct)
          }
      }) 
   }
   
    eval();
 })



  

  


