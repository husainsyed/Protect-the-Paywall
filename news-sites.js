//Async function to create a 2 second delay
//to make sure data is fully parsed 
(async function() {
  //Creates a request to access the source code of the page
  const http = new XMLHttpRequest();
  http.open("GET", document.URL);
  http.send();
  
  //Waits 2 second before pushing the data
  await new Promise(r => setTimeout(r, 2000));

  //replaces the inner html with the source code
  document.querySelector('html').innerHTML = http.response;

  //For sites such as LA Times & The Economist, the paywall 
  //is removed after executing the above script but
  //the scroll-bar gets locked .
  
  //document.write() function resolves the issue
  //For other sites, we do not need to use this line
  //document.write(http.response)  

})();
