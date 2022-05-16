class Department {
  private employees: string[] = [];

  constructor(public name: string, private readonly id: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee)
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

const accounting = new Department('Accounting', '123');
accounting.addEmployee('Max');
accounting.addEmployee('Jesse');
accounting.describe()