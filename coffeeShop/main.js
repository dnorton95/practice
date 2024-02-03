$(function () {
    var $orders = $('#orders');

    $.ajax({
        type: 'GET',
        url: 'https://api.sampleapis.com/beers/ale',
        success: function (orders) {
            $.each(orders, function (i, order) {
                // Use an img tag to display the image
                $orders.append('<h2 id="beer">Beer: ' + order.name + '</h2>  <p id="price"> Price: ' + order.price + ' </p>  <p>' + '<img id="img" src="' + order.image + '" alt="' + order.name + ' Image"> </p> ');
            });
        }
    });
});
