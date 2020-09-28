var left=document.querySelector('#left')
var right=document.querySelector('#right')
var img1=document.querySelector('img')
var footer=document.querySelector('footer')
var input=document.querySelector('input')
var submit1=document.querySelector('#usubmit')
var correct=document.querySelector('#correct')
var submit1=document.querySelector('#usubmit')
var answersheet=['','','peel','','','lost','','awkward','','gone','','','','outrun','','toss','stall','','','let go','','','','race','','another','','','equal','','shovelful',"",""]
var tips=document.querySelector('#tips')
console.log(answersheet[1].slice(0,1))

var num=0
var pic=['../images/hard/1.jpg','../images/hard/2.jpg','../images/hard/3.jpg','../images/hard/4.jpg','../images/hard/5.jpg','../images/hard/6.jpg','../images/hard/7.jpg','../images/hard/8.jpg','../images/hard/9.jpg','../images/hard/10.jpg','../images/hard/11.jpg','../images/hard/12.jpg','../images/hard/13.jpg','../images/hard/14.jpg','../images/hard/15.jpg','../images/hard/16.jpg','../images/hard/17.jpg','../images/hard/18.jpg','../images/hard/19.jpg','../images/hard/20.jpg','../images/hard/21.jpg','../images/hard/22.jpg','../images/hard/23.jpg','../images/hard/24.jpg','../images/hard/25.jpg','../images/hard/26.jpg','../images/hard/27.jpg','../images/hard/28.jpg','../images/hard/29.jpg','../images/hard/30.jpg','../images/hard/31.jpg','../images/hard/32.jpg']

function go(){
    correct.style.display="none"
    wrong.style.display="none"
    left.disabled=""
    num+=1;
    if(num===32){
      window.location.href = "/writing"
   }
     img1.setAttribute('src',pic[num])
     if(num===2||num===5||num===7||num===9||num===13||num===15||num===16||num===19||num===23||num===25||num===28||num===30){
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
if(!(num===2||num===5||num===7||num===9||num===13||num===15||num===16||num===19||num===23||num===25||num===28||num===30)){
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