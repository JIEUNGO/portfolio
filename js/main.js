/*works button*/
$(function(){
	var btnWork = $("#works_txt");
	var workSec = $("#works")
	workSec.hide();
	btnWork.on("click",function(){
		if(workSec.is(":hidden")){
			btnWork.text("CLOSE");
			workSec.delay(400).slideDown(500);
		}
		else{
			btnWork.text("WORKS").off('hover').blur();
			workSec.slideUp(500);
		}		
	});
});

/*gnb*/
$(function(){
	$.fn.gnbScrollDown = function(opt){
  	var ts = $(this);
  	var myH2 = $("#container>section>h2");	    	
  	var gnbScrollHnd = function(e){
  		e.preventDefault();
  		var idx = ts.index($(this))+1;
  		var myH2 = $("#container>section>h2").eq(idx);
  		var myH2_t = myH2.offset().top - opt.top;
  		$("html,body").animate({scrollTop:myH2_t+"px"},opt.speed);
  	};
		var arr = [];
  	$.each(myH2,function(){
			var myH2_t = $(this).offset().top - opt.top;
			arr.push(myH2_t);
  	});
    	var m = 0;
		var gnbChoice = function(){
			var sct = $(window).scrollTop();
			$.grep(arr,function(d,i){ //d=배열, i=인덱스
				if(d <= sct){
					m = i;
				}
			});
/*			ts.filter(".on").removeClass("on");
			ts.eq(m).addClass("on");*/
		}
  	var gnbChoiceHnd= function(){	    			
			gnbChoice();
  	}	
  	ts.on({
  		"click" : gnbScrollHnd
  	});
  	$(window).on({
  		"scroll" : gnbChoiceHnd
  	});
  };
  $(function(){
      $("#nav>ul>li>a").gnbScrollDown({top:39,speed:1000});
      $("#nav_wrap>h1").on("click", function(e) {
      	e.preventDefault();
				$('html, body').animate({scrollTop: 0}, 1000);
			});
			$(".scrollDown").on("click", function(e) {
				var myH2 = $("#container>section>h2").eq(1);
  			var myH2_t = myH2.offset().top - 41;
      	e.preventDefault();
				$('html, body').animate({scrollTop:myH2_t+"px"}, 1000);
			});
			$(".btn_gnb").on("click",function(){
		      $("#nav").slideToggle(500);
		  });
	});
});


/*타이핑 효과*/
$(function(){
	$('.main_txt').typed({
   strings: ["&#34;HELLO,<br />&nbsp;&nbsp;MY NAME IS <span>&nbsp;JI-EUN GO</span>&#34;"],
	 contentType: 'html',
	 cursorChar:"",
   typeSpeed: 100
	});
});
$(window).load(function(){
	$('.hello_pro').typed({
	 strings:["&#34;안녕하세요.<br />웹퍼블리셔 고지은입니다.&#34;"],
	 contentType: 'html',
	 cursorChar:"",
   typeSpeed: 100
	});
});

/*main scroll button*/ 	
$(function scrollDown(){
	var scrollBtn = $("#main>.scrollDown");
	scrollBtn.animate({'bottom' : '0'},500).animate({'bottom' : '15px'},500, function(){scrollDown();});
	scrollBtn.on("mouseover", function(){
		var myThis = $(this);
		myThis.stop();
	});
	scrollBtn.on("mouseleave", function(){
		var myThis = $(this);
		myThis.animate({'bottom' : '0'},500).animate({'bottom' : '15px'},500, function(){scrollDown();});
	}); 
});