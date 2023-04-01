const express = require('express');
const app = express();
const userRoutes = require('./api/routes/userRoutes');
const cors = require('cors');
const bodyParser = require('body-parser');
const {PrismaClient} = require('@prisma/client');

const prisma = new PrismaClient(); 

app.use(bodyParser.json())
app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));
app.use('/api', userRoutes);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));


async function main() {
    // ... you will write your Prisma Client queries here
    const allUsers = await prisma.categorias.findMany()
    console.log(allUsers)
  }

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })