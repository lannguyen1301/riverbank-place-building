function getState(t) {
    $.ajax({
        type: "POST",
        url: root + "detail/ward",
        data: "q=" + t + "&action=getWard",
        cache: !1,
        dataType: "json",
        success: function(e) {
            $("#statediv").html(e.ward),
            $("#citydiv").html(e.street),
            $("#disval_id").attr("value", t)
        }
    })
}
function getCity(e, t) {
    $.ajax({
        type: "POST",
        url: root + "detail/st",
        data: "q=" + e + "&p=" + t + "&action=getStreet",
        cache: !1,
        dataType: "json",
        success: function(e) {
            $("#citydiv").html(e.street),
            $("#txtSeachWard").attr("value", e.ward),
            $("#wardval_id").attr("value", e.wardval)
        }
    })
}
function validate() {
    return "-1" != document.frmSearch.txtDistrict.value || (alert("Vui lòng chọn quận cần thuê!"),
    !(document.getElementById("txtDistrict").style.border = "1px solid #09a7e2"))
}
function Contact() {
    $(window).outerWidth(),
    $(window).outerHeight();
    return $.ajax({
        type: "POST",
        url: root + "detail/contact",
        data: "&action=Contact",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").prepend('<div class="ajaxicon"></div>')
        },
        success: function(e) {
            $(".ajaxicon").remove(),
            $(".trans").fadeIn(),
            $(".wpkirim_1").fadeIn().html(e),
            $(".close-kirim").on("click", function() {
                $(".wpkirim_1").html("").css({
                    display: "none"
                }),
                $(".trans").css({
                    display: "none"
                })
            })
        }
    }),
    !1
}
function checkContact() {
    var e = document.frm_contact
      , t = isWhiteSpace(e.txtContactName.value)
      , a = isWhiteSpace(e.txtContactPhone.value)
      , n = isWhiteSpace(e.txtContactTitle.value)
      , i = isWhiteSpace(e.txtContactMessage.value)
      , o = e.txtContactEmail.value;
    return 1 == n || "-1" == e.txtContactTitle.value ? (alert("Vui lòng chọn hình thức liên hệ bạn muốn!"),
    $("#txtContactTitle").focus().select()) : 1 == t || "" == e.txtContactName.value ? (alert("Vui lòng nhập tên hoặc đơn vị của bạn!"),
    $("#txtContactName").focus().select()) : o.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? 1 == a || "" == e.txtContactPhone.value ? (alert("Vui lòng nhập số điện thoại của bạn, VD: 0988167702!"),
    $("#txtContactPhone").focus().select()) : 1 == i || e.txtContactMessage.value.length < 10 ? (alert("Vui lòng nhập nội dung ít nhất 10 ký tự!"),
    $("#txtContactMessage").focus().select()) : sendContact() : (alert("Vui lòng nhập Email của bạn!"),
    $("#txtContactEmail").focus()),
    !1
}
function sendContact() {
    var e = $("form[name=frm_contact]").serialize();
    $.ajax({
        type: "POST",
        url: root + "ajax",
        data: e + "&action=ConfirmContact",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").append('<div class="screen" style="z-index:999"></div>')
        },
        success: function(e) {
            1 == e && (alert("Đã gửi liên hệ thành công, Cảm ơn Quý Khách!"),
            $(".screen").remove(),
            document.getElementById("frm_contact").reset(),
            location.reload()),
            2 == e && (alert("Chúng tôi xin lỗi! Vui lòng xác nhận bạn không phải là Robots!"),
            $(".screen").remove()),
            0 == e && (alert("Không thể gửi, Lỗi kết nối hoặc sai mã bảo vệ!"),
            $(".screen").remove())
        }
    })
}
function MyAss1() {
    var e = document.frmAsset
      , t = isWhiteSpace(e.ass_hoten.value)
      , a = isWhiteSpace(e.ass_dienthoai.value)
      , n = isWhiteSpace(e.ass_diachi.value)
      , i = isWhiteSpace(e.ass_loaikygui.value)
      , o = isWhiteSpace(e.ass_giathue.value)
      , c = isWhiteSpace(e.ass_diachichothue.value)
      , s = isWhiteSpace(e.ass_noidung.value)
      , r = e.ass_email.value;
    return 1 == t || "" == e.ass_hoten.value ? (alert("Vui lòng nhập Họ Tên người liên hệ!"),
    $("#ass_hoten").focus()) : r.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? 1 == a || e.ass_dienthoai.value.length < 10 || 11 < e.ass_dienthoai.value.length ? (alert("Vui lòng nhập số điện thoại. VD: 0987110011"),
    $("#ass_dienthoai").focus()) : 1 == n || "" == e.ass_diachi.value ? (alert("Vui lòng nhập địa chỉ người liên hệ!"),
    $("#ass_diachi").focus()) : 1 == i || "0" == e.ass_loaikygui.value || 4 < e.ass_loaikygui.value || e.ass_loaikygui.value < 0 ? (alert("Vui lòng chọn loại ký gửi!"),
    $("#ass_loaikygui").focus()) : 1 == o || "" == e.ass_giathue.value ? (alert("Vui lòng nhập giá cho thuê!"),
    $("#ass_giathue").focus()) : 1 == c || "" == e.ass_diachichothue.value ? (alert("Vui lòng nhập địa chỉ cho thuê!"),
    $("#ass_diachichothue").focus()) : 1 == s || "" == e.ass_noidung.value ? (alert("Vui lòng nhập nội dung cho thuê!"),
    $("#ass_noidung").focus()) : ($img_file = $("#img_file").val(),
    $type_img_file = $("#img_file").val().split(".").pop().toLowerCase(),
    "" != $img_file && -1 == $.inArray($type_img_file, ["png", "jpeg", "jpg"]) ? alert("File hình ảnh phải ở định dạng: 'png', 'jpeg', 'jpg'") : (s = document.getElementById("frmAsset"),
    e = $("#img_file").prop("files")[0],
    (s = new FormData(s)).append("file", e),
    $.ajax({
        url: root + "detail/asset",
        type: "POST",
        data: s,
        cache: !1,
        dataType: "json",
        processData: !1,
        contentType: !1,
        beforeSend: function() {
            $("body").append('<div class="screen" style="z-index:999"></div>')
        },
        success: function(e) {
            1 == e.status && (alert("Cảm ơn Quý đối tác đã gửi thông tin, chúng tôi sẽ liên hệ lại sớm nhất!"),
            $(".screen").remove(),
            $(".view_pics").html("").fadeOut(),
            document.getElementById("frmAsset").reset()),
            2 == e.status && (alert("Dung lượng File quá lớn (< 5MB)"),
            $(".screen").remove()),
            3 == e.status && (alert("Địa chỉ cho thuê này đã được đăng ký trước đó."),
            $(".screen").remove()),
            4 == e.status && (alert("Chúng tôi xin lỗi! Vui lòng xác nhận bạn không phải là Robots!"),
            $(".screen").remove()),
            0 == e.status && (alert("Có lỗi, vui lòng nhập đúng mã bảo về hoặc nhấn F5 và thử lại!"),
            $(".screen").remove())
        }
    }))) : (alert("Vui lòng nhập địa chỉ Email!"),
    $("#ass_email").focus()),
    !1
}
function previewImg1(e) {
    var t = document.getElementById("img_file").files
      , a = [];
    if ($(".view_pics").fadeIn(),
    12 < t.length)
        alert("Bạn chỉ được chọn tối đa 12 hình ảnh ('png', 'jpeg', 'jpg')"),
        $("#img_file").val(""),
        $(".view_pics").html("");
    else
        for ($(".view_pics").html(""),
        i = 0; i < t.length; i++)
            -1 === a.indexOf(t[i].name) && ($(".view_pics").append('<img src="" id="' + i + '">'),
            $(".view_pics img:eq(" + i + ")").attr("src", URL.createObjectURL(e.target.files[i])))
}
function CalcLove() {
    var e = $("#first_name").val()
      , t = $("#second_name").val()
      , a = isWhiteSpace(e)
      , n = isWhiteSpace(t);
    return 1 == a || "" == e ? (alert("Nhập tên của bạn!"),
    $("#first_name").focus().select()) : 1 == n || "" == t ? (alert("Nhập tên của người ấy!"),
    $("#second_name").focus().select()) : $.ajax({
        type: "POST",
        url: "https://www.officesaigon.vn/sdk/login.php",
        data: "first_name=" + e + "&second_name=" + t + "&action=CalcLove",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".img_love_result").prepend('<div class="loading_love"></div'),
            $("#love_result").html("").css({
                padding: "0"
            }),
            $(".love_percent").html(""),
            $("#btn_loveCal").removeAttr("onclick")
        },
        success: function(e) {
            1 == e.status && (mypopup(e.url),
            $("#btn_loveCal").attr("onclick", "return CalcLove()"),
            $(".loading_love").remove(),
            $("#loveresult").attr("value", e.percent + "%"),
            $(".love_percent").html(e.title),
            $("#love_result").html(e.str).css({
                padding: "15px 0"
            }),
            $(".img_love_result").addClass("love_bg"),
            $(".game_tips").html(e.tips),
            $(".btn_share_fb").html(e.share),
            $(".movable_div").draggable({
                containment: "#love_result",
                scroll: !1
            }),
            $("#capture").click(function() {
                return $(".btn_share_fb").prepend('<div class="disable"><i class="fa fa-spinner faa-spin animated"></i></div>'),
                div_content = document.querySelector("#canvas"),
                html2canvas(div_content).then(function(e) {
                    data = e.toDataURL("image/jpeg"),
                    save_img(data)
                }),
                !1
            })),
            0 == e.status && alert("Lỗi!")
        }
    }),
    !1
}
function mypopup(e) {
    mywindow = window.open(e, "_blank"),
    mywindow ? mywindow.focus() : alert("Vui lòng mở Popup trình duyệt để xem nhiều hơn!")
}
function CalcLove1() {
    var e = $("#first_name").val()
      , t = $("#second_name").val()
      , a = isWhiteSpace(e)
      , n = isWhiteSpace(t);
    return 1 == a || "" == e ? (alert("Nhập tên của bạn!"),
    $("#first_name").focus().select()) : 1 == n || "" == t ? (alert("Nhập tên của người ấy!"),
    $("#second_name").focus().select()) : $.ajax({
        type: "POST",
        url: root + "giai-tri/callback",
        data: "first_name=" + e + "&second_name=" + t + "&action=CalcLove",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".img_love_result").prepend('<div class="loading_love"></div'),
            $("#love_result").html("").css({
                padding: "0"
            }),
            $(".love_percent").html(""),
            $("#btn_loveCal").removeAttr("onclick")
        },
        success: function(e) {
            1 == e.status && ($("#btn_loveCal").attr("onclick", "return CalcLove()"),
            $(".loading_love").remove(),
            $("#loveresult").attr("value", e.percent + "%"),
            $(".love_percent").html(e.title),
            $("#love_result").html(e.str).css({
                padding: "15px 0"
            }),
            $(".img_love_result").addClass("love_bg"),
            $(".game_tips").html(e.tips),
            $(".btn_share_fb").html(e.share),
            $(".movable_div").draggable({
                containment: "#love_result",
                scroll: !1
            }),
            $("#capture").click(function() {
                return $(".btn_share_fb").prepend('<div class="disable"><i class="fa fa-spinner faa-spin animated"></i></div>'),
                div_content = document.querySelector("#canvas"),
                html2canvas(div_content).then(function(e) {
                    data = e.toDataURL("image/jpeg"),
                    save_img(data)
                }),
                !1
            })),
            0 == e.status && alert("Lỗi!")
        }
    }),
    !1
}
function save_img(e) {
    var t = $("#first_name").val()
      , a = $("#second_name").val();
    $.post(root + "giai-tri/img", {
        data: e,
        first_name: t,
        second_name: a
    }, function(e) {
        1 == e.status && ($(".disable").remove(),
        yes = confirm("Bạn có muốn chia sẻ hình ảnh lê Facebook? Hãy Tag ngay tên người ấy vào nhé!"),
        yes && FB.ui({
            method: "share",
            display: "popup",
            mobile_iframe: !0,
            hashtag: "#officesaigon",
            href: e.webURL,
            picture: e.imageURL
        }, function(e) {
            e && !e.error_code && void 0 !== e && updateShare(t, a)
        })),
        0 == e.status && alert("Không thể chia sẻ, vui lòng thử lại nhé!")
    }, "json")
}
function Share2FB() {
    var t = $("#first_name").val()
      , a = $("#second_name").val();
    return FB.ui({
        method: "share",
        display: "popup",
        mobile_iframe: !0,
        hashtag: "#officesaigon",
        href: window.location.href
    }, function(e) {
        e && !e.error_code && void 0 !== e && updateShare(t, a)
    }),
    !1
}
function checnums(e) {
    var t = e.value;
    e.value = t.replace(/[`1234567890~!@#$%^&*()_|+\-=?;:'',.<>\{\}\[\]\\/]/gi, "")
}
function getFB(e) {
    return $.ajax({
        url: "https://graph.facebook.com/v3.1/",
        dataType: "jsonp",
        type: "GET",
        data: {
            fields: "engagement",
            access_token: "1251751144983155|b461a288d25630c4102bcc7ac56a6f8a",
            id: e
        },
        success: function(e) {
            $("#results").html("<strong>Number of shares:</strong> " + e.engagement.share_count)
        }
    }),
    !1
}
function updateShare(e, t) {
    $.post(root + "giai-tri/update", {
        name1: e,
        name2: t
    }, function(e) {
        1 == e.status && console.log("Updated!"),
        0 != e.status && 2 != e.status || alert("Updated Error!")
    }, "json")
}
function FbDemo() {
    return FB.api("/me", {
        fields: "last_name"
    }, function(e) {
        console.log(e)
    }),
    !1
}
function checkQA() {
    var e = document.frmQa
      , t = isWhiteSpace(e.cmtName.value)
      , a = isWhiteSpace(e.cmtContent.value)
      , n = isWhiteSpace(e.captcha.value)
      , i = e.cmtEmail.value;
    if (1 == t || "" == e.cmtName.value)
        return alert("Vui lòng nhập tên của bạn!"),
        $("#cmtName").focus().select(),
        !1;
    if (!i.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        return alert("Vui lòng nhập Email của bạn!"),
        $("#cmtEmail").focus(),
        !1;
    if (1 == a || e.cmtContent.value.length < 10)
        return alert("Vui lòng nhập nội dung ít nhất 10 ký tự!"),
        $("#cmtContent").focus().select(),
        !1;
    if (1 == n || e.captcha.value.length < 4)
        return alert("Vui lòng nhập mã bảo về!"),
        $("#captcha").focus(),
        !1;
    n = $("form[name=frmQa]").serialize(),
    e = $("#frmQa").attr("data-id");
    return $.ajax({
        type: "POST",
        url: root + "thao-luan/rep",
        data: n + "&id=" + e + "&action=checkQA",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").append('<div class="screen"></div>')
        },
        success: function(e) {
            1 == e && (alert("Ý kiến của bạn đã được gửi thành công!"),
            $(".screen").remove(),
            location.reload()),
            0 == e && (alert("Lỗi, vui lòng kiểm tra thông tin hoặc nhấn F5 và thử lại!"),
            $(".screen").remove()),
            2 == e && (alert("Lỗi, vui lòng kiểm tra mã bảo mật, đổi mã hoặc nhấn F5 và thử lại!"),
            $(".screen").remove())
        }
    }),
    !1
}
function LikeQA(t) {
    var e = "id=" + t + "&action=LikeQA";
    jQuery.ajax({
        url: root + "thao-luan/like",
        data: e,
        dataType: "json",
        type: "POST",
        cache: !1,
        beforeSend: function() {
            $("#likeid_" + t).removeAttr("onclick"),
            $("#likeid_" + t).html("<i class='fa fa-gear faa-spin animated'></i> Thích...")
        },
        success: function(e) {
            1 == e.status && ($("#likeid_" + t).attr("onclick", 'UnLikeQA("' + t + '")'),
            $("#likeid_" + t).html("<i class='fa fa-thumbs-o-down'></i> Bỏ thích "),
            $(".vote_" + t).html(e.vote))
        }
    })
}
function UnLikeQA(t) {
    var e = "id=" + t + "&action=UnLikeQA";
    jQuery.ajax({
        url: root + "thao-luan/unlike",
        data: e,
        dataType: "json",
        type: "POST",
        cache: !1,
        beforeSend: function() {
            $("#likeid_" + t).removeAttr("onclick"),
            $("#likeid_" + t).html("<i class='fa fa-gear faa-spin animated'></i> Thích...")
        },
        success: function(e) {
            1 == e.status && ($("#likeid_" + t).attr("onclick", 'javascript:alert("Bạn đã hết lượt bình chọn, vui lòng trở lại sau 1 tiếng. Xin cảm ơn!")'),
            $("#likeid_" + t).html("<i class='fa fa-thumbs-o-up'></i> Thích "),
            $(".vote_" + t).html(e.vote))
        }
    })
}
function resetContact() {
    document.getElementById("frm_contact").reset()
}
function isWhiteSpace(e) {
    argWs = e.toString();
    for (var t = 0; t < argWs.length; t++)
        if (" " != argWs.charAt(t) && "\t" != argWs.charAt(t))
            return !1;
    return !0
}
function checkIt(e) {
    e = (e = e || window.event).which || e.keyCode;
    return !(31 < e && (e < 48 || 57 < e)) || (alert("Vui lòng nhập số!"),
    !1)
}
function getList() {
    return $.ajax({
        url: root + "cart/items",
        type: "POST",
        data: "id=1&action=getList",
        dataType: "json",
        cache: !1,
        beforeSend: function() {
            $("body").append('<div class="screen srclist"></div>')
        },
        success: function(e) {
            1 == e.status && ($(".srclist").remove(),
            $(this).hide(),
            $(".wpprlist").html(e.str).slideToggle(150, function() {
                $(".btnclo").show()
            }),
            $("#btn_clo").on("click", function() {
                $(".wpprlist").hide().html(""),
                $("#btn_clo").hide(),
                $("#btn_list").show()
            }))
        }
    }),
    !1
}
function deleteCartList(t) {
    return $.ajax({
        url: root + "cart/items_delete",
        type: "POST",
        data: "code=" + t + "&action=deleteCartList",
        dataType: "json",
        cache: !1,
        beforeSend: function() {
            $(".wpprlist").append('<div class="screen srclist"></div>')
        },
        success: function(e) {
            1 == e.status && ($(".srclist").remove(),
            $("#dlid_" + t).remove())
        }
    }),
    !1
}
function close_now() {
    $(".cart_status").remove()
}
function noCart() {
    alert("Hiện chưa có thông tin nào được lưu!")
}
function AddCart1(t) {
    var e = $(".btncart_" + t).attr("data-id");
    return $.ajax({
        url: root + "cart/add",
        type: "POST",
        data: "data=" + e + "&action=AddCart1",
        dataType: "json",
        cache: !1,
        beforeSend: function() {
            $(".btncart_" + t).html('<i class="fa fa-spinner faa-spin animated"></i> Đang thêm...'),
            $(".btncart_" + t).removeAttr("onclick"),
            $(".cart_status").remove()
        },
        success: function(e) {
            1 == e.status && ($("body").prepend('<div class="cart_status"><p>Bạn đã thêm tòa nhà vào danh sách đi xem. Bạn có muốn đặt lịch hẹn?</p><a href="' + root + 'cart.html" title="Hẹn đi xem">Đặt lịch đi xem</a> <a href="javascript:void(0)" onclick="close_now()" title="Tắt hiển thị" class="close_now">Đóng lại</a></div>'),
            $(".cart_status").slideDown(),
            $(".cart-num").html(e.soluong),
            $(".btncart_" + t).html('<i class="fa fa-check"></i> Đã thêm!'),
            $(".ofplug").attr("onclick", 'go_url("./cart.html")'),
            setTimeout(function() {
                $(".btncart_" + t).html('<i class="fa fa-plus"></i> Lưu danh sách'),
                $(".btncart_" + t).attr("onclick", "return AddCart1('" + t + "')"),
                $(".cart_status").fadeOut()
            }, 3e3)),
            0 == e.status && (alert("Có lỗi xảy ra, vui lòng thử lại!"),
            $(".btncart_" + t).html('<i class="fa fa-plus"></i> Lưu danh sách'),
            $(".btncart_" + t).attr("onclick", "return AddCart1('" + t + "')")),
            2 == e.status && (alert("Bạn chỉ có thể thêm tối đa 5 tòa nhà!"),
            $(".btncart_" + t).html('<i class="fa fa-plus"></i> Lưu danh sách'),
            $(".btncart_" + t).attr("onclick", "return AddCart1('" + t + "')"),
            window.location.href = root + "cart.html"),
            3 == e.status && (alert("Tòa nhà này đã được thêm vào trước đó, vui lòng chọn tòa nhà khác!"),
            $(".btncart_" + t).html('<i class="fa fa-plus"></i> Lưu danh sách'),
            $(".btncart_" + t).attr("onclick", "return AddCart1('" + t + "')"))
        }
    }),
    !1
}
function CartForm() {
    for (var t = $(window).width(), a = $(window).height(), e = document.querySelectorAll("input[name^='ngaydixem[']"), n = document.querySelectorAll("input[name^='dientich[']"), i = 0, o = 0, c = 0; c < e.length; c++)
        ("" == e[c].value || e[c].value.length < 10) && (i = 1,
        $(".picker_" + c).focus());
    for (var s = 0; s < n.length; s++)
        "" == n[s].value && (o = 1);
    if (1 == i)
        return alert("Vui lòng chọn ngày đi xem!"),
        !1;
    if (1 == o)
        return alert("Vui lòng chọn chọn diện tích muốn đi xem!"),
        !1;
    var r = $("form[name=FrmCart]").serialize()
      , l = $("#FrmCart").attr("data-id")
      , u = $("#FrmCart").attr("data-base");
    return $.ajax({
        type: "POST",
        url: root + "detail/carfrm",
        data: r + "&code=" + l + "&num=" + u + "&action=CartForm",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").prepend('<div class="ajaxicon"></div>')
        },
        success: function(e) {
            "Có lỗi, vui lòng thực hiện lại!" == e && (alert("Có lỗi, vui lòng thực hiện lại!"),
            window.location.reload()),
            $(".ajaxicon").remove(),
            $(".trans").fadeIn(),
            $(".wpkirim_1").fadeIn().html(e),
            $(".wpkirim").animate({
                top: (a - $(".wpkirim").height()) / 2,
                left: (t - $(".wpkirim").width()) / 2
            }, 200),
            $(".close-kirim").on("click", function() {
                $(".wpkirim_1").html("").css({
                    display: "none"
                }),
                $(".trans").css({
                    display: "none"
                })
            })
        }
    }),
    !1
}
function DeleteCart(e) {
    return $.ajax({
        url: root + "cart/d",
        type: "POST",
        data: "code=" + e + "&action=DeleteCart",
        dataType: "html",
        cache: !1,
        beforeSend: function() {
            $(".d_" + e).html('<i class="fa fa-spinner faa-spin animated"></i>'),
            $(".d_" + e).removeAttr("onclick")
        },
        success: function(e) {
            1 == e && window.location.reload(),
            2 == e && (alert("Không thể xóa do phiên truy cập đã hết hạn!"),
            window.location.reload())
        }
    }),
    !1
}
function CartBooking() {
    var e = document.frmSendCart
      , t = isWhiteSpace(e.hoten.value)
      , a = isWhiteSpace(e.dienthoai.value)
      , n = isWhiteSpace(e.msg.value)
      , i = e.email.value;
    if (1 == t || "" == e.hoten.value)
        return alert("Vui lòng nhập họ tên/ đơn vị!"),
        $("#hoten").focus(),
        !1;
    if (!i.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        return alert("Vui lòng nhập địa chỉ Email!"),
        $("#email").focus(),
        !1;
    if (1 == a || e.dienthoai.value.length < 10)
        return alert("Vui lòng nhập số điện thoại. VD: 0987110011"),
        $("#dienthoai").focus(),
        !1;
    if (1 == n || e.msg.value.length < 10)
        return alert("Vui lòng cho chúng tôi biết thêm vài thông tin!"),
        $("#msg").focus(),
        !1;
    a = $("form[name=frmSendCart]").serialize(),
    n = $("#frmSendCart").attr("data-id"),
    e = $("#frmSendCart").attr("data-base");
    return $.ajax({
        type: "POST",
        url: root + "cart/book",
        data: a + "&code=" + n + "&num=" + e + "&action=CartBooking",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".wpkirim_1").append('<div class="screen scr_cart"></div>')
        },
        success: function(e) {
            2 == e.status && (alert("Chúng tôi xin lỗi! Vui lòng xác nhận bạn không phải là Robots!"),
            $(".scr_cart").remove()),
            1 == e.status && ($(".wpkirim_1").html('<h2 style="display:block;font-size:22px;font-weight:400;color:#66a626;padding:30px 0 20px 0"><i class="fa fa-check"></i> Gửi thành công, xin chân thành cảm ơn!</h2><button title="Close" type="button" class="close-kirim">×</button><p>Một bản email copy cũng đã được gửi đến địa chỉ email <b>' + e.email + "</b> của quý khách!</p>"),
            setTimeout(function() {
                window.location.href = root + "cart.html/?v=" + e.link_id
            }, 5e3)),
            0 == e.status && ($(".wpkirim_1").fadeIn().html('<h2 style="display:block;font-size:22px;font-weight:400;color:#f00;padding:30px 0 20px 0"><i class="fa fa-exclamation-triangle"></i> Lỗi, vui lòng thực hiện lại!</h2>'),
            setTimeout(function() {
                window.location.reload()
            }, 4e3)),
            $(".close-kirim").on("click", function() {
                $(".wpkirim_1").html("").css({
                    display: "none"
                }),
                $(".trans").css({
                    display: "none"
                })
            })
        }
    }),
    !1
}
function checkComment1() {
    for (var e = document.frmComments, t = isWhiteSpace(e.cmtName.value), a = isWhiteSpace(e.cmtContent.value), n = isWhiteSpace(e.captcha.value), i = e.cmtEmail.value, o = document.getElementsByName("rd"), c = 0, s = 0; s < o.length; s++)
        o[s].checked && c++;
    if (c < 1)
        return alert("Vui lòng chọn xếp hạng dịch vụ!"),
        !1;
    if (1 == t || "" == e.cmtName.value)
        return alert("Vui lòng nhập tên hoặc đơn vị của bạn!"),
        $("#cmtName").focus().select(),
        !1;
    if (!i.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        return alert("Vui lòng nhập Email của bạn!"),
        $("#cmtEmail").focus(),
        !1;
    if (1 == a || e.cmtContent.value.length < 10)
        return alert("Vui lòng nhập nội dung ít nhất 10 ký tự!"),
        $("#cmtContent").focus().select(),
        !1;
    if (1 == n || e.captcha.value.length < 4)
        return alert("Vui lòng nhập mã bảo về!"),
        $("#captcha").focus(),
        !1;
    e = $("form[name=frmComments]").serialize();
    return $.ajax({
        type: "POST",
        url: root + "detail/review",
        data: e,
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").append('<div class="screen"></div>'),
            $(".ajaxst").html("<div class='ajax-st'><span>Đang gửi...</span></div>"),
            $("#btnComment").addClass("send-status"),
            $("#frmComments").removeAttr("onsubmit")
        },
        success: function(e) {
            1 == e && (alert("Cảm ơn bạn đã đóng góp ý kiến!"),
            window.location.reload()),
            0 != e && 2 != e || (alert("Có lỗi xảy ra, kiểm tra mã bảo vệ và Vui lòng thử lại!"),
            $("#btnComment").removeClass("send-status"),
            $(".ajaxst").html('<input type="submit" name="btnComment" id="btnComment" value="Gửi">'),
            $("#frmComments").attr("onsubmit", "return checkComment()"),
            window.location.reload())
        }
    }),
    !1
}
function LikeComment(t) {
    var e = "id=" + t + "&action=LikeComment";
    jQuery.ajax({
        url: root + "detail/like",
        data: e,
        dataType: "json",
        type: "POST",
        cache: !1,
        beforeSend: function() {
            $("#likeid_" + t).removeAttr("onclick"),
            $("#likeid_" + t).html("<i class='fa fa-spinner faa-spin animated'></i> Thích...")
        },
        success: function(e) {
            1 == e.status && ($("#likeid_" + t).attr("onclick", 'UnLikeComment("' + t + '")'),
            $("#likeid_" + t).html("<i class='fa fa-thumbs-o-down'></i> Bỏ thích (" + e.vote + ")"))
        }
    })
}
function UnLikeComment(t) {
    var e = "id=" + t + "&action=UnLikeComment";
    jQuery.ajax({
        url: root + "detail/unlike",
        data: e,
        dataType: "json",
        type: "POST",
        cache: !1,
        beforeSend: function() {
            $("#likeid_" + t).removeAttr("onclick"),
            $("#likeid_" + t).html("<i class='fa fa-gear faa-spin animated'></i> Thích...")
        },
        success: function(e) {
            1 == e.status && ($("#likeid_" + t).attr("onclick", 'javascript:alert("Bạn đã hết lượt bình chọn cho comment này, vui lòng trở lại sau 1 tiếng. Xin cảm ơn!")'),
            $("#likeid_" + t).html("<i class='fa fa-thumbs-o-up'></i> Thích (" + e.vote + ")"))
        }
    })
}
function getPage(t) {
    $(".reply-comment").html("").hide(),
    $(".reply_" + t).html('<i class="fa fa-gear faa-spin animated"></i> Loading...').fadeIn(),
    jQuery.ajax({
        url: root + "detail/reply",
        data: {
            id: t
        },
        type: "POST",
        cache: !1,
        dataType: "html",
        success: function(e) {
            $(".reply_" + t).html('<span class="close-reply" title="Đóng!">X</span>' + e),
            $("html,body").animate({
                scrollTop: $(".reply_" + t).offset().top - 60
            }, 500),
            $("#cmtNameReply").focus(),
            $("span.close-reply").on("click", function() {
                $(".reply_" + t).html("").fadeOut()
            })
        }
    })
}
function checkCommentReply() {
    var e = document.frmCommentReply
      , t = isWhiteSpace(e.cmtNameReply.value)
      , a = isWhiteSpace(e.cmtContentReply.value)
      , n = e.cmtEmailReply.value;
    return 1 == t || "" == e.cmtNameReply.value ? (alert("Vui lòng nhập tên hoặc đơn vị của bạn!"),
    $("#cmtNameReply").focus().select()) : n.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) ? 1 == a || e.cmtContentReply.value.length < 10 ? (alert("Vui lòng nhập nội dung ít nhất 10 ký tự!"),
    $("#cmtContentReply").focus().select()) : sendReply() : (alert("Vui lòng nhập Email của bạn!"),
    $("#cmtEmailReply").focus()),
    !1
}
function sendReply() {
    var e = $("form[name=frmCommentReply]").serialize()
      , t = $("#frmCommentReply").attr("data-id");
    return $.ajax({
        type: "POST",
        url: root + "detail/reply2",
        data: e + "&id=" + t + "&action=checkCommentReply",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").append('<div class="screen"></div>'),
            $("#frmCommentReply").removeAttr("onsubmit")
        },
        success: function(e) {
            1 == e && (alert("Ý kiến bình luận của bạn đã được gửi. Trân trọng cảm ơn!"),
            window.location.reload()),
            0 != e && 2 != e || (alert("Có lỗi xảy ra, Xin vui lòng thử lại!"),
            window.location.reload())
        }
    }),
    !1
}
function VoiceSearch() {
    var t;
    window.hasOwnProperty("webkitSpeechRecognition") && ((t = new webkitSpeechRecognition).continuous = !1,
    t.interimResults = !1,
    t.lang = "vi-VN",
    t.start(),
    $("body").prepend('<div class="screen-voice"><div class="pulse-button"><i class="fa fa-microphone"></i></div><p>Đang nghe...</p></div>').css({
        position: "fixed"
    }),
    t.onresult = function(e) {
        document.getElementById("transcript").value = e.results[0][0].transcript,
        t.stop(),
        document.getElementById("frmCse").submit()
    }
    ,
    t.onerror = function(e) {
        t.stop(),
        $("body").prepend('<div class="screen-voice"><div class="pulse-button"><i class="fa fa-microphone-slash"></i></div><p>Not support on IOS</p></div>').css({
            position: "fixed"
        }),
        $(".screen-voice").on("click", function() {
            $(this).remove(),
            $("body").css({
                position: "relative"
            })
        })
    }
    ,
    t.onend = function() {
        $(".screen-voice").remove(),
        $("body").css({
            position: "relative"
        })
    }
    )
}
function HoroScope1() {
    var e = $("#horo_year").val()
      , t = $("#horo_gen").val();
    return "" == e || e.length < 4 ? (alert("Vui lòng nhập năm sinh của bạn!"),
    $("#horo_year").focus(),
    !1) : "" == t ? (alert("Vui lòng chọn giới tính của bạn!"),
    $("#horo_gen").focus(),
    !1) : void $.ajax({
        type: "POST",
        url: root + "tu-vi/v",
        data: "year=" + e + "&gen=" + t + "&action=HoroScope1",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $("body").append('<div class="screen_horo"><div class="horo_rotation"></div></div>')
        },
        success: function(e) {
            "1" == e.status && ($(".screen_horo").remove(),
            $(".result").html(e.str),
            $(".result_2").html(e.list),
            location.href = root + "tu-vi/" + e.name_seo),
            "2" == e && (alert("Năm sinh được xác định 1900 về sau (Năm sinh > 1900)!"),
            $(".screen_horo").remove()),
            "0" == e && (alert("Không thể xác định quẻ mệnh. Vui lòng nhập lại thông tin!"),
            $(".screen_horo").remove())
        }
    })
}
function ViewYear(e) {
    var t = $(window).width()
      , a = $(window).height();
    return $.ajax({
        type: "POST",
        url: root + "tu-vi/y",
        data: "year=" + e + "&action=ViewYear",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $(".ask").html('<i class="fa fa-spinner faa-spin animated"></i> Please wait...')
        },
        success: function(e) {
            $("body").append('<div class="screen screen2"></div>'),
            $(".wpkirim_1").fadeIn().html(e),
            $(".wpkirim").animate({
                top: (a - $(".wpkirim").height()) / 2,
                left: (t - $(".wpkirim").width()) / 2
            }, 200),
            $(".close-kirim").on("click", function() {
                $(".wpkirim_1").html("").css({
                    display: "none"
                }),
                $(".screen").remove(),
                $(".ask").html('<i class="fa fa-calendar"></i> Chọn năm khác')
            })
        }
    }),
    !1
}
function ViewSk() {
    var e = $("#nam_sinh").val()
      , t = $("#year_sk").val();
    return "" == t || t.length < 4 ? (alert("Vui lòng nhập năm cần xem xung khắc!"),
    $("#year_sk").focus()) : $.ajax({
        type: "POST",
        url: root + "tu-vi/sk",
        data: "year=" + e + "&sk=" + t + "&action=ViewSk",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").append('<div class="screen_horo" style="z-index:10000"><div class="horo_rotation"></div></div>')
        },
        success: function(e) {
            $(".wpkirim").html("").css({
                display: "none"
            }),
            $(".screen_horo,.screen").remove(),
            $(".changesk").html(e),
            $(".ask").html('<i class="fa fa-calendar"></i> Chọn năm khác')
        }
    }),
    !1
}
function Promo() {
    var t = $(window).width()
      , a = $(window).height();
    return $.ajax({
        type: "POST",
        url: root + "detail/promo",
        data: "action=Promo",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").prepend('<div class="ajaxicon"></div>')
        },
        success: function(e) {
            $(".ajaxicon").remove(),
            $(".trans").fadeIn(),
            $(".wpkirim_1").fadeIn().html(e),
            $(".wpkirim").animate({
                top: (a - $(".wpkirim").height()) / 2,
                left: (t - $(".wpkirim").width()) / 2
            }, 200),
            $(".close-kirim").on("click", function() {
                $(".wpkirim_1").html("").css({
                    display: "none"
                }),
                $(".trans").css({
                    display: "none"
                })
            })
        }
    }),
    !1
}
function checkPromo() {
    var e = document.frm_Promo
      , t = isWhiteSpace(e.hoten.value)
      , a = isWhiteSpace(e.sdt.value)
      , n = isWhiteSpace(e.namsinh.value)
      , i = isWhiteSpace(e.congty.value)
      , o = isWhiteSpace(e.dientich.value)
      , c = isWhiteSpace(e.toanha.value)
      , s = isWhiteSpace(e.nhanvien.value)
      , r = isWhiteSpace(e.sdt2.value)
      , l = isWhiteSpace(e.captcha.value)
      , u = e.email.value;
    if (1 == t || "" == e.hoten.value)
        return alert("Vui lòng nhập họ và tên!"),
        $("#hoten").focus(),
        !1;
    if (1 == a || e.sdt.value.length < 10)
        return alert("Vui lòng nhập số điện thoại của bạn. VD: 0987110011"),
        $("#sdt").focus(),
        !1;
    if (!u.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/))
        return alert("Vui lòng nhập địa chỉ Email!"),
        $("#email").focus(),
        !1;
    if (1 == n || "" == e.namsinh.value)
        return alert("Vui lòng nhập ngày tháng năm sinh!"),
        $("#namsinh").focus(),
        !1;
    if (1 == i || "" == e.congty.value)
        return alert("Vui lòng nhập tên công ty!"),
        $("#congty").focus(),
        !1;
    if (1 == o || "" == e.dientich.value)
        return alert("Vui lòng nhập diện tích thuê (>500m2)!"),
        $("#dientich").focus(),
        !1;
    if (1 == c || "" == e.toanha.value)
        return alert("Vui lòng nhập tên tòa nhà!"),
        $("#toanha").focus(),
        !1;
    if (1 == s || "" == e.nhanvien.value)
        return alert("Vui lòng nhập tên nhân viên hỗ trợ!"),
        $("#nhanvien").focus(),
        !1;
    if (1 == r || e.sdt2.value.length < 10)
        return alert("Vui lòng nhập số điện thoại nhân viên hỗ trợ. VD: 0987110011"),
        $("#sdt2").focus(),
        !1;
    if (1 == l || e.captcha.value.length < 4)
        return alert("Vui lòng nhập mã bảo mật!"),
        $("#captcha").focus(),
        !1;
    e = $("form[name=frm_Promo]").serialize();
    return $.ajax({
        type: "POST",
        url: root + "detail/promo2",
        data: e + "&action=checkPromo",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $("body").prepend('<div class="screen" style="z-index:999999"></div>')
        },
        success: function(e) {
            1 == e && (alert("Chúc mừng bạn đã đăng ký thành công!"),
            location.reload()),
            0 == e && (alert("Đăng ký không thành công, vui lòng kiểm tra mã bảo mật hoặc nhấn F5 và thử lại!"),
            $(".screen").remove())
        }
    }),
    !1
}
function notifyMe() {
    var t;
    Notification ? "granted" !== Notification.permission ? Notification.requestPermission() : (t = new Notification("Office Saigon",{
        icon: "https://www.officesaigon.vn/template/Default/images/logo.png",
        body: "Văn phòng trọn gói giá tốt",
        image: "https://www.officesaigon.vn/template/Default/images/van-phong-tron-goi-tphcm.jpg"
    })).onclick = function(e) {
        e.preventDefault(),
        window.open("https://www.officesaigon.vn/thue-van-phong-tron-goi.html", "_blank"),
        setTimeout(t.close.bind(t), 1e3),
        $.ajax({
            type: "POST",
            url: root + "detail/delete_cookie",
            data: "action=DeleteCookie",
            cache: !1,
            dataType: "text",
            success: function(e) {
                1 == e && console.log("Saved my session!"),
                0 == e && console.log("Your cookie not exists!")
            }
        })
    }
    : alert("Desktop notifications not available in your browser. Try Chromium.")
}
function viewHoro() {
    var e = $(".view_horo").attr("data-id");
    return $.ajax({
        type: "POST",
        url: root + "tu-vi/sh",
        data: "id=" + e + "&action=viewHoro",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $(".show_profile").html('<center><img src="template/Default/images/ajax.gif" alt="Loading"></center>'),
            $(".view_horo").removeAttr("onclick").attr("title", "Thu gọn").html('Thu gọn <i class="fa fa-chevron-up"></i>')
        },
        success: function(e) {
            $(".show_profile").html(e),
            $(".view_horo").on("click", function() {
                $(".show_profile").html(""),
                $(".view_horo").attr("onclick", "return viewHoro()").attr("title", "Xem đầy đủ").html('Xem đầy đủ <i class="fa fa-chevron-down"></i>')
            })
        }
    }),
    !1
}
function WriteCookie() {
    var e = new Date;
    e.setTime(e.getTime() + 18e5),
    cookievalue = escape(document.myform.customer.value) + ";",
    document.cookie = "name=" + cookievalue,
    document.cookie = "expires=" + e.toUTCString() + ";",
    document.write("Setting Cookies : name=" + cookievalue),
    $(".popevent").remove()
}
function getCookie(e) {
    for (var t = e + "=", a = document.cookie.split(";"), n = 0; n < a.length; n++) {
        for (var i = a[n]; " " == i.charAt(0); )
            i = i.substring(1, i.length);
        if (0 == i.indexOf(t))
            return i.substring(t.length, i.length)
    }
    return null
}
function checkCookie() {
    var e = getCookie("pop_name")
      , t = getCookie("expires")
      , a = new Date
      , n = Date.parse(a)
      , a = Date.parse(t);
    (a <= n || 0 <= n - a) && (document.cookie = "pop_name=; expires=;"),
    "1" == e && "" != t ? $(".popevent,.trans_pop").css({
        display: "none"
    }) : $(".popevent,.trans_pop").css({
        display: "block"
    })
}
$(document).ready(function() {
    $header_height = $(".header").outerHeight(),
    $nav = $(".nav").outerHeight() - 16,
    $header_sum_height = $header_height + $nav,
    $(".nav").prepend('<span class="supportmb">Lên lịch đi xem</span><a href="gioi-thieu.html" class="abmb">Về chúng tôi</a>'),
    $(".nav").prepend('<span class="menu-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" style="padding: 8px;" viewBox="0 0 448 512"><path fill="#f9f9f9" d="M16 132h416c8.8 0 16-7.2 16-16V76c0-8.8-7.2-16-16-16H16C7.2 60 0 67.2 0 76v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16zm0 160h416c8.8 0 16-7.2 16-16v-40c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v40c0 8.8 7.2 16 16 16z"/></svg></span>'),
    $(".nav").prepend('<span class="iconsearch"><svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" style="padding: 12px;" viewBox="0 0 512 512"><path fill="#f9f9f9" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6 .1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"/></svg></span>'),
    $(".hvmenu").prepend('<span class="act-sub">&nbsp;</span>'),
    $(".topsupport").prepend('<span class="close-sp">×</span>'),
    $(".wpcenter-home").prepend('<div class="cathome"><p>Văn phòng cho thuê theo quận</p><i class="fa fa-chevron-down"></i></div>'),
    $(".getcatmb ").prepend('<div class="catstatus"><p>Xem theo quận</p></div>'),
    $(".search-ct").prepend('<div class="search-bar"><p>Tìm kiếm văn phòng</p><span>X</span></div>'),
    $(".menu-icon").on("click", function() {
        $(".menu").slideToggle(150),
        $(".topsupport").fadeOut(150),
        $(".search-ct").fadeOut(150),
        $(".innersub").fadeOut(150),
        $(this).toggleClass("active_mn")
    }),
    $(".menu > li > span").on("click", function() {
        $(".menu > li > ul,.menu li ul div.int").slideUp(150, function() {
            $(".menu > li > span").removeClass("act")
        }),
        0 == $(this).parent().find("ul").is(":visible") && $(this).parent().find("ul").slideDown(150),
        $(this).toggleClass("act")
    }),
    $(window).width() < 960 && ($(".plugin").css({
        top: $header_sum_height + "px"
    }),
    $(".search-ct").css({
        top: $header_sum_height + 11 + "px"
    }),
    $(".mbstatus").removeClass("scroll-items")),
    jQuery.browser.mobile && $(".hvmenu").hover(function() {
        $(this).find("ul").css({
            display: "none"
        })
    }, function() {
        $(this).find("ul").css({
            display: "none"
        })
    }),
    $(".supportmb").on("click", function() {
        $(".topsupport").css({
            top: $(".header").height() + $(".nav").height() + 10
        }).slideToggle(150),
        $(".menu").fadeOut(150, function() {
            $(".menu-icon").removeClass("active_mn")
        }),
        $(".search-ct").fadeOut(),
        $(".innersub").fadeOut(150)
    }),
    $(".close-sp").on("click", function() {
        $(".topsupport").fadeOut(150)
    }),
    $(".catstatus").on("click", function() {
        $(".getcate").slideToggle(150),
        $(this).toggleClass("catstatus2"),
        $(this).css("margin", "10px 0 0 0")
    }),
    $(".iconsearch").on("click", function() {
        $(".search-ct1,.innersub").fadeToggle(150),
        $(".menu").fadeOut(150),
        $(".menu-icon").removeClass("active"),
        $(".topsupport").fadeOut(150)
    }),
    $(".search-bar > span").on("click", function() {
        $(".search-ct").fadeOut(150),
        $(".innersub").fadeOut(150)
    }),
    $("#txtDistrict").change(function() {
        var e = $(this).find("option:selected").text();
        $("#txtSeachDistrict").attr("value", e),
        document.getElementById("txtSeachWard").removeAttribute("value")
    }),
    $(".closepax").on("click", function() {
        $(".ranpax").remove()
    }),
    $(function() {
        $(window).scroll(function() {
            50 < $(this).scrollTop() ? $(".back-top,.hfooter,.ft_mob").fadeIn() : $(".back-top,.hfooter,.ft_mob").fadeOut()
        }),
        $(".back-top").click(function() {
            return $("body, html").stop(!1, !1).animate({
                scrollTop: 0
            }, 500),
            !1
        })
    }),
    $(".header").outerHeight(),
    $(".nav").outerHeight(),
    $(".wpslide").outerHeight(),
    $(".tips").outerHeight(),
    $(".iemail").click(function() {
        return $("html,body").animate({
            scrollTop: $("#frmcontact").offset().top
        }, 1e3),
        document.getElementById("txtContactName").focus(),
        !1
    }),
    $(".showhide").on("click", function() {
        $(".scroll-dsc").toggleClass("autoheight"),
        $(".showhide").toggleClass("hide-class");
        var e = $(".showhide").text();
        $(".showhide").text("Mở rộng" == e ? "Thu gọn" : "Mở rộng")
    })
}),
$(function() {
    $(document).on("click", "span.compid1", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-id");
        return $(this).removeClass("compid1"),
        $.ajax({
            type: "POST",
            url: root + "sosanh/add",
            data: "code=" + t + "&action=AddToCompare",
            cache: !1,
            dataType: "json",
            beforeSend: function() {
                $(".wpkirim_comp").html("").css({
                    display: "none"
                }),
                $(".compid1_" + t).html('<i class="fa fa-spinner faa-spin animated"></i>')
            },
            success: function(e) {
                1 == e.status && ($(".compid1_" + t).addClass("active_comp").html("✓"),
                $(".compare-num").html(e.total),
                $(".ofcomp").attr("onclick", 'go_url("./sosanh.html")')),
                1 == e.status && 1 == e.flag && ($(".wpkirim_comp").fadeIn().html(e.data),
                $(".compare-num").html(e.total)),
                3 == e.status && (alert("Bạn chỉ được so sánh 4 tòa nhà."),
                window.location.href = root + "sosanh.html",
                $(".compare-num").html(e.total)),
                0 == e.status && (alert("Không thể so sánh tòa nhà này. Vui lòng chọn tòa nhà khác!"),
                $(".compid1_" + t).html("&nbsp;")),
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr("style")
                })
            }
        }),
        !1
    }),
    $(document).on("click", "span.active_comp", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-id");
        return $(this).removeClass("active_comp"),
        $.ajax({
            type: "POST",
            url: root + "sosanh/remove",
            data: "code=" + t + "&action=RemoveCompare",
            cache: !1,
            dataType: "json",
            beforeSend: function() {
                $(".wpkirim_comp").html("").css({
                    display: "none"
                }),
                $(".compid1_" + t).html('<i class="fa fa-spinner faa-spin animated"></i>')
            },
            success: function(e) {
                1 != e.status && 0 != e.status || ($(".compid1_" + t).addClass("compid1").html("&nbsp;"),
                $(".compare-num").html(e.total)),
                1 == e.status && 1 == e.flag && ($(".wpkirim_comp").fadeIn().html(e.data),
                $(".compare-num").html(e.total)),
                2 == e.status && (alert("Tạm thời không thể xóa khỏi danh sách so sánh!"),
                $(".compid1_" + t).html("&nbsp;")),
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr("style")
                })
            }
        }),
        !1
    }),
    $(document).on("click", "a.clear_comp_aja", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-id");
        return $(this).removeClass("clear_comp_aja"),
        $.ajax({
            type: "POST",
            url: root + "sosanh/remove",
            data: "code=" + t + "&action=RemoveCompare",
            cache: !1,
            dataType: "json",
            beforeSend: function() {
                $(".clear_" + t).html('<i class="fa fa-spinner faa-spin animated"></i>')
            },
            success: function(e) {
                1 != e.status && 0 != e.status || window.location.reload(),
                2 == e.status && (alert("Tạm thời không thể xóa khỏi danh sách so sánh!"),
                window.location.reload())
            }
        }),
        !1
    }),
    $(document).on("click", "span.trash_aja", function(e) {
        e.preventDefault();
        var t = $(this).attr("data-id");
        return $(this).removeClass("trash_aja"),
        $.ajax({
            type: "POST",
            url: root + "sosanh/removeeff",
            data: "code=" + t + "&action=RemoveCompareEff",
            cache: !1,
            dataType: "json",
            beforeSend: function() {
                $(".trash_" + t).html('<i class="fa fa-spinner faa-spin animated"></i>')
            },
            success: function(e) {
                1 == e.status && ($(".licmop_" + t).remove(),
                $(".compid1_" + t).addClass("compid1").removeClass("active_comp").html("&nbsp;"),
                $(".compare-num").html(e.total)),
                1 == e.status && 1 == e.flag && ($(".licmop_" + t).remove(),
                $(".wpkirim_comp").html(e.data),
                $(".compare-num").html(e.total)),
                2 != e.status && 0 != e.status || ($(".compid1_" + t).addClass("compid1").removeClass("active_comp").html("&nbsp;"),
                $(".wpkirim_comp").html("").css({
                    display: "none"
                }),
                $(".compare-num").html(e.total)),
                1 == e.total && $(".acomp").attr("href", 'javascript:void(alert("Chọn ít nhất 2 sản phẩm để so sánh!"))'),
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr("style")
                })
            }
        }),
        !1
    })
}),
$(function() {
    $(".close_event").on("click", function() {
        $(".popevent,.trans_pop").remove();
        var e = new Date;
        e.setTime(e.getTime() + 36e5);
        document.cookie = "pop_name=1;",
        document.cookie = "expires=" + e + ";"
    })
}),
window.onload = function() {
    checkCookie()
}
;
for (var acc = document.getElementsByClassName("faq_title"), p = 0; p < acc.length; p++)
    acc[p].addEventListener("click", function() {
        this.classList.toggle("active_faq");
        var e = this.nextElementSibling;
        "block" === e.style.display ? e.style.display = "none" : e.style.display = "block"
    });
function moreGallery(t) {
    var e = $("#gid_" + t).attr("data-id");
    return $.ajax({
        url: root + "detail/g",
        type: "POST",
        data: "code=" + e + "&action=moreGallery",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $("#gid_" + t).removeAttr("onclick").html('<i class="fa fa-spinner fa-spin"></i>')
        },
        success: function(e) {
            $("#gid_" + t).remove(),
            $("#guid_" + t).append(e.str),
            $(".group1").colorbox({
                rel: "group1",
                slideshow: !0,
                slideshowSpeed: 4e3
            }),
            $(".more2").click(function() {
                $(".g").css({
                    display: "none"
                }),
                $(".lfirst").prepend(e.btn),
                $("#gid_" + t).attr("onclick", 'return showImg("' + t + '")')
            })
        }
    }),
    !1
}
function showImg(e) {
    $(".g").css({
        display: "block"
    }),
    $("#gid_" + e).remove()
}
function StartTheGame(e) {
    e = $("#id_" + e).attr("data-id");
    return $.ajax({
        url: root + "voice/g1",
        data: "id=" + e + "&link=" + $current_url + "&action=StartTheGame",
        type: "POST",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".scroll_ass,.screen,.fscreen").remove(),
            $("body").append('<div class="screen" style="z-index:999"></div>')
        },
        success: function(e) {
            1 == e.status && ($(".screen").remove(),
            $("body").append(e.game)),
            $(".close_thegame").on("click", function() {
                $(".scroll_ass,.screen,.fscreen").remove(),
                responsiveVoice.cancel()
            }),
            $(".picker").datepicker({
                dateFormat: "dd-mm-yy",
                changeMonth: !0,
                changeYear: !0,
                showButtonPanel: !0,
                yearRange: "1900:2050"
            })
        }
    }),
    !1
}
function getHoro2(e, t) {
    var a = $("#name").val()
      , n = $("#birthday").val()
      , i = $("#title").val()
      , o = $("#flag").val()
      , c = 4 == o ? "Chọn ngày tháng cần xem!" : "Nhập năm sinh của bạn!";
    if ("" == a)
        return alert("Nhập tên của bạn!"),
        $("#name").focus(),
        !1;
    if ("" == n)
        return alert(c),
        $("#birthday").focus(),
        !1;
    if ("-1" == i)
        return alert("Chọn giới tính của bạn!"),
        $("#title").focus(),
        !1;
    c = "'" + t + "'";
    return $.ajax({
        url: root + "voice/g",
        data: "name=" + a + "&birthday=" + n + "&title=" + i + "&mc=" + e + "&flag=" + o + "&link=" + $current_url + "&action=getHoro",
        type: "POST",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".show_resultg").removeAttr("onclick").html("Đang đọc quẻ..."),
            $(".rshead").remove(),
            $(".close_ass").prepend('<div class="spinner"><p class="pspin">Úm ba la...! Úm ba la...!</p></div>')
        },
        success: function(e) {
            var t = "'" + e.link + "'";
            $(".close_thegame").removeAttr("class").attr("onClick", "return countTime(" + t + ")");
            0 == e.status && $(".spinner").remove(),
            1 == e.status && ($(".close_ass").prepend(e.txt_show),
            $(".spinner").remove()),
            2 == e.status && $(".spinner").remove(),
            4 == e.status && ($(".spinner").remove(),
            $(".ttip2").html(e.title),
            $(".close_ass").prepend(e.txt_show)),
            5 == e.status && ($(".spinner").remove(),
            $(".ttip2").html(e.title),
            $(".close_ass").prepend(e.txt_show)),
            6 == e.status && ($(".spinner").remove(),
            $(".ttip2").html(e.title),
            $(".close_ass").prepend(e.txt_show))
        }
    }),
    !1
}
function ShowFrmLove(e, t) {
    t = '<input type="text" onkeyup="checkStr(this);" name="name" id="name" placeholder="Tên của bạn" autocomplete="off" maxlength="50"><input type="text" onkeyup="checkStr(this);" name="name2" id="name2" placeholder="Tên người ấy" autocomplete="off" maxlength="50" style="margin:5px 0 10px 0"><input type="hidden" id="flag" value="3"><p class="bottom_ctrl"><a href="javascript:void(0)" title="Xem kết quả" rel="nofollow" class="repeat_result" style="display:none">Nghe đọc lại</a><a href="javascript:void(0)" onclick="return getLove(' + e + "," + t + ')" title="Xem kết quả" rel="nofollow" class="show_result">Xem kết quả</a></p>';
    $(".close_ass").html(t),
    $(".start_game").addClass("show_result").removeClass("start_game").html("Xem kết quả"),
    $(".ttip2").html("Chào, tôi là chuyên gia bói tình yêu 4.0!")
}
function getLove2(e, t) {
    var a = $("#name").val()
      , n = $("#name2").val()
      , i = $("#flag").val();
    if ("" == a)
        return alert("Nhập tên của bạn!"),
        $("#name").focus(),
        !1;
    if ("" == n)
        return alert("Nhập của người ấy!"),
        $("#name2").focus(),
        !1;
    return $.ajax({
        url: root + "voice/love",
        data: "name=" + a + "&name2=" + n + "&mc=" + e + "&flag=" + i + "&link=" + $current_url + "&action=getLove",
        type: "POST",
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $(".show_result").removeAttr("onclick").html("Đang nghiệm quẻ..."),
            $(".rshead").remove(),
            $(".close_ass").prepend('<div class="spinner"><p class="pspin">Úm ba la...! Úm ba la...!</p></div>')
        },
        success: function(e) {
            var t = "'" + e.code + "'";
            $(".close_thegame").removeAttr("class").attr("onClick", "return countTimeGame(" + t + ")"),
            1 == e.status && ($(".spinner").remove(),
            $(".close_ass").prepend(e.txt_show))
        }
    }),
    !1
}
function checkStr(e) {
    var t = e.value;
    e.value = t.replace(/[`1234567890~!@#$%^&*()_|+\-=?;:'',.<>\{\}\[\]\\/]/gi, "").toUpperCase()
}
function countTime(e) {
    return $(".scroll_ass,.fscreen,.screen").remove(),
    responsiveVoice.cancel(),
    $.ajax({
        url: root + "voice/close",
        data: "id=" + e + "&action=CloseGame",
        type: "POST",
        cache: !1,
        dataType: "html",
        success: function(e) {
            console.log(e),
            1 == e.status && console.log("Close the game!"),
            0 != e.status && 2 != e.status || console.log("Error count time!")
        }
    }),
    !1
}
function countTimeGame(e) {
    return $(".scroll_ass,.fscreen").remove(),
    responsiveVoice.cancel(),
    $.ajax({
        url: root + "voice/close2",
        data: "id=" + e + "&action=countTimeGame",
        type: "POST",
        cache: !1,
        dataType: "json",
        success: function(e) {
            1 == e.status && console.log("Close the game!"),
            0 != e.status && 2 != e.status || console.log("Error count time!")
        }
    }),
    !1
}
function showTuvi() {
    responsiveVoice.cancel(),
    $(".scroll_ass,.screen,.fscreen,.img_tc2").remove(),
    $("body").append('<div class="scroll_ass scroll_ass2"><div class="preloader_wrapper img_tc1"><i>&nbsp;</i><img src="template/Default/images/batquai.png" class="loading"><div class="radar-animation rada1"><div class="tooltiptext tooltip-bottom tt1 tt4 ttip2">Xem phong thủy, tử vi ngày tốt, xấu và vận mệnh.</div><div class="close_ass cs4"><p class="bottom_ctrl"><a href="https://www.officesaigon.vn/tu-vi.html" title="Xem phòng thủy theo tuổi">Xem phong thủy</a> <a href="javascript:void(0)" rel="nofollow" data-id="1" id ="id_g1" title="Xem vận mệnh tài vận" onclick="return StartTheGame(\'g1\')">Xem vận mệnh - tài vận</a> <a href="javascript:void(0)" rel="nofollow" data-id="4" id ="id_g4" title="Xem ngày tốt xấu" onclick="return StartTheGame(\'g4\')">Xem ngày tốt xấu</a> <a href="javascript:void(0)" rel="nofollow" data-id="5" id ="id_g5" title="Xem tuổi thọ - Hóa kiếp" onclick="return StartTheGame(\'g5\')">Xem tuổi thọ - Hóa kiếp</a> <a href="javascript:void(0)" rel="nofollow" data-id="6" id ="id_g6" title="Xem cung hoàng đạo" onclick="return StartTheGame(\'g6\')">Xem cung hoàng đạo</a> <a href="javascript:void(0)" rel="nofollow" data-id="3" id ="id_g3" title="Bói tình duyên" onclick="return StartTheGame(\'g3\')">Bói vui tình duyên 4.0</a><br> <a href="javascript:void(0)" rel="nofollow" title="Tạm ẩn" onclick="tempHidden()"><u class=" fa fa-times-circle-o"></u> Tạm ẩn</a> \x3c!--<a href="javascript:void(0)" rel="nofollow"><u class=" fa fa-power-off"></u> Không hiển thị nữa</a>--\x3e </p><div class="rshead"><p>Chương trình xem phong thủy, tử vi ngày tốt, xấu và vận mệnh cuộc đời theo tuổi và năm sinh, chương trình này được Office Saigon xây dựng dựa trên các tính toán chính xác trong phong thủy, chiêm tinh học, thiên văn học và các hiện tượng trong thế giới con người.</p><p>&nbsp;</p><p>Hãy chọn một tính năng bên trên để khám phá nhé!</p></div></div><span></span><span></span><span></span></div></div></div><div class="fscreen"></div>')
}
function tempHidden() {
    responsiveVoice.cancel(),
    $(".scroll_ass,.screen,.fscreen").remove()
}
function DemoVoice(t) {
    return $.ajax({
        type: "POST",
        url: root + "demo_voice",
        data: "code=" + t,
        cache: !1,
        dataType: "json",
        beforeSend: function() {
            $("#read_voice").removeAttr("onclick").html('<i class="fa fa-refresh faa-spin animated"></i>&nbsp;Loading...')
        },
        success: function(e) {
            1 == e.status && ($("#tts_list").html(e.str),
            $("#audio").attr("src", e.play),
            init(),
            $("#read_voice").attr("onclick", 'stopAudio("' + t + '")').html('<span id="bars"><span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> <span class="bar"></span> </span><i class="fa fa-microphone-slash"></i>&nbsp;Tạm dừng')),
            0 == e.status && (window.location.href = e.redirect)
        }
    }),
    !1
}
function init() {
    var t = $("#read_voice")
      , a = t.attr("data-id")
      , n = document.getElementById("bg_sound");
    n.volume = .35;
    var i = 0
      , o = $("#audio")
      , c = $("#playlist")
      , s = c.find("li a").length;
    o[0].playbackRate = 1.5,
    o[0].volume = 1,
    o[0].play(),
    c.on("click", "a", function(e) {
        e.preventDefault(),
        link = $(this),
        i = link.parent().index(),
        run(link, o[0])
    }),
    o[0].addEventListener("ended", function(e) {
        ++i == s ? (t.attr("onclick", 'return DemoVoice("' + a + '")').html('<i class="fa fa-microphone"></i>&nbsp;Nghe đọc'),
        i = 0,
        link = c.find("a")[0],
        n.pause(),
        n.currentTime = 0,
        o.pause(),
        o.currentTime = 0) : link = c.find("a")[i],
        run($(link), o[0])
    })
}
function run(e, t) {
    t.src = e.attr("href"),
    par = e.parent(),
    par.addClass("active").siblings().removeClass("active"),
    t.load(),
    t.playbackRate = 1.5,
    t.volume = 1,
    t.play()
}
function stopAudio(e) {
    var t = document.getElementById("audio")
      , a = document.getElementById("bg_sound");
    a.pause(),
    a.currentTime = 0,
    t.pause(),
    $("#read_voice").attr("onclick", 'return DemoVoice("' + e + '")').html('<i class="fa fa-microphone"></i>&nbsp;Nghe đọc')
}
function checkfrmReq() {
    var e = $("#name").val()
      , t = $("#tel").val();
    if ("" == e)
        return alert("Vui lòng nhập họ tên hoặc tên đơn của Quý Khách!"),
        $("#name").focus(),
        !1;
    if ("" == t || t.length < 10 || isNaN(t))
        return alert("Vui lòng nhập đúng số điện thoại của Quý Khách!"),
        $("#tel").focus(),
        !1;
    t = $("form[name=frmReq]").serialize();
    return $.ajax({
        type: "POST",
        url: root + "detail/req",
        data: t + "&action=sendReq",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $(".wpform").prepend('<div class="screen"></div>')
        },
        success: function(e) {
            1 == e && (document.getElementById("frmReq").reset(),
            $(".screen,.wpform,.trans").remove(),
            $(".wptop").html("<h3>Cảm Ơn Quý Khách!</h3><p>Chúng tôi sẽ liên lạc lại ngay khi nhận được thông tin này.</p>"),
            setTimeout(function() {
                $(".wpopup").remove()
            }, 5e3)),
            0 == e && ($(".screen,.wpform,.trans").remove(),
            $(".wptop").html("<h3>Cảm Ơn Quý Khách!</h3><p>Thông tin của Quý Khách đã được chuyển đi. Bộ phận tư vấn của chúng tôi sẽ liên hệ ngay khi nhận được thông tin.</p>"),
            setTimeout(function() {
                $(".wpopup").remove()
            }, 5e3)),
            2 == e && (alert("Có lỗi xảy ra, vui lòng nhấn F5 và thử lại!"),
            $(".screen").remove())
        }
    }),
    !1
}
function setCookie() {
    return $.ajax({
        type: "POST",
        url: root + "detail/req_cookie",
        data: "action=sendReqCookie",
        cache: !1,
        dataType: "html",
        beforeSend: function() {
            $(".wpopup,.trans").remove()
        },
        success: function(e) {
            conole.log("Thanks!")
        }
    }),
    !1
}
function go_url(e) {
    window.location = e
}
function reload_capt() {
    img = document.getElementById("capt"),
    img.src = root + "captcha/?rand_number=" + Math.random()
}
function fill(e) {
    $("#txtSeachKeywords").val(e),
    $(".live_search").html("").hide()
}
$(function() {
    $("#txtSeachKeywords").on("keyup", function() {
        var e = $("#txtSeachKeywords").val();
        "" == e ? $(".live_search").html("").hide() : $.ajax({
            type: "POST",
            url: root + "detail/search",
            data: "key=" + e,
            cache: !1,
            dataType: "html",
            success: function(e) {
                $(".live_search").html(e).show()
            }
        })
    }),
    $("#btnSearch").click(function() {
        var x = document.frmSearch;
        if (containsDangerousWords(x.txtSeachKeywords_frm.value)) {
            alert('Vui lòng nhập lại thông tin!');
            x.txtSeachKeywords_frm.focus;
            return false;
        }
        $("#frmSearch").attr("action", root + "detail/s2025")
    }),
    $(".more_view_cmt").on("click", function() {
        $(".overflow_view").toggleClass("autoheight"),
        $(".gradient_white").toggleClass("autoposition");
        var e = $(".more_view_cmt").html();
        $(".more_view_cmt").html('Xem thêm <i class="fa fa-chevron-down"></i>' == e ? 'Thu ngắn <i class="fa fa-chevron-up"></i>' : 'Xem thêm <i class="fa fa-chevron-down"></i>')
    }),
    $(".aside").click(function() {
        $(this).find("ul").slideToggle(300)
    }),
    $(".hid,.close_btn,.bottom_close").on("click", function() {
        $(".wpopup,.trans").css({
            display: "none"
        })
    }),
    lozad(".lazy", {
        threshold: .1,
        load: function(e) {
            e.src = e.getAttribute("data-src")
        }
    }).observe(),
    $(".alphabet a").on("click", function() {
        var e = $(this).attr("data-id");
        $.ajax({
            type: "POST",
            url: root + "detail/alpha",
            data: "key=" + e + "&action=Alphabet",
            cache: !1,
            dataType: "json",
            beforeSend: function() {
                $("body").append('<div class="screen"></div>'),
                $(".ngn_page").html("")
            },
            success: function(e) {
                $(".screen").remove(),
                $(".container").html(e.str)
            }
        })
    }),
    $(function() {
        $(".acc_title").click(function() {
            var e = $(this).attr("data-id");
            void 0 === e && (e = "acc_content"),
            $(".acc_title").removeClass("active"),
            $("." + e).is(":visible") && ($("." + e).slideUp(200),
            $(this).removeClass("active")),
            $(this).next("." + e).is(":visible") ? ($(this).next("." + e).slideUp(200),
            $(this).removeClass("active")) : ($(this).next("." + e).slideDown(200),
            $(this).addClass("active"))
        })
    })
});

$(".showhide-dsCty").on("click", function() {
    $(".scroll-dsc-dsCty").toggleClass("autoheight"),
    $(".showhide-dsCty").toggleClass("hide-class");
    var e = $(".showhide-dsCty").text();
    $(".showhide-dsCty").text("Xem thêm danh sách công ty" == e ? "Thu gọn" : "Xem thêm danh sách công ty")
});
$("#btnSearch_simple").click(function() {
    $('#frmSearch_simple').attr('action', root + 'search/');
});

$(function() {
    $("#txtSeachKeywords_frm_nhanh").on("change", function() {
        var name = $('#txtSeachKeywords_frm_nhanh').val();
        var q = $('#value_search_Quan').val();
        if (name == "") {
            $(".live_search").html("").hide();
        } else {
            $.ajax({
                type: "POST",
                url: root + "detail/search",
                data: "key=" + name + "&q=" + q,
                cache: false,
                dataType: "html",
                success: function(html) {
                    $('.glsearch').css('overflow', 'unset');
                    $(".live_search").html(html).show();
                }
            });
        }
    })
});

$(function() {
    $("#txtSeachKeywords_frm_vptg").on("keyup", function() {
        var name = $('#txtSeachKeywords_frm_vptg').val();
        var q = $('#txtDistrict').val();
        if (name == "") {
            $(".live_search").html("").hide();
        } else {
            $.ajax({
                type: "POST",
                url: root + "detail/search_vptg",
                data: "key=" + name + "&q=" + q,
                cache: false,
                dataType: "html",
                success: function(html) {
                    $(".live_search").html(html).show();
                }
            });
        }
    })
});
function getState(t) {
    $.ajax({
        type: "POST",
        url: root + "detail/ward",
        data: "q=" + t + "&action=getWard",
        cache: !1,
        dataType: "json",
        beforeSend: function() {},
        success: function(e) {
            $("#txtWard").html(e.ward),
            $("#txtStreet").html(e.street),
            $("#disval_id").attr("value", t)
        }
    })
}
function getCity(e, t) {
    $.ajax({
        type: "POST",
        url: root + "detail/st",
        data: "q=" + e + "&p=" + t + "&action=getStreet",
        cache: !1,
        dataType: "json",
        success: function(e) {
            $("#txtStreet").html(e.street),
            $("#txtSeachWard").attr("value", e.ward),
            $("#wardval_id").attr("value", e.wardval)
        }
    })
}
function getState_trongoi(t) {
    $.ajax({
        type: "POST",
        url: root + "thue-van-phong-tron-goi/distric",
        data: "q=" + t + "&action=getDistric",
        cache: !1,
        dataType: "json",
        beforeSend: function() {},
        success: function(e) {
            $("#txt_Street").html(e.street)
        }
    })
}

$("#btnSearch_trongoi").click(function() {
    var x = document.frmSearch_trongoi;
    if (containsDangerousWords(x.txt_name_tg.value)) {
        alert('Vui lòng nhập lại thông tin!');
        x.txt_name_tg.focus;
        return false;
    }
    if (isNaN(Number(x.txt_Price1.value))) {
        alert('Vui lòng nhập số!');
        x.txt_Price1.focus;
        return false;
    }
    if (isNaN(Number(x.txt_Price2.value))) {
        alert('Vui lòng nhập số!');
        x.txt_Price2.focus;
        return false;
    }
    $("#frmSearch_trongoi").attr("action", root + "thue-van-phong-tron-goi/search2025")
})

function CalcLove_gt() {
    var $first_name = $('#first_name').val();
    var $second_name = $('#second_name').val();
    var fn = isWhiteSpace($first_name);
    var ln = isWhiteSpace($second_name);

    if (fn == true || $first_name == '') {
        alert('Nhập tên của bạn!');
        $('#first_name').focus().select();
        return false;
    }
    if (ln == true || $second_name == '') {
        alert('Nhập tên của người ấy!');
        $('#second_name').focus().select();
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: root + "giai-tri/callback",
            data: "first_name=" + $first_name + "&second_name=" + $second_name + "&action=CalcLove",
            cache: false,
            dataType: "json",
            beforeSend: function() {},
            success: function(html) {
                if (html['status'] == 1) {
                    $('#loveresult').attr('value', html['percent'] + "%");
                    $('#result_love').html(html['title']).css({
                        padding: '15px 0'
                    });
                }
                if (html['status'] == 0) {
                    alert('Lỗi!');
                }
            }
        });
    }
    return false;
}

function showTuvi() {
    window.location.href = root + "tu-vi.html";
}

$("p").click(function() {
    $(this).closest('div.toc_auto').find('ul').slideToggle(300);
    var span = $(this).find("#btn_thugon");
    if (span.text() === "Thu gọn") {
        span.text("Xem thêm");
    } else {
        span.text("Thu gọn");
    }
});

function nopcv() {
    var x = document.frmnopcv;
    var cv_hoten = isWhiteSpace(x.cv_hoten.value);
    var cv_vitri = isWhiteSpace(x.cv_vitri.value);
    var cv_dienthoai = isWhiteSpace(x.cv_dienthoai.value);
    var cv_email = isWhiteSpace(x.cv_email.value);
    var cv_gioithieu = isWhiteSpace(x.cv_gioithieu.value);
    var cv_file = isWhiteSpace(x.fileInput.value);

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var xx = x.cv_email.value;

    if (containsDangerousWords(x.cv_hoten.value) || containsDangerousWords(x.cv_vitri.value) || containsDangerousWords(x.cv_dienthoai.value) || containsDangerousWords(x.cv_email.value) || containsDangerousWords(x.cv_gioithieu.value)) {
        alert('Vui lòng nhập thông tin khác!');
        return false;
    }

    if (cv_hoten == true || x.cv_hoten.value == '') {
        alert('Vui lòng nhập Họ Tên Ứng viên!');
        $('#cv_hoten').focus();
        return false;
    }
    if (cv_vitri == true || x.cv_vitri.value == '') {
        alert('Vui lòng nhập Vị trí tuyển dụng!');
        $('#cv_vitri').focus();
        return false;
    }
    if (cv_dienthoai == true || x.cv_dienthoai.value.length < 10 || x.cv_dienthoai.value.length > 11) {
        alert('Vui lòng nhập Số điện thoại. VD: 0987110011');
        $('#cv_dienthoai').focus();
        return false;
    }
    if (!xx.match(n)) {
        alert('Vui lòng nhập địa chỉ Email!');
        $('#cv_email').focus();
        return false;
    }
    if (cv_gioithieu == true || x.cv_gioithieu.value == '') {
        alert('Vui lòng nhập Thư giới thiệu!');
        $('#cv_gioithieu').focus();
        return false;
    }
    if (cv_file == true || x.fileInput.value == '') {
        alert('Vui lòng tải lên CV (PDF)!');
        $('#fileInput').focus();
        return false;
    }

    var data = document.getElementById('frmnopcv');
    var file_data = $('#fileInput').prop('files')[0];
    var form_data = new FormData(data);
    form_data.append("file", file_data);

    $.ajax({
        url: root + "ung-tuyen/asset",
        type: "POST",
        data: form_data,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        beforeSend: function() {
            $('body').append('<div class="screen" style="z-index:999"></div>');
        },
        success: function(html) {
            if (html["status"] == 1) {
                alert('Cảm ơn Ứng viên đã gửi thông tin, chúng tôi sẽ liên hệ lại sớm nhất!');
                $('.screen').remove();
                $('.view_pics').html('').fadeOut();
                document.getElementById("frmnopcv").reset();
                window.location.href = 'office-saigon-tuyen-dung.html';
            }
            if (html["status"] == 2) {
                alert('Dung lượng File quá lớn (< 5MB)');
                $('.screen').remove();
            }
            if (html["status"] == 3) {
                alert('Số điện thoại của Bạn đã được nộp CV trước đó.');
                $('.screen').remove();
            }
            if (html["status"] == 5) {
                alert('Email của Bạn đã nộp CV trước đó.');
                $('.screen').remove();
            }
            if (html["status"] == 6) {
                alert('Vui lòng chọn file PDF');
                $('.screen').remove();
            }
            if (html["status"] == 0) {
                alert('Có lỗi, vui lòng nhập đúng mã bảo về hoặc nhấn F5 và thử lại!');
                $('.screen').remove();
            }
        }
    });
    return false;
}

function containsDangerousWords(input) {
    const dangerousWords = /\b(delete|insert|update|return|drop|truncate|alter)\b/i;
    return dangerousWords.test(input);
}
function ctvgoitt() {
    var x = document.frmctvgoitt;
    var cv_hoten = isWhiteSpace(x.cv_hoten.value);
    var cv_dienthoai_ctv = isWhiteSpace(x.cv_dienthoai_ctv.value);
    var cv_dienthoai = isWhiteSpace(x.cv_dienthoai.value);
    var cv_nhucau = isWhiteSpace(x.cv_nhucau.value);

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (cv_hoten == true || x.cv_hoten.value == '') {
        alert('Vui lòng nhập Họ Tên Ứng viên!');
        $('#cv_hoten').focus();
        return false;
    }
    if (cv_dienthoai_ctv == true || x.cv_dienthoai_ctv.value.length < 10 || x.cv_dienthoai_ctv.value.length > 11) {
        alert('Vui lòng nhập số điện thoại. VD: 0987110011');
        $('#cv_dienthoai_ctv').focus();
        return false;
    }
    if (cv_dienthoai == true || x.cv_dienthoai.value.length < 4 || x.cv_dienthoai.value.length > 4) {
        alert('Vui lòng nhập số 4 số cuối điện thoại Khách hàng. VD: 0011');
        $('#cv_dienthoai').focus();
        return false;
    }
    if (cv_nhucau == true || x.cv_nhucau.value == '') {
        alert('Vui lòng nhập nhu cầu Khách hàng!');
        $('#cv_nhucau').focus();
        return false;
    }

    if (containsDangerousWords(x.cv_hoten.value) || containsDangerousWords(x.cv_nhucau.value)) {
        alert("Vui lòng nhập lại thông tin!");
        return false;
    }

    var data = document.getElementById('frmctvgoitt');
    var file_data = $('#cv_file').val();
    var form_data = new FormData(data);
    form_data.append("file", file_data);

    $.ajax({
        url: root + "tuyen-cong-tac-vien-cho-thue-van-phong/asset",
        type: "POST",
        data: form_data,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        beforeSend: function() {
            $('body').append('<div class="screen" style="z-index:999"></div>');
        },
        success: function(html) {
            if (html["status"] == 1) {
                alert('Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại sớm nhất!');
                $('.screen').remove();
                $('.view_pics').html('').fadeOut();
                document.getElementById("frmctvgoitt").reset();
                window.location.href = 'tuyen-cong-tac-vien-cho-thue-van-phong.html';
            }
            if (html["status"] == 0) {
                alert('Có lỗi, vui lòng nhấn F5 và thử lại!');
                $('.screen').remove();
            }
        }
    });
    return false;
}
function ntvpgoitt() {
    var x = document.frmdky;
    var hoten = isWhiteSpace(x.name.value);
    var dienthoai = isWhiteSpace(x.phone.value);
    var nhucau = isWhiteSpace(x.message.value);

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (hoten == true || x.name.value == '') {
        alert('Vui lòng nhập Họ Tên!');
        $('#name').focus();
        return false;
    }
    if (dienthoai == true || x.phone.value.length < 10 || x.phone.value.length > 11) {
        alert('Vui lòng nhập số điện thoại. VD: 0987110011');
        $('#phone').focus();
        return false;
    }
    if (nhucau == true || x.message.value == '') {
        alert('Vui lòng nhập nhu cầu!');
        $('#message').focus();
        return false;
    }

    if (containsDangerousWords(x.name.value) || containsDangerousWords(x.message.value)) {
        alert("Vui lòng nhập lại thông tin!");
        return false;
    }

    var data = document.getElementById('frmdky');
    var file_data = $('#cv_file').val();
    var form_data = new FormData(data);
    form_data.append("file", file_data);

    $.ajax({
        url: root + "thiet-ke-thi-cong-noi-that-van-phong/asset",
        type: "POST",
        data: form_data,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        beforeSend: function() {
            $('body').append('<div class="screen" style="z-index:999"></div>');
        },
        success: function(html) {
            if (html["status"] == 1) {
                alert('Cảm ơn bạn đã gửi thông tin, chúng tôi sẽ liên hệ lại sớm nhất!');
                $('.screen').remove();
                $('.view_pics').html('').fadeOut();
                document.getElementById("frmdky").reset();
                window.location.href = 'thiet-ke-thi-cong-noi-that-van-phong.html';
            }

            if (html["status"] == 0) {
                alert('Có lỗi, vui lòng nhấn F5 và thử lại!');
                $('.screen').remove();
            }
        }
    });
    return false;
}

function dkyReview() {
    var x = document.frmdkyreview;
    var rv_hoten = isWhiteSpace(x.rv_hoten.value);
    var rv_email = isWhiteSpace(x.rv_email.value);
    var rv_dienthoai = isWhiteSpace(x.rv_dienthoai.value);
    var rv_goi = isWhiteSpace(x.rv_goi.value);
    var rv_ghichu = x.rv_ghichu.value;

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var xx = x.rv_email.value;

    if (rv_hoten == true || x.rv_hoten.value == '') {
        alert('Vui lòng nhập Họ và Tên!');
        $('#rv_hoten').focus();
        return false;
    }
    if (!xx.match(n)) {
        alert('Vui lòng nhập địa chỉ Email!');
        $('#rv_email').focus();
        return false;
    }
    if (rv_dienthoai == true || x.rv_dienthoai.value.length < 10 || x.rv_dienthoai.value.length > 11) {
        alert('Vui lòng nhập số điện thoại. VD: 0987110011');
        $('#rv_dienthoai').focus();
        return false;
    }
    if (rv_goi == true || x.rv_goi.value == 0) {
        alert('Vui lòng chọn Gói Review!');
        $('#rv_goi').focus();
        return false;
    }

    var data = document.getElementById('frmdkyreview');
    var form_data = new FormData(data);

    $.ajax({
        url: root + "detail/dkyreview",
        type: "POST",
        data: form_data,
        cache: false,
        dataType: "json",
        processData: false,
        contentType: false,
        beforeSend: function() {
            $('body').append('<div class="screen" style="z-index:999"></div>');
        },
        success: function(html) {
            if (html["status"] == 1) {
                alert('Bạn đã đăng ký Review thành công, chúng tôi sẽ liên hệ lại sớm nhất!');
                $('.screen').remove();
                $('.view_pics').html('').fadeOut();
                document.getElementById("frmdkyreview").reset();
                window.location.href = 'dich-vu-review-toa-nha.html';
            }
            if (html["status"] == 0) {
                alert('Có lỗi, vui lòng nhấn F5 và thử lại!');
                $('.screen').remove();
            }
        }
    });
    return false;
}

document.addEventListener('DOMContentLoaded', function() {
    var images = document.querySelectorAll('figure.image img');
    images.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });

    var images_blog = document.querySelectorAll('div.blog_cot img');
    images_blog.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
        img.setAttribute('width', '600px');
        img.setAttribute('height', 'auto');
    });

    var images_blog_colRight = document.querySelectorAll('div.right_col img');
    images_blog_colRight.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });

    var images_blog_thuvien = document.querySelectorAll('div.actcom img');
    images_blog_thuvien.forEach(function(img) {
        img.setAttribute('loading', 'lazy');
    });
});

function HoroScope() {
    var year = $('#horo_year').val();
    var gen = $('#horo_gen').val();
    if (year == '' || year.length < 4) {
        alert('Vui lòng nhập năm sinh của bạn!');
        $('#horo_year').focus();
        return false;
    }
    if (gen == '') {
        alert('Vui lòng chọn giới tính của bạn!');
        $('#horo_gen').focus();
        return false;
    } else {
        $.ajax({
            type: "POST",
            url: root + "tu-vi/v",
            data: "year=" + year + "&gen=" + gen + "&action=HoroScope",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $('body').append('<div class="screen_horo"><div class="horo_rotation"></div></div>');
            },
            success: function(html) {
                if (html["status"] == '1') {
                    $('.screen_horo').remove();
                    $('.result').html(html["str"]);
                    $('.result_2').html(html["list"]);
                    window.open(root + "tu-vi/" + html["name_seo"], '_blank');
                }
                if (html == '2') {
                    alert('Năm sinh được xác định 1900 về sau (Năm sinh > 1900)!');
                    $('.screen_horo').remove();
                }
                if (html == '0') {
                    alert('Không thể xác định quẻ mệnh. Vui lòng nhập lại thông tin!');
                    $('.screen_horo').remove();
                }
            }

        });
    }
}

$(function() {
    $(document).on('click', 'span.compid', function(event) {
        event.preventDefault();
        var $id = $(this).attr('data-id');
        $(this).removeClass('compid');
        $.ajax({
            type: "POST",
            url: root + "sosanh/add",
            data: "code=" + $id + "&action=AddToCompare",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $(".wpkirim_comp").html("").css({
                    display: 'none'
                });
                $('.compid_' + $id).html('<i class="fa fa-spinner faa-spin animated"></i>');
            },
            success: function(html) {
                if (html['status'] == 1) {
                    $('.compid_' + $id).addClass('active_comp').html('✓');
                    $('.compare-num').html(html['total']);
                    $('.ofcomp').attr('onclick', 'go_url("./sosanh.html")');
                }
                if (html['status'] == 1 && html['flag'] == 1) {
                    $('.wpkirim_comp').fadeIn().html(html['data']);
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 3) {
                    alert('Bạn chỉ được so sánh 4 tòa nhà.');
                    window.location.href = root + 'sosanh.html';
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 0) {
                    alert('Không thể so sánh tòa nhà này. Vui lòng chọn tòa nhà khác!');
                    $('.compid_' + $id).html('&nbsp;');
                }
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr('style')
                });
            }
        });
        return false;
    });

    $(document).on('click', 'span.active_comp', function(event) {
        event.preventDefault();
        var $id = $(this).attr('data-id');
        $(this).removeClass('active_comp');
        $.ajax({
            type: "POST",
            url: root + "sosanh/remove",
            data: "code=" + $id + "&action=RemoveCompare",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $(".wpkirim_comp").html("").css({
                    display: 'none'
                });
                $('.compid_' + $id).html('<i class="fa fa-spinner faa-spin animated"></i>');
            },
            success: function(html) {
                if (html['status'] == 1 || html['status'] == 0) {
                    $('.compid_' + $id).addClass('compid').html('&nbsp;');
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 1 && html['flag'] == 1) {
                    $('.wpkirim_comp').fadeIn().html(html['data']);
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 2) {
                    alert('Tạm thời không thể xóa khỏi danh sách so sánh!');
                    $('.compid_' + $id).html('&nbsp;');
                }
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr('style')
                });
            }

        });
        return false;
    });

    $(document).on('click', 'a.clear_comp_aja', function(event) {
        event.preventDefault();
        var $id = $(this).attr('data-id');
        $(this).removeClass('clear_comp_aja');
        $.ajax({
            type: "POST",
            url: root + "sosanh/remove",
            data: "code=" + $id + "&action=RemoveCompare",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $('.clear_' + $id).html('<i class="fa fa-spinner faa-spin animated"></i>');
            },
            success: function(html) {
                if (html['status'] == 1 || html['status'] == 0) {
                    window.location.reload();
                }
                if (html['status'] == 2) {
                    alert('Tạm thời không thể xóa khỏi danh sách so sánh!');
                    window.location.reload();
                }
            }

        });
        return false;
    });

    $(document).on('click', 'span.trash_aja', function(event) {
        event.preventDefault();
        var $id = $(this).attr('data-id');
        $(this).removeClass('trash_aja');
        $.ajax({
            type: "POST",
            url: root + "sosanh/removeeff",
            data: "code=" + $id + "&action=RemoveCompareEff",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $('.trash_' + $id).html('<i class="fa fa-spinner faa-spin animated"></i>');
            },
            success: function(html) {
                if (html['status'] == 1) {
                    $('.licmop_' + $id).remove();
                    $('.compid_' + $id).addClass('compid').removeClass('active_comp').html('&nbsp;');
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 1 && html['flag'] == 1) {
                    $('.licmop_' + $id).remove();
                    $('.wpkirim_comp').html(html['data']);
                    $('.compare-num').html(html['total']);
                }
                if (html['status'] == 2 || html['status'] == 0) {
                    $('.compid_' + $id).addClass('compid').removeClass('active_comp').html('&nbsp;');
                    $(".wpkirim_comp").html("").css({
                        display: 'none'
                    });
                    $('.compare-num').html(html['total']);
                }
                if (html['total'] == 1) {
                    $('.acomp').attr('href', 'javascript:void(alert("Chọn ít nhất 2 sản phẩm để so sánh!"))');
                }
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_comp").html("").removeAttr('style')
                });
            }

        });
        return false;
    });

});

function AddCart(id) {
    var $data = $('.btncart_' + id).attr('data-id');
    $.ajax({
        url: root + "cart/add",
        type: "POST",
        data: "data=" + $data + "&action=AddCart",
        dataType: "json",
        cache: false,
        beforeSend: function() {
            $('.btncart_' + id).html('<i class="fa fa-spinner faa-spin animated"></i>');
            $('.btncart_' + id).removeAttr('onclick');
            $('.cart_status').remove();
        },
        success: function(data) {
            if (data['status'] == 1) {
                $('body').prepend('<div class="cart_status"><p>Bạn đã thêm tòa nhà vào danh sách đi xem. Bạn có muốn đặt lịch hẹn?</p><a href="' + root + 'cart.html" title="Hẹn đi xem">Đặt lịch đi xem</a> <a href="javascript:void(0)" onclick="close_now()" title="Tắt hiển thị" class="close_now">Đóng lại</a></div>');
                $('.cart_status').slideDown();

                $('.cart-num').html(data['soluong']);
                $('.btncart_' + id).html('<i class="fa fa-check"></i>');
                $('.ofplug').attr('onclick', 'go_url("./cart.html")');

                setTimeout(function() {
                    $('.btncart_' + id).attr("onclick", "return AddCart('" + id + "')");
                    $('.cart_status').fadeOut();
                }, 3000);
            }
            if (data['status'] == 0) {
                alert('Có lỗi xảy ra, vui lòng thử lại!');
                $('.btncart_' + id).attr("onclick", "return AddCart('" + id + "')");
            }
            if (data['status'] == 2) {
                alert('Bạn chỉ có thể thêm tối đa 5 tòa nhà!');
                $('.btncart_' + id).attr("onclick", "return AddCart('" + id + "')");
                window.location.href = root + 'cart.html';
            }
            if (data['status'] == 3) {
                alert('Tòa nhà này đã được thêm vào trước đó, vui lòng chọn tòa nhà khác!');
                $('.btncart_' + id).attr("onclick", "return AddCart('" + id + "')");
            }
        }
    });
    return false;
}

function CartForm() {
    var ww = $(window).width();
    var wh = $(window).height();

    var u = document.querySelectorAll("input[name^='ngaydixem[']");
    var dt = document.querySelectorAll("input[name^='dientich[']");
    var a = 0;
    var b = 0;
    for (var f = 0; f < u.length; f++) {
        if (u[f].value == "" || u[f].value.length < 10) {
            a = 1;
            $('.picker_' + f).focus();
        }
    }

    for (var j = 0; j < dt.length; j++) {
        if (dt[j].value == "") {
            b = 1;
        }
    }

    if (a == 1) {
        alert("Vui lòng chọn ngày đi xem!");
        return false;
    }
    if (b == 1) {
        alert("Vui lòng chọn chọn diện tích muốn đi xem!");
        return false;
    } else {
        var dataString = $("form[name=FrmCart]").serialize();
        var code = $('#FrmCart').attr('data-id');
        var total = $('#FrmCart').attr('data-base');
        $.ajax({
            type: "POST",
            url: root + "detail/carfrm",
            data: dataString + "&code=" + code + "&num=" + total + "&action=CartForm",
            cache: false,
            dataType: "html",
            beforeSend: function() {},
            success: function(html) {
                if (html == 'Có lỗi, vui lòng thực hiện lại!') {
                    alert('Có lỗi, vui lòng thực hiện lại!');
                    window.location.reload();
                }
                $('.yt-modal').fadeIn();

                $('.wpkirim_1').fadeIn().html(html);
                $(".wpkirim").animate({
                    top: (wh - $(".wpkirim").height()) / 2,
                    left: (ww - $(".wpkirim").width()) / 2
                }, 200);
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_1").html("").css({
                        display: "none"
                    });
                    $(".yt-modal").css({
                        display: "none"
                    });
                });

            }
        });
    }
    return false;
}

function DeleteCart($code) {
    $.ajax({
        url: root + "cart/d",
        type: "POST",
        data: "code=" + $code + "&action=DeleteCart",
        dataType: "html",
        cache: false,
        beforeSend: function() {
            $('.d_' + $code).html('<i class="fa fa-spinner faa-spin animated"></i>');
            $('.d_' + $code).removeAttr('onclick');
        },
        success: function(data) {
            if (data == 1) {
                window.location.reload();
            }
            if (data == 2) {
                alert('Không thể xóa do phiên truy cập đã hết hạn!');
                window.location.reload();
            }
        }
    });
    return false;
}

function CartBooking() {
    var x = document.frmSendCart;
    var hoten = isWhiteSpace(x.hoten.value);
    var dienthoai = isWhiteSpace(x.dienthoai.value);
    var msg = isWhiteSpace(x.msg.value);

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var xx = x.email.value;

    if (hoten == true || x.hoten.value == '') {
        alert('Vui lòng nhập họ tên/ đơn vị!');
        $('#hoten').focus();
        return false;
    }
    if (!xx.match(n)) {
        alert('Vui lòng nhập địa chỉ Email!');
        $('#email').focus();
        return false;
    }
    if (dienthoai == true || x.dienthoai.value.length < 10) {
        alert('Vui lòng nhập số điện thoại. VD: 0987110011');
        $('#dienthoai').focus();
        return false;
    }
    if (msg == true || x.msg.value.length < 10) {
        alert('Vui lòng cho chúng tôi biết thêm vài thông tin!');
        $('#msg').focus();
        return false;
    } else {
        var dataString = $("form[name=frmSendCart]").serialize();
        var code = $('#frmSendCart').attr('data-id');
        var total = $('#frmSendCart').attr('data-base');

        $.ajax({
            type: "POST",
            url: root + "cart/book",
            data: dataString + "&code=" + code + "&num=" + total + "&action=CartBooking",
            cache: false,
            dataType: "json",
            beforeSend: function() {
                $('.wpkirim_1').append('<div class="screen scr_cart"></div>');
            },
            success: function(html) {
                if (html['status'] == 2) {
                    alert('Chúng tôi xin lỗi! Vui lòng xác nhận bạn không phải là Robots!');
                    $('.scr_cart').remove();
                }
                if (html['status'] == 1) {
                    $('.wpkirim_1').html('<h2 style="display:block;font-size:22px;font-weight:400;color:#66a626;padding:30px 0 20px 0"><i class="fa fa-check"></i> Gửi thành công, xin chân thành cảm ơn!</h2><button title="Close" type="button" class="close-kirim">×</button><p>Một bản email copy cũng đã được gửi đến địa chỉ email <b>' + html['email'] + '</b> của quý khách!</p>');
                    setTimeout(function() {
                        window.location.href = root + 'cart.html/?v=' + html['link_id'];
                    }, 5000);

                }
                if (html['status'] == 0) {
                    $('.wpkirim_1').fadeIn().html('<h2 style="display:block;font-size:22px;font-weight:400;color:#f00;padding:30px 0 20px 0"><i class="fa fa-exclamation-triangle"></i> Lỗi, vui lòng thực hiện lại!</h2>');
                    setTimeout(function() {
                        window.location.reload();
                    }, 4000);
                }
                $(".close-kirim").on("click", function() {
                    $(".wpkirim_1").html("").css({
                        display: "none"
                    });
                    $(".trans").css({
                        display: "none"
                    });
                });
            }
        });
    }
    return false;
}

function checkComment() {
    var x = document.frmComments;
    var name = isWhiteSpace(x.cmtName.value);
    var msg = isWhiteSpace(x.cmtContent.value);
    var captcha = isWhiteSpace(x.captcha.value);

    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var xx = x.cmtEmail.value;

    var radios = document.getElementsByName('rd')
    var a = 0;
    for (var f = 0; f < radios.length; f++) {
        if (radios[f].checked) {
            a++
        }
    }
    if (a < 1) {
        alert("Vui lòng chọn xếp hạng dịch vụ!");
        return false
    }

    if (name == true || x.cmtName.value == "") {
        alert("Vui lòng nhập tên hoặc đơn vị của bạn!");
        $('#cmtName').focus().select();
        return false;
    }
    if (!xx.match(n)) {
        alert("Vui lòng nhập Email của bạn!");
        $('#cmtEmail').focus();
        return false;
    }
    if (msg == true || x.cmtContent.value.length < 10) {
        alert("Vui lòng nhập nội dung ít nhất 10 ký tự!");
        $('#cmtContent').focus().select();
        return false;
    }
    if (captcha == true || x.captcha.value.length < 4) {
        alert("Vui lòng nhập mã bảo về!");
        $('#captcha').focus();
        return false;
    } else {
        var dataString = $("form[name=frmComments]").serialize();
        $.ajax({
            type: "POST",
            url: root + "detail/review",
            data: dataString,
            cache: false,
            dataType: "html",
            beforeSend: function() {
                $('body').append('<div class="screen"></div>');
                $('.ajaxst').html("<div class='ajax-st'><span>Đang gửi...</span></div>");
                $("#btnComment").addClass('send-status');
                $("#frmComments").removeAttr('onsubmit');
            },
            success: function(html) {
                if (html == 1) {
                    alert("Cảm ơn bạn đã đóng góp ý kiến!");
                    window.location.reload();
                }
                if (html == 3) {
                    alert("dd 333");
                    window.location.reload();
                }
                if (html == 0 || html == 2) {
                    alert("Có lỗi xảy ra, kiểm tra mã bảo vệ và Vui lòng thử lại!");
                    $("#btnComment").removeClass('send-status');
                    $('.ajaxst').html('<input type="submit" name="btnComment" id="btnComment" value="Gửi">');
                    $("#frmComments").attr('onsubmit', 'return checkComment()');
                    window.location.reload();
                }
            }
        });
        return false;
    }
    return false;
}

!function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.lozad = e()
}(this, function() {
    "use strict";
    var g = Object.assign || function(t) {
        for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
    }
      , n = "undefined" != typeof document && document.documentMode
      , l = {
        rootMargin: "0px",
        threshold: 0,
        load: function(t) {
            if ("picture" === t.nodeName.toLowerCase()) {
                var e = document.createElement("img");
                n && t.getAttribute("data-iesrc") && (e.src = t.getAttribute("data-iesrc")),
                t.getAttribute("data-alt") && (e.alt = t.getAttribute("data-alt")),
                t.appendChild(e)
            }
            if ("video" === t.nodeName.toLowerCase() && !t.getAttribute("data-src") && t.children) {
                for (var r = t.children, o = void 0, a = 0; a <= r.length - 1; a++)
                    (o = r[a].getAttribute("data-src")) && (r[a].src = o);
                t.load()
            }
            t.getAttribute("data-src") && (t.src = t.getAttribute("data-src")),
            t.getAttribute("data-srcset") && t.setAttribute("srcset", t.getAttribute("data-srcset")),
            t.getAttribute("data-background-image") && (t.style.backgroundImage = "url('" + t.getAttribute("data-background-image") + "')"),
            t.getAttribute("data-toggle-class") && t.classList.toggle(t.getAttribute("data-toggle-class"))
        },
        loaded: function() {}
    };

    function f(t) {
        t.setAttribute("data-loaded", !0)
    }
    var b = function(t) {
        return "true" === t.getAttribute("data-loaded")
    };
    return function() {
        var r, o, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : ".lozad", t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e = g({}, l, t), n = e.root, i = e.rootMargin, d = e.threshold, c = e.load, u = e.loaded, s = void 0;
        return window.IntersectionObserver && (s = new IntersectionObserver((r = c,
        o = u,
        function(t, e) {
            t.forEach(function(t) {
                (0 < t.intersectionRatio || t.isIntersecting) && (e.unobserve(t.target),
                b(t.target) || (r(t.target),
                f(t.target),
                o(t.target)))
            })
        }
        ),{
            root: n,
            rootMargin: i,
            threshold: d
        })),
        {
            observe: function() {
                for (var t = function(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document;
                    return t instanceof Element ? [t] : t instanceof NodeList ? t : e.querySelectorAll(t)
                }(a, n), e = 0; e < t.length; e++)
                    b(t[e]) || (s ? s.observe(t[e]) : (c(t[e]),
                    f(t[e]),
                    u(t[e])))
            },
            triggerLoad: function(t) {
                b(t) || (c(t),
                f(t),
                u(t))
            },
            observer: s
        }
    }
});

function Downloadlayout(dlthis, toanha, hotline) {
    $.ajax({
        type: "POST",
        url: root + "detail/download",
        data: "code=" + dlthis + "&action=Downloadlayout&toanha=" + toanha + "&hotline=" + hotline,
        cache: false,
        dataType: "html",
        beforeSend: function() {
            $('#downloadlayout').html(` <p id="thongbaodownload-wait">Bạn vui lòng chờ trong giây lát. Chúng tôi đang kích hoạt hệ thống tải layout sau vài giây</p> <a class="btn-download" style=" display: inline-block; margin-top: 0px; background-color: #ff6f00; color: #fff; padding: 15px 30px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 12px rgba(255, 111, 0, 0.5); transition: transform 0.2s, background-color 0.3s; width: 228.81px; " onmouseover="this.style.backgroundColor='#e65100'; this.style.transform='scale(1.05)'" onmouseout="this.style.backgroundColor='#ff6f00'; this.style.transform='scale(1)'"> 🚀 TẢI LAYOUT NGAY </a> <p style="margin-top: 20px;"> Bạn cần thuê văn phòng làm việc tại tòa nhà <strong>${toanha}</strong>?<br> Vui lòng liên hệ <span style="font-weight: 600; color: #e65100;">Office Saigon</span> qua hotline: <a href="tel:${hotline}" rel="nofollow" style="color: #d84315; font-weight: bold; font-size: 20px;">${hotline}</a> </p> `);
        },
        success: function(html) {
            if (html == 'Có lỗi, vui lòng thực hiện lại!') {
                alert('Có lỗi, vui lòng thực hiện lại!');
                window.location.reload();
            }
            if (html == 'over3') {
                $('#downloadtailieu').css('display', 'none');
                alert('Bạn đã tải tối đa 3 lần trong ngày. Vui lòng quay lại vào ngày mai!');
            } else {
                $('#downloadtailieu').css('display', 'block');
                $('#downloadtailieu_title').text(`📥 TẢI NGAY LAYOUT TÒA NHÀ ${toanha}`);
                $('html, body').animate({
                    scrollTop: $('#downloadlayout').offset().top - 150
                }, 800);
                const countdownElement = document.querySelector("#downloadlayout .btn-download");
                let timeLeft = Math.floor(Math.random() * (60 - 30 + 1)) + 30;
                const timer = setInterval( () => {
                    if (timeLeft > 0) {
                        countdownElement.innerText = timeLeft + "s";
                        timeLeft--;
                    } else {
                        clearInterval(timer);
                        $('#downloadlayout').html(html);
                    }
                }
                , 1000);
            }
        }
    });
    return false;
}

function Downloadcontract(dlthis, linkhd, toanha, hotline) {
    $.ajax({
        type: "POST",
        url: root + "detail/download",
        data: "code=" + dlthis + "&action=Downloadcontract&toanha=" + toanha + "&hotline=" + hotline,
        cache: false,
        dataType: "html",
        beforeSend: function() {
            $('#downloadlayout').html(` <p id="thongbaodownload-wait">Bạn vui lòng chờ trong giây lát. Chúng tôi đang kích hoạt hệ thống tải hợp đồng mẫu sau vài giây</p> <p style="display: none;">Tải hợp đồng mẫu: <a href="${atob(linkhd)}" download="Hợp đồng mẫu ${toanha} - Office Saigon - ${hotline}" rel="nofollow">Download Hợp đồng mẫu ${toanha}</a> </p> <a class="btn-download" style=" display: inline-block; margin-top: 0px; background-color: #ff6f00; color: #fff; padding: 15px 30px; border-radius: 8px; font-size: 20px; font-weight: bold; text-decoration: none; box-shadow: 0 4px 12px rgba(255, 111, 0, 0.5); transition: transform 0.2s, background-color 0.3s; width: 228.81px; " onmouseover="this.style.backgroundColor='#e65100'; this.style.transform='scale(1.05)'" onmouseout="this.style.backgroundColor='#ff6f00'; this.style.transform='scale(1)'"> 🚀 HỢP ĐỒNG MẪU </a> <p style="margin-top: 20px;"> Bạn cần thuê văn phòng làm việc tại tòa nhà <strong>${toanha}</strong>?<br> Vui lòng liên hệ <span style="font-weight: 600; color: #e65100;">Office Saigon</span> qua hotline: <a href="tel:${hotline}" rel="nofollow" style="color: #d84315; font-weight: bold; font-size: 20px;">${hotline}</a> </p> `);
        },
        success: function(html) {
            if (html == 'Có lỗi, vui lòng thực hiện lại!') {
                alert('Có lỗi, vui lòng thực hiện lại!');
                window.location.reload();
            }
            if (html == 'over1') {
                $('#downloadtailieu').css('display', 'none');
                alert('Bạn đã tải tối đa 1 lần trong ngày. Vui lòng quay lại vào ngày mai!');
            } else {
                $('#downloadtailieu').css('display', 'block');
                $('#downloadtailieu_title').text(`📥 TẢI NGAY HỢP ĐỒNG MẪU TÒA NHÀ ${toanha}`);
                $('html, body').animate({
                    scrollTop: $('#downloadlayout').offset().top - 150
                }, 800);
                const countdownElement = document.querySelector("#downloadlayout .btn-download");
                let timeLeft = 120;
                const timer = setInterval( () => {
                    if (timeLeft > 0) {
                        countdownElement.innerText = timeLeft + "s";
                        timeLeft--;
                    } else {
                        clearInterval(timer);
                        $('#downloadlayout').html(html);
                    }
                }
                , 1000);
            }
        }
    });
    return false;
}
function DownloadCount(dlthis, dloadtype) {
    $.ajax({
        type: "POST",
        url: root + "detail/download",
        data: "code=" + dlthis + "&action=Countdownload&type=" + dloadtype,
        cache: false,
        dataType: "html",
        beforeSend: function() {},
        success: function(html) {
            if (html == 'Có lỗi, vui lòng thực hiện lại!') {
                alert('Có lỗi, vui lòng thực hiện lại!');
                window.location.reload();
            } else {
                window.location.reload();
            }
        }
    });
    return false;
}
function loadProfileFooter(idProfile, rediv) {
    $.ajax({
        type: "POST",
        url: root + "detail/download",
        data: "code=" + idProfile + "&action=DownloadProfileFooter",
        cache: false,
        dataType: "html",
        beforeSend: function() {
            $('#profilefooter').html(` <div id="profilefooter_vndiv" style="display: contents;"> <a class="btn-pri btn-main cus_btn_profile_footer" title="Profile Office Saigon" target="" id="profilefooter_vn" onclick="loadProfileFooter(this.id,'profilefooter_vndiv');"><span class="txt">Profile Tiếng Việt</span></a> </div> <div id="profilefooter_endiv" style="display: contents;"> <a class="btn-pri btn-main cus_btn_profile_footer" title="Profile Office Saigon" target="" id="profilefooter_en" onclick="loadProfileFooter(this.id,'profilefooter_endiv');"><span class="txt">English Profile</span></a> </div> `);
        },
        success: function(html) {
            if (html == 'Có lỗi, vui lòng thực hiện lại!') {
                alert('Có lỗi, vui lòng thực hiện lại!');
                window.location.reload();
            } else {
                const countdownElement = document.querySelector("#profilefooter #" + idProfile);
                let timeLeft = 60;
                const timer = setInterval( () => {
                    if (timeLeft > 0) {
                        countdownElement.style.pointerEvents = "none";
                        countdownElement.innerText = "Tải sau " + timeLeft + "s";
                        timeLeft--;
                    } else {
                        clearInterval(timer);
                        $('#profilefooter #' + rediv).html(html);
                    }
                }
                , 1000);
            }
        }
    });
    return false;
}
function dutoandientich() {
    var x = document.dutoandientichthue;
    var slNhanVien = isWhiteSpace(x.sl_nhanvien.value);
    if (slNhanVien == true || x.sl_nhanvien.value == "") {
        alert("Vui lòng nhập số lượng nhân viên!");
        $('#sl_nhanvien').focus().select();
        return false;
    }
    $.ajax({
        type: "POST",
        url: root + "detail/dutoan",
        data: "slnhanvien=" + x.sl_nhanvien.value + "&luachon_dientich=" + x.luachon_dientich.value + "&luachon_phonghop=" + x.luachon_phonghop.value + "&luachon_pantry=" + x.luachon_pantry.value + "&action=dutoandientich",
        cache: false,
        dataType: "html",
        beforeSend: function() {
            $('#resultDutoanDienTich').html('Đang xử lý...');
        },
        success: function(html) {
            if (html == 'Vui lòng nhập lại thông tin!') {
                alert('Vui lòng nhập lại thông tin!');
                x.reset();
                $('#sl_nhanvien').focus().select();
            } else {
                $('#resultDutoanDienTich').html(html);
            }
        }
    });
    return false;
}
function dutoancpnoithat() {
    var x = document.dutoanchiphinoithat;
    var dientich = isWhiteSpace(x.txt_dientich.value);
    var hang_vp = document.getElementById('hangvp').value;
    if (dientich == true || x.txt_dientich.value == "") {
        alert("Vui lòng nhập diện tích thuê!");
        $('#txt_dientich').focus().select();
        return false;
    }
    $.ajax({
        type: "POST",
        url: root + "detail/dutoan",
        data: "dientichnoithat=" + x.txt_dientich.value + "&hangvp=" + hang_vp + "&action=dutoancpnoithat",
        cache: false,
        dataType: "html",
        beforeSend: function() {
            $('#resultDutoanCPnoithat').html('Đang xử lý...');
        },
        success: function(html) {
            if (html == 'Vui lòng nhập lại thông tin!') {
                alert('Vui lòng nhập lại thông tin!');
                x.reset();
                $('#txt_dientich').focus().select();
            } else {
                $('#resultDutoanCPnoithat').html(html);
            }
        }
    });
    return false;
}

function MyAss() {
    var x = document.frmAsset;
    var ass_hoten = isWhiteSpace(x.ass_hoten.value);
    var ass_dienthoai = isWhiteSpace(x.ass_dienthoai.value);
    var ass_diachi = isWhiteSpace(x.ass_diachi.value);
    var ass_loaikygui = isWhiteSpace(x.ass_loaikygui.value);
    var ass_giathue = isWhiteSpace(x.ass_giathue.value);
    var ass_diachichothue = isWhiteSpace(x.ass_diachichothue.value);
    var ass_noidung = isWhiteSpace(x.ass_noidung.value);
    var n = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var xx = x.ass_email.value;
    if (ass_hoten == true || x.ass_hoten.value == '') {
        alert('Vui lòng nhập Họ Tên người liên hệ!');
        $('#ass_hoten').focus();
        return false;
    }
    if (!xx.match(n)) {
        alert('Vui lòng nhập địa chỉ Email!');
        $('#ass_email').focus();
        return false;
    }
    if (ass_dienthoai == true || x.ass_dienthoai.value.length < 10 || x.ass_dienthoai.value.length > 11) {
        alert('Vui lòng nhập số điện thoại. VD: 0987110011');
        $('#ass_dienthoai').focus();
        return false;
    }
    if (ass_diachi == true || x.ass_diachi.value == '') {
        alert('Vui lòng nhập địa chỉ người liên hệ!');
        $('#ass_diachi').focus();
        return false;
    }
    if (ass_loaikygui == true || x.ass_loaikygui.value == '0' || x.ass_loaikygui.value > 4 || x.ass_loaikygui.value < 0) {
        alert('Vui lòng chọn loại ký gửi!');
        $('#ass_loaikygui').focus();
        return false;
    }
    if (ass_giathue == true || x.ass_giathue.value == '') {
        alert('Vui lòng nhập giá cho thuê!');
        $('#ass_giathue').focus();
        return false;
    }
    if (ass_diachichothue == true || x.ass_diachichothue.value == '') {
        alert('Vui lòng nhập địa chỉ cho thuê!');
        $('#ass_diachichothue').focus();
        return false;
    }
    if (ass_noidung == true || x.ass_noidung.value == '') {
        alert('Vui lòng nhập nội dung cho thuê!');
        $('#ass_noidung').focus();
        return false;
    } else {
        $img_file = $('#img_file').val();
        $type_img_file = $('#img_file').val().split('.').pop().toLowerCase();
        if ($img_file != '' && $.inArray($type_img_file, ['png', 'jpeg', 'jpg']) == -1) {
            alert("File hình ảnh phải ở định dạng: 'png', 'jpeg', 'jpg'");
        } else {
            var data = document.getElementById('frmAsset');
            var file_data = $('#img_file').prop('files')[0];
            var form_data = new FormData(data);
            form_data.append("file", file_data);
            $.ajax({
                url: root + "detail/asset",
                type: "POST",
                data: form_data,
                cache: false,
                dataType: "json",
                processData: false,
                contentType: false,
                beforeSend: function() {
                    $('body').append('<div class="screen" style="z-index:999"></div>');
                },
                success: function(html) {
                    if (html["status"] == 1) {
                        alert('Cảm ơn Quý đối tác đã gửi thông tin, chúng tôi sẽ liên hệ lại sớm nhất!');
                        $('.screen').remove();
                        $('.view_pics').html('').fadeOut();
                        document.getElementById("frmAsset").reset();
                    }
                    if (html["status"] == 2) {
                        alert('Dung lượng File quá lớn (< 5MB)');
                        $('.screen').remove();
                    }
                    if (html["status"] == 3) {
                        alert('Địa chỉ cho thuê này đã được đăng ký trước đó.');
                        $('.screen').remove();
                    }
                    if (html["status"] == 4) {
                        alert('Chúng tôi xin lỗi! Vui lòng xác nhận bạn không phải là Robots!');
                        $('.screen').remove();
                    }
                    if (html["status"] == 0) {
                        alert('Có lỗi, vui lòng nhập đúng mã bảo về hoặc nhấn F5 và thử lại!');
                        $('.screen').remove();
                    }
                }
            });
        }
    }
    return false;
}

function previewImg(event) {
    var max_file = 12;
    var files = document.getElementById('img_file').files;
    var arr = [];
    $('.view_pics').fadeIn();
    if (files.length > max_file) {
        alert("Bạn chỉ được chọn tối đa 12 hình ảnh ('png', 'jpeg', 'jpg')");
        $('#img_file').val('');
        $('.view_pics').html('');
    } else {
        $('.view_pics').html('');
        for (i = 0; i < files.length; i++) {
            if (arr.indexOf(files[i].name) === -1) {
                $('.view_pics').append('<img src="" id="' + i + '">');
                $('.view_pics img:eq(' + i + ')').attr('src', URL.createObjectURL(event.target.files[i]));
            }
        }
    }
}
