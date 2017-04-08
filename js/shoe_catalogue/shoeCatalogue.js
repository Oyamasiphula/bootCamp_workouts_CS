var optionTemplate = document.querySelector(".options");
var messageTemplate = document.querySelector(".message");
var dataListDivAsOutput = document.querySelector(".dataListContainer");
var messageDivAsOutput = document.querySelector(".messageContainer");
var searchResultsDiv = document.querySelector(".searchResults");
var messageOut = document.querySelector("h4.messageOut");
var dataSearchedTemplate = document.querySelector(".searchedDataSummary");

var shoes = [{
        brand: 'Nike',
        color: 'blue',
        price: 350,
        size: 4,
        in_stock: 5
    }, {
        brand: 'Puma',
        color: 'blue',
        price: 350,
        size: 8,
        in_stock: 18
    },
    {
        brand: 'Adidas',
        color: 'orange',
        price: 275,
        size: 7,
        in_stock: 3
    },
    {
        brand: 'Tissoni',
        color: 'Brown',
        price: 275,
        size: 3,
        in_stock: 17
    },
    {
        brand: 'Lacoste',
        color: 'Fashion blue',
        price: 275,
        size: 9,
        in_stock: 1
    }
];


var colorMap = {};
var colorColl = [];
var sizesColl = [];
var stockColl = [];
var organizedColorColl = [];

(function() {

    for (var i = 0; i < shoes.length; i++) {

        var color = shoes[i].color;
        var sizes = shoes[i].size;
        var prices = shoes[i].price;
        var stock = shoes[i].in_stock;

        if (color) {
            colorColl.push(shoes[i].color);
        }
        if (shoes[i].size) {
            sizesColl.push(sizes);
        }
        if (shoes[i].stock) {
            stockColl.push(stock);
        }
    }
    for (var k = 0; k < colorColl.length; k++) {
        if (organizedColorColl.indexOf(colorColl[k]) === -1) {
            organizedColorColl.push(colorColl[k]);
            console.log("This item already exists " + k);
        }
    }

    var sizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
    var messageOutResHelperRes = Handlebars.compile(messageTemplate.innerHTML);

    var humanReadableSizeAndColorOutput = sizeColorTempHelpersRes({
        color: organizedColorColl,
        sizes: sizesColl
    });

    var humanReadableForm = messageOutResHelperRes({
        NoOfShoesAvail: stockColl
    });

    dataListDivAsOutput.innerHTML = humanReadableSizeAndColorOutput;
    messageDivAsOutput.innerHTML = humanReadableForm;
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
    var writeTableHelpersResult = tableResultTemplate({
        dataSearched: capturedData
    });
    searchResultsDiv.innerHTML = writeTableHelpersResult;
    if (capturedData.length === 0) {

    }
}

var searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", filterItems)
