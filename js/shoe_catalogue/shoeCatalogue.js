var optionTemplate = document.querySelector(".options");
var messageTemplate = document.querySelector(".message");
var dataListDivAsOutput = document.querySelector(".dataListContainer");
var messageDivAsOutput = document.querySelector(".messageContainer");
var searchResultsDiv = document.querySelector(".searchResults");
var messageOut = document.querySelector("h4.messageOut");
var dataSearchedTemplate = document.querySelector(".searchedDataSummary");

var shoes = [{
        brand: 'Lacoste',
        color: 'white',
        price: 1200,
        size: 4,
        img: "lacoste_arrow_sportif.JPG",
        in_stock: 5
    }, {
        brand: 'Lacoste',
        color: 'white',
        price: 800,
        size: 6,
        img: "lacoste_tommy.JPG",
        in_stock: 18
    },
    {
        brand: 'Nike',
        color: 'brown',
        price: 2300,
        size: 7,
        img: "nike_sneaker_boot.JPG",
        in_stock: 3
    },
    {
        brand: 'Lacoste',
        color: 'black',
        price: 1350,
        size: 3,
        img: "lacoste_challenger.JPG",
        in_stock: 17
    },
    {
        brand: 'Lacoste',
        color: 'black',
        price: 1350,
        size: 3,
        img: "lacoste_challenger.JPG",
        in_stock: 17
    },{
        brand: 'Lacoste',
        color: 'black',
        price: 1350,
        size: 3,
        img: "lacoste_challenger.JPG",
        in_stock: 17
    },
    {
        brand: 'Lacoste',
        color: 'Fashion red',
        price: 1800,
        size: 9,
        img: "lacoste_driving_shoe.JPG",
        in_stock: 1
    }
];


var colorColl = [];
var sizesColl = [];
var stockColl = [];
var brandColl = [];
var organizedColorColl = [];
var organizedBrandColl = [];

(function() {

    for (var i = 0; i < shoes.length; i++) {

        var brands = shoes[i].brand;
        var color = shoes[i].color;
        var sizes = shoes[i].size;
        var prices = shoes[i].price;
        var stock = shoes[i].in_stock;

        if (brands) {
          brandColl.push(brands);
        }
        if (color) {
            colorColl.push(color);
        }
        if (sizes) {
            sizesColl.push(sizes);
        }
        if (stock) {
            stockColl.push(stock);
        }
    }
    for (var x = 0; x < brandColl.length; x++) {

      if(organizedBrandColl.indexOf(brandColl[x]) === -1){
        organizedBrandColl.push(brandColl[x]);
      }
    }

    for (var k = 0; k < colorColl.length; k++) {
        if (organizedColorColl.indexOf(colorColl[k]) === -1) {
            organizedColorColl.push(colorColl[k]);
            // console.log("This item already exists " + k);
        }
    }

    var sizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
    var humanReadableSizeAndColorOutput = sizeColorTempHelpersRes({
        brands: organizedBrandColl,
        color: organizedColorColl,
        sizes: sizesColl
    });
    dataListDivAsOutput.innerHTML = humanReadableSizeAndColorOutput;
})();

var tableResultTemplate = Handlebars.compile(dataSearchedTemplate.innerHTML);
var selectColorOpt = document.querySelector(".color");
var selectSizeOpt = document.querySelector(".sizes");

var filterItems = function() {
    var capturedData = [];

    let selectedColorOpt = selectColorOpt[selectColorOpt.selectedIndex].value;
    let selectedSizeOpt = selectSizeOpt[selectSizeOpt.selectedIndex].value;

    for (var i = 0; i < shoes.length; i++) {
        var color = shoes[i].color;
        var brands = shoes[i].brand;
        var sizes = shoes[i].size;

        if (selectedColorOpt === color && Number(selectedSizeOpt) === sizes) {
            capturedData.push(shoes[i]);
        }
    }
    console.log(capturedData,capturedData.length);
    var tableHelpersResult = tableResultTemplate({
        dataSearched: capturedData
    });
    if (capturedData.length === 0) {
      return searchResultsDiv.innerHTML = "<h2 align='center'>Nothing Found!</h2>";
    }
    searchResultsDiv.innerHTML = tableHelpersResult;
}

var searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", filterItems)
