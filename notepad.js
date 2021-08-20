const downloadToFile = (content, filename, contentType) => {
    const a = document.createElement("a")
    const file = new Blob([content], { type: contentType })
  
    a.href = URL.createObjectURL(file)
    a.download = filename
    a.click()
  
    URL.revokeObjectURL(a.href)
  }
  document.querySelector("#btnSave").addEventListener("click", () => {
    const textArea = document.querySelector("#text")
  
    downloadToFile(textArea.value, (document.querySelector("#title").value|| "note") + ".txt", "text/plain")
  })
  var observe = function (element, event, handler) {
      element.addEventListener(event, handler, false)
  }
  var text = document.getElementById("text")
    text.style.height = "auto"
    text.style.height = Math.max(text.scrollHeight, window.innerHeight - 108)+"px"
  if (window.localStorage) {
    const input = document.getElementById("text")
    input.value = localStorage.value || ""
    input.addEventListener("input", function () {
      localStorage.setItem("value", input.value)
    text.style.height = "auto"
    text.style.height = Math.max(text.scrollHeight, window.innerHeight - 108)+"px"
    }
    )
  }
  function toggleSpellCheck() {
    const value = document.getElementById("text").getAttribute("spellcheck")
    document.getElementById("text").setAttribute("spellcheck", value == "false" ? "true" : "false")
  }
  const inputElement = document.getElementById("file")
  inputElement.addEventListener("change", handleFiles, false)
  function handleFiles() {
    // const fileList = this.files
    const file = document.getElementById("file").files[0]
    if (file) {
      var reader = new FileReader()
      reader.readAsText(file, "UTF-8")
      reader.onload = function (evt) {
        document.querySelector("#text").value = evt.target.result
      }
      reader.onerror = function (evt) {
        document.querySelector("#text").value = "error reading file"
      }
    }
  }
  function copyToClipboard() {
    var copyText = document.getElementById("text")
    copyText.select()
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy")
  }