const intervalToCheck = setInterval(checkToRemoveCancelButton, 1);

function checkToRemoveCancelButton() {
  if (window.location.href.includes("showdown")) {
    let cancelButton = document.querySelector("button[name='undoChoice']");

    if (cancelButton != null) {
      cancelButton.remove();
    }
  }
}
