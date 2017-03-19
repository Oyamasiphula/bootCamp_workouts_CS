var lunchWhere = function(bankBalance){
    if (bankBalance > 4500 ){
        return "Go and get KFC!"
    }
    else if (bankBalance < 4500 && bankBalance > 1500){
        return "Go to PnP!"
    }
    else{
        return "Two minute noodles today!";
    }
};
