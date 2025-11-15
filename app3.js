let gameseq=[];
let userseq=[];
let btns =["yellow","red","purple","green"]

let h2= document.querySelector("h2");
let started = false;
let level=0;

document.addEventListener("keypress",function(){
if(started==false){
    console.log("game started");
    started= true;

    setTimeout(levelup(),1000);
}
});

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
      btn.classList.remove("flash");
    },250);
}

function levelup(){
  userseq=[];
  level++;
  h2.innerText = `level ${level}`;

  let ranidx = Math.floor(Math.random()*3);
  let ranclr = btns[ranidx];
  let ranbtn=document.querySelector(`.${ranclr}`);
  gameseq.push(ranclr);
  console.log(gameseq);
  btnflash(ranbtn);
};
function checkans(idx){
  if(userseq[idx]===gameseq[idx]){
     if(userseq.length==gameseq.length){
      setTimeout(levelup(),1000);
     }
  }else{
    h2.innerHTML=`game over !! your score was <b>${level}</b> <br>start again`;
    document.querySelector("body").style.backgroundColor="red";
    setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white";
    },150);
    reset();
  }
}
function btnpress() {
  let btn = this;
  btnflash(btn);
  userclr =btn.getAttribute("id");
  userseq.push(userclr);
  checkans(userseq.length-1);
}
let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
  btn.addEventListener("click",btnpress);
}
function reset(){
  started = false;
  gameseq=[];
  userseq=[];
  level=0;
}