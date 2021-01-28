// kilometer to convert meter
function kilometerToMeter(kilometer) {
    if (kilometer < 0 || typeof kilometer == 'string') {
        return 'kilometer cannot be negative or string';
    } else {
        var meter = kilometer * 1000;
        return meter;
    }
}


// shopping budget calculator
function budgetCalculator(watch, phone, laptop) {
    if (watch < 0 || phone < 0 || laptop < 0) {
        return 'quantity cannot be negative';
    } else {
        var watchPrice = 50;
        var phonePrice = 100;
        var laptopPrice = 500;
        var totalBudget = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
        return totalBudget;
    }
}


// total cost of staying at the hotel
function hotelCost(days) {
    var firstTenDay
    var secondTenDay
    var thirdTenDay
    var totalCost=0
    if (days < 0) {
        return 'day cannot be negative,it is a positive number';
    } else if (days <= 10) {
        totalCost = days * 100;
        return totalCost;
    } else if (days <= 20) {
        firstTenDay = 10 * 100;
        secondTenDay = (days - 10) * 80;
        totalCost = firstTenDay + secondTenDay;
        return totalCost;
    } else if (days > 20) {
        firstTenDay = 10 * 100;
        secondTenDay = 10 * 80;
        thirdTenDay = (days - 20) * 50;
        totalCost = firstTenDay + secondTenDay + thirdTenDay;
        return totalCost;
    }
}


// function to find the biggest name
function megaFriend(names) {
    for(var i=0;i<names.length;i++){
        if(typeof names[i]== 'number'){
            return 'please provide valid names'
        }
    }
    if (names.length == 0) {
        return 'friends names not available value';
    } else {
        var largestName = names[0];
        for (var i = 0; i < names.length; i++) {
            if (largestName.length < names[i].length) {
                largestName = names[i];
            }
        }
        return largestName;
    }
}
