'use strict'
import Koa from 'koa'
import views from 'koa-views'
import router from './router'
import serve from 'koa-static'
const app = new Koa()
app.use(
  views(__dirname + '/views/', { extension: 'hbs', map: { hbs: 'handlebars' } })
)
app.use(router.routes())
app.use(serve(__dirname + '/public'))

app.listen(process.env.PORT || 3000)
console.log('Start.')
