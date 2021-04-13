//let fetchUrl = require("fetch").fetchUrl;

const fetchData = require('./src/utils/fetchData');
const wget = require('node-wget');


const url="https://pixabay.com/api/?key=21135246-15ef67ac9b56b957b1cc8a9da&q=puppy&image_type=photo&pretty=true&per_page=3";

fetchData(url)
    .then(data => {
        let images=data.hits;
        images.forEach(element => {
            console.log(element.largeImageURL)
            wget( { url:`${element.largeImageURL}`, dest:'images/', timeout:2000 } );
            //wget(`${element.largeImageURL}`) 
        });
    })