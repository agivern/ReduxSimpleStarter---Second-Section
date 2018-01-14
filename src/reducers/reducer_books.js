export default function(state = null, action) {
    switch(action) {
        case 'BOOK_EDITED':
            for (var i = 0; i < state.length; i++) {
                if (state[i].title == action.payload.book.title)
                {
                    state[i].description = action.payload.book.description;
                }
            }
    }

    if (state == null)
    {
        return [
            { title: 'Javascript: The Good Parts', pages: 101, description: '' },
            { title: 'Harry Potter', pages: 1254, description: '' },
            { title: 'The Dark Tower', pages: 58, description: '' },
            { title: 'Eloquent Ruby', pages: 1, description: '' }
        ];
    }
    else
    {
        return state;
    }
}
