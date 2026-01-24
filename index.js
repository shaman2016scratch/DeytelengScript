// код DeytelengScript/code DeytelengScript
const url = new URL(window.location)
const searchParams = url.searchParams
let docData = {}
docData.input = document.getElementById('input')
docData.output = document.getElementById('output')
docData.css = document.getElementById('css')
docData.theme = document.getElementById('theme')
docData.console = document.getElementById('console')
docData.sendConsole = document.getElementById('sendConsole')
docData.ProjectName = document.getElementById('ProjectName')
docData.Lang = document.getElementById('lang')
docData.pocket = document.getElementById('pocket')
docData.input.value = ''
docData.output.innerHTML = "<p>It's empty!</p>"
docData.console.innerHTML = "<p>Site started!</p>"
docData.sendConsole.value = ''
docData.ProjectName.value = ''
docData.pocket.value = ''
let consoleLang = "<p>Site started!</p>"
let theme = localStorage.getItem('theme')
if (!theme) {
  theme = 'light'
  localStorage.setItem('theme', theme)
}
let apps = localStorage.getItem('apps')
let apps2 = localStorage.getItem('apps2')
if (!apps) {
  localStorage.setItem('apps', [])
  localStorage.setItem('apps2', {})
  apps = localStorage.getItem('apps')
  apps2 = localStorage.getItem('apps2')
}
let app = {}
let themes = {
  "light": 1,
  "dark": 2,
}
let themeIcon = {
  1: "/DeytelengScript/tema-1.svg",
  2: "/DeytelengScript/tema-2.svg",
}
let themeStyle = {
  1: "/DeytelengScript/main.css",
  2: "/DeytelengScript/main2.css",
}
function updateTheme(th) {
  docData.css.href = themeStyle[th]
  docData.theme.src = themeIcon[th]
}
updateTheme(themes[theme])
function newTheme() {
  if (theme === 'light') {
    theme = 'dark'
  } else {
    theme = 'light'
  }
  localStorage.setItem('theme', theme)
  updateTheme(themes[theme])
}
function SendToConsole() {
  docData.console.innerHTML = `${consoleLang}<p>your: ${docData.sendConsole.value}</p>`
  consoleLang = `${consoleLang}<p>your: ${docData.sendConsole.value}</p>`
}
function ImportCode() {
  if (!apps.includes(docData.pocket.value)) {
    apps.push(docData.pocket.value)
  }
  apps2[docData.pocket.value] = docData.input.value
  localStorage.setItem('apps', apps)
  localStorage.setItem('apps2', app2)
}
function ExportCode() {}
function GetTypes(znach) {
  TypesGet.i = znach.type
  TypesGet.i2 = znach.value
}
function Run() {
  let code = JSON.parse(docData.input.value)
  let RunnerDeytelengScript = {}
  RunnerDeytelengScript.i = 0
    for(RunnerDeytelengScript.i = 0; RunnerDeytelengScript.i < code.length) {}
}
