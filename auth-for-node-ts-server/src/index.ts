import express from 'express';

const app = express();
const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.json({
    msg: "hello world"
  })
})

// app.get('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`> server is running at http://localhost:${PORT}`)
})