var age = prompt("Ay men, you old bra? How old men?");

ageNUM = Number(age);


var headingtag = document.getElementsByTagName("h1")[0];


throb = setInterval(changename,1);


function changename(){
   

    switch (ageNUM)
        {
        case 15:
               
        headingtag.innerHTML = "Ya";
                document.body.style.background = "blue";
                
                 ageNUM=ageNUM+1;
        break;
                
        case 16:
               
        headingtag.innerHTML = "Bing";
                document.body.style.background =  "red";
                 ageNUM=ageNUM+1;
        break;
                
                case 17:
               
        headingtag.innerHTML = "Doogle";
                document.body.style.background =  "white";
                 ageNUM=ageNUM+1;
        break;
                
                case 18:
                
        headingtag.innerHTML = "Doo";
                document.body.style.background =  "yellow";
                ageNUM=15;
        break;
    
        }

}


