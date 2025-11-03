// код DeytelengScript/code DeytelengScript
docData = {}
docData.input = document.getElementById('input')
docData.output = document.getElementById('output')
docData.css = document.getElementById('css')
docData.theme = document.getElementById('theme')
docData.console = document.getElementById('console')
docData.sendConsole = document.getElementById('sendConsole')
docData.ProjectName = document.getElementById('ProjectName')
docData.input.value = ''
docData.output.innerHTML = "<p>It's empty!</p>"
docData.console.innerHTML = "<p>It's empty!</p>"
docData.sendConsole.value = ''
docData.ProjectName.value = ''
theme = localStorage.getItem('theme')
if (!theme) {
  theme = 'light'
  localStorage.setItem(theme)
}
apps = localStorage.getItem('apps')
app = {}
themes = {
  "light": "1",
  "dark": "2",
}
themeIcon = {
  "1": "/DeytelengScript/tema-1.svg",
  "2": "/DeytelengScript/tema-2.svg",
}
themeStyle = {
  "1": "/DeytelengScript/main.css",
  "2": "/DeytelengScript/main2.css",
}
function updateTheme(th) {
  docData.css.href = themeStyle[th]
  docData.theme.src = themeIcon[th]
}
updateTheme(theme)
function newTheme() {
  if (theme === 'light') {
    theme = 'dark'
    localStorage.setItem(theme)
  } else {
    theme = 'light'
    localStorage.setItem(theme)
  }
  updateTheme(themes[theme])
}
function SentToConsole() {
  docData.console.innerHTML = `${docData.console}<p>your: ${docData.sendConsole.value}</p>`
}
function GetTypes(znach) {
  TypesGet.i = znach.type
  TypesGet.i2 = znach.value
}
function Run() {
  code = docData.input.value
  RunnerDeytelengScript = {}
  RunnerDeytelengScript.i = 0
  RunnerDeytelengScript.i2 = 'true'
  while (RunnerDeytelengScript.i2) {
    if (RunnerDeytelengScript.i > code.length) {
      RunnerDeytelengScript.i2 = 'false'
    } else {
      RunnerDeytelengScript.i2 = 'true'
    }
    RunnerDeytelengScript.i = RunnerDeytelengScript.i + 1
  }
}
