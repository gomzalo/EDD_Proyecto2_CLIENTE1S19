function httpPost(url, obj, callback){
	var req = new XMLHttpRequest();
	req.open("POST", url, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			callback(req.responseText);
		}
	}
	req.send(obj);
}

function httpGet(url, callback){
	var req = new XMLHttpRequest();
	req.open("GET", url, true);
	req.setRequestHeader('Content-Type', 'application/json');
	req.onreadystatechange = function(){
		if(req.readyState == 4 && req.status == 200){
			callback(req.responseText);
		}
	}
	req.send();
}