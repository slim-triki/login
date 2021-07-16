function validate(){

    var email=document.getElementById("email ").Value;
    var password=document.getElementById("password").Value;
    if(email=="slim@gmail.com"&& password=="slim" )
    {
        alert ("login success");
        return false;
    }
    else
    {
        alert ("login fail");
    }
}