import express from 'express';
import volleyball from 'volleyball';
// import {configJWTStrategy} from '';
import 'dotenv/config'
import cors from 'cors'

const app = express();

const port = 5432;

app.use(cors());
app.use(volleyball);
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.get('/', (req, res) => {
  console.log('tout est ok')
  res.json('ça marche')
})


app.listen(port, () => console.log(`[Express] is running on ${port}`))

