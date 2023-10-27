export class Todo {
  constructor(
    public readonly id: string,
    private name: string,
    private description: string,
    private completed: boolean
  ) {}

  toObject() {
    return {
      id: this.id,
      name: this.name,
      description: this.description,
      completed: this.completed,
    };
  }
}
