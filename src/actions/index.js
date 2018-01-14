export function selectBook(book) {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export function editBook(book) {
    console.log(book);
    return {
        type: 'BOOK_EDITED',
        payload: book
    };
}
