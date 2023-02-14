const express = require('express')
require('dotenv').config();
const axios = require('axios')

const app = express()
app.use(express.json())

const port = process.env.PORT
const tgbot = process.env.TGBOT

app.post('/api/tg', async (req, res) => {
    // ======= Test =======  
    console.log(req.body)

    // ======= Send message to group ======= 
    // const body = {
    //     chat_id: req.body.message.chat.id,
    //     text: "你好 @"+req.body.message.from.username,
    // }
    // const headers = {
    //     "Content-Type": "application/json",
    //     "Accept": "application/json",
    // }
    // await axios({
    //     url: `https://api.telegram.org/bot${tgbot}/sendMessage`,
    //     method: "POST",
    //     headers: headers,
    //     data: body
    // })
   
    res.status(200).send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})