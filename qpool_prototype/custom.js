$( document ).ready(function() {
  var inhandler = function() {
      $(this).children().find('.line-item-action').show(); 
  };
  
  var outhandler = function() {
      $(this).children().find('.line-item-action').hide();
  };
  
  $('.line li').bind('mouseenter',inhandler);
  $('.line li').bind('mouseleave',outhandler);
    
  $('form').submit(function(event){
      var fields = $( this ).serializeArray();
      var qpool = $('input[name=qpool]').is(':checked');
      event.preventDefault();
      $('.stat strong').text('9');
      $('.index').append('<li><div class="index-item"><span>9</span></div></li>');
      var lineItem = $('.line').append('<li><div class="line-item"><div class="line-item-info"><p class="info_course">Math <strong></strong></p><p class="info_hw">HW <strong></strong></p><p class="info_q">Q. <strong></strong></p><p class="info_group">Group of </p></div><div class="line-item-action"><button type="button" class="btn leave_btn leaveLine">Leave</button></div></div></li>');
      jQuery.each( fields, function( i, field ) {
          if(i!=0 && i<4) {
              $('.line-item').last().children().find('.info_'+field.name+' strong').text(field.value);
          } else if(i == 5) {
              if (qpool) {
                  $('.line-item').last().children().find('.info_group').text('Group of '+field.value);
              }else {
                  $('.line-item').last().children().find('.info_group').text('<strong>Closed</strong> for QueuePool');
              }   
          }
      });
      $('.line-item-action').last().show();
      $('.leave_btn').last().show();
      $('.line li').unbind('mouseenter',inhandler).unbind('mouseleave',outhandler);
      $('#join').animate({scrollTop: $('#join')[0].scrollHeight},800);
      $('form').hide();
      $('#signup > div').html('<p>You are in the line now.</p><p class="sidenote">You may close your group for QueuePool if you think there are enough people in your group. In that case, others will not be able to join your group.</p>');
      if (qpool) {
          $('#signup > div').append('<button class="col-sm-offset-3 col-sm-6 qpool_tgl" data-toggled="on">Close for QueuePool</button>');
      } else {
          $('#signup > div').append('<button class="col-sm-offset-3 col-sm-6 qpool_tgl" data-toggled="off">Open for QueuePool</button>');
      }
  });
    
  $('.line').on('click','.join_btn',function(){
      var str = '';
      var names = ['Steve','Sarah','Grace','Michael','Eric'];
      var nameRand = names[Math.floor(Math.random()*5)+0];
      str = '<p>You are joining <strong>'+nameRand+"</strong>'s group at <strong>Table "+(Math.floor(Math.random()*5)+1)+'</strong>.</p><p>Working on:<br>';
      $(this).hide();
      $(this).next().show();
      var group = $(this).parent().prev().find('.info_group');
      group.text('Group of '+(parseInt(group.text().slice(-1))+1));
      $('.line li').unbind('mouseenter',inhandler).unbind('mouseleave',outhandler);
      $('form').hide();
      var info = $(this).parent().prev();
      info.children().each(function(index) {
          if (index < 3) {
              str += $(this).text();
              str += '<br>';
          }
      });
      str += '</p><p class="sidenote">We encourage you to work on the problem with your group while waiting for the tutor. You must leave the group before you can join another one or work on your own.</p>';
      $('#signup > div').html(str);
  });
    
 $('.line').on('click','.leave_btn',function(){
      $(this).hide();
      $(this).prev().show();
      var group = $(this).parent().prev().find('.info_group');
      group.text('Group of '+(parseInt(group.text().slice(-1))-1));
      $('.line li').bind('mouseenter',inhandler).bind('mouseleave',outhandler);
      $('form').show();
      $('#signup > div').html('<p>Not finding the group you want to join? <br>Get in the line. Others might join to work with you later.</p>');
  });
    
  $('.line').on('click','.leaveLine',function(){
      $('.stat strong').text('8');
      $('.line li').last().remove();
      $('.index li').last().remove();
      $('input').val('');
      $('input[name=qpool]').attr('checked', true);
  });
    
  $('#signup').on('click','.qpool_tgl',function(){
      if ($(this).attr('data-toggled') == 'off'){
           $(this).attr('data-toggled','on');
           $(this).text('Close for QueuePool');
           $('.line li').last().find('.info_group').text('Group of '+$('input[name=group]').val());
    }
    else if ($(this).attr('data-toggled') == 'on'){
           $(this).attr('data-toggled','off');
           $(this).text('Open for QueuePool');
           $('.line li').last().find('.info_group').html('<strong>Closed</strong> for QueuePool');
    }
  });
    
});