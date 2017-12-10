// Get the settings from attributes
var searchKey = $("#cse").attr("data-key");
var lang = $("#cse").attr("data-lang");
window.__gcse = {
  callback: searchCallback
};
function searchCallback(){
	$("#cse").hide();
}
(function () {
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = 'https://cse.google.com/cse.js?language='+ lang + '&cx=' + searchKey;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
})();
function parseParamsFromUrl() {
  var params = {};
  var parts = window.location.search.substr(1).split('&');
  for (var i = 0; i < parts.length; i++) {
    var keyValuePair = parts[i].split('=');
    var key = decodeURIComponent(keyValuePair[0]);
    params[key] = keyValuePair[1] ?
        decodeURIComponent(keyValuePair[1].replace(/\+/g, ' ')) :
        keyValuePair[1];
  }
  return params;
}
var urlParams = parseParamsFromUrl();
var queryParamName = 'q';
if (urlParams[queryParamName]) {
  $("#search").val(urlParams[queryParamName])
  $("#menu-nav_lang a").each(function(index,item){
      var link = $(item).attr("href");
      // Add the query string
      link = link + window.location.search;
      $(item).attr("href", link);
  });
}