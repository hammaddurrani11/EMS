const employees = [
    {
        id: 1,
        firstName: "Alex",
        email: "employee1@gmail.com",
        password: "123",
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Design Homepage Layout",
                description: "Create initial wireframes and mockups for the homepage.",
                date: "2025-04-18",
                category: "UI/UX",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Style Navigation Menu",
                description: "Apply responsive styles to the navbar for mobile and desktop.",
                date: "2025-04-19",
                category: "Frontend",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Font and Color Guide",
                description: "Define typography and color schemes for branding consistency.",
                date: "2025-04-20",
                category: "UI/UX",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 2,
        firstName: "Brooke",
        email: "employee2@gmail.com",
        password: "123",
        taskNumber: {
            active: 1,
            newTask: 0,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Set Up Project Structure",
                description: "Initialize folder structure and install dependencies.",
                date: "2025-04-16",
                category: "Backend",
                active: true,
                newTask: false,
                completed: false,
                failed: false
            },
            {
                title: "Implement Authentication",
                description: "Create login, signup, and password reset functionalities.",
                date: "2025-04-17",
                category: "Backend",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Database Schema Design",
                description: "Design and document schema for user and product models.",
                date: "2025-04-15",
                category: "Backend",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 3,
        firstName: "Charlie",
        email: "employee3@gmail.com",
        password: "123",
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Develop Contact Form",
                description: "Create and validate the contact form with backend integration.",
                date: "2025-04-18",
                category: "Frontend",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Form Error Handling",
                description: "Add real-time validation and error messages.",
                date: "2025-04-19",
                category: "Frontend",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Test Contact API",
                description: "Write tests for API handling form submissions.",
                date: "2025-04-20",
                category: "QA",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 4,
        firstName: "Dana",
        email: "employee4@gmail.com",
        password: "123",
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Optimize Images",
                description: "Compress and convert images for faster page load.",
                date: "2025-04-17",
                category: "Performance",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Create About Page",
                description: "Design and code responsive About Us page.",
                date: "2025-04-19",
                category: "Frontend",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "SEO Meta Tags",
                description: "Add meta tags and descriptions for all pages.",
                date: "2025-04-20",
                category: "SEO",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    },
    {
        id: 5,
        firstName: "Elliot",
        email: "employee5@gmail.com",
        password: "123",
        taskNumber: {
            active: 1,
            newTask: 1,
            completed: 1,
            failed: 1
        },
        tasks: [
            {
                title: "Run Lighthouse Audit",
                description: "Analyze performance, accessibility, and SEO scores.",
                date: "2025-04-21",
                category: "QA",
                active: true,
                newTask: true,
                completed: false,
                failed: false
            },
            {
                title: "Fix Broken Links",
                description: "Identify and resolve all 404 errors and broken links.",
                date: "2025-04-20",
                category: "QA",
                active: false,
                newTask: false,
                completed: true,
                failed: false
            },
            {
                title: "Accessibility Review",
                description: "Ensure website meets WCAG 2.1 compliance standards.",
                date: "2025-04-22",
                category: "Accessibility",
                active: false,
                newTask: false,
                completed: false,
                failed: true
            }
        ]
    }
];

const admin = [
    {
        "id": 1,
        "email": "admin@gmail.com",
        "password": "123"
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
    localStorage.setItem('admin', JSON.stringify(admin));
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'));
    const admin = JSON.parse(localStorage.getItem('admin'));

    return { employees, admin };
}