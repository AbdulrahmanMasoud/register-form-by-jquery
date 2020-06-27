// var name = $('#name'),
//     email= $('#email'),
//     pass= $('#pass'),
//     re_pass= $('#re-pass');


$("#name").blur(function(){
    if($('#name').val() != ""){
        $(this).css('border-color','green');
        $('.fa-user').css('color','green');
        $('p.name').addClass('d-none');
        
    }else{
        $(this).css('border-color','red');
        $('.fa-user').css('color','red');
        $('p.name').removeClass('d-none');
    }
  });

$("#email").blur(function(){
    if($('#email').val() != ""){
        $(this).css('border-color','green');
        $('.fa-at').css('color','green');
        $('p.email').addClass('d-none');
    }else{
        $(this).css('border-color','red');
        $('.fa-at').css('color','red');
        $('p.email').removeClass('d-none');
    }
  });

  $("#pass").blur(function(){
    if($('#pass').val() != ""){
        $(this).css('border-color','green');
        $('.fa-unlock').css('color','green');
        $('p.pass').addClass('d-none');
    }else{
        $(this).css('border-color','red');
        $('.fa-unlock').css('color','red');
        $('p.pass').removeClass('d-none');
    }
  });

  $('#re-pass').change(function(){
      if($('#pass').val() == $('#re-pass').val()){
        $(this).css('border-color','green');
        $('.fa-undo').css('color','green');
        $('p.re-pass').addClass('d-none');
      }else{
        $(this).css('border-color','red');
        $('.fa-undo').css('color','red');
        $('p.re-pass').removeClass('d-none'); 
      }
  });

  $('#maleRadio').focus(function(){$('.recruitment').removeClass('d-none');});

  $('#femaleRadio').focus(function(){$('.recruitment').addClass('d-none');});





$('button').click(function(){

if ($('#name').val() !=''&&
    $('#email').val() !=''&&
    $('#pass').val() !='' &&
    $("input[name='radio']:checked").next('label').text() !='') {

        $('.overlay').css('left','0%');
        $('.another').click(function(){$('.overlay').css('left','100%');});

        $('ul').append('<li class="list-group-item">Name: '+ $('#name').val() +'</li>');
        $('ul').append('<li class="list-group-item">Email: '+ $('#email').val() +'</li>');
        $('ul').append('<li class="list-group-item">Password: '+ $('#pass').val() +'</li>');
        $('ul').append('<li class="list-group-item">Gender: '+ $("input[name='radio']:checked").next('label').text() +'</li>');
        
        if ($("input[name='radio']:checked").next('label').text() == 'Male') {
        $('ul').append('<li class="list-group-item">req: '+ $('.recruitment option:selected').text() +'</li>');
        }

}else {
    alert('empty');
}

});



// $('button').click(function(){
//     if ($('#name').val() ==''){
//         $(this).css('border-color','red');
//         $('.fa-user').css('color','red');
//         $('p.name').removeClass('d-none');

//         if($('#email').val() ==''){
//         $(this).css('border-color','red');
//         $('.fa-at').css('color','red');
//         $('p.email').removeClass('d-none');
//         }

//         if($('#pass').val() ==''){
//         $(this).css('border-color','red');
//         $('.fa-unlock').css('color','red');
//         $('p.pass').removeClass('d-none');
//         }

//     }else{
//         $('ul').append('<li class="list-group-item">Name: '+ $('#name').val() +'</li>');
//         $('ul').append('<li class="list-group-item">Email: '+ $('#email').val() +'</li>');
//         $('ul').append('<li class="list-group-item">Password: '+ $('#pass').val() +'</li>');
//         $('ul').append('<li class="list-group-item">Gender: '+ $("input[name='radio']:checked").next('label').text() +'</li>');
        
//         if ($("input[name='radio']:checked").next('label').text() == 'Male') {
//         $('ul').append('<li class="list-group-item">req: '+ $('.recruitment option:selected').text() +'</li>');
//         }
//     }

// });



