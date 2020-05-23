import express from 'express';

const app = express();

app.get('/', (request, response) => {

  return response.json({
    response: "it works"
  })

})


app.listen(3333);
