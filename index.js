const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(cors());

// Date simulate pentru exemplu
const cardTypes = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
const prizes = [
  'Cash', 'Bonus Funds', 'Free Spins', 'Free Bets', 'WinCoins',
  'Golden Chips', 'Wheel Spins', 'Loyalty Points', 'Shop Points',
  'Multiplier'
];


// Rute
app.get('/api/getCard', (req, res) => {
  const selectedCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
  const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];
  const wonAmount = Math.floor(Math.random() * 50000) + 1; // Suma câștigată între 1 și 50000
  const currencySymbol = '€'; 
  const brandId = '123456';
  const additionalValue = Math.floor(Math.random() * 1447) + 10; // Random value between 10 and 1456



  res.json({ brand: brandId, card_type: selectedCard, prize: selectedPrize, won_amount: wonAmount,currencySymbol: currencySymbol, additional_value: additionalValue});
});

app.get('/api/getChest', (req, res) => {
  const chestNumber = Math.floor(Math.random() * 5) + 1; // Numărul chest-ului între 1 și 5
  res.json({ chest_number: chestNumber });
});

// Pornire server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
