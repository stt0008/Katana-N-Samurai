function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    
    if (input_str == "Kamon" || input_str == "kamon") {
        window.location.href = 'katana.html';
    }
    else {
        alert("you can only enter the right English word");
    }
}
