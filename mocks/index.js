const express = require('express')
const app = express()

app.get('/api/users', function (req, res) {
	res.send(['First User', 'Second User'])
})
app.listen(3001)
