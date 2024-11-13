let result = {
    "tag": "",
    "free": false,
    "role": false,
    "user": "akshaykumar",
    "email": "akshaykumar@codewithharry.com",
    "score": 0.64,
    "state": "unknown",
    "domain": "codewithharry.com",
    "reason": "no_connect",
    "mx_found": true,
    "catch_all": null,
    "disposable": false,
    "smtp_check": false,
    "did_you_mean": "",
    "format_valid": true
  }

submitBtm.addEventListener("click",async(e)=>{
    let taskinput = document.getElementById("username");

    if (taskinput.value == "") {
        alert("Please enter a valid email! Boss!😎");
        return;  // Prevent form submission if email is empty
    }
    
    e.preventDefault()
    console.log("Clicked!")
    resultCont.innerHTML = `<img width="90" src="Spinner@1x-1.0s-200px-200px.svg" alt="">`
    
    let email = document.getElementById("username").value
    let url = `https://api.emailvalidation.io/v1/info?apikey=ema_live_mrfEmmMLzofbsIUegxtWERqGJRyuPXdFp1hdiNGa&email=${email}`
    
    let res = await fetch(url)
    let result = await res.json()

    let str = ``
    for(key of  Object.keys(result)){
        if(result[key] !=="" && result[key]!==" "){
            str += `<div>${key}: ${result[key]}</div>`
        } 
    }
  
    console.log(str);
  
    resultCont.innerHTML = str;
})  




  