  var total = 0;
  var mouseClick = 0;

  var element = {};
  var log = [];
  var gain = [];
  var loss = [];

  function caveFunction() {
    var date = Date();
    mouseClick += 1;
    var caveValue = 5;
    var totalGold = document.getElementById('totalGold').value;
    total = parseInt(totalGold) + caveValue;
    var answer = document.getElementById('totalGold');
    answer.value=total;
    answer.style.backgroundColor = "green";

    var list = document.getElementById("allList");
    var entry = document.createElement('li');

    element.total = total;
    element.time = date;
    element.amount = "+"+caveValue;
    element.attemps = mouseClick;

    for(var prob in element){
      console.log(prob, ": ", element[prob]);
    }

    gain.push = "+5";

    for(var prob in gain){
      console.log(gain);
    }
    var totalGain = document.getElementById("totalGain").value;
    var totalCave = parseInt(totalGain) + caveValue;
    var totalGainValue = document.getElementById("totalGain");
    totalGainValue.value = totalCave;

    var clicks = document.getElementById("clicks");
    clicks.value = mouseClick;

    var totalGainBox = document.getElementById("totalGain");
    totalGainBox.style.backgroundColor = "rgb(0, 102, 0)";

    entry.style.color = "green";
    entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + caveValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
    list.insertBefore(entry, list.firstChild);

    var gainList = document.getElementById("gainList");
    var gainEntry = document.createElement('li');
    gainEntry.style.color = "green";
    gainEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + caveValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
    gainList.insertBefore(gainEntry, gainList.firstChild);

    if (mouseClick == 20){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var lose = document.getElementById("lose");
      lose.style.opacity = 1;
    }else if(total >= 250){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var win = document.getElementById("win");
      win.style.opacity = 1;
    }
    clicks.style.backgroundColor = "rgb(0,0,255)";
    var ninja = document.getElementById("ninja");
    ninja.style.left = "580px";
    ninja.style.top = "300px";
  }

  function houseFunction() {
    var ninja = document.getElementById("ninja");
    ninja.style.left = "790px";
    ninja.style.top = "120px";
    var date = Date();
    mouseClick += 1;
    var probability = Math.floor(Math.random() * 100) + 1 ;
    var houseValue = 10;

    var list = document.getElementById("allList");
    var entry = document.createElement('li');

    if(probability <= 80){
      var totalGold = document.getElementById('totalGold').value;
      total = parseInt(totalGold) + houseValue;
      var answer = document.getElementById('totalGold');
      answer.value=total;
      answer.style.backgroundColor = "green";

      entry.style.color = "green";
      entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + houseValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
      list.insertBefore(entry, list.firstChild);

      element.total = total;
      element.time = date;
      element.amount = "+"+houseValue;
      element.attemps = mouseClick;

      for(var prob in element){
        console.log(prob, ": ", element[prob]);
      }

      gain.push = "+10";

      for(var prob in gain){
        console.log(gain);
      }

      var totalGain = document.getElementById("totalGain").value;
      var totalHouse = parseInt(totalGain) + houseValue;
      var totalGainValue = document.getElementById("totalGain");
      totalGainValue.value = totalHouse;

      var totalGainBox = document.getElementById("totalGain");
      totalGainBox.style.backgroundColor = "rgb(0, 102, 0)";

      var gainList = document.getElementById("gainList");
      var gainEntry = document.createElement('li');
      gainEntry.style.color = "green";
      gainEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + houseValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
      gainList.insertBefore(gainEntry, gainList.firstChild);
    }else if(probability > 80){
      var totalGold = document.getElementById('totalGold').value;
      answer.style.backgroundColor = "black";

      entry.style.color = "white";
      entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "0" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "-"));;
      list.insertBefore(entry, list.firstChild);

      element.total = total;
      element.time = date;
      element.amount = "0";
      element.attemps = mouseClick;

      for(var prob in element){
        console.log(prob, ": ", element[prob]);
      }
    }

    var clicks = document.getElementById("clicks");
    clicks.value = mouseClick;
      clicks.style.backgroundColor = "rgb(0,0,255)";
    if (mouseClick == 20){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
    }else if(total >= 250){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var win = document.getElementById("win");
      win.style.opacity = 1;
    }

  }

  function goldmineFunction() {
    var ninja = document.getElementById("ninja");
    ninja.style.left = "1030px";
    ninja.style.top = "330px";
    var date = Date();
    mouseClick += 1;

    var probability = Math.floor(Math.random() * 100) + 1 ;
    var goldmineValue = Math.floor(Math.random() * 25) + 1 ;

    var list = document.getElementById("allList");
    var entry = document.createElement('li');

    if(probability <= 80){
      var totalGold = document.getElementById('totalGold').value;
      total = parseInt(totalGold) + goldmineValue;
      var answer = document.getElementById('totalGold');
      answer.value=total;
      answer.style.backgroundColor = "green";

      entry.style.color = "green";
      list.insertBefore(entry, list.firstChild);
      entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + goldmineValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));

      element.total = total;
      element.time = date;
      element.amount = "+"+goldmineValue;
      element.attemps = mouseClick;

      for(var prob in element){
        console.log(prob, ": ", element[prob]);
      }

      gain.push = "+"+goldmineValue;

      for(var prob in gain){
        console.log(gain);
      }

      var totalGain = document.getElementById("totalGain").value;
      var totalGoldmine = parseInt(totalGain) + goldmineValue;
      var totalGainValue = document.getElementById("totalGain");
      totalGainValue.value = totalGoldmine;

      var totalGainBox = document.getElementById("totalGain");
      totalGainBox.style.backgroundColor = "rgb(0, 102, 0)";

      var gainList = document.getElementById("gainList");
      var gainEntry = document.createElement('li');
      gainEntry.style.color = "green";
      gainEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + goldmineValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
      gainList.insertBefore(gainEntry, gainList.firstChild);
    }else if(probability > 80){
      var totalGold = document.getElementById('totalGold').value;
      var answer = document.getElementById('totalGold');
      answer.style.backgroundColor = "black";

      entry.style.color = "white";
      entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "0" + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "-"));;
      list.insertBefore(entry, list.firstChild);

      element.total = total;
      element.time = date;
      element.amount = "0";
      element.attemps = mouseClick;

      for(var prob in element){
        console.log(prob, ": ", element[prob]);
      }
    }
    var clicks = document.getElementById("clicks");
    clicks.value = mouseClick;
    clicks.style.backgroundColor = "rgb(0,0,255)";


    if (mouseClick == 20){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var lose = document.getElementById("lose");
      lose.style.opacity = 1;
    }else if(total >= 250){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var win = document.getElementById("win");
      win.style.opacity = 1;
    }
  }

  function casinoFunction() {
    var ninja = document.getElementById("ninja");
    var answer = document.getElementById('totalGold');
    ninja.style.left = "1230px";
    ninja.style.top = "130px";
    var date = Date();
    mouseClick += 1;

    var probability = Math.floor(Math.random() * 100) + 1;
    var casinoValue = Math.floor(Math.random() * 11) + 40;
    var operator = Math.floor(Math.random() * 2) + 1;

    var list = document.getElementById("allList");
    var entry = document.createElement('li');

    if(probability <= 50){
      if(operator == 1){
        var totalGold = document.getElementById('totalGold').value;
        total = parseInt(totalGold) + casinoValue;
        var answer = document.getElementById('totalGold');
        answer.value=total;
        answer.style.backgroundColor = "green";

        element.total = total;
        element.time = date;
        element.amount = "+"+casinoValue;
        element.attemps = mouseClick;

        for(var prob in element){
          console.log(prob, ": ", element[prob]);
        }

        gain.push = "+"+casinoValue;

        for(var prob in gain){
          console.log(gain);
        }

        var totalGain = document.getElementById("totalGain").value;
        var totalCasino = parseInt(totalGain) + casinoValue;
        var totalGainValue = document.getElementById("totalGain");
        totalGainValue.value = totalCasino;

        entry.style.color = "green";
        entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        list.insertBefore(entry, list.firstChild);

        var totalGainBox = document.getElementById("totalGain");
        totalGainBox.style.backgroundColor = "rgb(0, 102, 0)";

        var gainList = document.getElementById("gainList");
        var gainEntry = document.createElement('li');
        gainEntry.style.color = "green";
        gainEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        gainList.insertBefore(gainEntry, gainList.firstChild);
      }else if (operator ==2) {
        var totalGold = document.getElementById('totalGold').value;
        total = parseInt(totalGold) - casinoValue;
        var answer = document.getElementById('totalGold');
        answer.value=total;
        answer.style.backgroundColor = "red";

        element.total = total;
        element.time = date;
        element.amount = "-"+casinoValue;
        element.attemps = mouseClick;

        for(var prob in element){
          console.log(prob, ": ", element[prob]);
        }

        loss.push = "-"+casinoValue;

        for(var prob in loss){
          console.log(loss);
        }

        var totalLoss = document.getElementById("totalLoss").value;
        var totalCasino = parseInt(totalLoss) + casinoValue;
        var totalLossValue = document.getElementById("totalLoss");
        totalLossValue.value = totalCasino;

        entry.style.color = "red";
        entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "-" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "LOSS"));
        list.insertBefore(entry, list.firstChild);

        var totalLossBox = document.getElementById("totalLoss");
        totalLossBox.style.backgroundColor = "rgb(255, 51, 0)";
        var lossList = document.getElementById("lossList");
        var lossEntry = document.createElement('li');
        lossEntry.style.color = "red";
        lossEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        lossList.insertBefore(lossEntry, lossList.firstChild);
      }
    }else if(probability > 50){
      if(operator == 1){
        var totalGold = document.getElementById('totalGold').value;
        total = parseInt(totalGold) + casinoValue;
        var answer = document.getElementById('totalGold');
        answer.value=total;
        answer.style.backgroundColor = "green";

        element.total = total;
        element.time = date;
        element.amount = "+"+casinoValue;
        element.attemps = mouseClick;

        for(var prob in element){
          console.log(prob, ": ", element[prob]);
        }

        gain.push = "+"+casinoValue;

        for(var prob in gain){
          console.log(gain);
        }

        var totalGain = document.getElementById("totalGain").value;
        var totalCasino = parseInt(totalGain) + casinoValue;
        var totalGainValue = document.getElementById("totalGain");
        totalGainValue.value = totalCasino;

        entry.style.color = "green";
        entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        list.insertBefore(entry, list.firstChild);

        var totalGainBox = document.getElementById("totalGain");
        totalGainBox.style.backgroundColor = "rgb(0, 102, 0)";
        var gainList = document.getElementById("gainList");
        var gainEntry = document.createElement('li');
        gainEntry.style.color = "green";
        gainEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        gainList.insertBefore(gainEntry, gainList.firstChild);
      }else if (operator ==2) {
        var totalGold = document.getElementById('totalGold').value;
        total = parseInt(totalGold) - casinoValue;
        var answer = document.getElementById('totalGold');
        answer.value=total;
        answer.style.backgroundColor = "red";

        element.total = total;
        element.time = date;
        element.amount = "-"+casinoValue;
        element.attemps = mouseClick;

        for(var prob in element){
          console.log(prob, ": ", element[prob]);
        }

        loss.push = "-"+casinoValue;

        for(var prob in loss){
          console.log(loss);
        }

        var totalLoss = document.getElementById("totalLoss").value;
        var totalCasino = parseInt(totalLoss) + casinoValue;
        var totalLossValue = document.getElementById("totalLoss");
        totalLossValue.value = totalCasino;

        entry.style.color = "red";
        entry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "-" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "LOSS"));
        list.insertBefore(entry, list.firstChild);

        var totalLossBox = document.getElementById("totalLoss");
        totalLossBox.style.backgroundColor = "rgb(255, 51, 0)";
        var lossList = document.getElementById("lossList");
        var lossEntry = document.createElement('li');
        lossEntry.style.color = "red";
        lossEntry.appendChild(document.createTextNode(mouseClick + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + date + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "+" + casinoValue + '\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0' + "GAIN"));
        lossList.insertBefore(lossEntry, lossList.firstChild);
      }
    }

    var clicks = document.getElementById("clicks");
    clicks.value = mouseClick;
    clicks.style.backgroundColor = "rgb(0,0,255)";
    if (mouseClick == 20){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var lose = document.getElementById("lose");
      lose.style.opacity = 1;
    }else if(total >= 250){
      document.getElementById("buttonCave").disabled = true;
      document.getElementById("buttonHouse").disabled = true;
      document.getElementById("buttonGoldmine").disabled = true;
      document.getElementById("buttonCasino").disabled = true;
      var win = document.getElementById("win");
      win.style.opacity = 1;
    }
  }

  function resetFunction() {
    var date = Date();
    mouseClick = 0
    var totalGold = document.getElementById('totalGold');
    var totalGain = document.getElementById('totalGain');
    var totalLoss = document.getElementById('totalLoss');
    var totalClicks = document.getElementById('clicks');
    totalGold.value = 0;
    totalGain.value = 0;
    totalLoss.value = 0;
    totalClicks.value = 0;
    var all = document.getElementById("allList");
    var gain = document.getElementById("gainList");
    var loss = document.getElementById("lossList");
    all.innerHTML = "";
    gain.innerHTML = "";
    loss.innerHTML = "";
    document.getElementById("clicks").innerHTML = mouseClick;
    document.getElementById("buttonCave").disabled = false;
    document.getElementById("buttonHouse").disabled = false;
    document.getElementById("buttonGoldmine").disabled = false;
    document.getElementById("buttonCasino").disabled = false;

    totalGold.style.backgroundColor = "gray";
    totalGain.style.backgroundColor = "gray";
    totalLoss.style.backgroundColor = "gray";
    totalClicks.style.backgroundColor = "gray";

    var ninja = document.getElementById("ninja");
    ninja.style.top = "350px";
    ninja.style.left = "0px";
    var lose = document.getElementById("lose");
    var win = document.getElementById("win");
    lose.style.opacity = 0;
    win.style.opacity = 0;
  }

  function allFunction() {
    var gain = document.getElementById("gainList");
    var loss = document.getElementById("lossList");
    var all = document.getElementById("allList");

    all.style.opacity = 1;
    gain.style.opacity = 0;
    loss.style.opacity = 0;
  }

  function gainFunction() {
    var all = document.getElementById("allList");
    var loss = document.getElementById("lossList");
    var gain = document.getElementById("gainList");

    gain.style.opacity = 1;
    all.style.opacity = 0;
    loss.style.opacity = 0;
  }

  function lossFunction() {
    var all = document.getElementById("allList");
    var gain = document.getElementById("gainList");
    var loss = document.getElementById("lossList");

    loss.style.opacity = 1;
    all.style.opacity = 0;
    gain.style.opacity = 0;
  }
