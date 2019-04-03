const path = require('path')

module.exports = {
  get: () => {
    var pathName = path.dirname(__filename)
    const vuePagesPathName = path.normalize(path.join(pathName, '../pages/vue'))
    const assetsPathName = path.normalize(path.join(pathName, '../assets'))
    const outputFileName = path.join(assetsPathName, '/pages.json')

    return { vuePagesPathName, outputFileName }
  }
}
