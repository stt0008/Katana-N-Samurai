function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    var input_str2 = document.getElementById('ans2').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    
    if ((input_str == "Narusawa" || input_str == "narusawa") && (input_str2 == "Minamitsuru" || input_str2 == "minamitsuru")) {
        window.location.href = 'sent.html';
    }
    else if (input_str == "takeda" || input_str == "Takeda") {
        window.location.href = 'takeda.html';
    }
    else {
        alert("you can only enter the right English word");
    }


}
