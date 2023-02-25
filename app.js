const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));
app.use('/api', userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
