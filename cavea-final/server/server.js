const PORT = process.env.PORT ?? 8000
const express = require('express')
const cors = require('cors')
const app = express()
const pool = require('./db')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello')
})
// get all todos
app.get('/todos', async (req, res) => {
    // console.log(req);
    const page = req.query.page || 1;
    const limit = req.query.limit || 20;

    try {

        const offset = (page - 1) * limit;
        const result = await pool.query(`SELECT * FROM todos OFFSET $1 LIMIT $2`, [offset, limit])

        const todos = result.rows
        res.json(todos)
    } catch (err) { 
        console.error(err);
        res.status(500).json({error: 'Server error'})
    }
})

app.delete('/todos/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const query = 'DELETE FROM todos WHERE id = $1';
      await pool.query(query, [id]);
  
      res.sendStatus(200);
    } catch (error) {
      console.error(error);
      res.sendStatus(500);
    }
  });

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))