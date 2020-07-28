export default class Subscriber {
  private id: number;
  private user: string;
  private email: string;

  constructor(id: number, user: string, email: string) {
    this.id = id;
    this.user = user;
    this.email = email;
  }
  setId(id: number): void {
    this.id = id;
  }
  getId(): number {
    return this.id;
  }
  setUser(user: string): void {
    this.user = user;
  }
  getUser(): string {
    return this.user;
  }
  setEmail(email: string): void {
    this.email = email;
  }
  getEmail(): string {
    return this.email;
  }
}
