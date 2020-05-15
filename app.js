
      
      // lets start with this sample JSON data


fetch('./data.json')
  .then((response)=>response.json())
  .then(data=>json=data)
      
      // lets start scripting

      var box = document.querySelectorAll(".cb");
      var next = document.querySelector('.button input[type="button"]');
      var qNumber = document.querySelector(".qNumber");
      var qOne = document.querySelector(".qOne");
      var optionValue = document.querySelectorAll(".optionValue");
      var pNo = document.querySelectorAll(".pNO");
      var sNo = document.querySelectorAll(".sNo");

      var question = document.querySelector(".question");
      var button = document.querySelector(".button");
      var span = document.getElementsByTagName("span");

      var newBtn = document.createElement("BUTTON");
      newBtn.innerHTML = "Go Home";

      var newResultBtn = document.createElement("BUTTON");
      newResultBtn.innerHTML = "Show Result";

      var number = 1;
      var num =1;

      var flag = 1;

      document.querySelector(".checkbox").style.display = "none";
      button.innerHTML = "";
      var homeBtn = document.createElement("BUTTON");
      homeBtn.innerHTML = "Go";
      button.append(homeBtn);
      homeBtn.addEventListener('click',showNext)
      


      function go() {
            location.reload();
          }
    
      function boxHighlighter() {
        if (!this.classList.contains("h") && flag === 1) {
          this.classList.add("h");
          var optionSelected = Array.from(this.childNodes)

         console.log(optionSelected[5].textContent);

         console.log(json[num-1].correctOption)
          flag = 0;
          num++;
          return;
        }
        if (this.classList.contains("h") && flag === 0) {
          this.classList.remove("h");
          flag = 1;
          return;
        }
      }

      function showNext() {
        if (number === 3) {
          question.innerHTML = "Over!!!";
          button.innerHTML = "";
          document.querySelector(".checkbox").style.display = "none";

          button.append(newBtn);
          newBtn.addEventListener("click", goHome);
          
          button.append(newResultBtn);
          newResultBtn.addEventListener("click", showResult);

          function goHome() {
            console.log("go home");

            location.reload();
          }

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
            }
          }
        } else if (number === 1) {
          var i = 0;
          var j = 0;
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
        } else if (number === 2) {
          var i = 0;
          var j = 0;
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
        }

        qNumber.innerHTML = number;
        number++;
        return;
      }

      box.forEach((b) => b.addEventListener("click", boxHighlighter));

      next.addEventListener("click", showNext);
    