var fetchurl = "http://localhost:4730/"
function getFetchUrl() {
	return fetchurl;
}


function getCurrentWebPageUrl()
{
	return window.location.href;
}



function getParams() {
	return "url="+getCurrentWebPageUrl
}


function getData(var data){
var xmlhttp = new XMLHttpRequest();
var url = getFetchUrl();

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var responseText = JSON.parse(xmlhttp.responseText);
        myFunction(responseText);
    }else {
			errorHandler();
	}
};
xmlhttp.open("GET", url + "?"+getParams() , true);
xmlhttp.send();

function myFunction(response) {
	setDataOnIcon(response.count)
}
}


function setDataOnIcon(data) {
	chrome.browserAction.setbadgeText({text : data});
	// body...
}


function errorHandler() {
	setDataOnIcon("1")
}
