const webpack = require('webpack')
const net = require('net')
const { exec } = require('child_process')
const webpackDevServer = require('webpack-dev-server')
const fs = require('fs')
const path = require('path')

process.env.PORT = process.env.PORT || '9090'
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

function isPortCheck(port) {
  return new Promise((resolve, reject) => {
    const server = net
      .createServer()
      .once('error', (err) => {
        if (err.code === 'EADDRINUSE') {
          resolve(false) // 端口被占用
        } else {
          console.log(err)
          reject(false)
        }
      })
      .once('listening', (e) => {
        server.close(() => {
          resolve(true)
        })
      })

    server.listen(port, '0.0.0.0')
  })
}

let watcher = null

async function start() {
  return new Promise((res, rej) => {
    try {
      // const flag = await isPortCheck(process.env.PORT)
      // if (!flag) {
      //   process.env.PORT = Number(process.env.PORT) + 1 + ''
      //   return start()
      // }
      process.env.PORT = '9090'
      const envStr = process.env.NODE_ENV == 'development' ? 'dev' : 'prod'
      delete require.cache[require.resolve(`../webpack.${envStr}.ts`)]
      const webpackConfig = require(`../webpack.${envStr}.ts`)
      console.log(webpackConfig.devtool, envStr)
      const erbpackDevServerOption = Object.assign({}, webpackConfig.devServer || {}, {})
      const compiler = webpack(webpackConfig)
      const webpackServer = new webpackDevServer(compiler, erbpackDevServerOption)
      webpackServer.listen(process.env.PORT, '0.0.0.0', (err) => {
        if (err) {
          console.error('启动失败', err)
          return
        }
        if (!watcher) {
          watch(webpackServer, envStr)
        }
        res(webpackServer)
      })
    } catch (e) {
      console.log(e)
    }
  })
}

function watch(server, envStr) {
  const filePath = path.resolve(__dirname, '../', `webpack.${envStr}.ts`)
  if (!watcher) {
    let webpackServer = server
    watcher = fs.watchFile(filePath, (p, n) => {
      webpackServer.close(async () => {
        exec(`taskkill /PID ${process.env.PORT} /F`, async () => {
          webpackServer = await start()
        })
      })
    })
  }
}

function getLocalIp() {
  const os = require('os')
  const networkInterfaces = os.networkInterfaces()
  let localIP = ''

  // 遍历所有网络接口
  for (const key in networkInterfaces) {
    const interfaces = networkInterfaces[key]
    // 过滤 IPv4 地址且不是回环地址
    const filteredInterfaces =
      interfaces.find((iface) => {
        return iface.family === 'IPv4' && !iface.internal
      }) || {}

    if (filteredInterfaces.address) {
      localIP = filteredInterfaces.address
      break // 找到第一个合适的地址即可
    }
  }
  localIP && (process.env.L_IP_ = localIP)
  return localIP
}
start()
getLocalIp()
