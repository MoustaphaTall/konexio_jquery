$(function() {
    $('button').click(function() {
        $.ajax('https://restcountries.eu/rest/v2/name/france', {
            success: function(country) {
                console.log('Country:' + ' ' + country[0].name);
                console.log('Capital:' + ' ' + country[0].capital);
            }
        });
    });
});