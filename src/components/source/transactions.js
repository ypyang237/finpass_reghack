var firstnames = ["Adam", "Bob", "Cindy", "David", "Ella", "Fred", "Georgie", "Howard", "Ian", "Jack"];
var lastnames = ["Adams", "Brown", "Cox", "Davids", "Edwards", "Frank", "Gregorovich", "Hu", "Ingham", "James"];
var dates = ["17/05/2017", "16/05/2017", "15/05/2017", "14/05/2017"];

var transactions = [];

for (var i = 0; i < 100; i++ ){
  transactions.push({
    id: i,
    source: "#" + Math.floor(Math.random()*10000000000),
    amount: Math.floor(Math.random()*10000),
    date: dates[Math.floor(Math.random()*dates.length)],
    status: "pending"
  });
}

export default transactions;