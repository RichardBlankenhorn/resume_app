// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require fancybox
//= require jquery_ujs
//= require turbolinks
//= require bootstrap
//= require_tree .

$(document).ready(function() {
  $("a.fancybox").fancybox({
    parent: 'body',
    openEffect: 'elastic',
    closeEffect: 'elastic',

    helpers: {
      title: {
        type: 'inside'
      },
      thumbs : {
        width : 100,
        height : 100
      }
    }
  });
  $("a.various").fancybox({
    parent: 'body',
    maxWidth: 800,
    maxHeight: 600,
    fitToView: true,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'none',
    closeEffect: 'none'
  });
});

