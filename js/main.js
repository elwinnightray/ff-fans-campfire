// 滑動下滑
$(function () {
	$('#gotab01').click(function() {
		$("#tab2").hide();
		$("#tab1").show();
		  $('html, body').animate({ scrollTop: $("#tab1 .part").offset().top}, 600);
	  });
	  $('#gotab02').click(function() {
		$("#tab1").hide();
		$("#tab2").show();
		  $('html, body').animate({ scrollTop: $("#tab2 .part").offset().top}, 600);
	
	  });


});


 //tab
 $(document).ready(function() {
    $(".myTabs").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".tab_content").hide().first().show();
        $myTabs.find("ul.tabs li:first").addClass("active").show();

        $myTabs.find("ul.tabs li").click(function() {
            var $this = $(this);

            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".tab_content").hide();

            var activeTab = $this.find("a").attr("href");
            $(activeTab).fadeIn();

            return false;
        });
    });
});


//windowpop


$(function () {


	//跳窗

	$(".more-btn").click(function(){
		$(".popbgc").fadeIn(200);
    });


	$(".submit").click(function(){
		$(".popbgc-1").fadeIn(200);
    });


	$("#out").click(function(){
		$(".popbgc-2").fadeIn(200);
	});


	$(".x-1 ,.x-2,#close").click(function() {
		$('.popbgc,.popbgc-1,.popbgc-2,.popbgc-3,.popbgc-4').fadeOut(200);
	});



	$(".btn-1").click(function() {
		$('.popbgc-3,popbgc-4').fadeOut(200);
	});




});




$(function () {

	//收集花束

	// $(".surch-01").click(function() {
	// 	$('.surch-01').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);
	// });

	// $(".surch-02").click(function() {
	// 	$('.surch-02').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);

	// });

	// $(".surch-03").click(function() {
	// 	$('.surch-03').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);

	// });

	// $(".surch-04").click(function() {
	// 	$('.surch-04').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);

	// });

	// $(".surch-05").click(function() {
	// 	$('.surch-05').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);

	// });

	// $(".surch-06").click(function() {
	// 	$('.surch-06').addClass('none');
	// 	$(".popbgc-3").fadeIn(200);

	// });




	$(".surch-07").click(function() {
		$('.surch-07').addClass('none');
		$('.f-white-7').addClass('none');
		$('.f-white-7-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-05").click(function() {
		$('.surch-05').addClass('none');
		$('.f-white-5').addClass('none');
		$('.f-white-5-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-02").click(function() {
		$('.surch-02').addClass('none');
		$('.f-white-2').addClass('none');
		$('.f-white-2-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-03").click(function() {
		$('.surch-03').addClass('none');
		$('.f-white-3').addClass('none');
		$('.f-white-3-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-06").click(function() {
		$('.surch-06').addClass('none');
		$('.f-white-6').addClass('none');
		$('.f-white-6-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-04").click(function() {
		$('.surch-04').addClass('none');
		$('.f-white-4').addClass('none');
		$('.f-white-4-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});

	$(".surch-01").click(function() {
		$('.surch-01').addClass('none');
		$('.f-white-1').addClass('none');
		$('.f-white-1-tru').addClass('display');
		$(".popbgc-3").fadeIn(200);

	});



});

