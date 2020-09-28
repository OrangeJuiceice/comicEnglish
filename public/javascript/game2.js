var left=document.querySelector('#left')
var right=document.querySelector('#right')
var img1=document.querySelector('img')
var footer=document.querySelector('footer')
var input=document.querySelector('input')
var correct=document.querySelector('#correct')
var wrong=document.querySelector('#wrong')
var submit1=document.querySelector('#usubmit')
var answersheet=['','comics','trap','','moron','','','chum','alarm','','bulb','','','ultimate','grime','','','recipe','','curse','','','','make up for','','owe','','','fine','','']
var tips=document.querySelector('#tips')
console.log(answersheet[1].slice(0,1))

var num=0
var pic=['../images/middle/1.jpg','../images/middle/2.jpg','../images/middle/3.jpg','../images/middle/4.jpg','../images/middle/5.jpg','../images/middle/6.jpg','../images/middle/7.jpg','../images/middle/8.jpg','../images/middle/9.jpg','../images/middle/10.jpg','../images/middle/11.jpg','../images/middle/12.jpg','../images/middle/13.jpg','../images/middle/14.jpg','../images/middle/15.jpg','../images/middle/16.jpg','../images/middle/17.jpg','../images/middle/18.jpg','../images/middle/19.jpg','../images/middle/20.jpg','../images/middle/21.jpg','../images/middle/22.jpg','../images/middle/23.jpg','../images/middle/24.jpg','../images/middle/25.jpg','../images/middle/26.jpg','../images/middle/27.jpg','../images/middle/28.jpg','../images/middle/29.jpg','../images/middle/30.jpg']

function go(){
    correct.style.display="none"
    wrong.style.display="none"
    left.disabled=""
    num+=1;
    if(num===30){
      window.location.href = "/writing"
   }
     img1.setAttribute('src',pic[num])
     if(num===1||num===2||num===4||num===7||num===8||num===10||num===13||num===14||num===17||num===19||num===23||num===25||num===28){
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
if(!(num===1||num===2||num===4||num===7||num===8||num===10||num===13||num===14||num===17||num===19||num===23||num===25||num===28)){
 footer.style.display='none';
 right.disabled=''
 };

     img1.setAttribute('src',pic[num])
}
right.onclick=go
submit1.onclick=function(){
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