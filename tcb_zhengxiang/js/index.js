$(function () {
    $.show();
    var statt;
    var
        head_city = $(".head_city"),
        map,
        quxian = $(".quxian");
    //切换城市开关
    $(".city_off").on('click', function () {
        head_city.hide();
    });
    $(".city_on").on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        head_city.css({
            display: 'block',
            left: '132px',
            top: "26px"
        });
        $('.quxian').hide();
    });
    $(".mine3_input1").on("click", function (e) {
        e.stopPropagation();
        head_city.css({
            display: 'block',
            left: '75px',
            top: "1490px"
        });
        $('.quxian').hide();
    });
    $("body").on("click", function () {
        head_city.hide();
    });
    // 区县开关
    $(".quxian_off").on('click', function (e) {
        e.stopPropagation();
        quxian.hide();
    });
    $(".mine3_input4").on('click', function (e) {
        e.stopPropagation();
        quxian.css('display', 'block');
        $('.head_city').hide();
    });
    $("body").on("click", function () {
        quxian.hide();
    });
    // 登录的按钮
    $(".login_off").on('click', function () {
        $(".login").hide();
        $.hideLightBox();
    });
    $(".login_on").on('click', function (e) {
        $(".login").show();
        e.preventDefault();
        $.showLightBox();
    });
    //注册的按钮
    $('.sign_off').on('click', function () {
        $('.sign').hide();
        $.hideLightBox();
    });
    $('.sign_on').on('click', function (e) {
        $('.sign').show();
        e.preventDefault();
        $.showLightBox();
    });
    //獲取註冊cookie
    // 获取注册按钮
    $(".sub")[0].onclick = function () {
        window.location = './zhuce.html';
    //获取注册信息输入框
    var cooks = document.querySelectorAll(".cook");
            //手机号
            var number = cooks[0].value;
            //验证码
            var yanzheng = cooks[1].value;
            //密码 
            var password = cooks[3].value;
            var date = new Date();
            date.setDate(date.getDate() + 7);
            //创建cookie
            document.cookie = '{"number":' + number + ',"yanzheng":"' + yanzheng + '","password":' + password + '}' + ';expires=' + date + ';path=/';
    }  
    
    //地图按钮
    $(".map_off").on('click', function () {
        $(".map").hide();
        $.hideLightBox();
    });
    $(".map_on").on('click', function (e) {
        $(".map").show();
        e.preventDefault();
        $.showLightBox();
    });
    //获取高价回收动态数据
    $.ajax({
        url: "/doGetHotHsList?num=5",
        type: "get",
        dataType: 'json',
        success: function (data) {
            $.ajax({
                url: "template/first_1.html",
                dataType: 'text',
                success: function (tmp) {
                    var html = baidu.template(tmp, data);
                    $('.mine1_inner_1 ul').html(html);
                    //懒加载
                    $("img[data-original]").lazyload({
                        effect: "fadeIn"
                    });
                }
            })
        }
    });
    //优品精选
    $.ajax({
        url: "/dogethotlist?num=5",
        type: "get",
        dataType: 'json',
        success: function (data2) {
            $.ajax({
                url: "template/first_2.html",
                dataType: 'text',
                success: function (tmp) {
                    // console.log(data2);
                    var html2 = baidu.template(tmp, data2);
                    // console.log(html2);
                    $('.mine2_inner_1 ul').html(html2);
                    //懒加载图片
                    $("img[data-original]").lazyload({
                        effect: "fadeIn"
                    });
                }
            })
        }
    })
    //修手机
    $.ajax({
        url: "/aj_get_fault_group?group_type=1",
        type: "get",
        dataType: 'json',
        success: function (data3) {
            $.ajax({
                url: "template/first_3.html",
                dataType: 'text',
                success: function (tmp) {
                    // console.log(data3);
                    var html3 = baidu.template(tmp, data3);
                    // console.log(html3);
                    $('.xiushouji').html(html3);
                }
            })
        }
    })
    //修电脑数据
    $.ajax({
        url: "/doGetPcFaultList",
        type: "get",
        dataType: 'json',
        success: function (data5) {
            $.ajax({
                url: "template/first_5.html",
                dataType: 'text',
                success: function (tmp) {
                    // console.log(data5);
                    var html5 = baidu.template(tmp, data5);
                    // console.log(html5);
                    $('.xiudiannao').html(html5);
                }
            })
        }
    })
    //卖电脑手机
    $.ajax({
        url: "/dogetpinpailist",
        type: "get",
        dataType: 'json',
        success: function (data6) {
            $.ajax({
                url: "template/first_6.html",
                dataType: 'text',
                success: function (tmp) {
                    // console.log(data6);
                    var html6 = baidu.template(tmp, data6);
                    // console.log(html6);
                    $('.maishouji').html(html6);
                }
            })
        }
    })
    //买二手手机数据
    $.ajax({
        url: "/youpin/dogetpinpailist",
        type: "get",
        dataType: 'json',
        success: function (data7) {
            $.ajax({
                url: "template/first_7.html",
                dataType: 'text',
                success: function (tmp) {
                    // console.log(data7);
                    var html7 = baidu.template(tmp, data7);
                    // console.log(html7);
                    $('.maishouji_').html(html7);
                }
            })
        }
    })
    //提取城市列表
    $.ajax({
        url: '/getcitycode',
        type: 'get',
        dataType: 'json',
        success: function (data) {
            //热门城市和城市列表
            // console.log(data);
            $.ajax({
                url: 'template/diqu.html',
                dataType: 'text',
                success: function (tmp) {
                    var html = baidu.template(tmp, data);
                    //热门城市和城市列表
                    $('.head_cityInner ul').html(html);
                    //隐藏所有的a
                    $(".city_city a").hide();
                    //给第一个a加默认属性
                    $(".city_pin a:eq(0)").addClass('city_pin_');
                    //默认显示
                    $(".A").show();
                    $(".city_pin").on('click', "a", function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var text = $(this).text();
                        //隐藏所有的城市
                        $('.city_city a').hide();
                        //显示点击的城市
                        $(".city_city a[class=" + text + "]").show();
                        //隐藏其他城市
                        $(this).addClass('city_pin_').siblings().removeClass('city_pin_');
                    })
                    $(".remen, .city_city").on("click", 'a', function (e) {
                        e.preventDefault();
                        $(".cheng").text($(this).text());
                        $(".st").text($(this).text());
                        $(".st").attr('id', $(this).attr("id"));
                        $(".head_city").hide();
                        $(".select_quxian").html("<span>选择区县</span>");
                    })
                    //点击城市获取下级城市
                    $(".remen, .city_city").on("click", "a", function () {
                        var aId = $(this).attr("id");
                        //区县
                        $.ajax({
                            url: 'http://bang.360.cn/aj/get_area/?citycode=' + aId,
                            dataType: 'jsonp',
                            success: function (data) {
                                // console.log(data);
                                $.ajax({
                                    url: "template/quxian_list.html",
                                    dataType: 'text',
                                    success: function (tmp) {
                                        var html = baidu.template(tmp, data);
                                        $('.quxian_list').html(html);
                                        $('.quxian_list').on('click', "a", function () {
                                            event.stopPropagation();
                                            $(".select_quxian").text($(this).text());
                                            $(".select_quxian").attr('id', $(this).attr("id"));
                                            $('.quxian').hide();
                                            //调取moren函数渲染店铺列表data
                                            moren($(".st").attr("id"), $(".select_quxian").attr('id'));
                                        });
                                    }
                                })
                            }
                        })
                    })
                    //店铺列表
                    $(".remen, .city_city").on("click", "a", function () {
                        event.stopPropagation();
                        // console.log($(this).attr("id"));
                        $.ajax({
                            url: "/shop",
                            dataType: "json",
                            data: {
                                city_id: $(this).attr("id") || "bei_jing",
                                pn: 0,
                                pagesize: 5,
                                quan_id: "",
                                service_id: "",
                                type_id: "",
                                online: "off",
                                cuxiao: "off",
                                is_bzj: 0,
                                tag: "",
                                pagesize: 5,
                                pn: 0,
                                lng: "",
                                lat: ""
                            },
                            success: function (data) {
                                $.ajax({
                                    url: "template/first_4.html",
                                    dataType: 'text',
                                    success: function (tmp) {
                                        pageUtil("pages", 1, Math.ceil(data.page_count / 5));
                                        var html = baidu.template(tmp, data);
                                        $('.mine3_bottom').html(html);
                                        //懒加载图片
                                        $("img[data-original]").lazyload({
                                            effect: "fadeIn"
                                        });
                                    }
                                })
                            }
                        });
                    })
                }
            });
        }
    });
    //分页函数
    // @param pageID  分页栏ID
    // @param currPage  当前页
    // @param totalPage  总页数
    // @param callback  
    function pageUtil(pageId, currPage, totalPage, callback) {
        // 初始化分页栏基本结构
        var str =
            "<span class='first_page'>首页</span>" +
            "<span class='p_page'><<上一页</span>" +
            "<span class='p_page'>下一页>></span>" +
            "<span class='first_page'>尾页</span>";
        //显示功能按钮
        var pageBox = $("." + pageId);
        pageBox.html(str);
        //构建页面结构
        var firstNum = currPage > 5 ? currPage - 4 : 1;
        //按顺序生成页码
        var numStr = "";
        for (var i = 0; i < 10 && firstNum <= totalPage; i++) {
            if (firstNum == currPage) {
                numStr += "<span class='fc'>" + firstNum + "</span>";
            } else {
                numStr += "<span>" + firstNum + "</span>";
            }
            firstNum++;
        }
        //显示页码
        pageBox.find("span:eq(1)").after(numStr);
        //处理事件
        pageBox.off("click", "span").on("click", "span", function () {
            event.stopPropagation();
            var btnValue = $(this).text();
            //不同按钮处理事件
            switch (btnValue) {
                case "首页":
                    pageUtil(pageId, 1, totalPage, showList);
                    break;
                case "<<上一页":
                    pageUtil(pageId, currPage - 1, totalPage, showList);
                    break;
                case "下一页>>":
                    pageUtil(pageId, currPage + 1, totalPage, showList);
                    break;
                case "尾页":
                    pageUtil(pageId, totalPage, totalPage, showList);
                    break;
                default:
                    pageUtil(pageId, parseInt(btnValue), totalPage, showList);
                    break;
            }
        });
        //执行回调
        callback && callback(currPage);
    }
    //默认北京店铺列表
    $.ajax({
        url: "/shop",
        type: "get",
        dataType: 'json',
        data: {
            city_id: "bei_jing",
            area_id: $(".select_quxian").attr('id'),
            pagesize: 5,
            quan_id: "",
            service_id: "",
            type_id: "",
            online: "off",
            cuxiao: "off",
            is_bzj: 0,
            tag: "",
            lng: "",
            lat: ""
        },
        success: function (data) {
            $.ajax({
                url: "template/first_4.html",
                dataType: 'text',
                success: function (tmp) {
                    pageUtil("pages", 1, Math.ceil(data.page_count / 5));
                    var html = baidu.template(tmp, data);
                    $('.mine3_bottom').html(html);
                    $(".st").attr("id", "bei_jing")
                    //店铺图片懒加载
                    $("img[data-original]").lazyload({
                        effect: "fadeIn"
                    });
                }
            })
        }
    });

    function showList(currPage) {
        $.ajax({
            url: "/shop",
            dataType: "json",
            data: {
                city_id: $(".st").attr("id") || "bei_jing",
                area_id: $(".select_quxian").attr('id'),
                pn: currPage - 1,
                pagesize: 5,
                quan_id: "",
                service_id: "",
                type_id: "",
                online: "off",
                cuxiao: "off",
                is_bzj: 0,
                tag: "",
                lng: "",
                lat: ""
            },
            success: function (data) {
                $.ajax({
                    url: "template/first_4.html",
                    dataType: 'text',
                    success: function (tmp) {
                        pageUtil("pages", currPage, Math.ceil(data.page_count / 5));
                        var html = baidu.template(tmp, data);
                        $('.mine3_bottom').html(html);
                        //懒加载图片
                        $("img[data-original]").lazyload({
                            effect: "fadeIn"
                        });
                    }
                })
            }
        });
    }

    function moren(city_id, area_id, type_id, is_bzj) {
        $.ajax({
            url: "/shop",
            type: "get",
            dataType: "json",
            data: {
                city_id: city_id,
                service_id: "",
                area_id: area_id,
                quan_id: "",
                type_id: type_id,
                online: "off",
                cuxiao: "off",
                is_bzj: is_bzj,
                tag: "",
                pagesize: 5,
                pn: 0,
                lng: "",
                lat: ""
            },
            success: function (data) {
                $.ajax({
                    url: "template/first_4.html",
                    dataType: "text",
                    success: function (tmp) {
                        pageUtil("pages", 1, Math.ceil(data.page_count / 5));
                        var html = baidu.template(tmp, data);
                        $(".mine3_bottom").html(html);
                        $("img[data-original]").lazyload({
                            effect: "fadeIn"
                        });
                    }
                });
            }
        });
    }
    $(".quxian_list").on("click", "a", function (event) {
        event.stopPropagation();
        //关联
        $(".select_quxian").text($(this).text());
        var area_id = $(this).attr("area_id");
        //调用noren函数渲染店铺列表
        moren("bei_jing", area_id);

        $(".quxian").hide();
    });
    //html图片懒加载
    $("img[data-original]").lazyload({
        effect: "fadeIn"
    });
    //按成交 量人气排行
    $(".mine3_mi a:eq(0)").addClass('co1');
    $(".mine3_mi").on("click", "a", function (e) {
        e.stopPropagation();
        $(this).addClass('co1').siblings().removeClass('co1');
        moren($(".st").attr("id"), $(".select_quxian").attr('id'), 0);
    });
    //按先行赔付排行
    $("#is").on("click", function () {
        moren($(".st").attr("id"), $(".select_quxian").attr('id'), 1);
    });
    //地图
    map = new AMap.Map('map', {
        //缩放级别 zoom
        zoom: 10,
        //中心坐标
        center: [116.397428, 39.90923]
    });
    //地图语言设置
    map.setLang('zh');
    //创建组件
    var toolBar = new AMap.ToolBar();
    var scale = new AMap.Scale();
    var overView = new AMap.OverView();
    //地图关联组件
    map.addControl(toolBar);
    map.addControl(scale);
    map.addControl(overView);
    map.on("click", function (e) {
        // console.log(e);
        this.setCenter([e.lnglat.lng, e.lnglat.lat]);
    });
    //创建自动提示框
    var auto = new AMap.Autocomplete({
        input: "auto"
    });
    //选中事件
    AMap.event.addListener(auto, "select", function (e) {
        map.setZoomAndCenter(15, e.poi.location);
    });
    var icon = new AMap.Icon({
        image: 'https://p.ssl.qhimg.com/t01647448c59c844934.png',
        //icon可缺省，缺省时为默认的蓝色水滴图标，
        size: new AMap.Size(18, 28),
        imageSize: new AMap.Size(18, 28)
    });

    $.ajax({
        url: "/shop",
        data: {
            city_id: 'bei_jing',
            area_id: "",
            quan_id: "",
            service_id: "",
            type_id: "",
            online: 'off',
            cuxiao: 'off',
            is_bzj: 0,
            tag: "",
            pagesize: 5,
            pn: 0,
            lng: "",
            lat: ""
        },
        dataType: "json",
        success: function (data) {
            for (var i = 0; i < data.shop_data.length; i++) {
                var y = data.shop_data[i].map_latitude;
                var x = data.shop_data[i].map_longitude;
                var marker = new AMap.Marker({
                    map: map,
                    position: [x, y],
                    icon: icon,
                    title: data.shop_data[i].shop_name
                });

            }
        }
    })
})