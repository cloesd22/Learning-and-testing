
var age = prompt();



function go(age)
{
    if (age > 18){
        alert("hey there men");
    }else{
        alert("wew boi u a youngin eh?");
    }

}

go(age);

var ptag = document.getElementsByTagName('h1')[0];

while (age >15) {
    window.setTimeout(warp(age), 500);
    age = age+1;
    //alert(age);
    
}



function warp(age)
{
    switch(age)
    {
        case 15:
            ptag.innerHTML="Naw men dis a different boi now";
        break;

            case 16:
            ptag.innerHTML="Look at my java";
        break;

            case 17:
            ptag.innerHTML="My script is amazing";
        break;

            case 18:
            ptag.innerHTML="Give it a look";
        break;

            case 19:
            ptag.innerHTML="tis amazing";
        break;

            case 20:
            ptag.innerHTML="blow every bellliii";
        break;
    }


}

