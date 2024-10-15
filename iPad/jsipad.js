$(document).ready(function() {
    var gia = 0;
    $("#gia").text(gia);
    $("#molc11").click(function() {
        gia = 21199000;
        $("#luachon1").hide();
        $("#luachon2").show();
        $(".anhipad").hide();
        $(".anhipad1").show();
        $("#gia").text(gia);
    });
    $("#molc12").click(function() {
        gia = 29199000;
        $("#luachon1").hide();
        $("#luachon2").show();
        $(".anhipad").hide();
        $(".anhipad1").show();
        $("#gia").text(gia);
    });
    $("#trolai1").click(function() {
        gia = 0;
        $("#luachon2").hide();
        $("#luachon1").show();
        $(".anhipad1").hide();
        $(".anhipad").show();
        $("#gia").text(gia);
    });


    $("#molc21").click(function() {
        $("#luachon2").hide();
        $("#luachon3").show();
        $(".anhipad1").hide();
        $(".anhipad3").show();
    });
    $("#molc22").click(function() {
        $("#luachon2").hide();
        $("#luachon3").show();
        $(".anhipad1").hide();
        $(".anhipad2").show();
    });
    $("#trolai2").click(function() {
        $("#luachon3").hide();
        $("#luachon2").show();
        $(".anhipad2").hide();
        $(".anhipad3").hide();
        $(".anhipad1").show();
    });

    var a = 0;
    var b = 0;
    $("#molc31").click(function() {
        a = 3000000
        $("#luachon3").hide();
        $("#luachon4").show();
        gia = gia + a;
        $("#gia").text(gia);
    });
    $("#molc32").click(function() {
        b = 5000000
        $("#luachon3").hide();
        $("#luachon4").show();
        gia = gia + b;
        $("#gia").text(gia);
    });
    $("#trolai3").click(function() {
        $("#luachon4").hide();
        $("#luachon3").show();
        gia = gia - a - b;
        a = 0;
        b = 0;
        $("#gia").text(gia);
    });

    var c = 0;
    var d = 0;
    $("#molc41").click(function() {
        c = 500000
        $("#luachon4").hide();
        $("#muane").show();
        $("#trolai4").show();
        gia = gia + c;
        $("#gia").text(gia);
    });
    $("#molc42").click(function() {
        d = 1000000
        $("#luachon4").hide();
        $("#muane").show();
        $("#trolai4").show();
        gia = gia + d;
        $("#gia").text(gia);
    });
    $("#trolai4").click(function() {
        $("#muane").hide();
        $("#luachon4").show();
        $("#trolai4").hide();
        gia = gia - c - d;
        c = 0;
        d = 0;
        $("#gia").text(gia);
    });
    $("#muane").click(function() {
        var gia = 0;
        $("#gia").text(gia);
        $("#muane").hide();
        $("#trolai4").hide();
        $("#luachon1").show();
        $(".anhipad2").hide();
        $(".anhipad3").hide();
        $(".anhipad").show();
        alert("Bạn đã mua thành công")
    });
});