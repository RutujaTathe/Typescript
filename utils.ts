namespace userUtils {
  export class Parent {
    name: string = " "; // Specify the type of 'name'

    setname(Name: string): string {
      this.name = Name;
      return this.name;
    }
  }
  export interface users {
    getName(): string;
  }
}
