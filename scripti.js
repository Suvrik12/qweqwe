'use strict';

let money = ("Ваш бюджет на месяц?")
    time = ("Введите дату в формате YYYY-MM-DD")


appData {
    budget = money,
    timeData = time,
    expenses = {},
    optionalExpenses = {},
    income = [],
    savings = false

};


let vop1 = ("Введите обязательную статью расходов в этом месяце");
    vop2 = ("Во сколько обойдется?");
    vop3 = ("Введите обязательную статью расходов в этом месяце");
    vop4 = ("Во сколько обойдется?");


appData.expenses[vop1] = vop2;
appData.expenses[vop3] = vop4;


alert{appData.budget / 30};