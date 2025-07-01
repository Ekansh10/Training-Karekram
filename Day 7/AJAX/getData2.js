
function GetData(){
    return new Promise(function(resolve, reject){ // this is called promise's executor function, it takes resolve and reject
        var xmlHttpReq = new XMLHttpRequest(); // in the window environment(browser)
        xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
        xmlHttpReq.onreadystatechange = function (){
            if(xmlHttpReq.status === 200 && xmlHttpReq.readyState == 4){
                resolve(xmlHttpReq.responseText);
            }
            else{
                reject("Error: " + xmlHttpReq.status);
            }
        }
        // Read state is the property that browser keep track of. Check on MDN's site


        xmlHttpReq.send(); // actually places async call
    });
}