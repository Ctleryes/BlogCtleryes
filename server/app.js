const koa = require('koa2');
const router = require('koa-router')();
const axios = require('axios');
const bodyParser = require('koa-bodyparser')
const { query } = require('./data')
const fs = require('fs');
const serve = require('koa-static');
const path = require('path');
const send = require('koa-send');


const app = new koa();
const staticPath = '/static';
const stPath = path.join(__dirname, staticPath)
const main = serve(stPath);
app.use(main);

// 使用ctx.body解析中间件
app.use(bodyParser())
app
  .use(router.routes())
  .use(router.allowedMethods());


router.get('/', async ctx => {
  ctx.response.type = 'html';
  ctx.response.body = await fs.createReadStream('/static/index.html', 'utf8');
})

let rs = []
/****
 * 增加
 */
router.get('/add', async ctx => {
  const len = rs.length;
  rs.push({
    key: ctx.request.query
  })
  const lens = rs.length;

  if (lens === len) {
    ctx.body = 'error';
  } else {
    ctx.body = 'success';
  }
})

router.get('/delete', async ctx => {
  const len = rs.length;
  rs.splice(index, 1);
  const lens = rs.length;
  console.log(rs);
  if (lens === len) {
    ctx.body = 'error';
  } else {
    ctx.body = 'success';
  }
})
router.get('/list', async ctx => {
  ctx.body = rs;
})

router.get('/ios13', async ctx => {
  var fileName = 'iOS_iPadOS_13_Beta_Profile.mobileconfig';
  // ctx.attachment(path);
  ctx.set('Content-disposition', 'attachment;filename=' + 'iOS_iPadOS_13_Beta_Profile.mobileconfig');
  await send(ctx, fileName, { root: stPath });

})

router.get('/showtable', async ctx => {
  const sql = 'SHOW TABLES';
  console.log(result.RowDataPacket)
  ctx.body = result;
})
//数据库操作
router.post('/sql', async ctx => {
  const { sql } = ctx.request.body;
  const result = await query(sql);
  ctx.body = result
})

//获取网易的新闻

router.get('/news', async ctx => {
  const { page = 1, count = 20 } = ctx.request.body;
  const { data } = await axios.post('https://api.apiopen.top/getWangYiNews', {
    page,
    count
  })
  ctx.body = data
})


router.post('/send', async ctx => {
  const { text, desp } = ctx.request.body;
  let url = 'https://sc.ftqq.com/SCU49862Te25589db29a99e11d38f0970198591785cc2b00486a90.send'
  url = `${url}?text=${text}&desp=${desp}`
  const { data } = await axios.get(encodeURI(url))
  ctx.body = data
})

app.on('error', (err, ctx) => console.error('server error', err));
app.listen(3001)