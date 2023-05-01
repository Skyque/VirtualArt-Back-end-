const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoutes');
const postRoutes = require('./api/routes/postRoutes');
const tablerosRoutes = require('./api/routes/tablerosRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use(express.json());
app.use(cors());
app.use('/api', userRoutes);
app.use('/api', postRoutes);
app.use('/api', tablerosRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));