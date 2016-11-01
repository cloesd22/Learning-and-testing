var $ = require('jQuery');

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");
var colorin = document.getElementById("color");

var placePick = document.getElementById("placechoose");

var francePic = document.getElementById("francepic");
var germanyPic = document.getElementById("germanypic");
var icelandPic = document.getElementById("icelandpic");
var chinaPic = document.getElementById("chinapic");

var checklist = document.getElementById("stufftobring");
var listitems = checklist.querySelectorAll("li"); 
var inputs = checklist.querySelectorAll("input");
var spans = checklist.querySelectorAll("span");

var placevalue = placePick.options[placePick.selectedIndex].value;



numOne.addEventListener("input",add);
numTwo.addEventListener("input",add);
colorin.addEventListener("input",colorchange);

for (i=0; i<listitems.length;i++)
    {
        listitems[i].addEventListener("click", showfield)
        inputs[i].addEventListener("blur", blurfield)
        inputs[i].addEventListener("keypress", itemKeypress)
     
        
    }


function showfield(){
    
   
    this.className="edit";
    var input = this.querySelector("input");
    input.focus();
    input.setSelectionRange(0,input.value.length);
    

}

function blurfield(){
    
    this.parentNode.className="";
    this.previousElementSibling.innerHTML=this.value;
}

function itemKeypress(event){
    console.log(event);
    
    if (event.which==13){
        this.parentNode.className="";
        this.previousElementSibling.innerHTML=this.value;
        
    }
    
}


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
        
        
        pic.addEventListener('mouseover',zoomPic);
        pic.addEventListener('mouseleave',closePic);
        pic.classList.add("yabing");
  
        
        $(document).ready(function()
        {
            $(pic).click(function(){
            $(".yabing").fadeOut(1000,function(){ $(this).classList=""; console.log(this.classList); this.style.display="initial";});
            });

        });

 

    }

    function zoomPic()
    {
 
        this.style.width="1000px";
        this.style.height="auto";

    }

    
    function closePic()
    {

        this.style.width="50px";
        this.style.height="50px";

    }


 

