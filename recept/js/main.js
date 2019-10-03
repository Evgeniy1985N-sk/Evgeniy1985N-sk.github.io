$(document).ready(function() {
	
	/* count */
	 function CountdownTimer(elm, tl, mes) {
        this.initialize.apply(this, arguments);
    }
    CountdownTimer.prototype = {
        initialize: function (elm, tl, mes) {
            this.elem = document.getElementById(elm);
            this.tl = tl;
            this.mes = mes;
        },
        countDown: function () {
            var today = (new Date()).getTime() + 60 * 1000;
            if ((this.tl - today) <= 0) {
                this.elem.innerHTML = this.mes;
                return;
            }
            
            var timer = '';
            var hour = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
            var min = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / (60 * 1000)) % 60;
            var sec = Math.floor(((this.tl - today) % (24 * 60 * 60 * 1000)) / 1000) % 60 % 60;
            var me = this;

            timer += '<div class="header-timer_item"><div class="header-timer_numb"><span>' + hour + '</span></div><div class="header-timer_text">часов</div></div>';
            timer += '<div class="header-timer_item"><div class="header-timer_numb"><span>' + this.addZero(min) + '</span></div><div class="header-timer_text">минут</div></div>';
             timer += '<div class="header-timer_item"><div class="header-timer_numb"><span>' + this.addZero(sec) + '</span></div><div class="header-timer_text">секунд</div></div>';
            this.elem.innerHTML = timer;
            tid = setTimeout(function () {
                me.countDown();
            }, 10);
        },
        addZero: function (num) {
            return ('0' + num).slice(-2);
        }
    }

    function CDT() {

        // Set countdown limit
        var t = new Date();
        t.setDate(t.getDate() + 1);
        var tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');


        // You can add time's up message here
        var timer = new CountdownTimer('CDT', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время истекло</span></span>');
        timer.countDown();
    }
    
    CDT();

    function CDT1() {

        // Set countdown limit
        var t = new Date();
        t.setDate(t.getDate() + 1);
        var tl = new Date(t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate() + ' 00:00:00');


        // You can add time's up message here
        var timer = new CountdownTimer('CDT1', tl, '<span class="number-wrapper"><div class="line"></div><span class="number end">Время истекло</span></span>');
        timer.countDown();
    }
    
    CDT1();

    /* popups */
    var arr = [
    	'<div class="header-popup user"><button class="header-popup_close"></button><div class="header-popup_text">Количество посетителей<br>на сайте:</div><div class="header-popup_numb">172</div></div>',
    	'<div class="header-popup phone"><button class="header-popup_close"></button><div class="header-popup_text">Ольга М. сделала заявку<br>на обратный звонок</div></div>',
    	'<div class="header-popup buy"><button class="header-popup_close"></button><div class="header-popup_text">Ольга М. только что<br>совершила покупку<br>на сумму 5600 руб.</div></div>'
    ];

    var b;
    setInterval(function(){
    	$('.header-popup').eq(1).remove();
		var a = (Math.floor(Math.random() * arr.length));
		if (a == b) return;
		b = a;
		$('.header-popups').prepend(arr[a]);
	},5000);

	$('.header-popups').on('click', '.header-popup_close', function() {
    	$(this).parent().fadeOut('fast');
    });

});