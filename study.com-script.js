//In study.com, the actual content is present on the site, just hidden
//By changing a few attributes, this script displays the all the 'hidden'
//content on the page

(function() {
	
	//Reveals the full document
	document.querySelector("#articleMain > div.hidden").setAttribute('class', 'visible');
	document.querySelector("#articleMain").setAttribute('class', 'visible');

	//Hides the paywall
	document.querySelector("#mainArticle > div.product-wizard-paywall.transcript").remove();
	document.querySelector("#mainArticle > div.article-cutoff-div").remove();


})();
