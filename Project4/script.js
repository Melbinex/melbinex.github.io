document.forms.publish.onsubmit = function() {
    var message = this.message.value;
    console.log(message)
    pi = 3.14
    var message2 = Math.pow(message, 2)
    S = message2 / 4 * pi
    alert(S)
    return false;
  };