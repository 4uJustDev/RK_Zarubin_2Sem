const express = require('express');
const path = require('path');
const app = express()
const PORT = process.env.PORT || 5500
INFORMATION = []
// middleware
app.use(express.static(path.resolve(__dirname, 'Page')))
app.use(express.json());


app.post('/api/information', (req, res)=>{
	INFORMATION.push(req.body)
	console.log(req.body)
	res.status(201).json(req.body)
	console.log('Сервер получил POST запрос')
})


// Отправка статического документа на клиент
app.get('/', (req,res)=>{
	res.sendFile(path.resolve(__dirname, 'Page', 'index.html'))
	console.log('Сервер отправил статический документ')
})

app.get('/api/information', (req,res)=>{
	
	res.status(200).json(INFORMATION);
})


app.listen(PORT, ()=>{
	console.log(`Server started at port ${PORT}`)
}) 

function isJsonString(str) {
	try {
			JSON.parse(str);
	} catch (e) {
			return false;
	}
	return true;
} 