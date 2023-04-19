var textBox = document.getElementById("myTextBox");
textBox.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    var textBoxValue = textBox.value;
    textBoxValue=textBoxValue.toLowerCase();
    textBoxValue=textBoxValue.trim();
    if(textBoxValue=="shirt" || textBoxValue=="tshirt" || textBoxValue=="jeans")
    window.location.href = "menin";
    else if(textBoxValue=="kurta" || textBoxValue=="dresses" || textBoxValue=="sarees")
    window.location.href = "womenin";
    else if(textBoxValue=="bed linen" || textBoxValue=="art" || textBoxValue=="decor")
    window.location.href = "homein";
    else
    window.location.href = "null";
  }
});