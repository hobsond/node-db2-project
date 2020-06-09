const app = require('./server/server')
const Port = 5500
const carRoutes = require('./data/carRoutes')

app.use('/api/cars', carRoutes)

app.listen(Port, ()=>console.log('now running on ' + Port))