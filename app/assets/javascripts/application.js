// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .

function hideAdd(){   // открытие меню добавления
   $('#modal_form')
			.animate({opacity: 0, top: '45%'}, 200,  
				function(){ 
					$(this).css('display', 'none');
					$('#overlay').fadeOut(400); 
				}
			);
}

function showAdd(){		// закрытие меню добавления
		$('#overlay').fadeIn(400,
		 	function(){ 
				$('#modal_form') 
					.css('display', 'block') 
					.animate({opacity: 1, top: '50%'}, 200); 
		});
}


//checkbox and select


$(document).ready(function(){
  $('input:checkbox').iCheck({
    checkboxClass: 'icheckbox_square-blue',
        increaseArea: '20%' 
  });
  $('select').select2();

  $('select').select2({
    minimumResultsForSearch: Infinity
	});

  $("input").on('ifUnchecked', function(event){
		$(this.form).submit()
	});
  $("input").on('ifChecked', function(event){
		$(this.form).submit()  
	});
});


        











        

  








