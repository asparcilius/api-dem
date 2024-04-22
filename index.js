// const express = require('express');
// const cors = require('cors');
// const app = express();


// app.use(cors());


// const cardTypes = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
// const prizes = [
//   'Cash', 'Bonus Funds', 'Free Spins', 'Free Bets', 'WinCoins',
//   'Golden Chips', 'Wheel Spins', 'Loyalty Points', 'Shop Points',
//   'Multiplier'
// ];



// app.get('/api/getCard', (req, res) => {
//   const selectedCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
//   const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];
//   const wonAmount = Math.floor(Math.random() * 50000) + 1; 
//   const currencySymbol = '€'; 
//   const brandId = '123456';
//   const additionalValue = Math.floor(Math.random() * 1447) + 10; 



//   res.json({ brand: brandId, card_type: selectedCard, prize: selectedPrize, won_amount: wonAmount,currencySymbol: currencySymbol, additional_value: additionalValue});
// });

// app.get('/api/getChest', (req, res) => {
//   const chestNumber = Math.floor(Math.random() * 5) + 1; 
//   res.json({ chest_number: chestNumber });
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

const cardTypes = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
const prizes = {
  'Common': ['Cash', 'Bonus Funds', 'Free Spins'],
  'Uncommon': ['Free Bets', 'WinCoins'],
  'Rare': ['Golden Chips', 'Wheel Spins'],
  'Epic': ['Loyalty Points'],
  'Legendary': ['Shop Points', 'Multiplier']
};

const prizeValueRanges = {
  'Common': { min: 1, max: 10000 },
  'Uncommon': { min: 10001, max: 20000 },
  'Rare': { min: 20001, max: 30000 },
  'Epic': { min: 30001, max: 40000 },
  'Legendary': { min: 40001, max: 50000 }
};

app.get('/api/getCard', (req, res) => {
  const selectedCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
  const availablePrizes = prizes[selectedCard];
  const selectedPrize = availablePrizes[Math.floor(Math.random() * availablePrizes.length)];
  const valueRange = prizeValueRanges[selectedCard];
  const wonAmount = Math.floor(Math.random() * (valueRange.max - valueRange.min + 1)) + valueRange.min;
  const currencySymbol = '€';
  const brandId = '123456';
  const additionalValue = Math.floor(Math.random() * 1447) + 10;

  // Logica pentru multiplicator
  const hasMultiplier = selectedPrize === 'Multiplier';
  const multiplierValue = hasMultiplier ? Math.floor(Math.random() * 6) + 5 : null;

  res.json({
    brand: brandId,
    card_type: selectedCard,
    prize: selectedPrize,
    won_amount: wonAmount,
    currencySymbol: currencySymbol,
    additional_value: additionalValue,
    has_multiplier: hasMultiplier,
    multiplier_value: multiplierValue
  });
});

app.get('/api/getChest', (req, res) => {
  const chestNumber = Math.floor(Math.random() * 5) + 1;
  res.json({ chest_number: chestNumber });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
