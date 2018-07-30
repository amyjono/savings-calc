$(document).ready(function () { 
    
    calculate = function () {
        
        // Collects object arrays from ".income" sections
        var getIncomeList = document.getElementsByClassName("income");
        
        // Empty array ready for income values to be added
        var income = [];
        
        // Loop to add values from object arrays into var income
        for (var i = 0; i < getIncomeList.length; i ++ ) {
        // Pushes values to array
            income.push($(getIncomeList[i]).val());
        // Converts to int
            income[i] = parseFloat(income[i], 10);
        };
        
        // Adds together values from income array
        addValues = function(items){
            return items.reduce( function(a, b) {
                return a + b;
            });
        }
      
        var incomeTotal = addValues(income);
        
        // Collects object arrays from ".expenses" sections
        var getExpensesList = document.getElementsByClassName("expenses");
        
        // Empty array ready for income values to be added
        var expenses = [];
        
        // Loop to add values from object arrays into var income
        for (var e = 0; e < getExpensesList.length; e ++) {
            // Pushes values to array
            expenses.push($(getExpensesList[e]).val());
            // Converts to int
            expenses[e] = parseFloat(expenses[e], 10);
        }
    
        var expensesTotal = addValues(expenses);
        
        // Display total in browser
        document.getElementById('total').value = incomeTotal - expensesTotal.toFixed(2);

    };
    
    $("#button").hover(function () {
        $(this).css("background-color", "#4985e5"), $(this).css("color", "#192868"), $(this).css("border", "#192868 4px solid");
        }, function(){
        $(this).css("background-color", "#192868"), $(this).css("color", "#b5dcff"), $(this).css("border", "#4985e5 4px solid");
    });
});