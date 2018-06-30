export default class Todo {
  constructor(props) {
    if (!props.id) throw new Error("id for new Todo was not provided");
    this.id = props.id;

    if (props && props.title) this.title = props.title;
    else this.title = "new todo...";

    if (props && props.completed) this.completed = props.completed;
    else this.completed = false;
  }
}
