$(document).ready(function () {

    addOnChange = function () {

        // Object arrays from ".income" sections
        var getIncomeList = $(".income");

        // Empty array ready for income values to be added
        var income = [];

        // Selects .incomeErr classes incase an error message is needed
        var incomeMsg = $(".incomeErr");

        // Loop to add values from income object arrays into var income
        for (var i = 0; i < getIncomeList.length; i++) {
            // Pushes values to income array
            income.push($(getIncomeList[i]).val());

            if (isNaN(income[i])) {
                // Error message for isNaN entries
                incomeMsg[i].innerHTML = "Please enter a valid number!";
                income[i] = 0;
            } else if (income[i] == "") {
                // Fields left blank are made === 0
                income[i] = 0;
            } else {
                // Converts to int
                income[i] = parseFloat(income[i], 10);
                // Removes error message on submit
                incomeMsg[i].innerHTML = "";
            }
        }

        // Adds together values from income array
        addValues = function (items) {
            return items.reduce(function (a, b) {
                return a + b;
            });
        }

        var incomeTotal = addValues(income);

        // Object arrays from ".expenses" sections
        var getExpensesList = $(".expenses");

        // Empty array ready for expenses values to be added
        var expenses = [];

        // Selects .expensesErr classes incase an error message is needed
        var expensesMsg = $(".expensesErr");

        // Loop to add values from expenses object arrays into var expenses
        for (var i = 0; i < getExpensesList.length; i++) {
            // Pushes values to expenses array
            expenses.push($(getExpensesList[i]).val());

            if (isNaN(expenses[i])) {
                // Error message for isNaN entries
                expensesMsg[i].innerHTML = "Please enter a valid number!";
                expenses[i] = 0;
            } else if (expenses[i] == "") {
                // Fields left blank are made === 0
                expenses[i] = 0;
            } else {
                // Converts to int
                expenses[i] = parseFloat(expenses[i], 10);
                // Removes error message on submit
                expensesMsg[i].innerHTML = "";
            }
        }

        var expensesTotal = addValues(expenses);

        var total = incomeTotal - expensesTotal.toFixed(2);

        document.getElementById('total').value = total;

        calculate = function () {

            document.getElementById('total').value = total;

            // Decimal point gets lost here

            $('#total').animateNumber({ number: 0 + total });

        };

    };

});