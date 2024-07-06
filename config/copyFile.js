const fs = require("fs")
const path = require("path")

function copyFile(target, source) {
  if (!fs.existsSync(target)) {
    throw "复制文件不存在"
  }
  if (!fs.existsSync(source)) {
    fs.mkdirSync(source)
  }

  const files = fs.readdirSync(target)
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    const targetPath = path.join(target, file)
    const sourcePath = path.join(source, file)
    if (fs.lstatSync(targetPath).isDirectory()) {
      copyFile(targetPath, sourcePath)
    } else {
      fs.copyFileSync(targetPath, sourcePath)
    }
  }
}
copyFile(
  path.resolve(__dirname, "../", "dist"),
  path.resolve(__dirname, "../", "../", "web", "resumn")
)
