
/* ==== HEADER STATICNESS ==== */
var stickyOffset, staticHeaderHeight;
  
var stickyHeader = function() {
  $('#header_area').addClass('sticky');
  window.staticHeaderHeight = $('#banner').height() + ( Math.floor($('#header_area .page').css('padding-top').replace(/[^-\d\.]/g, '')) * 2) ; 
}

var stickyHeaderBodyOffeset = function() {
  $('#header_area')
    .attr('data-0', 'min-height: '   + height/2 + 'px;')
    .attr('data-200', 'min-height: ' + staticHeaderHeight + 'px;');
}

var layout = function() {
  
  deviceDimensions();
  getDeviceType(width, height);
  viewportDependentClasses(device);

  if(device === 'desk-wide' || device === 'desk') {
    stickyHeader('#header_area');
    stickyHeaderBodyOffeset();
    dsm("Sticky Header Done!");
  }
}

var initScripts = function() {
  // Getter Scripts
  layout();
  responsiveNavigation('#main_navigation .nav');

  // Setter Scripts
}

var skrollrData = function() {
  var taglinePaddingInit = height/6;
  taglinePaddingInit = [ taglinePaddingInit, percentage(taglinePaddingInit, 75), percentage(taglinePaddingInit, 50), percentage(taglinePaddingInit, 25) ];

  var taglineHeight = parseInt($('.tagline').height(), 10) * 2;
  taglineHeight = [ taglineHeight, percentage(taglineHeight, 75), percentage(taglineHeight, 50), percentage(taglineHeight, 25) ];
  dsm(taglineHeight);
  
  $('.tagline')
    .attr('data-0', 'opacity: 1;    height: '+ taglineHeight[0] + 'px; padding: ' + taglinePaddingInit[0] +'px 0px; display:! block;')
    .attr('data-50', 'opacity: 0.5; height: '+ taglineHeight[1] + 'px; padding: ' + taglinePaddingInit[1] +'px 0px; display:! block;')
    .attr('data-100', 'opacity: 0;  height: '+ taglineHeight[2] + 'px; padding: ' + taglinePaddingInit[2] +'px 0px; display:! block;')
    .attr('data-150', 'opacity: 0;  height: '+ taglineHeight[3] + 'px; padding: ' + taglinePaddingInit[3] +'px 0px; display:! block;')
    .attr('data-200', 'opacity: 0;  height: 0px; padding: 0px 0px; display:! none;');
}

var skrollrInit = function() {
  var s = skrollr.init({
    forceHeight: false,
    easing: 'easeInOutCubic',
    constants: {
      box: '50p',
      header: '100p',
      instamojo: '500',
      epilogue: '1300'
    }
    
  });
}

var postSkrollr = function() {
  $('body').css('margin-top', $('#header_area').css('height'));
  return document.body;
}

var commonScripts = function()  {

  // skrollrInit
  if(device === 'desk-wide' || device === 'desk') { 
    skrollrData();
    skrollrInit();
    postSkrollr();
  }

  $('.switch_span').click(function() {
    $(this).children().toggle();
  });

  $('palm-nav--toggle').click(function(e) {
    e.preventDefault();
    console.log(this);
  });
}

$(document).ready(function() {
  initScripts();
  commonScripts();
});
