function typeDeleteRepeat(text, delay) {
  let index = 0;
  let deleting = false;
  let element = document.getElementById('text');

  function type() {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, delay);
    } else {
      deleting = true;
      setTimeout(deleteText, 1000);
    }
  }

  function deleteText() {
    if (deleting && index >= 0) {
      element.innerHTML = text.substring(0, index);
      index--;
      setTimeout(deleteText, delay);
    } else {
      deleting = false;
      index = 0;
      setTimeout(type, 500);
    }
  }

  type();
}

typeDeleteRepeat("Escolano Allan.", 150)