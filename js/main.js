$(document).ready(function(){
  console.log('js linked. horray :)');

  $('.js-accordion-trigger').bind('click', function(e){
    jQuery(this).parent().find('.submenu').slideToggle('fast');  // apply the toggle to the ul
    jQuery(this).parent().toggleClass('is-expanded');
    e.preventDefault();
  });

});
