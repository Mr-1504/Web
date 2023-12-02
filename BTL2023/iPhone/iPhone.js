// back to top
let back = document.getElementById("backtop");
window.onscroll = function() { lan_chuot(); }

function lan_chuot() {
    if (window.innerWidth > 576 && (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        back.style.display = "block";
    } else {
        back.style.display = "none";
    }
}

function backtop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// giá
let dluong = 0;
let msac = 0;
let ten = "";
let size = "";
let colour = "";
let Gia;
let Giam;
let Goc;

function changePrice(dungluong, pban) {
    if (pban == 141) {
        ten = "iPhone 14";
        Gia = document.getElementById("gia-14");
        Goc = document.getElementById("goc-14");
        Giam = document.getElementById("giam-14");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "18.690.000₫";
            Goc.textContent = "24.000.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "21.590.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            size = "512GB";
            dluong = 512;
            Gia.textContent = "26.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 142) {
        ten = "iPhone 14 Plus";
        Gia = document.getElementById("gia-14plus");
        Goc = document.getElementById("goc-14plus");
        Giam = document.getElementById("giam-14plus");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "21.190.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            size = "256GB";
            dluong = 256;
            Gia.textContent = "23.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            size = "512GB";
            dluong = 512;
            Gia.textContent = "25.590.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-31%";
        }
    } else if (pban == 143) {
        ten = "iPhone 14 Pro";
        Gia = document.getElementById("gia-14pro");
        Goc = document.getElementById("goc-14pro");
        Giam = document.getElementById("giam-14pro");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "23.890.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "27.390.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "32.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-21%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "37.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 144) {
        ten = "iPhone 14 Pro Max";
        Gia = document.getElementById("gia-14max");
        Goc = document.getElementById("goc-14max");
        Giam = document.getElementById("giam-14max");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "26.550.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "28.890.000₫";
            Goc.textContent = "37.490.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "35.890.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-19%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "41.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-17%";
        }
    } else if (pban == 151) {
        ten = "iPhone 15";
        Gia = document.getElementById("gia-15");
        Goc = document.getElementById("goc-15");
        Giam = document.getElementById("giam-15");
        if (dungluong == 128) {
            dluong = 128;
            size = "128GB";
            Gia.textContent = "21.890.000₫";
            Goc.textContent = "24.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "24.890.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "29.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-22%";
        }
    } else if (pban == 152) {
        ten = "iPhone 15 Plus";
        Gia = document.getElementById("gia-15plus");
        Goc = document.getElementById("goc-15plus");
        Giam = document.getElementById("giam-15plus");
        if (dungluong == 128) {
            size = "128GB";
            dluong = 128;
            Gia.textContent = "25.490.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "28.490.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "33.490.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 153) {
        ten = "iPhone 15 Pro";
        Gia = document.getElementById("gia-15pro");
        Goc = document.getElementById("goc-15pro");
        Giam = document.getElementById("giam-15pro");
        if (dungluong == 128) {
            dluong = 128;
            size = "128GB";
            Gia.textContent = "27.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 256) {
            dluong = 256;
            size = "256GB";
            Gia.textContent = "30.490.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-13%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "36.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-11%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "42.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 154) {
        ten = "iPhone 15 Pro Max";
        Gia = document.getElementById("gia-15max");
        Goc = document.getElementById("goc-15max");
        Giam = document.getElementById("giam-15max");
        if (dungluong == 256) {
            size = "256GB";
            dluong = 256;
            Gia.textContent = "34.990.000₫";
            Goc.textContent = "37.990.000₫";
            Giam.textContent = "-8%";
        } else if (dungluong == 512) {
            dluong = 512;
            size = "512GB";
            Gia.textContent = "39.990.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            size = "1TB";
            Gia.textContent = "45.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-9%";
        }
    }

}

// màu
let mau;
let k;
let kiem;

function changeImg(x, pban) {
    kiem = pban;
    if (pban == 141) {
        k = "../img/img_iphone/iphone-14-note.jpg";
        mau = document.getElementById("color-14");
        if (x == 1) {
            colour = "Đen bóng đêm";
            mau.src = "../img/img_iphone/ip14black.png";
        } else if (x == 2) {
            colour = "Ánh sao";
            mau.src = "../img/img_iphone/ip14star.png";
        } else if (x == 3) {
            colour = "Đỏ rực rỡ";
            mau.src = "../img/img_iphone/ip14red.png";
        } else if (x == 4) {
            colour = "Tím mộng mơ";
            mau.src = "../img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            colour = "Xanh xao";
            mau.src = "../img/img_iphone/ip14green.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "../img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 142) {
        k = "../img/img_iphone/iphone-14-plus-note.jpg";
        mau = document.getElementById("color-14plus");
        if (x == 1) {
            colour = "Đen bóng đêm";
            mau.src = "../img/img_iphone/ip14black.png";
        } else if (x == 2) {
            colour = "Ánh sao";
            mau.src = "../img/img_iphone/ip14star.png";
        } else if (x == 3) {
            colour = "Đỏ rực rỡ";
            mau.src = "../img/img_iphone/ip14red.png";
        } else if (x == 4) {
            colour = "Tím mộng mơ";
            mau.src = "../img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            colour = "Xanh xao";
            mau.src = "../img/img_iphone/ip14green.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "../img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 143) {
        k = "../img/img_iphone/iphone-14-pro-note.jpg";
        mau = document.getElementById("color-14pro");
        if (x == 1) {
            colour = "Đen thời không";
            mau.src = "../img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            colour = "Bạc thời thượng";
            mau.src = "../img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            colour = "Vàng gold quý phái";
            mau.src = "../img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            colour = "Tím vực sâu";
            mau.src = "../img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 144) {
        k = "../img/img_iphone/iphone-14-pro-max-note.jpg";
        mau = document.getElementById("color-14max");
        if (x == 1) {
            colour = "Đen thời không";
            mau.src = "../img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            colour = "Bạc thời thượng";
            mau.src = "../img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            colour = "Vàng gold quý phái";
            mau.src = "../img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            colour = "Tím vực sâu";
            mau.src = "../img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 151) {
        mau = document.getElementById("color-15");
        k = "../img/img_iphone/iphone-14-pro-note.jpg";
        if (x == 1) {
            colour = "Đen huyền bí";
            mau.src = "../img/img_iphone/ip15black.png";
        } else if (x == 10) {
            colour = "Hồng nam tính";
            mau.src = "../img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "../img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            colour = "Xanh đồng cỏ";
            mau.src = "../img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            colour = "Xanh đại dương";
            mau.src = "../img/img_iphone/ip15blue.png";
        }
    } else if (pban == 152) {
        k = "../img/img_iphone/iphone-14-pro-note.jpg";
        mau = document.getElementById("color-15plus");
        if (x == 1) {
            colour = "Đen huyền bí";
            mau.src = "../img/img_iphone/ip15black.png";
        } else if (x == 10) {
            colour = "Hồng nam tính";
            mau.src = "../img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            colour = "Vàng quý tộc";
            mau.src = "../img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            colour = "Xanh đồng cỏ";
            mau.src = "../img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            colour = "Xanh đại dương";
            mau.src = "../img/img_iphone/ip15blue.png";
        }
    } else if (pban == 153) {
        mau = document.getElementById("color-15pro");
        k = "../img/img_iphone/iphone-14-pro-note.jpg";
        if (x == 1) {
            colour = "Titan huyền bí";
            mau.src = "../img/img_iphone/ip15problack.png";
        } else if (x == 13) {
            colour = "Titan thuần khiết";
            mau.src = "../img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            colour = "Titan siêu xanh";
            mau.src = "../img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            colour = "Titan thiên nhiên";
            mau.src = "../img/img_iphone/tip15progrey.png";
        }
    } else if (pban == 154) {
        mau = document.getElementById("color-15max");
        k = "../img/img_iphone/iphone-14-pro-note.jpg";
        if (x == 1) {
            colour = "Titan huyền bí";
            mau.src = "../img/img_iphone/ip15promaxblack.png";
        } else
        if (x == 13) {
            colour = "Titan thuần khiết";
            mau.src = "../img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            colour = "Titan siêu xanh";
            mau.src = "../img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            colour = "Titan thiên nhiên";
            mau.src = "../img/img_iphone/tip15progrey.png";
        }
    }
    msac = x;
}

function cart(a) {
    const result = $('#notice-mail');
    const result2 = $('#mail-title');
    if (dluong != 0 && msac != 0) {
        result.text("Đã thêm sản phẩm \n" + ten + "\n" + size + " " + colour + " vào giỏ hàng");
        result2.text("Thêm thành công!");
        result2.css('color', 'black');
        $('#more-product').modal('show');
        $(a).css('display', 'none');
        if (a == '#buy151') {
            $('#nameuser-151').val('');
            $('#numphone-151').val('');
            $('#address-151').val('');
            check(1, 151);
            check(3, 151);
            check(2, 151);
            check(4, 151);
        } else if (a == '#buy152') {
            $('#nameuser-152').val('');
            $('#numphone-152').val('');
            $('#address-152').val('');
            check(1, 152);
            check(3, 152);
            check(2, 152);
            check(4, 152);
        } else if (a == '#buy153') {
            $('#nameuser-153').val('');
            $('#numphone-153').val('');
            $('#address-153').val('');
            check(1, 153);
            check(3, 153);
            check(2, 153);
            check(4, 153);
        } else if (a == '#buy154') {
            $('#nameuser-154').val('');
            $('#numphone-154').val('');
            $('#address-154').val('');
            check(1, 154);
            check(3, 154);
            check(2, 154);
            check(4, 154);
        } else if (a == '#buy141') {
            $('#nameuser-141').val('');
            $('#numphone-141').val('');
            $('#address-141').val('');
            check(1, 141);
            check(3, 141);
            check(2, 141);
            check(4, 141);
        } else if (a == '#buy142') {
            $('#nameuser-142').val('');
            $('#numphone-142').val('');
            $('#address-142').val('');
            check(1, 142);
            check(3, 142);
            check(2, 142);
            check(4, 142);
        } else if (a == '#buy143') {
            $('#nameuser-143').val('');
            $('#numphone-143').val('');
            $('#address-143').val('');
            check(1, 143);
            check(3, 143);
            check(2, 143);
            check(4, 143);
        } else if (a == '#buy144') {
            $('#nameuser-144').val('');
            $('#numphone-144').val('');
            $('#address-144').val('');
            check(1, 144);
            check(3, 144);
            check(2, 144);
            check(4, 144);
        }
        Gia.textContent = "";
        Goc.textContent = "";
        Giam.textContent = "";
        mau.src = k;
    } else {
        result.text("Vui lòng chọn đủ thông tin");
        result2.text("Không thành công!");
        result2.css('color', 'red');
        $('#more-product').modal('show');
    }
    dluong = 0;
    msac = 0;
}
let paytemp;

function buy(a) {
    if (dluong != 0 && msac != 0) {
        paytemp = a;
        let scroll = $(a)[0];
        $(a).css('display', 'block');
        scroll.scrollIntoView();
    } else {
        const result = $('#notice-mail');
        const result2 = $('#mail-title');
        result.text("Vui lòng chọn đủ thông tin");
        result2.text("Không thành công!");
        result2.css('color', 'red');
        $('#more-product').modal('show');
    }
}

// thông tin người mua
let inften = 0;
let infsdt = 0;
let infdchi = 0;

function tname(nameuser) {
    return /^[a-zA-Zàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳỵỷỹý -]+$/.test(nameuser);
}

function test_name() {
    let name;
    let n1, n2;

    if (paytemp == '#buy151') {
        name = $('#nameuser-151').val();
        n1 = $('#name-151');
        n2 = $('#name2-151');
    } else if (paytemp == '#buy152') {
        name = $('#nameuser-152').val();
        n1 = $('#name-152');
        n2 = $('#name2-152');
    } else if (paytemp == '#buy153') {
        name = $('#nameuser-153').val();
        n1 = $('#name-153');
        n2 = $('#name2-153');
    } else if (paytemp == '#buy141') {
        name = $('#nameuser-141').val();
        n1 = $('#name-141');
        n2 = $('#name2-141');
    } else if (paytemp == '#buy142') {
        name = $('#nameuser-142').val();
        n1 = $('#name-142');
        n2 = $('#name2-142');
    } else if (paytemp == '#buy143') {
        name = $('#nameuser-143').val();
        n1 = $('#name-143');
        n2 = $('#name2-143');
    } else if (paytemp == '#buy144') {
        name = $('#nameuser-144').val();
        n1 = $('#name-144');
        n2 = $('#name2-144');
    }

    n1.text('');
    n2.text('');

    if (name.trim() == '') {
        n2.text('Không được để trống');
        n2.css('color', 'red');
        n1.text('Không được để trống');
        n1.css('color', 'red');
        inften = 0;
    } else {
        if (!tname(name)) {
            n1.text('Không hợp lệ.');
            n1.css('color', 'red');
            n2.text('Không hợp lệ.');
            n2.css('color', 'red');
            inften = 0;
        } else {
            inften = 1;
        }
    }
}

function tnum(num) {
    return /^\+84+[35789][0-9]{8}$/.test(num) || /^84+[35789][0-9]{8}$/.test(num) || /^0+[35789][0-9]{8}$/.test(num);
}

function test_num() {
    let num;
    let n1;
    if (paytemp == '#buy151') {
        num = document.getElementById('numphone-151').value;
        n1 = $('#phone-151');
    } else if (paytemp == '#buy152') {
        n1 = $('#phone-152');
        num = document.getElementById('numphone-152').value;
    } else if (paytemp == '#buy153') {
        n1 = $('#phone-153');
        num = document.getElementById('numphone-153').value;
    } else if (paytemp == '#buy154') {
        n1 = $('#phone-154');
        num = document.getElementById('numphone-154').value;
    } else if (paytemp == '#buy141') {
        n1 = $('#phone-141');
        num = document.getElementById('numphone-141').value;
    } else if (paytemp == '#buy142') {
        n1 = $('#phone-142');
        num = document.getElementById('numphone-142').value;
    } else if (paytemp == '#buy143') {
        n1 = $('#phone-143');
        num = document.getElementById('numphone-143').value;
    } else if (paytemp == '#buy144') {
        n1 = $('#phone-144');
        num = document.getElementById('numphone-144').value;
    }

    n1.text('');
    if (num.trim() == '') {
        n1.text('Không hợp lệ');
        n1.css('color', 'red');
        infsdt = 0;
    } else {
        if (!tnum(num)) {
            n1.text('Không hợp lệ.');
            n1.css('color', 'red');
            infsdt = 0;
        } else infsdt = 1;
    }
}

function tadd(add) {
    return /^[0-9a-zA-Zàáảãạâầấẩẫậăằắẳẵặèéẻẽẹêềếểễệđìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳỵỷỹý -,/]+$/.test(add);
}

function test_add() {
    let add;
    let n1;

    if (paytemp == '#buy151') {
        n1 = $('#add-151');
        add = $('#address-151').val();
    } else if (paytemp == '#buy152') {
        n1 = $('#add-152');
        add = $('#address-152').val();
    } else if (paytemp == '#buy153') {
        n1 = $('#add-153');
        add = $('#address-153').val();
    } else if (paytemp == '#buy154') {
        n1 = $('#add-154');
        add = $('#address-154').val();
    } else if (paytemp == '#buy141') {
        n1 = $('#add-141');
        add = $('#address-141').val();
    } else if (paytemp == '#buy142') {
        n1 = $('#add-142');
        add = $('#address-142').val();
    } else if (paytemp == '#buy143') {
        n1 = $('#add-143');
        add = $('#address-143').val();
    } else if (paytemp == '#buy144') {
        n1 = $('#add-144');
        add = $('#address-144').val();
    }

    n1.text('');

    if (add.trim() == '') {
        n1.text('Không được để trống');
        n1.css('color', 'red');
        infdchi = 0;
    } else {
        if (!tadd(add)) {
            n1.text('Không hợp lệ.');
            n1.css('color', 'red');
            infdchi = 0;
        } else {
            infdchi = 1;
        }
    }
}
$('#address-151').on('input', test_add);
$('#nameuser-151').on('input', test_name);
$('#numphone-151').on('input', test_num);

$('#address-152').on('input', test_add);
$('#nameuser-152').on('input', test_name);
$('#numphone-152').on('input', test_num);

$('#address-153').on('input', test_add);
$('#nameuser-153').on('input', test_name);
$('#numphone-153').on('input', test_num);

$('#address-154').on('input', test_add);
$('#nameuser-154').on('input', test_name);
$('#numphone-154').on('input', test_num);

$('#address-141').on('input', test_add);
$('#nameuser-141').on('input', test_name);
$('#numphone-141').on('input', test_num);

$('#address-142').on('input', test_add);
$('#nameuser-142').on('input', test_name);
$('#numphone-142').on('input', test_num);

$('#address-143').on('input', test_add);
$('#nameuser-143').on('input', test_name);
$('#numphone-143').on('input', test_num);

$('#address-144').on('input', test_add);
$('#nameuser-144').on('input', test_name);
$('#numphone-144').on('input', test_num);


function comfirm(a) {
    const result = $('#notice-mail');
    const result2 = $('#mail-title');
    if (infdchi && infsdt && inften && checkgen() && checkpay()) {
        result.text("\n" + ten + "\n" + size + " " + colour + '\n' + "sẽ được gửi đến quý khách trong thời gian sớm nhất");
        result2.text("Đặt mua thành công!");
        result2.css('color', 'black');
        $('#more-product').modal('show');
        dluong = 0;
        msac = 0;
        $(a).css('display', 'none');
        if (a == '#buy151') {
            $('#nameuser-151').val('');
            $('#numphone-151').val('');
            $('#address-151').val('');
            check(1, 151);
            check(3, 151);
            check(2, 151);
            check(4, 151);
        } else if (a == '#buy152') {
            $('#nameuser-152').val('');
            $('#numphone-152').val('');
            $('#address-152').val('');
            check(1, 152);
            check(3, 152);
            check(2, 152);
            check(4, 152);
        } else if (a == '#buy153') {
            $('#nameuser-153').val('');
            $('#numphone-153').val('');
            $('#address-153').val('');
            check(1, 153);
            check(3, 153);
            check(2, 153);
            check(4, 153);
        } else if (a == '#buy154') {
            $('#nameuser-154').val('');
            $('#numphone-154').val('');
            $('#address-154').val('');
            check(1, 154);
            check(3, 154);
            check(2, 154);
            check(4, 154);
        } else if (a == '#buy141') {
            $('#nameuser-141').val('');
            $('#numphone-141').val('');
            $('#address-141').val('');
            check(1, 141);
            check(3, 141);
            check(2, 141);
            check(4, 141);
        } else if (a == '#buy142') {
            $('#nameuser-142').val('');
            $('#numphone-142').val('');
            $('#address-142').val('');
            check(1, 142);
            check(3, 142);
            check(2, 142);
            check(4, 142);
        } else if (a == '#buy143') {
            $('#nameuser-143').val('');
            $('#numphone-143').val('');
            $('#address-143').val('');
            check(1, 143);
            check(3, 143);
            check(2, 143);
            check(4, 143);
        } else if (a == '#buy144') {
            $('#nameuser-144').val('');
            $('#numphone-144').val('');
            $('#address-144').val('');
            check(1, 144);
            check(3, 144);
            check(2, 144);
            check(4, 144);
        }
        Gia.textContent = "";
        Goc.textContent = "";
        Giam.textContent = "";
        mau.src = k;
    } else {
        result.text("Vui lòng chọn đủ thông tin");
        result2.text("Đặt mua không thành công!");
        result2.css('color', 'red');
        $('#more-product').modal('show');
    }
}
// 
function checkgen() {
    if (paytemp == '#buy151') {

        if (document.getElementById('female-151').checked == true || document.getElementById('male-151').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy152') {
        if (document.getElementById('female-152').checked == true || document.getElementById('male-152').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy153') {
        if (document.getElementById('female-153').checked == true || document.getElementById('male-153').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy154') {
        if (document.getElementById('female-154').checked == true || document.getElementById('male-154').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy141') {
        if (document.getElementById('female-141').checked == true || document.getElementById('male-141').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy142') {
        if (document.getElementById('female-142').checked == true || document.getElementById('male-142').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy143') {
        if (document.getElementById('female-143').checked == true || document.getElementById('male-143').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy144') {
        if (document.getElementById('female-144').checked == true || document.getElementById('male-144').checked == true) {
            return true;
        } else return false;
    }
}

function checkpay() {
    if (paytemp == '#buy151') {
        if (document.getElementById('bank-151').checked == true || document.getElementById('cash-151').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy152') {
        if (document.getElementById('bank-152').checked == true || document.getElementById('cash-152').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy153') {
        if (document.getElementById('bank-153').checked == true || document.getElementById('cash-153').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy154') {
        if (document.getElementById('bank-154').checked == true || document.getElementById('cash-154').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy141') {
        if (document.getElementById('bank-141').checked == true || document.getElementById('cash-141').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy142') {
        if (document.getElementById('bank-142').checked == true || document.getElementById('cash-142').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy143') {
        if (document.getElementById('bank-143').checked == true || document.getElementById('cash-143').checked == true) {
            return true;
        } else return false;
    } else if (paytemp == '#buy144') {
        if (document.getElementById('bank-144').checked == true || document.getElementById('cash-144').checked == true) {
            return true;
        } else return false;
    }

}
// check
function check(a, b) {
    if (b == 141) {
        if (a == 1) {
            document.getElementById('female-141').checked = false;
        } else if (a == 2) {
            document.getElementById('male-141').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-141').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-141').checked = false;
        }
    } else if (b == 142) {
        if (a == 1) {
            document.getElementById('female-142').checked = false;
        } else if (a == 2) {
            document.getElementById('male-142').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-142').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-142').checked = false;
        }
    } else if (b == 143) {
        if (a == 1) {
            document.getElementById('female-143').checked = false;
        } else if (a == 2) {
            document.getElementById('male-143').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-143').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-143').checked = false;
        }
    } else if (b == 144) {
        if (a == 1) {
            document.getElementById('female-144').checked = false;
        } else if (a == 2) {
            document.getElementById('male-144').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-144').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-144').checked = false;
        }
    } else if (b == 151) {
        if (a == 1) {
            document.getElementById('female-151').checked = false;
        } else if (a == 2) {
            document.getElementById('male-151').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-151').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-151').checked = false;
        }
    } else if (b == 152) {
        if (a == 1) {
            document.getElementById('female-152').checked = false;
        } else if (a == 2) {
            document.getElementById('male-152').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-152').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-152').checked = false;
        }
    } else if (b == 153) {
        if (a == 1) {
            document.getElementById('female-153').checked = false;
        } else if (a == 2) {
            document.getElementById('male-153').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-153').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-153').checked = false;
        }
    } else if (b == 154) {
        if (a == 1) {
            document.getElementById('female-154').checked = false;
        } else if (a == 2) {
            document.getElementById('male-154').checked = false;
        }
        if (a == 3) {
            document.getElementById('bank-154').checked = false;
        } else if (a == 4) {
            document.getElementById('cash-154').checked = false;
        }
    }
}

// 

// comming soon
function come() {
    const result = $('#notice-mail');
    const result2 = $('#mail-title');
    result.text("Hệ thống các sản phẩm khác đang được cập nhật. Vui lòng quay lại sau.");
    result2.text("Comming Soon!");
    result2.css('color', 'black');
}
// test email
function sub_email(email) {
    return email.match(
        /^[a-zA-z0-9.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    );
};

function test_email() {
    const result = $('#result');
    const email = $('#email').val();
    result.text('');
    if (sub_email(email)) {
        result.text(email + ' là hợp lệ.');
        result.css('color', 'green');
    } else {
        result.text(email + ' không hợp lệ.');
        result.css('color', 'red');
    }
}
// 
function thong_bao() {
    const result = $('#notice-mail');
    const result2 = $('#mail-title');
    const email = $('#email').val();
    if (sub_email(email)) {
        result.text("Thông tin mới nhất sẽ được gửi đến " + email);
        result2.text("Đăng ký thành công!");
        result2.css('color', 'black');
        $('#more-product').modal('show');
        $('#email').val('');
        $('#result').text('');
    } else {
        result.text("Email không hợp lệ");
        result2.text("Đăng ký không thành công!");
        result2.css('color', 'red');
        $('#more-product').modal('show');
    }
}
$('#email').on('input', test_email);

function close2() {
    $('#more-product').modal('hide');
}

function infoclose(x, y) {
    $(y).css('display', 'none');
    $(x).modal('hide');
}
let hidenn = new bootstrap.Modal(document.getElementById('infor-product-14plus'));
hidenn._element.addEventListener('hidden.bs.modal', function() {
    $('#buy142').css('display', 'none');
    $('#nameuser-142').val('');
    $('#numphone-142').val('');
    $('#address-142').val('');
    check(1, 142);
    check(3, 142);
    check(2, 142);
    check(4, 142);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-14'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy141').css('display', 'none');
    $('#nameuser-141').val('');
    $('#numphone-141').val('');
    $('#address-141').val('');
    check(1, 141);
    check(3, 141);
    check(2, 141);
    check(4, 141);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-14pro'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    alert('hi');
    $('#buy143').css('display', 'none');
    $('#nameuser-143').val('');
    $('#numphone-143').val('');
    $('#address-143').val('');
    check(1, 143);
    check(3, 143);
    check(2, 143);
    check(4, 143);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-15'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy151').css('display', 'none');
    $('#nameuser-151').val('');
    $('#numphone-151').val('');
    $('#address-151').val('');
    check(1, 151);
    check(3, 151);
    check(2, 151);
    check(4, 151);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-14max'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy144').css('display', 'none');
    $('#nameuser-144').val('');
    $('#numphone-144').val('');
    $('#address-144').val('');
    check(1, 144);
    check(3, 144);
    check(2, 144);
    check(4, 144);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-15plus'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy152').css('display', 'none');
    $('#nameuser-152').val('');
    $('#numphone-152').val('');
    $('#address-152').val('');
    check(1, 152);
    check(3, 152);
    check(2, 152);
    check(4, 152);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-15pro'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy153').css('display', 'none');
    $('#nameuser-153').val('');
    $('#numphone-153').val('');
    $('#address-153').val('');
    check(1, 153);
    check(3, 153);
    check(2, 153);
    check(4, 153);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});
var hiden = new bootstrap.Modal(document.getElementById('infor-product-15max'));
hiden._element.addEventListener('hidden.bs.modal', function() {
    $('#buy154').css('display', 'none');
    $('#nameuser-154').val('');
    $('#numphone-154').val('');
    $('#address-154').val('');
    check(1, 154);
    check(3, 154);
    check(2, 154);
    check(4, 154);
    Gia.textContent = "";
    Goc.textContent = "";
    Giam.textContent = "";
    dluong = 0;
    msac = 0;
    mau.src = k;
});

function view() {
    let cnt = document.getElementById("view-product");
    cnt.scrollIntoView();
}