// localStorage.clear(); // Clear the local storage before setting the data.

const employees = [
  {
    id: 1,
    name: "Rajesh Kumar",
    email: "employee1@example.com",
    password: "123",
    tasksCount: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Client Financial Report",
        description:
          "Prepare a detailed financial report for the client, including quarterly earnings and expense breakdowns with graphical representations.",
        category: "Reporting",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Website Layout Improvement",
        description:
          "Analyze and redesign the website's homepage to improve user experience and increase mobile responsiveness across various devices.",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
      {
        title: "Team Coordination Meeting",
        description:
          "Organize and attend a team meeting to discuss progress on ongoing projects and address any bottlenecks encountered.",
        category: "Meetings",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
      {
        title: "System Security Update",
        description:
          "Implement the latest security updates on all company systems to prevent potential cyber threats and vulnerabilities.",
        category: "IT",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-22",
      },
      {
        title: "Documentation of Processes",
        description:
          "Create a comprehensive document detailing the company's workflow processes and best practices for new hires.",
        category: "Documentation",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
    ],
  },
  {
    id: 2,
    name: "Priya Sharma",
    email: "employee2@example.com",
    password: "123",
    tasksCount: {
      active: 3,
      newTask: 2,
      completed: 0,
      failed: 1,
    },
    tasks: [
      {
        title: "Marketing Campaign Materials",
        description:
          "Develop and finalize marketing materials for the upcoming campaign, including banners, social media posts, and email templates.",
        category: "Marketing",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Inventory Management System",
        description:
          "Analyze current inventory data and propose changes to optimize storage and retrieval processes within the warehouse.",
        category: "Logistics",
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        date: "2024-12-22",
      },
      {
        title: "Competitor Analysis",
        description:
          "Conduct research on competitors' marketing strategies and create a report with actionable insights for the management team.",
        category: "Research",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
      {
        title: "Customer Feedback Compilation",
        description:
          "Collect and organize customer feedback from surveys to identify patterns and areas for improvement in our services.",
        category: "Customer Relations",
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
    ],
  },
  {
    id: 3,
    name: "Aarti Nair",
    email: "employee3@example.com",
    password: "123",
    tasksCount: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Employee Training Program",
        description:
          "Design and deliver a comprehensive training program for employees to enhance their technical and interpersonal skills.",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
      {
        title: "Software System Upgrade",
        description:
          "Upgrade existing software systems to the latest version and ensure compatibility with all essential business tools.",
        category: "IT",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Budget Report Review",
        description:
          "Evaluate the accuracy of budget reports and suggest financial adjustments to better allocate resources.",
        category: "Finance",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
      {
        title: "Client Proposal Draft",
        description:
          "Draft a proposal for a potential client outlining services, pricing, and estimated timelines for project completion.",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-27",
      },
    ],
  },
  {
    id: 4,
    name: "Vikram Singh",
    email: "employee4@example.com",
    password: "123",
    tasksCount: {
      active: 3,
      newTask: 1,
      completed: 2,
      failed: 0,
    },
    tasks: [
      {
        title: "Presentation for Board Meeting",
        description:
          "Create visually appealing presentation slides for the quarterly board meeting, highlighting key achievements and challenges.",
        category: "Design",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-27",
      },
      {
        title: "Customer Query Response",
        description:
          "Respond to unresolved customer queries from the last quarter and update the database with resolutions.",
        category: "Support",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Website Traffic Analysis",
        description:
          "Analyze the website traffic data to identify trends and suggest improvements for boosting online engagement.",
        category: "Analytics",
        active: true,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
      {
        title: "Vendor Contract Negotiations",
        description:
          "Negotiate new contracts with vendors to secure better pricing and ensure timely delivery of essential supplies.",
        category: "Procurement",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
    ],
  },
  {
    id: 5,
    name: "Anjali Gupta",
    email: "employee5@example.com",
    password: "123",
    tasksCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        title: "Team Building Activities",
        description:
          "Plan and execute team-building activities aimed at fostering collaboration and improving workplace morale.",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        date: "2024-12-28",
      },
      {
        title: "Product Feature Testing",
        description:
          "Test newly developed product features for bugs and usability issues, and document findings for the development team.",
        category: "Quality Assurance",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-24",
      },
      {
        title: "Sales Forecast Preparation",
        description:
          "Prepare a detailed sales forecast for the upcoming quarter, incorporating historical data and market trends.",
        category: "Sales",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-25",
      },
      {
        title: "Employee Performance Metrics",
        description:
          "Compile and review performance metrics for all employees to identify top performers and areas needing improvement.",
        category: "HR",
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        date: "2024-12-23",
      },
      {
        title: "Social Media Engagement Plan",
        description:
          "Develop a social media engagement plan to boost brand awareness and increase customer interactions online.",
        category: "Marketing",
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        date: "2024-12-26",
      },
    ],
  },
];

const admin = [
  {
    id: "admin",
    name: "Admin User",
    email: "admin@example.com",
    password: "123",
  },
];

export const setLocalStorage = () => {
  // setLocalStorage function is used to set the employees and admin data in the local storage.
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  // getLocalStorage function is used to get the employees and admin data from the local storage.
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));
  return { employees, admin };
};
