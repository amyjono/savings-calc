$(document).ready(function () {
 
    calculate = function () {
        var salaryAmount = parseInt(document.getElementById('salary').value, 10);
        if (isNaN(salaryAmount) === true) {
            salaryAmount = 0;
        }
        var commissionAmount = parseInt(document.getElementById('commission').value, 10);
        if (isNaN(commissionAmount) === true) {
            commissionAmount = 0;
        }
        var rentMortgageAmount = parseInt(document.getElementById('rentMortgage').value, 10);
        if (isNaN(rentMortgageAmount) === true) {
            rentMortgageAmount = 0;
        }
        var billsAmount = parseInt(document.getElementById('bills').value, 10);
        if (isNaN(billsAmount) === true) {
            billsAmount = 0;
        }
        var insuranceAmount = parseInt(document.getElementById('insurance').value, 10);
        if (isNaN(insuranceAmount) === true) {
            insuranceAmount = 0;
        }
        var groceriesAmount = parseInt(document.getElementById('groceries').value, 10);
        if (isNaN(groceriesAmount) === true) {
            groceriesAmount = 0;
        }
        var commutingAmount = parseInt(document.getElementById('commuting').value, 10);
        if (isNaN(commutingAmount) === true) {
            commutingAmount = 0;
        }
        var leisureHobbiesAmount = parseInt(document.getElementById('leisureHobbies').value, 10);
        if (isNaN(leisureHobbiesAmount) === true) {
            leisureHobbiesAmount = 0;
        }
        /* var expenceInput = parseInt(document.getElementsByTagName('input').value);
            if (isNaN(expenceInput) == true) {
            expenceInput = 0;
        } can this work?*/
        document.getElementById('total').value = salaryAmount + commissionAmount - rentMortgageAmount - billsAmount - insuranceAmount - groceriesAmount - commutingAmount - leisureHobbiesAmount;
        };
    
    $("#button").hover(function () {
            $(this).css("background-color", "#4985e5"), $(this).css("color", "#192868"), $(this).css("border", "#192868 4px solid");
            }, function(){
            $(this).css("background-color", "#192868"), $(this).css("color", "#b5dcff"), $(this).css("border", "#4985e5 4px solid");
    });
});

//need to figure out how to return result with decimal point.