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

   
    
    function eval (){
      
      var correct = correct1 + correct2 + correct3

    if ($("#Question1").prop("checked", true) && $("#Question2").prop("checked", true) && $("#Question3").prop("checked", true)){
      console.log(correct)
      }
    
    
    var radioValue1 = $("input[name='q1']:checked"). val()
      if (radioValue1 === 1) {
        var correct1 = 0
        correct1  ++
        } 
    

    var radioValue2 = $("input[name='q2']:checked"). val(); 
      if (radioValue2 === 0) {
        var correct2 = 0
         correct2  ++
       } 
   
    var radioValue3 = $("input[name='q3']:checked"). val();
        if (radioValue3 === 3) {
        var correct3 = 0
        correct3 ++
       }
       
   }
   
    eval();
 })



  

  


