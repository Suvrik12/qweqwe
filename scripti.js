'use strict';

let money = +prompt("Ваш бюджет на месяц?", ''),
	time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};



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

appData.moneyPerDay = appData.budget / 30;

alert ("Бюджет на 1 день составляет " + appData.moneyPerDay + "руб.");

if(appData.moneyPerDay < 100) {
    console.log("Плохой достаток")
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний достаток")
} else if (appData.moneyPerDay > 2000) {
    console.log("высокий достаток")
};




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