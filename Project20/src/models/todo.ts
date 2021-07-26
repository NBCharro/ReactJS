class Todo {
    id: string;
    text: string;
    constructor(todoText: string) {
        this.text = todoText;
        this.id = Math.round(Math.random() * 100).toString();
    }
}

export default Todo;
