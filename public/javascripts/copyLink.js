//function 裡面的 console.log不會出現在終端機 , 而是在開發者工具的 console裡面出現
function copyLink() {
  const text = document.querySelector('#shortenUrl')
  text.select()
  navigator.clipboard.writeText(text.value)
  alert("Copied the text: " + text.value)
}

