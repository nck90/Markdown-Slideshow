const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;  

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');  
  next();
});

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = app;