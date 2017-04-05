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
    },{
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
    }
];


(function() {

  var colorColl = [];
  var sizesColl = [];
  var stockColl = [];

    for (var i = 0; i < shoes.length; i++) {

        var color = shoes[i].color;
        var sizes = shoes[i].size;
        var prices = shoes[i].price;
        var stock = shoes[i].in_stock;

        if (shoes[i].color) {
            colorColl.push(color);
        }
        if (shoes[i].size) {
            sizesColl.push(sizes);
        }
    }
    var sizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
    var messageOutResHelperRes = Handlebars.compile(messageTemplate.innerHTML);

    var humanReadableSizeAndColorOutput = sizeColorTempHelpersRes({
      color: colorColl,
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
}

var searchButton = document.querySelector(".searchButton");
searchButton.addEventListener("click", filterItems)
