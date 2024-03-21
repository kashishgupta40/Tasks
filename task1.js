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
        // Use const for variables that won't be reassigned
        const inputElement = document.getElementById('name'),
              // Add default value for the query parameter
              baseUrl = 'task1.html',
              queryParameter = inputElement.value || '';
        // Use template literals for string concatenation
        const url = `${baseUrl}?q=${encodeURIComponent(queryParameter)}`;
        // Use window.location.href instead of document.location.href
        window.location.href = url;
    }