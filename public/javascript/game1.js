var left=document.querySelector('#left')
var right=document.querySelector('#right')
var img1=document.querySelector('img')
var footer=document.querySelector('footer')
var input=document.querySelector('input')

var submit1=document.querySelector('#usubmit')
var correct=document.querySelector('#correct')
var wrong=document.querySelector('#wrong')
var answersheet=['','instead','unusual','ruined','','','same','magic','','Christmas','','blown','','idiot','','sleigh','','','hide-and-seek','','heirs','','nobleman','','orders','','surprise','punishment','','tears']
var tips=document.querySelector('#tips')
console.log(answersheet[1].slice(0,1))

var num=0
var pic=['../images/simple/1.jpg','../images/simple/2.jpg','../images/simple/3.jpg','../images/simple/4.jpg','../images/simple/5.jpg','../images/simple/6.jpg','../images/simple/7.jpg','../images/simple/8.jpg','../images/simple/9.jpg','../images/simple/10.jpg','../images/simple/11.jpg','../images/simple/12.jpg','../images/simple/13.jpg','../images/simple/14.jpg','../images/simple/15.jpg','../images/simple/16.jpg','../images/simple/17.jpg','../images/simple/18.jpg','../images/simple/19.jpg','../images/simple/20.jpg','../images/simple/21.jpg','../images/simple/22.jpg','../images/simple/23.jpg','../images/simple/24.jpg','../images/simple/25.jpg','../images/simple/26.jpg','../images/simple/27.jpg','../images/simple/28.jpg','../images/simple/29.jpg','../images/simple/30.jpg']

function go(){
    correct.style.display="none"
    wrong.style.display="none"
    left.disabled=""
    num+=1;
    if(num===30){
      window.location.href = "/writing"
   }
     img1.setAttribute('src',pic[num])
     if(num===1||num===2||num===3||num===6||num===7||num===9||num===11||num===13||num===15||num===18||num===20||num===22||num===24||num===26||num===27||num===29){
         footer.style.display='block'
         right.disabled='disabled'  
         input.value=''}
         
         else{
            footer.style.display='none';
            right.disabled=''
         }

     } 
     if(num===0){left.disabled="disabled"}
     left.onclick=function(){
        correct.style.display="none"
        wrong.style.display="none"
     right.disable=""
        num-=1;
        if(num===0){left.disabled="disabled"}
if(!(num===1||num===2||num===3||num===6||num===7||num===9||num===11||num===13||num===15||num===18||num===20||num===22||num===24||num===26||num===27||num===30)){
 footer.style.display='none';
 right.disabled=''
 };

     img1.setAttribute('src',pic[num])
}
right.onclick=go
submit1.onclick=function(){
    correct.style.display="none"
    wrong.style.display="none"
 var answer=$('#question').val()
 if(answersheet[num]===answer){
     right.disabled=''
     correct.style.display="inline"
     wrong.style.display="none"

 }else{
    wrong.style.display="inline"
    correct.style.display="none"
 }
}
tips.onmouseover=function(){
var change=answersheet[num].substring(0,1)+'____'
tips.setAttribute('data-original-title',change)
}