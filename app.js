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
var homeBtn = document.createElement("BUTTON");

//some counters and flags

var number = 1;
//var num = 1;
var flag = 1;
var res = 0;
var number2;

var optionSelected;

//at very first of loading
document.querySelector(".checkbox").style.display = "none";


//making changes to new buttons
newBtn.innerHTML = "Go Home";
newResultBtn.innerHTML = "Show Result";
button.innerHTML = "";
homeBtn.innerHTML = "Go";
button.append(homeBtn);


box.forEach((b) => b.addEventListener("click", boxHighlighter));
next.addEventListener("click", showNext);
homeBtn.addEventListener("click", showNext);




//goes home on showing result

function go(){
  location.reload();
}

//highlights the single box when selected

function boxHighlighter() {

  number2=qNumber.innerHTML ;

  if (!this.classList.contains("h") && flag === 1) {
    this.classList.add("h");

  
   var optionSelected = Array.from(this.childNodes);

      //claculate result after the next button is clicked
    
      

      if (json[number2 - 1].correctOption === optionSelected[3].textContent) {
        res++;
        
        console.log(res)
        console.log(json[number2 - 1].correctOption)
        console.log(optionSelected[3].textContent)
        console.log(number2)
      }

  

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

  // if the length is 3+1 

  if (number === json.length + 1) {
    question.innerHTML = "Over!!!";
    button.innerHTML = "";
    document.querySelector(".checkbox").style.display = "none";

    button.append(newBtn);
    newBtn.addEventListener("click", goHome);

    button.append(newResultBtn);
    newResultBtn.addEventListener("click", showResult);



    //after question completion go home
    function goHome() {
      console.log("go home");

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
        document.getElementById("h2").innerHTML = res;
      }
    }
  } else {
    var i = 0;
    var j = 0;
    document.querySelector(".checkbox").style.display = "none";

    document.querySelector(".checkbox").style.display = "block";

    qNumber.innerHTML = number;
    number2=number;
    qOne.innerHTML = json[number - 1].question;
    pNo.forEach((p) => (p.innerHTML = number));
    sNo.forEach((p) => {
      p.innerHTML = json[number - 1].options[j].number;
      j++;
    });
    optionValue.forEach((p) => {
      p.innerHTML = json[number - 1].options[i].option;
      i++;
      return;
    });
box.forEach((b) => console.log(b.classList));


  }

  qNumber.innerHTML = number;
  number++;
  return;
}


