const express = require('express')
const app = express()
const path = require('path')
const axios = require('axios');

app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, '/views'));


app.get('/', (req, res) => {

  
  axios.get('https://swapi.dev/api/films/')
  .then(function (response) {
    var data = response.data;
    console.log(data)
    res.render('index', {resposta:data});
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
  });


});

app.get('/about', (req, res) => {
  
});



app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})