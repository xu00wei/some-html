$(document).ready(function(){
	$(window).scroll(function(){
		if ($(window).scrollTop() > 0){
			$(".backMain").css("display","block");
		}
		else{
			$(".backMain").css("display","none");
		}
	})
	var friendLinkddSite = $(".friendLink dd").offset().left;
	$(".friendLink dd a").each(function(){
		if($(this).offset().left == friendLinkddSite){
			$(this).css("background-size","0");
		}
	})
	$(".hasUserName").mouseenter(function(){
		$(".nmunUL").css("display","block");
	});
	$(".hasUserName").mouseleave(function(){
		$(".nmunUL").css("display","none");
	})
	$(".cmNavSection").mouseenter(function(){
		$(this).children(".hopeJob").addClass("current");
		$(this).children(".navBox").css({"display":"block"});
		var navSite = $(".navBox dd").offset().left;
		$(".navBox dd a").each(function(){
//			alert($(this).offset().left);
			if ($(this).offset().left == navSite){
				$(this).css("background-size","0");
			}
		})
	});
	
	$(".cmNavSection").mouseleave(function(){
		$(this).children(".hopeJob").removeClass("current");
		$(this).children(".navBox").css("display","none");
	})
	
	function goNext(){
			var active_control = $(".banner_control .active");
			var active_banner = $(".banner_bg .active");
			var active_id = active_control.attr("id").split("_")[1];
			var new_id = (parseInt(active_id)+1)%4;
			if(new_id == 0) new_id=1;
			var new_control_id = "#thumbs_"+ new_id;
			var new_banner_id = "#banner_bg_" + new_id
			active_control.removeClass("active");
			active_banner.removeClass("active")
			$(new_control_id).addClass("active");
			$(new_banner_id).addClass("active");

	}
	setInterval(goNext, 5000); 
	function mouse_over_control(){
		var active_control = $(".banner_control .active");
		var active_banner = $(".banner_bg .active");
		var new_banner = "#banner_bg_"+$(this).attr("id").split("_")[1];
		active_control.removeClass("active");
		active_banner.removeClass("active");
		$(new_banner).addClass("active");
		$(this).addClass("active");
	}
	$("#thumbs_1").mouseover(mouse_over_control);
	$("#thumbs_2").mouseover(mouse_over_control);
	$("#thumbs_3").mouseover(mouse_over_control);
	
	$(".recommend li").bind("mouseenter mouseleave",function(e) {
           var w = $(this).width();
           var h = $(this).height();
           var x = (e.pageX - this.offsetLeft - (w / 2)) * (w > h ? (h / w) : 1);
           var y = (e.pageY - this.offsetTop - (h / 2)) * (h > w ? (w / h) : 1);
           var direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4; //direction的值为“0,1,2,3”分别对应着“上，右，下，左”
           var eventType = e.type;
           var recommendInfo = $(this).children(".recommendInfo");
//         var myPosition = [" {\"top\":\"-100%\",\"left\":\"0\"} ", " {\"top\":\"0\",\"left\":\"100%\"} ",
//         " {\"top\":\"100%\",\"left\":\"0\"} ", " {\"top\":\"0\",\"left\":\"-100%\"} "];
          	
           if(e.type == 'mouseenter'){
				switch(direction){
					case 0:
						recommendInfo.css({"top":"-100%", "left":"0","transition":"all 0ms ease"});
						recommendInfo.css("left"); //让浏览器reflow
						break;
					case 1:
						recommendInfo.css({"top":"0", "left":"100%","transition":"all 0ms ease"});
						recommendInfo.css("left");
						break;
					case 2:
						recommendInfo.css({"top":"100%", "left":"0","transition":"all 0ms ease"});
						recommendInfo.css("left");
						break;
					case 3:
						recommendInfo.css({"top":"0", "left":"-100%","transition":"all 0ms ease"});
						recommendInfo.css("left");
				}
			recommendInfo.css({"top":"0px", "left":"0px","transition":"all 300ms ease"});	
          }else{
          	switch(direction){
					case 0:
						recommendInfo.css({"top":"-100%", "left":"0"});
						break;
					case 1:
						recommendInfo.css({"top":"0", "left":"100%"});
						break;
					case 2:
						recommendInfo.css({"top":"100%", "left":"0"});
						break;
					case 3:
						recommendInfo.css({"top":"0", "left":"-100%"});
				}
          }
      });
      
      $(".workNavLi").click(function(){
		$(".workNavLi.active").removeClass("active");
		$(this).addClass("active");
      })
      
      $(".footer .imgSize").mouseenter(function(){
      	$(this).children("img").css("display","block");
      })
      $(".footer .imgSize").mouseleave(function(){
      	$(this).children("img").css("display","none");
      })
      $(".backMain").click(function(){
      	$(this).css("background-position-x","-28px");
      	$("body").animate({scrollTop:'0'},500,function(){
      		$(".backMain").css("background-position-x","0");
      	});
      })
})