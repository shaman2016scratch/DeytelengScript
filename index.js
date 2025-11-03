docData = {}
docData.input = document.getElementById('input')
docData.output = document.getElementById('output')
docData.css = document.getElementById('css')
docData.theme = document.getElementById('theme')
docData.console = document.getElementById('console')
docData.sendConsole = document.getElementById('sendConsole')
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
function Run() {
  code = docData.input.value
}
