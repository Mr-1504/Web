// giá
let dluong = 0;
let msac = 0;

function changePrice(dungluong, pban) {
    if (pban == 141) {
        const Gia = document.getElementById("gia-14");
        const Goc = document.getElementById("goc-14");
        const Giam = document.getElementById("giam-14");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "18.690.000₫";
            Goc.textContent = "24.000.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "21.590.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "26.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 142) {
        const Gia = document.getElementById("gia-14plus");
        const Goc = document.getElementById("goc-14plus");
        const Giam = document.getElementById("giam-14plus");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "21.190.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "23.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "25.590.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-31%";
        }
    } else if (pban == 143) {
        const Gia = document.getElementById("gia-14pro");
        const Goc = document.getElementById("goc-14pro");
        const Giam = document.getElementById("giam-14pro");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "23.890.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "27.390.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "32.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-21%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            Gia.textContent = "37.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-21%";
        }
    } else if (pban == 144) {
        const Gia = document.getElementById("gia-14max");
        const Goc = document.getElementById("goc-14max");
        const Giam = document.getElementById("giam-14max");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "26.550.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-25%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "28.890.000₫";
            Goc.textContent = "37.490.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "35.890.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-19%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            Gia.textContent = "41.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-17%";
        }
    } else if (pban == 151) {
        const Gia = document.getElementById("gia-15");
        const Goc = document.getElementById("goc-15");
        const Giam = document.getElementById("giam-15");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "21.890.000₫";
            Goc.textContent = "24.990.000₫";
            Giam.textContent = "-23%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "24.890.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-22%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "29.990.000₫";
            Goc.textContent = "33.990.000₫";
            Giam.textContent = "-22%";
        }
    } else if (pban == 152) {
        const Gia = document.getElementById("gia-15plus");
        const Goc = document.getElementById("goc-15plus");
        const Giam = document.getElementById("giam-15plus");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "25.490.000₫";
            Goc.textContent = "27.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "28.490.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-9%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "33.490.000₫";
            Goc.textContent = "36.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 153) {
        const Gia = document.getElementById("gia-15pro");
        const Goc = document.getElementById("goc-15pro");
        const Giam = document.getElementById("giam-15pro");
        if (dungluong == 128) {
            dluong = 128;
            Gia.textContent = "27.990.000₫";
            Goc.textContent = "30.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "30.490.000₫";
            Goc.textContent = "34.990.000₫";
            Giam.textContent = "-13%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "36.490.000₫";
            Goc.textContent = "40.990.000₫";
            Giam.textContent = "-11%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            Gia.textContent = "42.490.000₫";
            Goc.textContent = "46.990.000₫";
            Giam.textContent = "-10%";
        }
    } else if (pban == 154) {
        const Gia = document.getElementById("gia-15max");
        const Goc = document.getElementById("goc-15max");
        const Giam = document.getElementById("giam-15max");
        if (dungluong == 256) {
            dluong = 256;
            Gia.textContent = "34.990.000₫";
            Goc.textContent = "37.990.000₫";
            Giam.textContent = "-8%";
        } else if (dungluong == 512) {
            dluong = 512;
            Gia.textContent = "39.990.000₫";
            Goc.textContent = "43.990.000₫";
            Giam.textContent = "-10%";
        } else if (dungluong == 1024) {
            dluong = 1024;
            Gia.textContent = "45.990.000₫";
            Goc.textContent = "49.990.000₫";
            Giam.textContent = "-9%";
        }
    }

}

// màu

function changeImg(x, pban) {
    var mau;
    if (pban == 141) {
        mau = document.getElementById("color-14");
        if (x == 1) {
            mau.src = "img/img_iphone/ip14black.png";
        } else if (x == 2) {
            mau.src = "img/img_iphone/ip14star.png";
        } else if (x == 3) {
            mau.src = "img/img_iphone/ip14red.png";
        } else if (x == 4) {
            mau.src = "img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            mau.src = "img/img_iphone/ip14green.png";
        } else if (x == 6) {
            mau.src = "img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 142) {
        mau = document.getElementById("color-14plus");
        if (x == 1) {
            mau.src = "img/img_iphone/ip14black.png";
        } else if (x == 2) {
            mau.src = "img/img_iphone/ip14star.png";
        } else if (x == 3) {
            mau.src = "img/img_iphone/ip14red.png";
        } else if (x == 4) {
            mau.src = "img/img_iphone/ip14purple.png";
        } else if (x == 5) {
            mau.src = "img/img_iphone/ip14green.png";
        } else if (x == 6) {
            mau.src = "img/img_iphone/ip14yellow.png";
        }
    } else if (pban == 143) {
        mau = document.getElementById("color-14pro");
        if (x == 1) {
            mau.src = "img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            mau.src = "img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            mau.src = "img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            mau.src = "img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 144) {
        mau = document.getElementById("color-14max");
        if (x == 1) {
            mau.src = "img/img_iphone/ip14maxblack.png";
        } else if (x == 7) {
            mau.src = "img/img_iphone/ip14maxwhite.png";
        } else if (x == 8) {
            mau.src = "img/img_iphone/ip14maxgold.png";
        } else if (x == 9) {
            mau.src = "img/img_iphone/ip14maxpurple.png";
        }
    } else if (pban == 151) {
        mau = document.getElementById("color-15");
        if (x == 1) {
            mau.src = "img/img_iphone/ip15black.png";
        } else if (x == 10) {
            mau.src = "img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            mau.src = "img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            mau.src = "img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            mau.src = "img/img_iphone/ip15blue.png";
        }
    } else if (pban == 152) {
        mau = document.getElementById("color-15plus");
        if (x == 1) {
            mau.src = "img/img_iphone/ip15black.png";
        } else if (x == 10) {
            mau.src = "img/img_iphone/ip15pink.png";
        } else if (x == 6) {
            mau.src = "img/img_iphone/ip15yellow.png";
        } else if (x == 11) {
            mau.src = "img/img_iphone/ip15green-real.png";
        } else if (x == 12) {
            mau.src = "img/img_iphone/ip15blue.png";
        }
    } else if (pban == 153) {
        mau = document.getElementById("color-15pro");
        if (x == 1) {
            mau.src = "img/img_iphone/ip15problack.png";
        } else if (x == 13) {
            mau.src = "img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            mau.src = "img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            mau.src = "img/img_iphone/tip15progrey.png";
        }
    } else if (pban == 154) {
        mau = document.getElementById("color-15max");
        if (x == 1) {
            mau.src = "img/img_iphone/ip15promaxblack.png";
        } else if (x == 13) {
            mau.src = "img/img_iphone/ip15prowhite.png";
        } else if (x == 14) {
            mau.src = "img/img_iphone/ip15protitan-blue.png";
        } else if (x == 7) {
            mau.src = "img/img_iphone/tip15progrey.png";
        }
    }
    msac = x;
}

function cart() {
    if (dluong != 0 && msac != 0) {
        alert("Thêm sản phẩm thành công!");
        location.reload();
    } else {
        alert("Vui lòng chọn đầy đủ thông tin");
    }
    dluong = 0;
    msac = 0;
}
// test email


const sub_email = (email) => {
    return email.match(
        /^[a-zA-z0-9.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/
    );
};
const test_email = () => {
    const $result = $('#result');
    const email = $('#email').val();
    $result.text('');
    if (sub_email(email)) {
        $result.text(email + ' là hợp lệ.');
        $result.css('color', 'green');
    } else {
        $result.text(email + ' không hợp lệ.');
        $result.css('color', 'red');
    }
    return false;
}

function thong_bao() {
    const $result = $('#result');
    const email = $('#email').val();
    if (sub_email(email)) {
        alert("Đăng ký thành công ");
    } else {
        alert("Email không hợp lệ. Vui lòng nh");
    }
    location.reload();
}
$('#email').on('input', test_email);

function infoclose(x) {
    $(x).modal('hide');
}