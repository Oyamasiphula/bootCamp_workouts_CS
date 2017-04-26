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
    brand = document.querySelector(".brand"),
    color = document.querySelector(".color"),
    price = document.querySelector(".price"),
    size = document.querySelector(".size"),
    img = document.querySelector(".img"),
    in_stock = document.querySelector(".in_stock");


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
        size: 10,
        img: "lacoste-low-tops-sneakers-11147323SH.JPG",
        in_stock: 5
    }
];


var colorColl = [],
    sizesColl = [],
    stockColl = [],
    brandColl = [],
    organizedColorColl = [],
    organizedSizeColl = [],
    organizedBrandColl = [];

(function() {

    for (var i = 0; i < shoes.length; i++) {

        var brands = shoes[i].brand;
        var color = shoes[i].color;
        var sizes = shoes[i].size;
        var prices = shoes[i].price;
        var stock = shoes[i].in_stock;

        if (brands && color && sizes && stock) {
            brandColl.push(brands);
            colorColl.push(color);
            sizesColl.push(sizes);
            stockColl.push(stock);
        }
    }

    for (var x = 0; x < brandColl.length; x++) {
        if (organizedBrandColl.indexOf(brandColl[x]) === -1) {
            organizedBrandColl.push(brandColl[x]);
        }
    }

    for (var k = 0; k < colorColl.length; k++) {
        if (organizedColorColl.indexOf(colorColl[k]) === -1) {
            organizedColorColl.push(colorColl[k]);
            // console.log("This item already exists " + k);
        }
    }
    for (var c = 0; c < sizesColl.length; c++) {
        if (organizedSizeColl.indexOf(sizesColl[c]) === -1) {
            organizedSizeColl.push(sizesColl[c]);
        }
    }
    // here I'm sorting my values from lowest to highest before they're displayed on the browser
    organizedSizeColl.sort(function(a, b) {
        return a - b
    })
    var sizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
    var humanReadableSizeAndColorOutput = sizeColorTempHelpersRes({
        brands: organizedBrandColl,
        color: organizedColorColl,
        sizes: organizedSizeColl
    });
    dataListDivAsOutput.innerHTML = humanReadableSizeAndColorOutput;
})();

var tableResultTemplate = Handlebars.compile(dataSearchedTemplate.innerHTML);
var selectBrandOpt = document.querySelector(".brand");
var selectColorOpt = document.querySelector(".color");
var selectSizeOpt = document.querySelector(".sizes");

var filterItems = function() {
    var capturedData = [];


    for (var i = 0; i < shoes.length; i++) {
        var color = shoes[i].color;
        var brands = shoes[i].brand;
        var sizes = shoes[i].size;


        let selectedBrandOpt = selectBrandOpt[selectBrandOpt.selectedIndex].value;
        console.log(selectedBrandOpt);
        let selectedColorOpt = selectColorOpt[selectColorOpt.selectedIndex].value;
        let selectedSizeOpt = selectSizeOpt[selectSizeOpt.selectedIndex].value;

        if (selectedColorOpt === color && Number(selectedSizeOpt) === sizes) {
            capturedData.push(shoes[i]);
        }
    }
    var tableHelpersResult = tableResultTemplate({
        dataSearched: capturedData
    });
    if (capturedData.length === 0) {
        return searchResultsDiv.innerHTML = "<h2 align='center'>Nothing Found!</h2>";
    }
    searchResultsDiv.innerHTML = tableHelpersResult;
}

var count = 1;

var showAddstock = function() {
  console.log(count++);
    if (count%2 === 0) {
      addStockForm.classList.remove("addShoes");
    }
    else {
      addStockForm.classList.add("addShoes");
    };
};
searchButton.addEventListener("click", filterItems)
var strLink = 'file:///home/oyama/projects/Codex_Repo/bootCamp_workouts_CS/index.html';
var goBackToMain = function() {
    window.location.href = strLink;
}
addStockButtonEl.addEventListener("click",showAddstock);
backButton.addEventListener('click', goBackToMain);
