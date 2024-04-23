// const express = require('express');
// const cors = require('cors');
// const app = express();


// app.use(cors());


// const cardcard_types = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
// const prizes = [
//   'Cash', 'Bonus Funds', 'Free Spins', 'Free Bets', 'FunCoins',
//   'Golden Chips', 'Wheel Spins', 'Loyalty Points', 'Shop Points',
//   'Multiplier'
// ];



// app.get('/api/getCard', (req, res) => {
//   const selectedCard = cardcard_types[Math.floor(Math.random() * cardcard_types.length)];
//   const selectedPrize = prizes[Math.floor(Math.random() * prizes.length)];
//   const wonwon_amount = Math.floor(Math.random() * 50000) + 1; 
//   const currencySymbolSymbol = '€'; 
//   const brandId = '123456';
//   const additionalValue = Math.floor(Math.random() * 1447) + 10; 



//   res.json({ brand: brandId, card_card_type: selectedCard, prize: selectedPrize, won_won_amount: wonwon_amount,currencySymbolSymbol: currencySymbolSymbol, additional_value: additionalValue});
// });

// app.get('/api/getChest', (req, res) => {
//   const chestNumber = Math.floor(Math.random() * 5) + 1; 
//   res.json({ chest_number: chestNumber });
// });


// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));


// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// const cardcard_types = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
// const prizes = {
//   'Common': ['Cash', 'Bonus Funds', 'Free Spins'],
//   'Uncommon': ['Free Bets', 'FunCoins'],
//   'Rare': ['Golden Chips', 'Wheel Spins'],
//   'Epic': ['Loyalty Points'],
//   'Legendary': ['Shop Points', 'Multiplier']
// };

// const prizeValueRanges = {
//   'Common': { min: 1, max: 10000 },
//   'Uncommon': { min: 10001, max: 20000 },
//   'Rare': { min: 20001, max: 30000 },
//   'Epic': { min: 30001, max: 40000 },
//   'Legendary': { min: 40001, max: 50000 }
// };

// app.get('/api/getCard', (req, res) => {
//   const selectedCard = cardcard_types[Math.floor(Math.random() * cardcard_types.length)];
//   const availablePrizes = prizes[selectedCard];
//   const selectedPrize = availablePrizes[Math.floor(Math.random() * availablePrizes.length)];
//   const valueRange = prizeValueRanges[selectedCard];
//   const wonwon_amount = Math.floor(Math.random() * (valueRange.max - valueRange.min + 1)) + valueRange.min;
//   const currencySymbolSymbol = '€';
//   const brandId = '123456';
//   const additionalValue = Math.floor(Math.random() * 1447) + 10;

//   const hasMultiplier = selectedPrize === 'Multiplier';
//   const multiplierValue = hasMultiplier ? Math.floor(Math.random() * 6) + 5 : null;

//   res.json({
//     brand: brandId,
//     card_card_type: selectedCard,
//     prize: selectedPrize,
//     won_won_amount: wonwon_amount,
//     currencySymbolSymbol: currencySymbolSymbol,
//     additional_value: additionalValue,
//     has_multiplier: hasMultiplier,
//     multiplier_value: multiplierValue
//   });
// });

// app.get('/api/getChest', (req, res) => {
//   const chestNumber = Math.floor(Math.random() * 5) + 1;
//   res.json({ chest_number: chestNumber });
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
// const express = require('express');
// const cors = require('cors');
// const app = express();

// app.use(cors());

// const cardcard_types = ['Common', 'Uncommon', 'Rare', 'Epic', 'Legendary'];
// const prizes = {
//   'Common': ['Cash', 'Bonus Funds', 'Free Spins'],
//   'Uncommon': ['Free Bets', 'FunCoins'],
//   'Rare': ['Golden Chips', 'Wheel Spins'],
//   'Epic': ['Loyalty Points'],
//   'Legendary': ['Shop Points', 'Multiplier']
// };

// const prizeValueRanges = {
//   'Common': { min: 1, max: 10000 },
//   'Uncommon': { min: 10001, max: 20000 },
//   'Rare': { min: 20001, max: 30000 },
//   'Epic': { min: 30001, max: 40000 },
//   'Legendary': { min: 40001, max: 50000 }
// };

// app.get('/api/getCard', (req, res) => {
//   const selectedCard = cardcard_types[Math.floor(Math.random() * cardcard_types.length)];
//   const availablePrizes = prizes[selectedCard];
//   const selectedPrize = availablePrizes[Math.floor(Math.random() * availablePrizes.length)];
//   const valueRange = prizeValueRanges[selectedCard];
//   const wonwon_amount = Math.floor(Math.random() * (valueRange.max - valueRange.min + 1)) + valueRange.min;
//   const currencySymbolSymbol = '€';
//   const brandId = '123456';
//   const additionalValue = Math.floor(Math.random() * 1447) + 10;

//   const hasMultiplier = selectedPrize === 'Multiplier';
//   const multiplierValue = hasMultiplier ? Math.floor(Math.random() * 6) + 5 : null;

//   res.json({
//     brand: brandId,
//     card_card_type: selectedCard,
//     prize: selectedPrize,
//     won_won_amount: wonwon_amount,
//     currencySymbolSymbol: currencySymbolSymbol,
//     additional_value: additionalValue,
//     has_multiplier: hasMultiplier,
//     multiplier_value: multiplierValue
//   });
// });

// app.get('/api/getChest', (req, res) => {
//   const chestNumber = Math.floor(Math.random() * 5) + 1;
//   res.json({ chest_number: chestNumber });
// });

// // Endpoint pentru Regular
// app.get('/api/regular', (req, res) => {
//   res.json([
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 4 },
//     { card_type: 'Uncommon', prize: 'Free Bet', won_amount: 10, currencySymbol: 'Lei' },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 7 },
//     { card_type: 'Common', prize: 'Win Coins', won_amount: 29 },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 3 },
//     { card_type: 'Uncommon', prize: 'Win Coins', won_amount: 105 }
//   ]);
// });

// // Endpoint pentru Uncommon
// app.get('/api/uncommon', (req, res) => {
//   res.json([
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 7 },
//     { card_type: 'Uncommon', prize: 'Win Coins', won_amount: 125 },
//     { card_type: 'Common', prize: 'Bonus Funds', won_amount: 5, currencySymbol: 'Lei' },
//     { card_type: 'Common', prize: 'Win Coins', won_amount: 29 },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 3 },
//     { card_type: 'Rare', prize: 'Win Coins', won_amount: 235 }
//   ]);
// });

// // Endpoint pentru Multiplier
// app.get('/api/multiplier', (req, res) => {
//   res.json([
//     { card_type: 'Epic', prize: 'Multiplier', won_amount: 5 },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 35 },
//     { card_type: 'Uncommon', prize: 'Win Coins', won_amount: 615 },
//     { card_type: 'Common', prize: 'Bonus Funds', won_amount: 25, currencySymbol: 'Lei' },
//     { card_type: 'Common', prize: 'Win Coins', won_amount: 150 },
//     { card_type: 'Uncommon', prize: 'Loyalty Points', won_amount: 575 },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 15 },
//     { card_type: 'Rare', prize: 'Win Coins', won_amount: 1250 },
//     { card_type: 'Rare', prize: 'Free Spins', won_amount: 165 }
//   ]);
// });

// // Endpoint pentru Legendary
// app.get('/api/legendary', (req, res) => {
//   res.json([
//     { card_type: 'Rare', prize: 'Free Spins', won_amount: 35 },
//     { card_type: 'Common', prize: 'Loyalty', won_amount: 150 },
//     { card_type: 'Uncommon', prize: 'Win Coins', won_amount: 175 },
//     { card_type: 'Common', prize: 'Bonus Funds', won_amount: 5, currencySymbol: 'Lei' },
//     { card_type: 'Common', prize: 'Win Coins', won_amount: 150 },
//     { card_type: 'Common', prize: 'Free Spins', won_amount: 15 },
//     { card_type: 'Epic', prize: 'Free Spins', won_amount: 400 },
//     { card_type: 'Legendary', prize: 'Free Spins', won_amount: 1000 }
//   ]);
// });

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Structuri pentru stocarea premiilor
const pulls = {
  regular: [
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x4' , additional_value: 44},
    { card_type: 'Uncommon', prize: 'Free Bet', won_amount: '1 x 10 Lei',additional_value: 120 },
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x7', additional_value: 77 },
    { card_type: 'Common', prize: 'FunCoins', won_amount: 'x29', additional_value: 290 },
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x3', additional_value: 57},
    { card_type: 'Uncommon', prize: 'FunCoins', won_amount: '105', additional_value: 1470 }
  ],
  uncommon: [
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x7', additional_value: 112 },
    { card_type: 'Uncommon', prize: 'FunCoins', won_amount: '125', additional_value: 2500},
    { card_type: 'Common', prize: 'Bonus Funds', won_amount: '5 Lei', additional_value: 65 },
    { card_type: 'Common', prize: 'FunCoins', won_amount: '29', additional_value: 319 },
    { card_type: 'Common', prize: 'Free Spins', won_amount: '3', additional_value: 54 },
    { card_type: 'Rare', prize: 'FunCoins', won_amount: '235', additional_value: 4465}
  ],
  multiplier: [
    { card_type: 'Epic', prize: 'Multiplier', won_amount: 'x5', additional_value: 60},
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x35', additional_value: 420},
    { card_type: 'Uncommon', prize: 'FunCoins', won_amount: '615', additional_value: 7995},
    { card_type: 'Common', prize: 'Bonus Funds', won_amount: '25 Lei', additional_value: 375},
    { card_type: 'Common', prize: 'FunCoins', won_amount: '150', additional_value: 2400},
    { card_type: 'Uncommon', prize: 'Loyalty Points', won_amount: 'x575', additional_value: 6325},
    { card_type: 'Common', prize: 'Free Spins', won_amount: 'x15', additional_value: 300},
    { card_type: 'Rare', prize: 'FunCoins', won_amount: '1250', additional_value: 13750},
    { card_type: 'Rare', prize: 'Free Spins', won_amount: '165', additional_value: 2145}
  ],
  legendary: [
    { card_type: 'Rare', prize: 'Free Spins', won_amount: '35', additional_value: 595},
    { card_type: 'Common', prize: 'Loyalty Points', won_amount: '150', additional_value: 2100},
    { card_type: 'Uncommon', prize: 'FunCoins', won_amount: '175', additional_value: 3150},
    { card_type: 'Common', prize: 'Bonus Funds', won_amount: '5 Lei', additional_value: 100},
    { card_type: 'Common', prize: 'FunCoins', won_amount: '150', additional_value: 1950},
    { card_type: 'Common', prize: 'Free Spins', won_amount: '15', additional_value: 285},
    { card_type: 'Epic', prize: 'Free Spins', won_amount: '400', additional_value: 6400},
    { card_type: 'Legendary', prize: 'Free Spins', won_amount: '1000', additional_value: 15000}
  ]
};

// Contor pentru fiecare tip de apelare
const counters = {
  regular: 0,
  uncommon: 0,
  multiplier: 0,
  legendary: 0
};

// Functie pentru a returna premiile pe rand
function getPrize(req, res, card_type) {
  const index = counters[card_type];
  counters[card_type] = (index + 1) % pulls[card_type].length; // actualizează contorul circular
  res.json(pulls[card_type][index]);
}

// Endpoints
app.get('/api/regular', (req, res) => getPrize(req, res, 'regular'));
app.get('/api/uncommon', (req, res) => getPrize(req, res, 'uncommon'));
app.get('/api/multiplier', (req, res) => getPrize(req, res, 'multiplier'));
app.get('/api/legendary', (req, res) => getPrize(req, res, 'legendary'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serverul rulează pe portul ${PORT}`));
