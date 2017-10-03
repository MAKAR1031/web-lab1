import $ from 'jquery';
require('./app.scss')

$(document).ready(() => {
    const newItemHandler = () => {
        const title = $('#title').val();
        if (title === '') {
            alert('Необходимо ввести значение');
            return;
        }
        $('#title').val('');
        const item = $("<li></li>").text(title);
        const priorityButton = $('<button></button>').text('Priority');
        priorityButton.addClass('btn priority');
        priorityButton.click(() => {
            item.toggleClass('priority-task');
        });
        const removeButton = $('<button></button>').text('Remove');
        removeButton.addClass('btn remove');
        removeButton.click(() => {
            item.hide('slow', () => {
                item.remove();
            });
        });
        item.append(priorityButton);
        item.append(removeButton);
        item.fadeOut(0);
        $('#todos').append(item);
        item.fadeIn();
    }
    $('#title').keypress(e => {
        if (e.which == 13) {
            newItemHandler();
        }
    })
    $('#add-todo').click(newItemHandler);
});