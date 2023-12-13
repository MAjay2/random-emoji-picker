let fighters = ["🦊","🐺","🦍","🦧","🐅","🐆","🐎 ","🐀 ","🐇","🦅"]

let characEl = document.getElementById("charac")
let characterEl = document.getElementById("character")
let startFight = document.getElementById("start")
let selectEl =document.getElementById("select")








 startFight.addEventListener("click", function(){
    for(let i = 0; i<fighters.length; i++){


     let fighteRandom=fighters[Math.floor(Math.random()*fighters.length)]

        characEl.innerHTML=fighteRandom
    
       
         
    }
    
   


 })

 selectEl.addEventListener("click", function(){

    for(let i = 0; i<fighters.length; i++ ){
         fighteRandom = fighters[Math.floor(Math.random()*fighters.length)]
        characterEl.innerHTML=fighteRandom

    }

 })




