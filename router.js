import Router from 'koa-router'
const router = new Router()

router.get('/', async (ctx, next) => {
  await ctx.render('index', { name: 'koa' })
  await next()
})
export default router
