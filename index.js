const express = require('express')
require('dotenv').config();
const axios = require('axios')
const cli = require('./cli.json')

const app = express()
app.use(express.json())

const port = process.env.PORT

app.post('/api/tg', async (req, res) => {
    const tgbot = process.env.NEXT_TELEGRAM_TOKEN;

    cli.commands.map(async(e,i)=>{
        if (req.body.message.text === '/'+cli.cli_name+" "+cli.commands[i].command) {
            let body = {
                chat_id: req.body.message.chat.id,
                text: cli.commands[i].body,
            }
            let headers = {
                "Content-Type": "application/json",
                "Accept": "application/json",
            }
            await axios({
                url: `https://api.telegram.org/bot${tgbot}/sendMessage`,
                method: "POST",
                headers: headers,
                data: body
            })
    
            await axios(`${cli.commands[i].target_url}`)
            .catch(err=>{
                console.log(err)
            })
        }
    })
    
      
    res.status(200).send('OK');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})