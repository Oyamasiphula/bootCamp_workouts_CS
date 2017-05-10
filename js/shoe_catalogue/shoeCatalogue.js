var optionTemplate = document.querySelector(".options"),
    messageTemplate = document.querySelector(".message"),
    dataListDivAsOutput = document.querySelector(".dataListContainer"),
    messageDivAsOutput = document.querySelector(".messageContainer"),
    searchResultsDiv = document.querySelector(".searchResults"),
    messageOut = document.querySelector("h4.messageOut"),
    dataSearchedTemplate = document.querySelector(".searchedDataSummary"),
    searchButton = document.querySelector(".searchButton"),
    backButtonElement = document.querySelector("#backButton"),
    addStockButtonEl = document.querySelector(".button-secondary"),
    addStockForm = document.querySelector(".addShoes"),
    hideAddStockFormButtEl = document.querySelector(".cancel"),
    SubmAddStockFormButt = document.querySelector(".submit"),
    brand = document.querySelector(".brand"),
    color = document.querySelector(".color"),
    price = document.querySelector(".price"),
    size = document.querySelector(".size"),
    img = document.querySelector(".img"),
    in_stock = document.querySelector(".in_stock"),
    nothingIsFound = document.querySelector(".no_match");

var addStock = function(shoes) {
    shoes.push({
        brand: brand.value,
        color: color.value,
        price: Number(price.value),
        size: Number(size.value),
        img: img.value,
        in_stock: Number(in_stock.value)
    });
    return shoes
}

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
        size: 9,
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
        price: 2200,
        size: 5,
        img: "Lacoste_Shoes_Graduate.jpg",
        in_stock: 4
    }, {
        brand: 'Lacoste',
        color: 'white',
        price: 1800,
        size: 5,
        img: "lacoste_sleepon.JPG",
        in_stock: 14
    },
    {
        brand: 'Lacoste',
        color: 'Fashion red',
        price: 1800,
        size: 9,
        img: "lacoste_driving_shoe.JPG",
        in_stock: 1
    },
    {
        brand: 'Lacoste',
        color: 'grey',
        price: 1400,
        size: 6,
        img: "lacoste_sport_runner-G.JPG",
        in_stock: 7
    },
    {
        brand: 'Lacoste',
        color: 'navy',
        price: 1400,
        size: 6,
        img: "jd_product_list.jpg",
        in_stock: 7
    },
    {
        brand: 'Lacoste',
        color: 'brown',
        price: 1800,
        size: 7,
        img: "000019517-lacoste-endliner-116-black-1.jpg",
        in_stock: 2
    },
    {
        brand: 'Lacoste',
        color: 'white',
        price: 1200,
        size: 9,
        img: "lacoste_sneakers_sport.JPG",
        in_stock: 13
    },
    {
        brand: 'Lacoste',
        color: 'white',
        price: 1250,
        size: 9,
        img: "lacoste-low-tops-sneakers-11147323SH.JPG",
        in_stock: 5
    }
];

var newList = shoes;
function onBrowserLoadEl() {

    var createUniqList = function(list, key) {
        var organizedShoePropColl = [],
            organizedShoePropMap = {};

        for (var i = 0; i < list.length; i++) {
            var obj = list[i];
            var val = obj[key];

            if (organizedShoePropMap[val] === undefined) {
                organizedShoePropMap[val] = val;
                organizedShoePropColl.push({
                    [key]: val
                });
            }
        };
        return organizedShoePropColl;
    }
    var organizedBrandColl = createUniqList(newList, "brand"),
        organizedColorColl = createUniqList(newList, "color"),
        organizedSizeColl = createUniqList(newList, "size");

    var sizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
    var humanReadableSizeAndColorOutput = sizeColorTempHelpersRes({
        brands: organizedBrandColl,
        color: organizedColorColl,
        sizes: organizedSizeColl
    });
    dataListDivAsOutput.innerHTML = humanReadableSizeAndColorOutput;
}
onBrowserLoadEl();


var tableResultTemplate = Handlebars.compile(dataSearchedTemplate.innerHTML);
var selectBrandOpt = document.querySelector(".brandOptions");
var selectColorOpt = document.querySelector(".colorOptions");
var selectSizeOpt = document.querySelector(".sizesOptions");

nothingIsFound.classList.add("hide_cont");

var filterItems = function() {
    var capturedData = [];

    selectedBrandOpt = selectBrandOpt.value;
    selectedColorOpt = selectColorOpt.value;
    selectedSizeOpt = selectSizeOpt.value;


    for (var i = 0; i < newList.length; i++) {
        var color = newList[i].color;
        var brands = newList[i].brand;
        var sizes = newList[i].size;

        if (selectedColorOpt === color && Number(selectedSizeOpt) === sizes) {
            capturedData.push(newList[i]);
        }
    }
    var tableHelpersResult = tableResultTemplate({
        dataSearched: capturedData
    });
    if (capturedData.length === 0) {
        console.log("-------------------", capturedData);
        nothingIsFound.classList.add("showResults");
    }
    searchResultsDiv.innerHTML = tableHelpersResult;
}

var showAddstock = function() {
    addStockForm.classList.toggle("addShoes");
};

var strLink = '/index.html';

var goBackToMain = function() {
    window.location.href = strLink;
}
backButton.addEventListener('click', goBackToMain);
searchButton.addEventListener("click", filterItems)
addStockButtonEl.addEventListener("click", showAddstock);
hideAddStockFormButtEl.addEventListener("click", showAddstock);
SubmAddStockFormButt.addEventListener('click', function(e) {
    e.preventDefault();
    addStock(shoes)
    addStockForm.classList.toggle("addShoes");
    onBrowserLoadEl();
});
