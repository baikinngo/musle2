'use strict';
{
 const timer = document.getElementById('timer');
 const timer2 = document.getElementById('timer2');
 const miri = document.getElementById('miri');
 const start = document.getElementById('start');
 const stop = document.getElementById('stop');
 const reset = document.getElementById('reset');
 
 let startTime;
 let timeoutId;
 let elapsedTime=0;

 function countUp(){
     const d =new Date(Date.now() - startTime + elapsedTime);
      const h =String(d.getUTCHours()).padStart(2,'0');
      const m =String(d.getMinutes()).padStart(2,'0');
      const s =String(d.getSeconds()).padStart(2,'0');
      const ms = String(d.getMilliseconds()).padStart(3, '0');
        timer.textContent =`${h}:${m}:${s}`;
        timer2.textContent =`.${ms}`;
      timeoutId=setTimeout(()=>{
         countUp();
     },10);
 }
  
  
function setButtonStateInitial(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.add('inactive');
}
function setButtonStateRunning(){
    start.classList.add('inactive');
    stop.classList.remove('inactive');
    reset.classList.add('inactive');
}
function setButtonStateStopped(){
    start.classList.remove('inactive');
    stop.classList.add('inactive');
    reset.classList.remove('inactive');
}

setButtonStateInitial();

start.addEventListener('click',()=>{
    if(start.classList.contains('inactive')=== true){
        return;
    }
    setButtonStateRunning();
  startTime = Date.now();
  countUp();
});

stop.addEventListener('click',()=>{
    if(stop.classList.contains('inactive')=== true){
        return;
    }
    setButtonStateStopped();
  clearTimeout(timeoutId);
  elapsedTime += Date.now() - startTime;
});

reset.addEventListener('click',()=>{
    if(reset.classList.contains('inactive')=== true){
        return;
    }
    setButtonStateInitial();
  timer.textContent='00:00:00';
  timer2.textContent='.000';
  elapsedTime = 0;
});



const today = new Date();
let year = today.getFullYear();
let month = today.getMonth();

   function getCalendarHead(){
       const dates = [];
       const d = new Date(year , month , 0 ).getDate();
       const n = new Date(year , month , 1 ).getDay();
       for(let i= 0; i<n;i++){
          dates.unshift({
              date:d-i,
              isToday:false,
              isDisabled:true,
          });
       }
       return dates;
   };


   function getCalendarBody(){
       const dates =[];
       const lastDate =new Date(year,month +1 , 0).getDate();
      
       for(let i=1; i<= lastDate; i++){
           dates.push({
               date:i,
               isToday: false,
               isDisabled:false,
           });
       }
        
       if(year===today.getFullYear() && month === today.getMonth()){
        dates[today.getDate()-1].isToday = true;
        
       }

       return dates;
   }


    function getCalendarTail(){
        const dates = [];
        const lastDay = new Date(year,month +1,0).getDay();
        for(let i = 1; i<7 - lastDay;i++){
            dates.push({
                date:i,
                isToday:false,
                isDisabled:true,
            });

        }
        return dates;
    }

 function clearCalendar(){
    const tbody =document.querySelector('tbody');

    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
 }
  
  function renderTitle(){
    const title = `${year}/${String(month + 1).padStart(2, '0')}`;
    document.getElementById('title').textContent = title;
  }

   function renderWeeks(){
    const dates = [
        ...getCalendarHead(),
        ...getCalendarBody(),
        ...getCalendarTail(),
      ];
    const weeks=[];
    const weeksCount = dates.length / 7;
    for(let i =0; i< weeksCount;i++){
        weeks.push(dates.splice(0,7));
    }    
    weeks.forEach(week =>{
        const tr =document.createElement('tr');
        week.forEach(date =>{
            const td =document.createElement('td');
        
            td.textContent =date.date;
            if(date.isToday){
                td.classList.add('today');
            }
            if(date.isDisabled){
                td.classList.add('disabled');
            }

            tr.appendChild(td);
        })
        document.querySelector('tbody').appendChild(tr);
    });
   }

function createCalendar(){
    clearCalendar();
    renderTitle();
    renderWeeks();

}

document.getElementById('prev').addEventListener('click', () =>{
    month--;
    if(month<0){
        year--;
        month = 11;
    }
    createCalendar();
});

document.getElementById('next').addEventListener('click', () =>{
    month++;
    if(month>11){
        year++;
        month = 0;
    }
    createCalendar();
});

document.getElementById('today').addEventListener('click', () =>{
  year= today.getFullYear();
month= today.getMonth();
    createCalendar();
});



createCalendar();
  
   }