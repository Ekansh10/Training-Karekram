function GetData(callback){
    // 1) need XMLHttpRequest object
    var xmlHttpReq = new XMLHttpRequest(); // in the window environment(browser)
    xmlHttpReq.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xmlHttpReq.onreadystatechange = function (){
        if(xmlHttpReq.status === 200 && xmlHttpReq.readyState == 4){
            // console.log(xmlHttpReq.responseText); // body part of response
            callback(xmlHttpReq.responseText);
            
        }
        
    }
    // Read state is the property that browser keep track of. Check on MDN's site

    
    xmlHttpReq.send(); // actually places async call
}