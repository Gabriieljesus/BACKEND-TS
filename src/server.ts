import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT);

const startServer = async () => {
  try {
    await app.listen({ port: PORT }).then(() => 
      console.log(`Server is running on port ${PORT}`));
  }catch (err) {
    console.error(err);
   
  }
};

startServer();