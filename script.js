var min
var max

function test() {
  min = parseInt(document.getElementById("min").value)
  max = parseInt(document.getElementById("max").value)

  if (isNaN(min) === true || isNaN(max) === true) {button.disabled = true}
  else                                            {button.disabled = false}
}

function random() {
  // Make result cell blink once for 200ms
  result.style.backgroundColor = "rgb(220, 220, 220)"

  result.value = Math.round( min + Math.random() * (max - min) )

  // Make result cell blink once for 200ms
  setTimeout(() => {
    result.style.backgroundColor = "rgb(240, 240, 240)"
  }, 200);
}
