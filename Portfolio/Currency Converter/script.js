let italy = document.querySelector('.italyValue');
let us = document.querySelector('.usValue');
let korea = document.querySelector('.koreaValue');
let japan = document.querySelector('.japanValue');
let china = document.querySelector('.chinaValue');

let input = document.querySelector('input');
input.addEventListener('input', currencyConversion);

function currencyConversion(){

    let valueEntered = Number(input.value);

    let myHeaders = new Headers();
    myHeaders.append("apikey", "GVM2WUAXbHMl8wyIFQVwDcgzEsOsUI6v");
    
    let requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch(`https://api.apilayer.com/fixer/convert?to=EUR&from=GBP&amount=${valueEntered}`, requestOptions)
      .then(response => response.text())
      .then(result => console.log(result.json()))
      .then (italy.innerHTML=result)
      .catch(error => console.log('error', error));

console.log(outcome);

// italy.innerHTML=
// us.innerhtml = 
// korea.innerHTML =
// japan.innerHtml =
// china.innerHTML=
}

