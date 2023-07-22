
var tugia = document.khoanggia.tugia.value
var dengia = document.khoanggia.dengia.value

function timkiemtheogia()
{
    //if(document.getElementById("kw").value >= 0 && document.getElementById("kw2").value <=10000000 )
    if(tugia >=0 && dengia <= 1000000)
    {
        document.getElementById("thongbao").innerHTML="Tìm thành công";
        //alert('Tìm thành công')
    }
    else
    {
        document.getElementById("thongbao").innerHTML="Tìm thất bài";
        //alert('Không được nhập nhỏ hơn 0')
    }
}

