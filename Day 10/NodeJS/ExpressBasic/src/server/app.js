import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const app = express();
const port = 3010;

var products = [
      {id : 1, name:"LED TV", price:2000 },
      {id : 2, name:"PS5", price:20000 },
      {id : 3, name:"GPU", price:20000 }
    ]

//middlewares
app.use(express.static("src/client")); // middleware
app.use(express.json());

// apis
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: join(__dirname, '../client') });
});


app.get('/products', (req, res) => {
    
  res.json(products);
})

app.delete('/delproducts', (req, res) =>{
    const payload = req.body;
    console.log(payload);
    const idx = products.findIndex((ele) => ele.id == payload.id);
    if (idx !== -1) {
        products.splice(idx, 1);
        res.send("Deleted successfully!!");
    } else {
        res.status(404).send("Product not found!");
    }
})

app.post('/newproducts', (req, res) =>{
    const payload = req.body;
    console.log(payload);
    products.push(payload);
    res.send("Products added successfully!!!")
})
// server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

