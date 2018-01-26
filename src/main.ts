
export class MainClass {
  foo = 0;
  bar = 1;
  constructor(public foobar: number) {}

  add() {
    return this.foo + this.bar + this.foobar;
  }
}
