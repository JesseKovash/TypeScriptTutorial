class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
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

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, 'IT');
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]) {
    super(id, 'ACCT')
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReports() {
    console.log(this.reports)
  }

}

// const itDept = new ITDepartment('d1', ['Jesse'])
// console.log('itdept: ', itDept)

const acctDept = new AccountingDepartment('d2', []);
acctDept.addReport('hello');
acctDept.addReport('Goodbye');
acctDept.addEmployee('jesse')
console.log('acctdept: ', acctDept)