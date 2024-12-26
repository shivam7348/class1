// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// });


const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log(" server started at port no.3000")
})

app.get('/', (request, response) => {
    response.send("hello jee , pradeep")
})