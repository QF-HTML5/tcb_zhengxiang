// jquery.lightBox.js
// jquery遮罩插件1.0
// author:zx
// Date: 2018.1.29
;
(function() {
    var lb = $('<div id="lightBox"></div>').css({
        position: 'fixed',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,.6)',
        left: 0,
        top: 0,
        zIndex: 2,
        display: 'none'
    });
    $.extend({
        //显示遮罩
        showLightBox: function(option) {
            if ($('#lightBox').length == 0) {
                $('body').append(lb);
            }
            //判断是否自定义设置
            if (option) {
                lb.css({
                    'zIndex': option.zIndex || 2,
                    background: option.bgColor || 'rgba(0,0,0,.6)'
                })
            }
            lb.show();
        },
        //隐藏
        hideLightBox: function() {
            lb.hide().css({
                'zIndex': 2,
                background: 'rgba(0,0,0,.6)'
            })
        }
    });
})();