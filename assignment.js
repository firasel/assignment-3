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
        var total = (watch * watchPrice) + (phone * phonePrice) + (laptop * laptopPrice);
        return total;
    }
}

// total cost of staying at the hotel
function hotelCost(day) {
    if (day < 0) {
        return 'day cannot be negative,it is a positive number';
    } else if (day <= 10) {
        var totalCost = day * 100;
        return totalCost;
    } else if (day <= 20) {
        var firstCost = 10 * 100;
        var secondCost = (day - 10) * 80;
        var totalCost = firstCost + secondCost;
        return totalCost;
    } else if (day > 20) {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var thirdCost = (day - 20) * 50;
        var totalCost = firstCost + secondCost + thirdCost;
        return totalCost;
    }
}

// function to find the biggest name
function megaFriend(arr) {
    if (arr.length == 0) {
        return 'friends array not available value';
    } else {
        var bigName = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (bigName.length < arr[i].length) {
                bigName = arr[i];
            }
        }
        return bigName;
    }
}
