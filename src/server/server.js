const express = require('express')
const path = require('path')

const startServer = (options) => {
  const { port, public_path= 'public' } = options;
  
  const app = express()
   // # middleware provides the available static content
   app.use(express.static(public_path))
   
   app.get('*', (req, res) => {
    const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
    res.sendFile(indexPath);
   })
   
   app.listen(port, () => {
     console.log(`Server started at PORT: ${port}`);
   })
}


module.exports = {
  startServer
}