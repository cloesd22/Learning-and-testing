var age = prompt("Ay men, you old bra? How old men?");

ageNUM = Number(age);


var headingtag = document.getElementsByTagName("h3")[0];
var SentenceSw = document.getElementsByTagName("p")[0];

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var colorin = document.getElementById("color");

var placePick = document.getElementById("placechoose");

var francePic = document.getElementById("francepic");
var germanyPic = document.getElementById("germanypic");
var icelandPic = document.getElementById("icelandpic");
var chinaPic = document.getElementById("chinapic");

var placevalue = placePick.options[placePick.selectedIndex].value;

throb = setInterval(changename,1000);


function changename(){
   

    switch (ageNUM)
        {
            case 15:

                headingtag.innerHTML = "Ya";
                SentenceSw.innerHTML="Ya is a test to see if anything loads before the head tester";
               
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


numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);
colorin.addEventListener("input",colorchange);




function add()
{
    
    var two = parseFloat(numTwo.value)||0;
    var one = parseFloat(numOne.value)||0;
    var sum = one + two;
    addSum.innerHTML = "your sum is " + sum;
    
  
}

function colorchange(){
    
     document.body.style.background = colorin.value;
}

placePick.addEventListener("input",showpic);
                           
function showpic()
{
    var allimages = document.querySelectorAll("img");
    
    for (i=0;i<allimages.length;i++)
        {
            allimages[i].className="hide";
            
        }
    
    
    var picid = (this.options[this.selectedIndex].value);
    
    var pic = document.getElementById(picid);
        
    if (pic.className==="hide"){
        pic.className="";
        
    }else{
        pic.className="hide";    
}
    
    

}

