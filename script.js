document.getElementById("trade-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const symbol = e.target[0].value.toUpperCase();
  const quantity = parseInt(e.target[1].value);
  alert(`Trade executed: Buy ${quantity} shares of ${symbol}`);
});

const stocks = [
  { symbol: "AAPL", price: 189.45 },
  { symbol: "TSLA", price: 234.12 },
  { symbol: "AMZN", price: 145.67 },
];

const stockList = document.getElementById("stock-list");
stocks.forEach(stock => {
  const div = document.createElement("div");
  div.textContent = `${stock.symbol}: $${stock.price.toFixed(2)}`;
  stockList.appendChild(div);
});
