require('dotenv').config();

module.exports = {
  port: process.env.PORT || 3000,
  opponentUrl: process.env.OPPONENT_URL,
  openrouterApiKey: process.env.OPENROUTER_API_KEY,
  maxTurns: parseInt(process.env.MAX_TURNS || '10', 10),
  model: process.env.MODEL || 'openrouter/free',
  side: 'microservicios',
  opponentSide: 'monolito',
};