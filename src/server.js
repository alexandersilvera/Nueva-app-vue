const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const app = express();

const itemRoutes = require('./routes/item');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/app-vue', {
    useMongoClient: true
}).then(() => console.log('db connected'))
  .catch(err => console.log(err));

// settings
app.set('port', process.env.PORT || 3000);

// middlewres
app.use(cors());
app.use(bodyParser.json());

// routes
app.use('/item', itemRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
});