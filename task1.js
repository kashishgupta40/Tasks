function ValidatePassword() {

    var password = prompt("Please enter password to proceed", "");
    
    if (password == "Admin Password") {
      return true;
    }
    return false;}
    var showDivLength = function () {
        var div =  document.getElementsByTagName('div');
        divLength = div.length;
        if (divLength > 0)
            div[divLength-1].innerHTML = divLength;
        return divLength;
    }
    
function testJS() {
    var b = document.getElementById('name').value,
            url = 'task1.html' + encodeURIComponent(b);
        
        document.location.href = url;
    }
    