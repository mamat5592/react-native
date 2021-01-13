const inisiateState = {
    sent_answer : ''
}

export const answer = ( state = inisiateState, action) => {
    switch(action.type){
        case "SEND_ANSWER":
            return state = {...state, sent_answer : action.payload};
        default:
            return state;
    }
}