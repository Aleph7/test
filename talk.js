$(function() {
    $('#yes').click(function(event) {
        modal('รักเทอร์ภาษาจีน', function() {
            $('.page_one').addClass('hide');
            $('.page_two').removeClass('hide');
            // typeWrite();
            fireworks();

        });
    });
    $('#no').click(function(event) {
        modal('โคตรจะเสียใจอะ', A);
    });
});

function A() {
    modal('ไปคิดใหม่อีกรอบนะ', B);
}

function B() {
    modal('อืม แล้วแต่จะคิด ชีวิตคนละแบบ', C);
}

function C() {
    modal('ช่างมัน', D);
}

function D() {
    modal('อึมเค', E);
}

function E() {
    modal('คือเสียใจ', F);
}

function F() {
    modal('ที่พูดมาเข้าใจบ้างมะ', G);
}

function G() {
    modal('หิวข้าว', H);
}

function H() {
    modal('ลองคิดดูนะ', I);
}
 function I() {
    modal('ห้ะ', J)
}
function I() {
    modal('ห้ะ', J)
}
function I() {
    modal('ห้ะ', J)
}
function I() {
    modal('ห้ะ', J)
}
function I() {
    modal('ห้ะ', J)
}

function J() {
    modal('หว่ออ้านหนี่เด้อ', function() {
        fireworks();
    });
}

function fireworks() {
    $('.page_one').addClass('hide');
    initAnimate();
}

function modal(content, callback) {
    var tpl = '<div class="container">'+
        '<div class="mask"></div>'+
        '<div class="modal">'+
        '<p>'+ content +'</p>'+
        '<button type="button" id="confirm" class="confirm">จ่ะ</button>'+
        '</div>'+
        '</div>';
    $('body').append(tpl);
    $(document).on('click', '.confirm', function() {
        $('.container').remove();
        callback();
    });
}
