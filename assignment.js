//https://github.com/Rashadul-Islam/javascript



// solution of problem 1

function kilometerToMeter(kilometer) {
    //condition for checking valid input
    if (kilometer > 0) {
        var meter;
        meter = kilometer * 1000; //calculation for converting kilometer to meter
        return meter;
    } else {
        return 'Invalid Input';
    }
}

var result1;
result1 = kilometerToMeter(5); //passing value to parameter
console.log(result1);




//solution of problem 2


function budgetCalculator(watch, mobile, laptop) {
    //condition for checking valid input
    if (watch >= 0 && mobile >= 0 && laptop >= 0) {
        var watchPrice = watch * 50; //total watch price
        var mobilePrice = mobile * 100; //total mobile price
        var laptopPrice = laptop * 500; //total laptop price
        var total = watchPrice + mobilePrice + laptopPrice;
        return total;
    } else {
        return 'Invalid Input';
    }
}

var result2;
result2 = budgetCalculator(2, 3, 5);
console.log(result2);




// solution of problem 3


function hotelCost(days) {
    //condition for checking valid input days
    if (days > 0) {
        var costForFirst10Days; //variables for counting days and cost
        var remainDaysInSecond;
        var costForSecond10Days;
        var remainThirdDays;
        var costForThirdDays;
        var total;

        //cost calculation if the input between 1 to 10 days
        if (days <= 10) {
            costForFirst10Days = days * 100;
            return costForFirst10Days;
        }

        //cost calculation if the input between 1 to 20 days
        else if (days <= 20) {
            costForFirst10Days = 10 * 100;
            remainDaysInSecond = days - 10; //subtract total days with frist 10 days
            costForSecond10Days = remainDaysInSecond * 80;
            total = costForFirst10Days + costForSecond10Days;
            return total;
        }

        //cost calculation if the input greater than 20 days
        else {
            costForFirst10Days = 10 * 100;
            costForSecond10Days = 10 * 80;
            remainThirdDays = days - 20; //subtract total days with addition of frist 10 days and second 10 days
            costForThirdDays = remainThirdDays * 50;
            total = costForFirst10Days + costForSecond10Days + costForThirdDays;
            return total;
        }
    } else {
        return 'Invalid Input';
    }
}
var result3;
result3 = hotelCost(22);
console.log(result3);




//solution of problem 4


function megaFriend(friendName) {
    var count = 0; //variable for storing total number of string
    var maximumLength = friendName[0]; //taking a temporary value for comparing with another string

    //loop for checking total number of string in array
    for (var j = 0; j < friendName.length; j++) {
        if (typeof friendName[j] == 'string') {
            count++;
        }
    }

    //condition for checking whether array length greater than 0 and total number of string is equal to array length or not
    if (friendName.length != 0 && count == friendName.length) {
        for (var i = 0; i < friendName.length; i++) {
            //condition for comparing each of string to another to find out the largest one
            if (friendName[i].length > maximumLength.length) {
                maximumLength = friendName[i];
            }
        }
        return maximumLength;
    } else {
        return 'Invalid Input';
    }
}

var names = ['rashed', 'belal', 'shovon', 'malek'];
var result4;
result4 = megaFriend(names);
console.log(result4);