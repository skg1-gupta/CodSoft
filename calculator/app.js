 let button=document.querySelector(".NUM");
let input=document.querySelector("#input");
let one=document.querySelector("#one");
one.addEventListener("click",function(){
    input.value=input.value+one.innerText;
} )
let two=document.querySelector("#two");
two.addEventListener("click",function(){
    input.value=input.value+two.innerText;
} )
let three=document.querySelector("#three");
three.addEventListener("click",function(){
    input.value=input.value+three.innerText;
} )

let four=document.querySelector("#four");
four.addEventListener("click",function(){
    input.value=input.value+four.innerText;
} )

let five=document.querySelector("#five");
five.addEventListener("click",function(){
    input.value=input.value+five.innerText;
} )
let six=document.querySelector("#six");
six.addEventListener("click",function(){
    input.value=input.value+six.innerText;
} )

let seven=document.querySelector("#seven");
seven.addEventListener("click",function(){
    input.value=input.value+seven.innerText;
} )

let eight=document.querySelector("#eight");
eight.addEventListener("click",function(){
    input.value=input.value+eight.innerText;
} )

let nine=document.querySelector("#nine");
nine.addEventListener("click",function(){
    input.value=input.value+nine.innerText;
} )

let plus=document.querySelector("#plus");
plus.addEventListener("click",function(){
    input.value=input.value+plus.innerText;
} )

let devi=document.querySelector("#dev");
devi.addEventListener("click",function(){
    input.value=input.value+"/";
} );
let sub=document.querySelector("#sub");
sub.addEventListener("click",function(){
    input.value=input.value+sub.innerText;
})

let equl=document.querySelector("#equl");
equl.addEventListener("click",function(){
    input.value=eval(input.value);
})

let dzero=document.querySelector("#dzero");
dzero.addEventListener("click",function(){
    input.value=input.value+dzero.innerText;
} )

let zero=document.querySelector("#zero");
zero.addEventListener("click",function(){
    input.value=input.value+zero.innerText;
} );
let mul=document.querySelector("#multi");
mul.addEventListener("click",function(){
    input.value=input.value+mul.innerText;
} )

let ac=document.querySelector("#ac");
ac.addEventListener("click",function(){
    input.value=' '
} )
let per=document.querySelector("#per");
per.addEventListener("click",function(){
    input.value=input.value+per.innerText;
} );

let del=document.querySelector("#del");
del.addEventListener("click",function(){
    input.value=input.value.slice(0,-1);
} );
let point=document.querySelector("#point");
point.addEventListener("click",function(){
    input.value=input.value+point.innerText;
} )
