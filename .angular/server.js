
const express = require('express');
const path = require('path');

const app = express();
const PORT = 8085;

const LOCALES = ['fr', 'en'];

LOCALES.forEach(locale => {
  const folder = path.join(__dirname, 'dist/muFirstProjectAngular/browser', locale);

  app.use(`/${locale}`, express.static(folder));
  app.get(`/${locale}/*`, (req, res) => {
    res.sendFile(path.join(folder, 'index.html'));
  });
});

app.get('/', (req, res) => {
  res.redirect('/fr');
});

app.listen(PORT, () => {
  console.log(`✅ Application disponible:`);
  console.log(`🌐 http://localhost:${PORT}/fr`);
  console.log(`🌐 http://localhost:${PORT}/en`);
});



