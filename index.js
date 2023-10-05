
//creatting multiple bubbles;

function makebubble()
{
    var clutter = "";

for(i=1;i<=60;i++)
{
      var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#pbtm").innerHTML = clutter;
   
}

makebubble() ;

/*creatng timer*/

var timer = 60;
  function runTimer() 
  {
    var timerint =  setInterval(function()  {
        
        if(timer > 0)
        {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over !<h1>`;
        }
        
    }, 1000);
  }
  runTimer();

  // creating hit  
  var hitrn = 0;
   function hiti()
   {
       hitrn = Math.floor(Math.random()*10);
       document.querySelector("#hitval").textContent = hitrn;
   }
   
   hiti();

   //creating score

    var score = 0 ;
    function increasescore()
    {
        score  +=  10;
        document.querySelector("#scoreval").textContent = score;
    } 
    
    document.querySelector("#pbtm").addEventListener("click" ,function(dets)
    {
           var  clickrendum = Number(dets.target.textContent);
           if(clickrendum === hitrn)
           {
             increasescore();  
             makebubble();
             hiti(); 
           }
    }); 