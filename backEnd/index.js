
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8088;

const classicsRouter = require('./src/routes/classics');
const loginRouter = require('./src/routes/login');
const registerRouter = require('./src/routes/register');
const userRouter = require('./src/routes/user');
const professionsRouter = require('./src/routes/professions');
const filterRouter = require('./src/routes/filters');
const adminRouter = require('./src/routes/admin');

app.use(cors());
app.use(express.urlencoded());
app.use(express.json());  

app.use('/login', loginRouter);
app.use('/azclassics', classicsRouter);
app.use('/register', registerRouter);
app.use('/user', userRouter);
app.use('/professions', professionsRouter);
app.use('/filter', filterRouter);
app.use('/admin', adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});