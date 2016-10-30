var age = prompt("Ay men, you old bra? How old men?");

ageNUM = Number(age);


var headingtag = document.getElementsByTagName("h3")[0];


throb = setInterval(changename,1000);


function changename(){
   

    switch (ageNUM)
        {
        case 15:
               
        headingtag.innerHTML = "Ya";
                document.body.style.background = "white";
                
                 ageNUM=ageNUM+1;
        break;
                
        case 16:
               
        headingtag.innerHTML = "Bing";
               
                 ageNUM=ageNUM+1;
        break;
                
                case 17:
               
        headingtag.innerHTML = "Doogle";
               
                 ageNUM=ageNUM+1;
        break;
                
                case 18:
                
        headingtag.innerHTML = "Doo";
                
                ageNUM=15;
        break;
    
        }

}


