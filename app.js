// lets start with this sample JSON data

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => (json = data));

//lets select some queries

var box = document.querySelectorAll(".cb");
var optionValue = document.querySelectorAll(".optionValue");
var pNo = document.querySelectorAll(".pNO");
var sNo = document.querySelectorAll(".sNo");

var next = document.querySelector('.button input[type="button"]');
var qNumber = document.querySelector(".qNumber");
var qOne = document.querySelector(".qOne");
var question = document.querySelector(".question");
var button = document.querySelector(".button");

var span = document.getElementsByTagName("span");

//creating some buttons on need

var newBtn = document.createElement("BUTTON");
var newResultBtn = document.createElement("BUTTON");
//var homeBtn = document.createElement("BUTTON");

//some counters and flags

var number = 2;
var number2 = 1;
var starter=1;
var flag = 1;
var res = 0;
var resultArray=[];
var optionSelected;

//at very first of loading
document.querySelector(".container").style.display = "none";
document.querySelector(".starter").style.display = "block";

//making changes to new buttons
newBtn.innerHTML = "Go Home";
newResultBtn.innerHTML = "Show Result";
//button.innerHTML = "";
//homeBtn.innerHTML = "Go";
//button.append(homeBtn);

box.forEach((b) => b.addEventListener("click", boxHighlighter));
next.addEventListener("click", showNext);
//homeBtn.addEventListener("click",showNext);

//home page button function
function homepage() {
  document.querySelector(".container").style.display = "block";
  showNext();
}

//goes home on showing result

function go() {
  location.reload();
}

//highlights the single box when selected

function boxHighlighter() {
  if (!this.classList.contains("h") && flag === 1) {
    this.classList.add("h");


    window.optionSelected = Array.from(this.childNodes);

    resultArray.push(window.optionSelected[3].textContent); 

    flag = 0;
    //num++;
    return;
  }
  if (this.classList.contains("h") && flag === 0) {
    this.classList.remove("h");
    flag = 1;
    return;
  }
}

// lets make a showNext app engine

function showNext() {
  
if(starter===1){
    var k = 0;
    var l = 0;
    document.querySelector(".checkbox").style.display = "block";
    qOne.innerHTML = json[0].question;
    pNo.forEach((p) => (p.innerHTML = 1));
    sNo.forEach((p) => {
      p.innerHTML = json[0].options[k].number;
      k++;
    });
    optionValue.forEach((p) => {
      p.innerHTML = json[0].options[l].option;
      l++;
    });
  
  qNumber.innerHTML = 1;
  starter++;
  number=2;
return;


}
if (number ===json.length+1) {

  checkResult();
  document.querySelector(".starter").style.display = "none";

    question.innerHTML = "Over!!!";
    button.innerHTML = "";
    document.querySelector(".checkbox").style.display = "none";

    button.append(newBtn);
    newBtn.addEventListener("click", goHome);

    button.append(newResultBtn);
    newResultBtn.addEventListener("click", showResult);

    //after question completion go home
    function goHome() {
      

      location.reload();
    }

    // what happens after i click show result button?

    function showResult() {
      var myVar = setTimeout(showLoader, 0);
      var myVar2 = setTimeout(showNum, 5000);

      function showLoader() {
        document.querySelector(".container").style.display = "none";
        document.getElementById("loader").style.display = "block";
      }
      function showNum() {
        document.getElementById("loader").style.display = "none";
        document.getElementById("myDiv").style.display = "block";
        document.getElementById("h").innerHTML = window.result;
        //console.log("page result:" , window.result);

      }
    }
  } else {
    var i = 0;
    var j = 0;
    // document.querySelector(".checkbox").style.display = "none";

    document.querySelector(".checkbox").style.display = "block";

    qNumber.innerHTML = number;

    qOne.innerHTML = json[number - 1].question;
    pNo.forEach((p) => (p.innerHTML = number));
    sNo.forEach((p) => {
      p.innerHTML = json[number - 1].options[j].number;
      j++;
    });
    optionValue.forEach((p) => {
      p.innerHTML = json[number - 1].options[i].option;
      i++;
    });
  

  number++;
  checkResult();

}
}
//check result()

function checkResult() {
  var q=resultArray.pop();
  var r=json[number2 - 1].correctOption;


  if (  q===r){
    res++;
  console.log("INNER result:" ,res);
  }


  window.result=res;

  console.log("OUTER result:" ,window.result);



  number2++;
  return;
}

//start the show
