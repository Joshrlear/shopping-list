$(function() {
    // check button
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        event.stopPropagation();
        const targetButton = $(this);
        const labelText = $(this).closest('li').find('.shopping-item');
        labelText.toggleClass('shopping-item__checked', targetButton);
    });

    // delete button
    $('.shopping-list').on('click', '.shopping-item-delete', function() {
        const listItem = $(this).closest('li');
        listItem.remove();
    });

    // adding item
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        let item = $('input[name=shopping-list-entry]').val();
        $('ul').append(
            `<li>
            <span class="shopping-item"> ${item} </span>
            <div class="shopping-item-controls">
            <button aria-pressed="false" class="shopping-item-toggle">
            <span class="button-label">check</span></button>
            <button class="shopping-item-delete">
            <span class="button-label">delete</span>
            </button>
            </div>
            </li>`
        );
        $('input[name=shopping-list-entry]').val('');
    });
})
