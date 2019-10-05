async function sendRequest(url,data){

    function formEncode(obj) {
    var str = [];
    for(var p in obj)
    str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    return str.join("&");
    }
    
    var dat = await fetch(url, {
    method: 'POST',
    headers: { "Content-type": "application/x-www-form-urlencoded"},
     credentials: "include",
    body: formEncode(data)
    }).then(res => res.json())
    .then(response => JSON.stringify(response))
    .catch(error => console.error('Error: '+error));
    
    return JSON.parse(dat);
    
}

let check = sendRequest("./backend/checkSession.php", {});
check.then(function(data){
    if (data['error'] != 0){
        window.location.assign("/index.html")
    }
})
