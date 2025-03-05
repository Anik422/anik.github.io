function ReduceFunction(draft, action) {
    switch (action.type) {
        case 'TOGGLE_DARK_MODE':
            draft.darkMode = !draft.darkMode;
            break;
        case 'ADD_TODO':
            draft.todos.push({ text: action.text, completed: false });
            break;
    }
}

export default ReduceFunction;