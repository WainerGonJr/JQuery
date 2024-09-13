$(document).ready(function(){
    $('header button').click(function() {
        $('form').slideDown(); /*chama um elemento para escorregar para baixo*/
    })
    
    $('#botao-cancelar').click(function(){
        $('form').slideUp(); /*chama evento para escorregar para cima, no botão cancelar*/
    })

    $('form').on('submit', function(e) {
        console.log("submit");
        e.preventDefault();
    })
})