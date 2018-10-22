//This is an action creator, it needs to return an action with a type property
export function selectBook(book){
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

/*Actions always contain a type and sometimes a payload*/