import Koa from 'koa'
import views from 'koa-views'
import router from './router'
const app = new Koa()
app.use(views(__dirname + '/views/', { extension: 'pug' }))
app.use(router.routes())

app.listen(process.env.PORT || 3000)
console.log('Start.')
