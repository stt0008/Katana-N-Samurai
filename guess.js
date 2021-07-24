function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    
    if (input_str == "Kamon" || input_str == "kamon") {
        window.location.href = 'katana.html';
    }
    else if (input_str == "takeda" || input_str == "Takeda") {
        window.location.href = 'takeda.html';
    }
    else if (input_str == "Uesugi" || input_str == "uesugi") {
        window.location.href = 'uesugi.html';
        
    }
    else if (input_str == ".uoy naht xelpmoc erom efil gnigreme si ereht, sdlrow rehto nO") {
        window.location.href = 'hacked.html';
    }
    else {
        alert("you can only enter the right English word");
    }
}
