window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
	    document.getElementById("logo_").style.width = "150px";
	    document.getElementById("logo_").style.margin = "-7px 0px 0 0px";
	    document.getElementById("navbar").style.padding = "0px";
	  } else {
	    document.getElementById("logo_").style.width = "170px";
	    document.getElementById("logo_").style.margin = "-10px 0px 0 0px";
	    document.getElementById("header").style.margin = "0 5px 0 5px";
	    document.getElementById("navbar").style.padding = "10px";
	  }
	}