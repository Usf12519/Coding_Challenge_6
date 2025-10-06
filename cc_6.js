class employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;

    }


describe() {
    return `${this.name} works in ${this.department}`;

    }

};

class Manager extends employee {
    constructor(name, department, teamsize) {
        super(name,department,teamsize)
        this.teamsize = teamsize;

    }

    describe() {
        return `${this.name} from ${this.teamsize} in the ${this.department}
        `
    }

};

const employees = [
    new employee("Tom", "Marketing"),
    new employee("Madison", "Education"),
    new employee("Laura", "Fianace")
    
];

for (const emp of employees) {
    console.log(emp.describe());
    
};

const managers = [
    new manager("Maddie", "Marketing"),
    new manager("Jared", "Fianace"),
    new manager("Alejandro","Education"),

];

for (const man of managers) {
    console.log(man.describe());
    
};

class employee {
    constructor(employees) {
        addemployee("Hannah"),
        addemployee("Luc"),
        listEmployees("Tom", "Madison", "Laura", "Hannah", "Luc"),

    }

    describe() {
        return(addemployee), (listEmployees),

    }

};

listEmployees() {
    this.employees.company.forEach(element => {
        "Maddie", "Hannah", "Luc"});
    console.log(employee.dscribe());

};
