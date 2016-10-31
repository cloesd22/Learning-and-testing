
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

