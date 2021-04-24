const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/', (req, res) => {
  res.render('index');
});


app.get('/concessionarias', (req, res) => {
  let lojas = [
    {
      id:1,
      name: 'Joinville',
    },
    {
      id:2,
      name: 'Jaraguá do Sul',
    },
    {
      id:3,
      name: 'Blumenau',
    },
  ];
  res.render('stores', {
    lojas
  });
});


// rodando o servidor...
app.listen(9000, () => console.log('app rodando: http://localhost:9000'));