const express = require('express')
const app = express()
const port = 3000

app.get('/',(req, res) => {
    res.send('Server del mio blog')
})

app.listen(port, () => {
    console.log(`app listening on port ${port}`)
})

const postArray = [
    {
        titolo: 'Ciambellone',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lacus ac orci accumsan euismod a at nisi. Duis luctus nibh nibh, non scelerisque velit pharetra sit amet. Sed vitae mollis lectus.',
        img: './images/ciambellone.jpeg',
        tags: ['dolci', 'cucina', 'fatto in casa']
    },
    {
        titolo: 'Crackers alla barbabietola',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lacus ac orci accumsan euismod a at nisi. Duis luctus nibh nibh, non scelerisque velit pharetra sit amet. Sed vitae mollis lectus.',
        img: './images/cracker-barbabietola.jpeg',
        tags: ['snack salati', 'cucina', 'fatto in casa']
    },
    {
        titolo: 'Pane fritto dolce',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lacus ac orci accumsan euismod a at nisi. Duis luctus nibh nibh, non scelerisque velit pharetra sit amet. Sed vitae mollis lectus.',
        img: './images/pane_fritto_dolce.jpeg',
        tags: ['dolci', 'cucina', 'fatto in casa']
    },
    {
        titolo: 'Pasta alla barbabietola',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lacus ac orci accumsan euismod a at nisi. Duis luctus nibh nibh, non scelerisque velit pharetra sit amet. Sed vitae mollis lectus.',
        img: './images/pasta_barbabietola.jpeg',
        tags: ['primi piatti', 'cucina', 'fatto in casa']
    },
    {
        titolo: 'Torta paesana',
        contenuto: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vel lacus ac orci accumsan euismod a at nisi. Duis luctus nibh nibh, non scelerisque velit pharetra sit amet. Sed vitae mollis lectus.',
        img: './images/torta_paesana.jpeg',
        tags: ['dolci', 'dolci tradizionali', 'cucina', 'fatto in casa']
    }
]

app.get('/bacheca', (req, res) => {
    res.json(postArray)
})