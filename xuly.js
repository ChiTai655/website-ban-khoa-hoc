
//tinht tong sp

function tinhtongsp(className){
    const card = document.getElementsByClassName(className);
    const count = card.length;

    var testDivs = document.getElementById("khoahoc");
    testDivs.innerHTML = `${count} KHÓA HỌC`;
}

document.addEventListener("DOMContentLoaded",function(){
    const classNametoCount = "card";
    tinhtongsp(classNametoCount);
})

//dinh dang vnd

function dinhdangtienteVND(input) {
    let value = input.value.replace(/\D/g, '');
    value = new Intl.NumberFormat('vi-VN').format(value);
    input.value = value + " VND";
    input.setSelectionRange(value.length, value.length);    
}
// khong cho nhap chu
function chinhapso(event) {
    const charCode =  event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
    }
     return true;
}
// tu dong xoa khi nhap lon hon 
function tudongxoa(event) {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode === 8) {
        return true;
    }
     return chinhapso(event);
}
// kiem tra input
function rangbuocgiatien() {
    const tugia = parseInt(document.getElementById("tugia").value.replace(/\D/g, ''));
    const dengia = parseInt(document.getElementById("dengia").value.replace(/\D/g, ''));
    const messageDiv = document.getElementById("thongbao"); 
    messageDiv.innerHTML ="";
    if (tugia > dengia) {
        messageDiv.innerHTML = "Giá trị 'Từ giá' phải bé hơn giá trị 'Đến giá'<br>";
    }
    if (tugia > 10000000 || dengia > 10000000) {
        messageDiv.innerHTML +="Bạn phải nhập giá trị bé hơn 9.999.999 VND<br>";
    } 
}

