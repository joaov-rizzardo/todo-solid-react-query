export class Todo {
  constructor(
    public readonly id: string,
    private name: string,
    private description: string,
    private completed: boolean
  ) {}
}
