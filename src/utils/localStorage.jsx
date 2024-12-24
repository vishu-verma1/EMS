const employees = [     // employees array contains the data of employees. Each employee has an id, email, password, and tasks array. The tasks array contains the data of tasks assigned to the employee. Each task has a title, description, category, active, newTask, completed, failed, and date properties.
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Complete the client report",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Task 2",
        description: "Fix the website layout issues",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
      {
        title: "Task 3",
        description: "Attend the team meeting",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
    ],
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Prepare marketing materials",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Task 2",
        description: "Organize inventory data",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2024-12-22",
      },
      {
        title: "Task 3",
        description: "Research competitors’ strategies",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
    ],
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Conduct employee training",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
      {
        title: "Task 2",
        description: "Update software systems",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Task 3",
        description: "Review budget reports",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
    ],
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Create presentation slides",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-27",
      },
      {
        title: "Task 2",
        description: "Respond to customer queries",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Task 3",
        description: "Analyze website traffic",
        category: "Analytics",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
    ],
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Task 1",
        description: "Organize team building activities",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-28",
      },
      {
        title: "Task 2",
        description: "Test new product features",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Task 3",
        description: "Prepare sales forecast",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
    ],
  },
];

const admin = [
  {
    id: "admin",
    email: "admin@example.com",
    password: "123",
  },
];



export const setLocalStorage = ()=>{                                          // setLocalStorage function is used to set the employees and admin data in the local storage.
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
}

export const getLocalStorage = ()=>{                                          // getLocalStorage function is used to get the employees and admin data from the local storage.
 const employess = JSON.parse( localStorage.getItem("employees"));
 const admin = JSON.parse(localStorage.getItem("admin"));
    console.log(employess);
 
}