
    btnTinh.onclick = function(){
        var yc1 = document.getElementById("yc1");
        var yc2 = document.getElementById("yc2");
        var yc3 = document.getElementById("yc3");
        var yc4 = document.getElementById("yc4");
        var yc5 = document.getElementById("yc5");
        var btnTinh = document.getElementById("btnTinh");
        var txtThongBao = document.getElementById("txtThongBao");
        var num1 = document.getElementById("num1").value;
        var num2 = document.getElementById("num2").value;
//Yeu cau so 1
     if(yc1.checked){
        
        
        var sumChan = 0
        for(i = 0; i <= num1; i += 2){
            sumChan += i;
            
        }console.log(sumChan);
        txtThongBao.innerHTML = "Tổng số của các số chẵn là: " + sumChan;
    }
//yeu cau so 2
    else if(yc2.checked){

        var soBa  = 0
        for(i = 1; i <= num1; i++){
            if( i % 3 == 0){
                soBa++;
            }
        }
        txtThongBao.innerHTML = "Có tổng cộng " + soBa + " số chia hết cho số 3";

    }
// yeu cau so 3
    else if(yc3.checked){
        var soN = 1
        var soNho = 0
        while(soNho < num1){
            soNho = soNho + soN;
            soN++;
        }
        txtThongBao.innerHTML = "Số nguyên dương nhỏ nhất có tổng từ 1+2+...n <" + num1 + "là: " + soN ;

    }
 //yeu cau so 4   
    else if(yc4.checked){
        // var so1 = document.getElementById("so1");
        // so1.innerHTML = "nhập vào 2 số x";
        var a = 1;
        var b = 0;
        for( i = 1; i <= num2; i++){
            a = a * num1;
            b = b + a;
        }
        txtThongBao.innerHTML = 'nhập vào 2 số, Số thứ nhất \"x\", Số thứ hai \"n\" tính tổng: S(n) = x + x^2 + x^3 + … + x^n' + "<br>" + "Bạn đã nhập vào hai số vậy tổng của nó là: " + b;
}
 //yeu cau so 5
 else if(yc5.checked){
    var x = 1; 
    if (num1 == 0 || num1 == 1){
        return x;
    }else{
        for(i = 2; i <= num1; i++ ){
            x *= i;
        }
        
    }
    txtThongBao.innerHTML = "Giai thừa của " + num1 + " là " + x;
 }
}