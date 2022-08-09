$(document).ready(() => {
    $('.menu').on('mouseenter', () => {
      $('.nav-menu').show();
    });
  
    $('.nav-menu').on('mouseleave', () => {
      $('.nav-menu').hide();
    })
  
    $('.btn').on('mouseenter', (event) => {
      $(event.currentTarget).addCLass('btn-hover');
    }).on('mouseleave', (event) => {
      $(event.currentTarget).removeClass('btn-hover');
    })
  
    $('.postText').on('keyup', (event) => {
      post = $(event.currentTarget).val();  
      remaining = "140";
      remaining -= post;
      if (remaining <= 0 ) {
        $('.wordcount').addClass('red');
      } else {
        $('.wordcount').removeClass('red');
      }
      $('.characters').html(remaining)
    });
  
    $('.postText').focus();
  }); 
  