$('form').on('click', 'button', function(e){
    e.preventDefault();
    if($('input').eq(0).val().length >= 2){
    let title = $('input').eq(0).val();
    let rating = $('input').eq(1).val();
    $('#movies').append(`<li>${title} : ${rating}</li>`)
    $('input').val('');}
})

$('#movies').on('click', function(){
    $(this).remove();
})