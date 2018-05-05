let Koa = require('koa')

let app = new Koa()


app.use(async (ctx, next) => {
    await next()
    ctx.body = 'hello, world'
})
app.listen(3000, () => {
    console.log('server started on port 3000')
})