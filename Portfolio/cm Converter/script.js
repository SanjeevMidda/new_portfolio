let input = document.querySelector('input');
let mm = document.querySelector('.mmValue');
let metres = document.querySelector('.mValue');
let dam = document.querySelector('.dekValue');
let hek = document.querySelector('.hecValue');
let km = document.querySelector('.kmValue');

console.log(input, mm, metres, dam, hek, km);

input.addEventListener('input', update);


function update(){

    let value = input.value;
    
    mm.innerHTML=value*10;
    metres.innerHTML=value/100;
    dam.innerHTML=value/1000;
    hek.innerHTML=value/10000;
    km.innerHTML=value/100000;    

}