require('dotenv').config(); // Dotenv — это модуль с нулевой зависимостью, который загружает переменные среды из .envфайла в файлы process.env.
const express = require('express');
const helmet = require('helmet'); // помогает защитить приложение от некоторых широко известных веб-уязвимостей путем соответствующей настройки заголовков HTTP
const bodyParser = require('body-parser');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const errorHandler = require('./middlewares/errorHandler');
const routes = require('./routes/index');
const { options } = require('./middlewares/cors');

const { PORT = 3001 } = process.env;

const app = express();
app.use('*', cors(options));
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(requestLogger); // подключаем логгер запросов

app.use(routes); // подключаем роуты

app.use(errorLogger); // подключаем логгер ошибок
app.use(errorHandler); 

app.listen(PORT, () => {
   console.log(`Сервер запущен на ${PORT} порту`);
});