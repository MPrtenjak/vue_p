const fs = require('fs')
const path = require('path')

module.exports = filePreprocessor

const pathSeparator = new RegExp('\\' + path.sep, 'g')
const htmlReg = new RegExp(/<template>([^]*)<\/template>/m)
const jsReg = new RegExp(/<script>([^]*)<\/script>/m)
const fileSortReg = new RegExp(/(\d+)/)
const commentsReg = new RegExp(/\/\*\*([^]*)\*\*\/([^]*)/m)
const commentsCaptReg = new RegExp(/caption:(.*)/)
const commentsDescReg = new RegExp(/description:(.*)/)
const slideTextReg = new RegExp(/slide-text-start([^]+)slide-text-end/)

function getFileContent(file) {
  return fs.readFileSync(file, {encoding: 'utf8'})
}

function processComments(comments) {
  var caption = null
  var description = null

  if (comments) {
    comments = comments[1]
    caption = commentsCaptReg.exec(comments)
    description = commentsDescReg.exec(comments)
    slideText = slideTextReg.exec(comments)

    if (caption) caption = caption[1].trim()
    if (description) description = description[1].trim()
    if (slideText) slideText = slideText[1].split('\r\n').filter((line) => line)
  }

  return { caption, description, slideText }
}

function processJSFile(fileName, fileContent) {
  var comments = commentsReg.exec(fileContent)

  return {
    html: null,
    js: (comments) ? comments[2] : fileContent,
    ...processComments(comments)
  }
}

function processVueFile(fileName, fileContent) {
  var html = htmlReg.exec(fileContent)
  var js = jsReg.exec(fileContent)
  var comments = commentsReg.exec(fileContent)

  return {
    html: (html) ? html[1] : null,
    js: (js) ? js[1] : null,
    fileName,
    ...processComments(comments)
  }
}

function getFolderInfo (folder) {
  if (folder == 'constants') return { sort: 10, caption: 'Constants' }
  if (folder == 'functions') return { sort: 20, caption: 'Structure of VUE single file' }
  if (folder == 'reactivity') return { sort: 30, caption: 'Reactivity' }
  if (folder == 'wtf') return { sort: 40, caption: 'What The F..k?' }
  if (folder == 'watch') return { sort: 50, caption: 'Watch' }
  if (folder == 'computed') return { sort: 60, caption: 'Computed' }
  if (folder == 'next-tick') return { sort: 70, caption: 'nextTick' }

  return  { sort: 1000, caption: 'UNKNOWN!' }
}

function filePreprocessor(vuePagesPathName) {
  const baseLen = vuePagesPathName.length

  return function(file) {
    const baseName = file.substring(baseLen).replace(pathSeparator, '/')
    const fileExt = baseName.split('.')
    const folders = baseName.split('\/')

    const ext = fileExt[1]
    const link = (ext == 'vue') ? `/vue` + fileExt[0] : null
    const folder = folders[1]
    const fileName = folders[2]

    const fileContent = getFileContent(file)
    const fileInfo = (ext == 'vue') ? processVueFile(fileName, fileContent) : processJSFile(fileName, fileContent)
    const sort = fileSortReg.exec(fileName)
    fileInfo.caption = fileInfo.caption || fileName

    const folderInfo = getFolderInfo(folder)

    const retValue = {
      folder,
      folderCaption: folderInfo.caption,
      folderSort: folderInfo.sort,
      baseName,
      link,
      ext,
      sort: (sort) ? (1) * sort[1] : 100,

      ...fileInfo
    }

    return retValue
  }
}
