'use strict';

let money,time;

function start() {
 
    money = +prompt("Ваш бюджет на месяц?", '');
	  time = prompt('Введите дату в формате YYYY-MM-DD', '');
 
    while(isNaN(money) || money == "" || money == null) {
      money = +prompt("Ваш бюджет на месяц?", '');
    }
    
  }

start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true 
};

function chooseExpenses() {

for (let i = 0; i < 2; i++){
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");


    if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        console.log("done");

        appData.expenses[a] = b;

    } else {
        console.log("come back");

        i--;
    }

};
};

chooseExpenses();

function detectDayBudget () {
  appData.moneyPerDay = (appData.budget / 30).toFixed();
  alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");
}

detectDayBudget();

function detectlevel () {
  if(appData.moneyPerDay < 2500) {
    console.log("Плохой достаток")
} else if (appData.moneyPerDay > 2500 && appData.moneyPerDay < 7000) {
    console.log("средний достаток")
} else if (appData.moneyPerDay > 10000) {
    console.log("высокий достаток")
  };
}

detectlevel();

function checkSaving () {
  if (appData.savings == true) {
    let save = +prompt("Какова сумма накоплений?"),
    percent = +prompt("Под какой процент?");
  
  appData.monthIncome = (save/100/12*percent).toFixed();
  alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
  }

}

checkSaving();

function chooseOptExpenses () {
  for(let i = 1;i < 4; i++) {
    prompt("Статья необязательних расходов")
  }
}

chooseOptExpenses();

//while
    //let = 0
    
    //while(let < 2) {
        

    //let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
      //  b = prompt("Во сколько обойдется?", "");


   // if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {

        //console.log("done");

      // appData.expenses[a] = b;

   // } else {
       // console.log("come back");

        //i--;
  // }
    //i++;
// };


//do
    //let i = 0;
  //  do {
       // for (let i = 0; i < 2; i++){
            //let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
          //      b = prompt("Во сколько обойдется?", "");
        //
        //
          //  if ( typeof(a) === 'string' && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length < 50) {
        //
          //      console.log("done");
        //
          //      appData.expenses[a] = b;
        //
            //} else {
          //      console.log("come back");
        //
        //        i--;
      //      }
      //     i++ ;
    //
    //}
   // while (i < 2);

