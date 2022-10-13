
$(document).ready(function () {
    $('#input').change(function () {

        var input = $(this).val();

        $('ul').append('<li>' + input +
            '<i class="fas fa-check"></i> ' +
            '<i class="fas fa-trash"></i> ' +
            '</li>')
        $(this).val('');
    })

})
// remove todo item
$(document).on('click','.fa-trash',function(){
    $(this).parent('li').toggleClass('trashed');
    $(this).parent('li').fadeOut(1200, function() {
        $(this).parent('li').remove();
    });
})
// check toggle
$(document).on('click', '.fa-check', function () {
    $(this).parent('li').toggleClass('checked');
})
