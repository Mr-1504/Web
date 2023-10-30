var get_purchaseform = document.getElementById("purchase");
var get_buyquantity = document.getElementById("buyquantity");
let buy_quantity;
let price;
function begin_order(name, pricing, imgsrc) {
    if (1>0) {
        document.getElementById("preview_img").setAttribute("src", imgsrc);
        document.getElementById("pc_name").innerHTML = name;
        price = pricing;
        get_purchaseform.style.display = "block";
        buy_quantity = 1;
        document.getElementById("pc_totalprice").innerHTML = (price*buy_quantity).toLocaleString("en-US") + "đ";
    } else {
        alert("Quý khách hàng hãy chọn đầy đủ thông số trước khi mua hàng!");
    }
}
function cancel_order() {
    get_purchaseform.style.display = "none";
    get_buyquantity.value = 1;
}
function update_totalprice() {
    if (get_buyquantity.value>0 && get_buyquantity.value<11) { 
        buy_quantity = get_buyquantity.value;
        document.getElementById("pc_totalprice").innerHTML = (price*buy_quantity).toLocaleString("en-US") + "đ";
    } else {
        get_buyquantity.value = buy_quantity;
    }
}
let fin_gender, fin_name, fin_phone, fin_address, fin_email,  fin_payment;
// Nguồn RegEx: regex101
let ptrn_name = /^[A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*(?:[ ][A-ZÀÁẠẢÃÂẦẤẬẨẪĂẰẮẶẲẴÈÉẸẺẼÊỀẾỆỂỄÌÍỊỈĨÒÓỌỎÕÔỒỐỘỔỖƠỜỚỢỞỠÙÚỤỦŨƯỪỨỰỬỮỲÝỴỶỸĐ][a-zàáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]*)*$/;
let ptrn_phone = /^(0|84)(2(0[3-9]|1[0-6|8|9]|2[0-2|5-9]|3[2-9]|4[0-9]|5[1|2|4-9]|6[0-3|9]|7[0-7]|8[0-9]|9[0-4|6|7|9])|3[2-9]|5[5|6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])([0-9]{7})$/;
let ptrn_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
function check_valid_customerinfo() {
    if (fin_gender == undefined) {
        alert("Thông tin khách hàng chưa được điền: Giới tính");
    } else
    if (fin_name == undefined || fin_name == "") {
        alert("Thông tin khách hàng chưa được điền: Họ tên");
        document.getElementById("fullname").focus();
    } else
    if (!ptrn_name.test(fin_name)) {
        alert("Thông tin khách hàng sai định dạng: Họ tên");
        document.getElementById("fullname").focus();
    } else
    if (fin_phone == undefined || fin_phone == "") {
        alert("Thông tin khách hàng chưa được điền: Số điện thoại");
        document.getElementById("phone").focus();
    } else
    if (!ptrn_phone.test(fin_phone)) {
        alert("Thông tin khách hàng sai định dạng: Số điện thoại");
        document.getElementById("phone").focus();
    } else
    if (fin_address == undefined || fin_address == "") {
        alert("Thông tin khách hàng chưa được điền: Địa chỉ");
        document.getElementById("address").focus();
    } else
    if (fin_email == undefined || fin_email == "") {
        alert("Thông tin khách hàng chưa được điền: Email");
        document.getElementById("email").focus();
    } else
    if (!ptrn_email.test(fin_email)) {
        alert("Thông tin khách hàng sai định dạng: Email");
        document.getElementById("email").focus();
    } else
    if (fin_payment == undefined) {
        alert("Thông tin khách hàng chưa được điền: Phương thức thanh toán");
    } else {
        return true;
    }
}
function confirm_payment() {
    if (document.getElementById("gender-male").checked) fin_gender = 0; else
    if (document.getElementById("gender-female").checked) fin_gender = 1;
    fin_name = document.getElementById("fullname").value;
    fin_phone = document.getElementById("phone").value;
    fin_address = document.getElementById("address").value;
    fin_email = document.getElementById("email").value;
    if (document.getElementById("payment-cash").checked) fin_payment = 0; else
    if (document.getElementById("payment-bank").checked) fin_payment = 1;
    if (check_valid_customerinfo()) {
        alert("Đơn hàng của quý khách đã được ghi nhận!");
        window.location.reload();
    }
}