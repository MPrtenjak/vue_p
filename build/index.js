const fs = require('fs')
const path = require('path')
const _ = require('underscore')

const settings = require('./settings')
const fileWalker = require('./file-walker')
const filePreprocessor = require('./file-preprocessor')

function isVueOrJSFile({file}) {
  const ext = path.extname(file)
  return ((ext === '.vue') || (ext === '.js'))
}

function process_group_sort_files(vuePagesPathName, files) {
  const fp = filePreprocessor(vuePagesPathName);

  const pages = _.chain(files)
    .map(file => fp(file))
    .sortBy((file) => file.sort)
    .sortBy((file) => file.folderSort)
    .map((page, idx) => { page.index = idx; return page })
    .toArray()
    .value()

  const folders = _.chain(pages)
    .groupBy(page => page.folderSort)
    .mapObject(group => _.sortBy(group, 'sort'))
    .mapObject((group, key) => { return {
      id: key,
      pages: _.map(group, 'index'),
      folder: group[0].folder,
      caption: group[0].folderCaption
    }})
    .toArray()
    .value()

  return { pages, folders }
}

function run() {
  const sett = settings.get()

  fileWalker(0, sett.vuePagesPathName, isVueOrJSFile, (err, files) => {
    if (err) {
      console.log('ERROR: ', err)
      return
    }

    const groupedResults = process_group_sort_files(sett.vuePagesPathName, files)
    fs.writeFile(sett.outputFileName, JSON.stringify(groupedResults), 'utf8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  })
}

run()