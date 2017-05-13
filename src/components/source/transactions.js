var companies = ["/assets/airtasker.png", "/assets/airbnb.png", "/assets/deliveroo.png", "/assets/uber.png", "/assets/upwork.png"];
var dates = ["17/05/2017", "16/05/2017", "15/05/2017", "14/05/2017"];

var transactions = [];

for (var i = 0; i < 10; i++ ){
  transactions.push({
    id: i,
    source: companies[Math.floor(Math.random()*companies.length)],
    amount: Math.floor(Math.random()*100),
    date: dates[Math.floor(Math.random()*dates.length)],
    status: "pending"
  });
}

export default transactions;