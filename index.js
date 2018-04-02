var productList = [];

var productTemplate =
'<div class="col-sm-3 col-xs-6 product">' +

    '<div class="product-inner">' +
        '<div class="product-image">' +
            '<span class="glyphicon glyphicon-star"></span>' +
        '</div>' +

        '<div class="product-name">Nume produs</div>' +

        '<div class="pull-right">' +
            '<button>' +
                '<span class="glyphicon glyphicon-plus add-to-cart"></span>' +
            '</button>' +
        '</div>' +

        '<div class="clearfix"></div>' +
    '</div>' +

'</div>';

var onDocumentReadyHandler = function() {
    // pentru fiecare element cu clasa 'add-to-cart',
    // vrem sa atasam un handler pentru event-ul click

    // $('.add-to-cart').click( function() {
    //     alert('Am apasat un buton de adaugat in cos.');
    // });

    // atasam un handler de click pentru toti copiii cu clasa 'add-to-cart',
    // ai elementului cu clasa 'container',
    // deoarece avem certitudinea ca el este deja creat
    $('.container').on('click', '.add-to-cart', function() {

        var productDiv = $(this).closest('[data-id]');
        var productId = productDiv.attr('data-id') - 1;

        if ( productList[productId] !== null && productList[productId] !== undefined ) {
            productList[productId]++;
        } else {
            productList[productId] = 1;
        }

        var count = 0;

        for ( var i = 0; i < productList.length; i++ ) {
            if ( productList[i] > 0 )
                count++;
        }

        $('#product-count').text(count);
    });

    addProducts(3);
};

function addProducts(numberOfProducts) {

    for ( var i = 0; i < numberOfProducts; i++ ) {

        var newProduct = $(productTemplate); // creare element

        newProduct.attr('data-id', i + 2);

        productList[i] = 0; // initializare lista produse

        $('.container .row').append(newProduct); // adaugare in document
    }

    productList[numberOfProducts] = 0;
}

$(document).ready(onDocumentReadyHandler);