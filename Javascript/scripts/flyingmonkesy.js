var age = prompt("Ay men, you old bra? How old men?");

ageNUM = Number(age);


var headingtag = document.getElementsByTagName("h3")[0];
var SentenceSw = document.getElementsByTagName("p")[0];



throb = setInterval(changename,1000);


function changename(){
   

    switch (ageNUM)
        {
            case 15:

                headingtag.innerHTML = "Ya";
                SentenceSw.innerHTML="Ya is a test to see if anything loads before the head tester";
                document.body.style.background = "white";
                ageNUM=ageNUM+1;
            break;

            case 16:

                headingtag.innerHTML = "Bing";
                SentenceSw.innerHTML="Ya Bing a test to see if anything loads before the head tester";       
                ageNUM=ageNUM+1;
            break;

            case 17:

                headingtag.innerHTML = "Doogle";
                SentenceSw.innerHTML="Ya Bing a test to see if Doogle loads before the head tester";          
                ageNUM=ageNUM+1;
            break;

            case 18:

                headingtag.innerHTML = "Doo";
                SentenceSw.innerHTML="Ya Bing a test to see if Doogle loads before the Doo tester";         
                ageNUM=15;
            break;
    
        }

}


