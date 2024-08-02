
import express, {Request, Response} from 'express';
const config = require('./config');
import bodyParser from 'body-parser';
import { error } from 'console';
const shoppingRoutes = require('./routes/route');

const app = express();
app.use(express.json());
// const port = 5000;
const cors = require("cors")
const sql = require('mssql')

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', shoppingRoutes.routes)


app.listen(config.port, () => {
  console.log(`Server is running on http://localhost:${config.port}`);
});


