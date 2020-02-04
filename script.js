// this was learned from https://www.youtube.com/watch?v=rymG9UmPuhM
// make sure Chrome is in Developer Mode and loads the extension
replaceText(document.body);

// Replace Coronavirus text with silly words and change foreground & background color
/*
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span style="background-color: black; color: black;">$1</span>'
      );
      element.replaceWith(newElement);
            
      // element.parentElement.style.color = "red";
      // element.parentElement.style.backgroundColor = "yellow";
      // element.textContent = " Meow Moo Moo Meow!!!! ";  

    }
  }
}
*/

// Make Coronavirus flash like a rainbow
function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    if (element.textContent.match(/coronavirus/gi)) {
      const newElement = document.createElement("span");
      newElement.innerHTML = element.textContent.replace(
        /(coronavirus)/gi,
        '<span class="rainbow">$1</span>'
      );
      element.replaceWith(newElement);
    }
  }
}
