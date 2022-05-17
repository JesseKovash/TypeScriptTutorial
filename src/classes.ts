class Department {
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    this.name = name;
    this.id = id;
  }

  static createEmployee(name: string) {
    return { name: name };
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
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;

    }
    throw new Error ('No Report Found.');
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error('Please pass in valid value');
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]) {
    super(id, 'ACCT');
    this.lastReport = reports[0]
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports)
  }

}


const acctDept = new AccountingDepartment('d2', []);
acctDept.mostRecentReport = 'hello';
acctDept.mostRecentReport = 'Goodbye';
acctDept.addEmployee('jesse')
console.log('acctdept: ', acctDept)
acctDept.printReports()