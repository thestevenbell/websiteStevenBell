$(document).ready(function(){
  console.log('js linked. horray :)');
  // //accordion
  // $('.js-accordion-trigger').bind('click', function(e){
  //   jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
  //   jQuery(this).parent().toggleClass('is-expanded');
  //   e.preventDefault();
  // });

  //modal
  $(function() {
    $("#modal-1").on("change", function() {
      if ($(this).is(":checked")) {
        $("body").addClass("modal-open");
      } else {
        $("body").removeClass("modal-open");
      }
    });

    $(".modal-fade-screen, .modal-close").on("click", function() {
      $(".modal-state:checked").prop("checked", false).change();
    });

    $(".modal-inner").on("click", function(e) {
      e.stopPropagation();
    });
  });


});
