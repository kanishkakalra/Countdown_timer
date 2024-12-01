const endDate = "31 December 2024 11:59 pm"
const day = document.getElementsByClassName('days')[0]
const hour = document.getElementsByClassName('hours')[0]
const min = document.getElementsByClassName('mins')[0]
const sec = document.getElementsByClassName('sec')[0]

function Timer(){
    const end = new Date(endDate);
    const now = new Date();
    const diff =(end-now)/1000;
   
    const days  = Math.floor(diff /3600 /24);
    const ghnta = Math.floor((diff %(3600 *24))/3600)
    const minta = Math.floor((diff %3600)/60)
     const second = Math.floor(diff%60) 
    
     day.innerHTML = days;  
    hour.innerHTML = ghnta;
    min.innerHTML = minta;
    sec.innerHTML = second;

    
    setTimeout(Timer, 1000);
}
Timer();