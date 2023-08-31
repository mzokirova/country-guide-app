'use strict';

const searchBtn = document.getElementById('search-btn');
const countryInput = document.getElementById('country-input');
const result = document.getElementById('result');

searchBtn.addEventListener('click', ()=>{
    let countryName = countryInput.value;
    let apiUrl = `https://restcountries.com/v3.1/name/${countryName}`;
    console.log(apiUrl);

    fetch(apiUrl)
        .then((Response) => Response.json()).
        then((data) => {
            console.log(data);
            console.log(data[0].capital[0]);
            console.log(data[0].flags.svg);
            console.log(data[0].region);


            result.innerHTML =
                `<img src="${data[0].flags.svg}" class="flag-img"/>
                <h1>${data[0].name.common}</h1>
                <div class="wrapper">
                    <div class="body-wrapper">
                        <h3>Capital: </h3>
                        <span>${data[0].capital[0]}</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="body-wrapper">
                        <h3>Continents: </h3>
                        <span>${data[0].continents[0]}</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="body-wrapper">
                        <h3>Population: </h3>
                        <span>${data[0].population}</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="body-wrapper">
                        <h3>Currency: </h3>
                        <span>${data[0].currencies[Object.keys(data[0].currencies)].name}-${Object.keys(data[0].currencies)[0]}</span>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="body-wrapper">
                        <h3>Common Languages: </h3>
                        <span>${Object.values(data[0].languages).toString().split(",").join(", ")}</span>
                    </div>
                </div>
                `
            
        }).catch(() => {
            if (countryName == 0) {
                result.innerHTML = `<h4>Input field cannot be empty</h4>`;
            }
            else {
                result.innerHTML=`<h4>Please enter valid country name</h4>`;
            }
        })


})
