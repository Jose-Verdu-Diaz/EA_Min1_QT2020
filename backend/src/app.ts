import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import eventRoutes from './routes/event.routes'

//Inicializaciones
const app = express();

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(eventRoutes);

/* //Routes
app.get('/', (req,res) => {
    return res.send('It works!');
}); */

export default app;
