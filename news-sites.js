//Basic idea: Since majority of the paywalls are an external overlay
//to the site, meaning they do not actually exist in the
//source code, this script gets the source code of the site and writes it over the page. 

(async function() {
  //Creates a request to access the source code of the page
  const http = new XMLHttpRequest();
  http.open("GET", document.URL);
  http.send();
  
  //Waits 2 second before pushing the data
  await new Promise(r => setTimeout(r, 2000));

  //replaces the inner html with the source code
  document.querySelector('html').innerHTML = http.response;

  //For sites such as LA Times and The SD Tribune,
  //the paywall is removed but the scroll-bar gets locked
  //after executing the above script.
  //document.write() function resolves the issue
  
  //Since NY Times does not lock the scroll bar
  //we wouldn't need to use this on NY Times
  document.write(http.response)  

})();
