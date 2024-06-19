let count = 1;
let winner='';
const restart=document.querySelector(".restart")
const box=document.querySelector(".box")
const result=document.querySelector(".result")
const rc11 = document.querySelector(".rc11");
const rc12 = document.querySelector(".rc12");
const rc13 = document.querySelector(".rc13");
const rc21 = document.querySelector(".rc21");
const rc22 = document.querySelector(".rc22");
const rc23 = document.querySelector(".rc23");
const rc31 = document.querySelector(".rc31");
const rc32 = document.querySelector(".rc32");
const rc33 = document.querySelector(".rc33");
const x1 = document.querySelector("#x1");
const o1 = document.querySelector("#o1");
const x2 = document.querySelector("#x2");
const o2 = document.querySelector("#o2");
const x3 = document.querySelector("#x3");
const o3 = document.querySelector("#o3");
const x4 = document.querySelector("#x4");
const o4 = document.querySelector("#o4");
const x5 = document.querySelector("#x5");
const o5 = document.querySelector("#o5");
const x6 = document.querySelector("#x6");
const o6 = document.querySelector("#o6");
const x7 = document.querySelector("#x7");
const o7 = document.querySelector("#o7");
const x8 = document.querySelector("#x8");
const o8 = document.querySelector("#o8");
const x9 = document.querySelector("#x9");
const o9 = document.querySelector("#o9");
const ins=document.querySelector(".ins");
const inst=document.querySelector(".instructions")
ins.addEventListener("click",()=>{
  inst.style.display="block"
})
ins.addEventListener("dblclick",()=>{
  inst.style.display="none"
})
const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
turn(count)
restart.addEventListener("click",()=>{
    window.location.reload();
})
rc11.addEventListener("click", () => {
  if (count % 2 === 1 && board[0][0]=='') {
    x1.style.display = "block";
    board[0][0]='X'
  } else if(count%2===0 && board[0][0]==''){
    o1.style.display = "block";
    board[0][0]='O'
  }
  count++;
  checkwinner()


});

rc12.addEventListener("click", () => {
  if (count % 2 === 1 && board[0][1]=='') {
    x2.style.display = "block";
    board[0][1]='X'

  } else if(count%2===0 && board[0][1]=='') {
    o2.style.display = "block";
    board[0][1]='O'

  }
  count++;
  checkwinner()


});

rc13.addEventListener("click", () => {
  if (count % 2 === 1&& board[0][2]=='') {
    x3.style.display = "block";
    board[0][2]='X'

  } else if(count%2===0 && board[0][2]==''){
    o3.style.display = "block";
    board[0][2]='O'


  }
  count++;
  checkwinner()

});

rc21.addEventListener("click", () => {
  if (count % 2 === 1&& board[1][0]=='') {
    x4.style.display = "block";
    board[1][0]='X'

  } else if(count%2===0 && board[1][0]==''){
    o4.style.display = "block";
    board[1][0]='O'

  }
  count++;
  checkwinner()


});

rc22.addEventListener("click", () => {
  if (count % 2 === 1&& board[1][1]=='') {
    x5.style.display = "block";
    board[1][1]='X'

  } else if(count%2===0 && board[1][1]==''){
    o5.style.display = "block";
    board[1][1]='O'

  }
  count++;
  checkwinner()


});

rc23.addEventListener("click", () => {
  if (count % 2 === 1&& board[1][2]=='') {
    x6.style.display = "block";
    board[1][2]='X'

  } else if(count%2===0 && board[1][2]==''){
    o6.style.display = "block";
    board[1][2]='O'

  }
  count++;
  checkwinner()


});

rc31.addEventListener("click", () => {
  if (count % 2 === 1&& board[2][0]=='') {
    x7.style.display = "block";
    board[2][0]='X'

  } else if(count%2===0 && board[2][0]==''){
    o7.style.display = "block";
    board[2][0]='O'

  }
  count++;
  checkwinner()


});

rc32.addEventListener("click", () => {
  if (count % 2 === 1&& board[2][1]=='') {
    x8.style.display = "block";
    board[2][1]='X'

  } else if(count%2===0 && board[2][1]==''){
    o8.style.display = "block";
    board[2][1]='O'

  }
  count++;
  checkwinner()


});

rc33.addEventListener("click", () => {
  if (count % 2 === 1&& board[2][2]=='') {
    x9.style.display = "block";
    board[2][2]='X'

  } else if(count%2===0 && board[2][2]==''){
    o9.style.display = "block";
    board[2][2]='O'

  }
  count++;
  checkwinner()

});

function checkwinner(){
if(board[0][0]===board[0][1] && board[0][0]===board[0][2] && board[0][0]!=''){
    winner=board[0][0]
    disable(winner)
}
if(board[0][0]===board[1][0] && board[0][0]===board[2][0] && board[0][0]!=''){
    winner=board[0][0]
    disable(winner)
}
if(board[0][0]===board[1][1] && board[0][0]===board[2][2] && board[0][0]!=''){
    winner=board[0][0]
    disable(winner)
}
if(board[2][0]===board[2][1] && board[2][0]===board[2][2] && board[2][0]!=''){
    winner=board[2][0]
    disable(winner)
}
if(board[0][2]===board[1][2] && board[0][2]===board[2][2] && board[0][2]!=''){
    winner=board[0][2]
    disable(winner)
}
if(board[0][2]===board[1][1] && board[0][2]===board[2][0] && board[0][2]!=''){
    winner=board[0][2]
    disable(winner)
}
if(board[1][0]===board[1][1] && board[1][0]===board[1][2] && board[1][0]!=''){
    winner=board[1][0]
    disable(winner)
}
if(board[0][1]===board[1][1] && board[0][1]===board[2][1] && board[0][1]!=''){
    winner=board[0][1]
    disable(winner)
}
if(count===10){
    box.style.display="none"
    result.innerText=`draw match`

}
if(winner=='' && count!=10){
    turn(count)

}
}


function disable(winner){
    box.style.display="none"
    result.innerText=`the winner is ${winner}`
    count--
}
function turn(count){
    if(count%2==1){
        result.innerText=`player 1 it's your turn`
    }
    else{
        result.innerText=`player 2 it's your turn`
    }
    }