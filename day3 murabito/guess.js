function getText() {
    //12document.getElementById('btn').style.backgroundColor="white";

    var input_str = document.getElementById('ans').value;//取輸入的值;
    var input_str2 = document.getElementById('ans2').value;//取輸入的值;
    //如果沒有詩入任何東西，跳出alert。如果有東西才新增留言;
    
    if ((input_str == "0091" && input_str2 == "0030") || (input_str == "0030"&& input_str2 == "0091")) {
        window.location.href = 'sent.html';
    }
    else {
        alert("you can only enter number");
    }


}
