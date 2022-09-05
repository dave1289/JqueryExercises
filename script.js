$(document).ready(function(){
    console.log('Lets get ready to party with Jquery')
})

$('img').addClass('image-center')

$('p').last().remove();

$('h1').css('font-size', Math.floor(Math.random() * 101))

$('ol').append('<li>Puppies are food</li>')

$('h4').text('I hate lists here is why');

$('li').remove();

$('ol').append('<p>Sorry for listing it, I was listless</p>')

$('.form-control').on('keyup', function(){
    let red = $('input').eq(0).val()
    let blue = $('input').eq(1).val()
    let green = $('input').eq(2).val()
    $('body').css('background-color', `rgb(${red},${blue}, ${green})`)
})