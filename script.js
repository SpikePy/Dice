var min
var max

function test() {
  min = parseInt(document.getElementById("min").value)
  max = parseInt(document.getElementById("max").value)

  if (isNaN(min) === true || isNaN(max) === true) {button.disabled = true}
  else                                            {button.disabled = false}
}

function random() {
  result.value = Math.round( min + Math.random() * (max - min) )
}
