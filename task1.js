function validatePassword() {
    // Use const for variables that won't be reassigned
    const password = prompt("Please enter password to proceed", "");
    if (password === "Admin Password") {
      return true;
    }
    return false;
  }
  
  function showDivLength() {
    const divs = document.getElementsByTagName("div");
    const divLength = divs.length;
    if (divLength > 0) {
      divs[divLength - 1].innerHTML = divLength;
    }
    return divLength;
  }
  
  function testJS() {
    // Use const for variables that won't be reassigned
    const inputElement = document.getElementById("name");
    const baseUrl = "task1.html";
    const queryParameter = inputElement.value || "";
  
    // Use template literals for string concatenation
    const url = `${baseUrl}?q=${encodeURIComponent(queryParameter)}`;
  
    // Use window.location.href instead of document.location.href
    window.location.href = url;
  }
  
  // Call the functions when the page loads
  if (validatePassword()) {
    const divLength = showDivLength();
    console.log(`There are ${divLength} div elements on the page.`);
    testJS();
  }