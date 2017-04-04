var optionTemplate = document.querySelector(".options");
var messageTemplate = document.querySelector(".message");
var divAsOutput = document.querySelector(".dataListContainer");
var messageOut = document.querySelector("h4.messageOut");

var shoes = [{
        color: 'blue',
        price: 350,
        size: 4,
        in_stock: 5
    },
    {
        color: 'orange',
        price: 275,
        size: 7,
        in_stock: 3
    }
];

var colorColl = [];
var sizesColl = [];
var stockColl = [];

(function() {
    for (var i = 0; i < shoes.length; i++) {

        var color = shoes[i].color;
        var sizes = shoes[i].size;
        var stock = shoes[i].in_stock;

        if (shoes[i].color) {
            colorColl.push(color);
        }
        if (shoes[i].size) {
            sizesColl.push(sizes);
        }
        if (shoes[i].in_stock) {
            stockColl.push(stock);
        }
    }
})();

var SizeColorTempHelpersRes = Handlebars.compile(optionTemplate.innerHTML);
var messageOutResHelperRes  = Handlebars.compile(messageTemplate.innerHTML);

var humanReadableSizeAndColorOutput = SizeColorTempHelpersRes({
   color: colorColl,
   sizes: sizesColl
});

var humanReadableForm = messageOutResHelperRes({
   NoOfShoesAvail: stockColl
});


console.log(humanReadableForm);
divAsOutput.innerHTML = humanReadableSizeAndColorOutput;
messageOut = humanReadableForm;
