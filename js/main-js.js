$(document).ready(function () { 
    calculate = function () {
        var salaryAmount = parseFloat(document.getElementById('salary').value, 10);
        if (isNaN(salaryAmount) === true) {
            salaryAmount = 0;
        }
        var commissionAmount = parseFloat(document.getElementById('commission').value, 10);
        if (isNaN(commissionAmount) === true) {
            commissionAmount = 0;
        }
        var rentMortgageAmount = parseFloat(document.getElementById('rentMortgage').value, 10);
        if (isNaN(rentMortgageAmount) === true) {
            rentMortgageAmount = 0;
        }
        var billsAmount = parseFloat(document.getElementById('bills').value, 10);
        if (isNaN(billsAmount) === true) {
            billsAmount = 0;
        }
        var insuranceAmount = parseFloat(document.getElementById('insurance').value, 10);
        if (isNaN(insuranceAmount) === true) {
            insuranceAmount = 0;
        }
        var groceriesAmount = parseFloat(document.getElementById('groceries').value, 10);
        if (isNaN(groceriesAmount) === true) {
            groceriesAmount = 0;
        }
        var commutingAmount = parseFloat(document.getElementById('commuting').value, 10);
        if (isNaN(commutingAmount) === true) {
            commutingAmount = 0;
        }
        var leisureHobbiesAmount = parseFloat(document.getElementById('leisureHobbies').value, 10);
        if (isNaN(leisureHobbiesAmount) === true) {
            leisureHobbiesAmount = 0;
        }
        document.getElementById('total').value = salaryAmount + commissionAmount - rentMortgageAmount - billsAmount - insuranceAmount - groceriesAmount - commutingAmount - leisureHobbiesAmount.toFixed(2);
    };
    
    $("#button").hover(function () {
        $(this).css("background-color", "#4985e5"), $(this).css("color", "#192868"), $(this).css("border", "#192868 4px solid");
        }, function(){
        $(this).css("background-color", "#192868"), $(this).css("color", "#b5dcff"), $(this).css("border", "#4985e5 4px solid");
    });
});
