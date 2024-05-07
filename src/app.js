const { envs } = require('../config/env')
const { startServer } = require('./server/server')

const main = () => {
  startServer({
    port: envs.PORT,
    public_path: envs.PUBLIC_PATH
   })
}

// * (Self-Executing Anonymous Function) -> IIFE
(async () => {
    main()
}) ()
