$(function() {
    $('button').click(function() {
        var writtenCountry = $('input').val();
        $.ajax('https://restcountries.eu/rest/v2/name/' + writtenCountry, {
            success: function(country) {
                $('#country').html(country[0].name);
                $('#capital').html(country[0].capital);
            }
        });
    });
});