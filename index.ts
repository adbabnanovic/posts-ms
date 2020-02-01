import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

const port = process.env.PORT || 8080;

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/boilerplate', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
const db = mongoose.connection;

app.get('/', (req, res) => res.send('Welcome to the MS Boilerplate project'));

app.listen(port, () => {
  console.log(`Running MS Boilerplate on port ${port}`);
});
