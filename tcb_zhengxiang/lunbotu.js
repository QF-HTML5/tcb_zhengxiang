;
(function() {
    $.extend({
        show: function() {
            var box1 = $('.box1'),
                ul = box1.find('.ul_ul'),
                span = $('.box span'),
                ownWidth = $('.ul_ul li').width(), //图片的宽度
                num = 0;
            span.on('click', function(e) {
                e.stopPropagation();
                $(this).addClass('back').siblings().removeClass('back');
                num = $(this).index();
                ul.animate({
                        "left": -ownWidth * num
                    },
                    500)
            });
            timer = setInterval(function() {
                num++;
                if (num > span.length - 1) {
                    num = 0
                }
                span.eq(num).trigger('click'); //自动运行span的点击事件
            }, 3000)
        }
    })
})();