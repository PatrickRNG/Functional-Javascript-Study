const companies = [
    {name: "Company One", category: "Finance", start: "1990", end: "2016"},
    {name: "Company Two", category: "Technology", start: "2016", end: "2019"},
    {name: "Company Three", category: "Technology", start: "2010", end: "2014"},
    {name: "Company Four", category: "Auto", start: "2012", end: "2016"},
    {name: "Company Five", category: "Finance", start: "1996", end: "2010"},
    {name: "Company Six", category: "Technology", start: "1980", end: "1999"},
];

const ages = [33, 21, 34, 67, 18, 17, 13, 12, 10, 9, 76, 22, 33, 25];

// ---------- FILTER ----------


// FOR LOOP

//for (let i = 0; i < companies.length; i++) {
//    console.log(companies[i]);
//}


// FOREACH

//companies.forEach(function(company) {
//   console.log(company);
//});


// FOR LOOP AGE

//const canDrink = [];
//
//for (let i = 0; i < ages.length; i++) {
//    if (ages[i] >= 21) {
//        canDrink.push(ages[i]);
//    }
//}


// FILTER

//const canDrink = ages.filter(function(age) {
//   if (age >= 21) {
//       return true;
//   } 
//});]


// FILTER ES6

//const canDrink = ages.filter(age => age >= 21);

//console.log(canDrink);


// FILTER TECH COMPANIES

//const techCompanies = companies.filter(function(company) {
//   if (company.category === 'Technology') {
//       return true;
//   } 
//});


// FILTER TECH COMPANIES ES6

//const techCompanies = companies.filter(company => company.category === 'Technology');

//console.log(techCompanies);


// FILTER 2000 COMPANIES

//const twoCompanies = companies.filter(function(company) {
//   if (company.start >= 2000) {
//       return true;
//   } 
//});


// FILTER 2000 COMPANIES ES6

//const twoCompanies = companies.filter(company => company.start >= 2000);

//console.log(twoCompanies);


// FILTER COMPANIES THAT LASTED 10 YEARS ES6

//const tenYears = companies.filter(company => (company.end - company.start) >= 10);

//console.log(tenYears);


// ---------- MAP ----------

//const companyNames = companies.map(function(company) {
//    return company.name;
//});

//console.log(companyNames);


// TEST MAP COMPANIES NAME + DATE

//const testMap = companies.map(function(company) {
//    return `${company.name} [${company.start} - ${company.end}]`;
//});


// TEST MAP COMPANIES + NAME ES6

//const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);

//console.log(testMap);


// MAP AGES SQUARE

//const agesSquare = ages.map(age => Math.sqrt(age));
//const agesTimesTwo = ages.map(age => (age * 2));
//
//console.log(agesSquare);
//console.log(agesTimesTwo);


// TWO MAP IN SAME DATA

//const ageMap = ages
//    .map(age => Math.sqrt(age))
//    .map(age => (age * 2));
//
//console.log(ageMap);


// ---------- SORT ----------

//const sortedCompanies = companies.sort(function(c1, c2) {
//    if (c1.start > c2.start) {
//        return 1;
//    } else {
//        return -1;
//    }
//});


// SORTED COMPANIES BY DATE ES6

//const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1))
//
//console.log(sortedCompanies);


// SORTING DESC AGES

//const ageSort = ages.sort((a, b) => a - b);
//
//console.log(ageSort);


// ---------- REDUCE ----------

// ADDING ALL AGES - FOR LOOP

//let ageSum = 0;
//for (let i = 0; i < ages.length; i++) {
//    ageSum += ages[i];
//}


// ADDING ALL AGES - REDUCE

//const ageSum = ages.reduce(function(total, age) {
//   return total + age; 
//}, 0);


// ADDING ALL AGES - REDUCE ES6

//const ageSum = ages.reduce((total, age) => total + age, 0); 
//
//console.log(ageSum); 


// GET TOTAL YEARS FOR ALL COMPANIES

//const totalCompanies = companies.reduce(function(total, company) {
//    return total + (company.end - company.start);
//}, 0);


// GET TOTAL YEARS FOR ALL COMPANIES ES6

//const totalCompanies = companies.reduce((total, company) => total + (company.end - company.start), 0);
//
//
//console.log(totalCompanies);


// COMBINED

//const combined = ages
//    .map(age => age*2)
//    .filter(age => age > 30)
//    .sort((a,b) => a - b)
//    .reduce((total, age) => total + age, 0);
//
//console.log(combined);


// GET THE DIFFERENCE AND SUM FROM TECH COMPANIES

const diff = companies
    .filter(company => company.category === 'Technology')
    .map(company => company.end - company.start)
    .reduce((total, company) => total + company, 0)

console.log(diff);

























