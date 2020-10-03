const bodyParser = require('body-parser')
const app = require('express')()
const fs = require('fs')
const { exec } = require('child_process')

app.use(bodyParser.json())
app.all('/article-upload', (req, res) => {
  const { filename, content } = req.body
  fs.writeFile(`./content/articles/${filename}.md`, `${content}`, error => {
    if (!error) {
      console.log('文件寫入成功')
    } else {
      console.log('error' + error)
    }
  })

  exec('pm2 restart all', (error, data, getter) => {
    if (error) {
      console.log('error', error.message)
      return
    }
    if (getter) {
      console.log('data', data)
      return
    }
    console.log('data', data)
  })

  res.json({
    data: {
      payload: {
        status: 'success',
        message: 'ok'
      }
    }
  })
})

module.exports = app
