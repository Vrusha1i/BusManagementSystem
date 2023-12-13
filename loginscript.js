function authenticate(){
    var authorised;

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;

    if(username=="vrushali" && password=="vp123"){
       authorised=true;

    }else
    {
        authorised=false;
        alert("Sorry,password is incorrect");
    }
    return authorised;
}
