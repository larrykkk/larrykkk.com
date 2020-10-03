const bodyParser = require('body-parser')
const app = require('express')()
const fs = require('fs')

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
