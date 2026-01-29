// script.js

// Sample data
const sampleData = {
  studentData: {
    name: "John Doe",
    id: "STU001",
    department: "Computer Science",
    email: "john.doe@university.edu",
    semester: "Fall 2023",
    totalClasses: 12,
    attendanceRate: 92,
  },

  classesData: [
    {
      id: "1",
      name: "Mathematics",
      code: "MATH101",
      time: "Mon, Wed - 10:00 AM",
      attendance: 95,
      instructor: "Prof. Smith",
      color: "blue",
    },
    {
      id: "2",
      name: "Computer Science",
      code: "CS201",
      time: "Tue, Thu - 2:00 PM",
      attendance: 88,
      instructor: "Prof. Johnson",
      color: "green",
    },
    {
      id: "3",
      name: "Physics",
      code: "PHYS101",
      time: "Mon, Wed, Fri - 9:00 AM",
      attendance: 76,
      instructor: "Prof. Williams",
      color: "orange",
    },
    {
      id: "4",
      name: "English Literature",
      code: "ENG202",
      time: "Tue, Thu - 11:00 AM",
      attendance: 92,
      instructor: "Prof. Brown",
      color: "purple",
    },
  ],

  attendanceRecords: [
    {
      date: "2023-10-10",
      className: "Mathematics",
      status: "present",
      time: "10:00 AM",
      instructor: "Prof. Smith",
    },
    {
      date: "2023-10-09",
      className: "Computer Science",
      status: "present",
      time: "2:00 PM",
      instructor: "Prof. Johnson",
    },
    {
      date: "2023-10-08",
      className: "Physics",
      status: "late",
      time: "9:00 AM",
      instructor: "Prof. Williams",
    },
    {
      date: "2023-10-07",
      className: "English Literature",
      status: "absent",
      time: "11:00 AM",
      instructor: "Prof. Brown",
    },
    {
      date: "2023-10-06",
      className: "Mathematics",
      status: "present",
      time: "10:00 AM",
      instructor: "Prof. Smith",
    },
    {
      date: "2023-10-05",
      className: "Computer Science",
      status: "present",
      time: "2:00 PM",
      instructor: "Prof. Johnson",
    },
    {
      date: "2023-10-04",
      className: "Physics",
      status: "present",
      time: "9:00 AM",
      instructor: "Prof. Williams",
    },
    {
      date: "2023-10-03",
      className: "English Literature",
      status: "present",
      time: "11:00 AM",
      instructor: "Prof. Brown",
    },
  ],

  stats: {
    totalClasses: 12,
    attendanceRate: 92,
    presentDays: 23,
    absentDays: 2,
    lateDays: 1,
  },
};

// Application state
let appState = {
  isLoggedIn: false,
  currentTab: "dashboard",
  user: null,
};

// Render function
function renderApp() {
  const appElement = document.getElementById("app");

  if (!appState.isLoggedIn) {
    appElement.innerHTML = "<login-page></login-page>";
    return;
  }

  // Render content based on current tab
  let pageContent = "";

  switch (appState.currentTab) {
    case "dashboard":
      pageContent = renderDashboard();
      break;
    case "classes":
      pageContent = renderClassesPage();
      break;
    case "meetings":
      pageContent = renderMeetingsPage();
      break;
    case "history":
      pageContent = renderHistoryPage();
      break;
    default:
      pageContent = renderDashboard();
  }

  appElement.innerHTML = `
    <app-header user-name="${appState.user.name}">
      <app-navigation slot="navigation" active-tab="${appState.currentTab}"></app-navigation>
    </app-header>
    
    <main class="container" style="padding: var(--spacing-lg) 0;">
      ${pageContent}
    </main>
    
    <app-footer></app-footer>
  `;

  // Re-attach event listeners
  attachEventListeners();
}

// Render dashboard
function renderDashboard() {
  return `
    <div class="fade-in">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <div class="text-muted">Welcome back, ${appState.user.name}!</div>
      </div>
      
      <!-- Statistics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <stat-card 
          title="Total Classes" 
          value="${sampleData.stats.totalClasses}" 
          icon="📚"
        ></stat-card>
        
        <stat-card 
          title="Attendance Rate" 
          value="${sampleData.stats.attendanceRate}%" 
          change="+2" 
          trend="up"
          icon="📊"
        ></stat-card>
        
        <stat-card 
          title="Present Days" 
          value="${sampleData.stats.presentDays}" 
          icon="✅"
        ></stat-card>
        
        <stat-card 
          title="Absent Days" 
          value="${sampleData.stats.absentDays}" 
          change="-1" 
          trend="down"
          icon="❌"
        ></stat-card>
      </div>
      
      <!-- Quick Actions -->
      <div class="mb-8">
        <h2 class="text-xl font-semibold mb-4">Quick Actions</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <action-card 
            title="Mark Attendance" 
            description="Mark attendance for today's classes"
            icon="✅"
            button-text="Mark Now"
            action="mark-attendance"
          ></action-card>
          
          <action-card 
            title="View Classes" 
            description="Check your class schedule and details"
            icon="📚"
            button-text="View Classes"
            variant="secondary"
            action="view-classes"
          ></action-card>
          
          <action-card 
            title="Download Report" 
            description="Download your attendance report"
            icon="📥"
            button-text="Download"
            variant="accent"
            action="download-report"
          ></action-card>
        </div>
      </div>
      
      <!-- Recent Classes -->
      <div class="mb-8">
        <div class="flex items-center justify-between mb-4">
          <h2 class="text-xl font-semibold">Recent Classes</h2>
          <button class="btn btn-secondary">View All</button>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          ${sampleData.classesData
            .slice(0, 4)
            .map(
              (classItem) => `
            <class-card
              name="${classItem.name}"
              code="${classItem.code}"
              time="${classItem.time}"
              attendance="${classItem.attendance}"
              instructor="${classItem.instructor}"
              color="${classItem.color}"
              class-id="${classItem.id}"
            ></class-card>
          `,
            )
            .join("")}
        </div>
      </div>
      
      <!-- Recent Attendance Records -->
      <div>
        <h2 class="text-xl font-semibold mb-4">Recent Attendance</h2>
        <div class="grid grid-cols-1 gap-3">
          ${sampleData.attendanceRecords
            .slice(0, 5)
            .map(
              (record) => `
            <attendance-record
              date="${record.date}"
              class-name="${record.className}"
              status="${record.status}"
              time="${record.time}"
              instructor="${record.instructor}"
            ></attendance-record>
          `,
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

// Render classes page
function renderClassesPage() {
  return `
    <div class="fade-in">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">My Classes</h1>
        <div class="flex gap-2">
          <button class="btn btn-secondary">Filter</button>
          <button class="btn btn-primary">Add Class</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${sampleData.classesData
          .map(
            (classItem) => `
          <class-card
            name="${classItem.name}"
            code="${classItem.code}"
            time="${classItem.time}"
            attendance="${classItem.attendance}"
            instructor="${classItem.instructor}"
            color="${classItem.color}"
            class-id="${classItem.id}"
          ></class-card>
        `,
          )
          .join("")}
      </div>
      
      ${
        sampleData.classesData.length === 0
          ? `
        <div class="mt-8">
          <empty-state
            title="No Classes Found"
            message="You are not enrolled in any classes yet."
            icon="📚"
            action-text="Enroll in Classes"
          ></empty-state>
        </div>
      `
          : ""
      }
    </div>
  `;
}

// Render meetings page
function renderMeetingsPage() {
  return `
    <div class="fade-in">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">Meetings</h1>
        <button class="btn btn-primary">Schedule Meeting</button>
      </div>
      
      <div class="mb-8">
        <empty-state
          title="No Meetings Scheduled"
          message="You don't have any meetings scheduled. Schedule a meeting with your instructor."
          icon="👥"
          action-text="Schedule Meeting"
        ></empty-state>
      </div>
    </div>
  `;
}

// Render history page
function renderHistoryPage() {
  return `
    <div class="fade-in">
      <div class="flex items-center justify-between mb-6">
        <h1 class="text-2xl font-bold">Attendance History</h1>
        <div class="flex gap-2">
          <button class="btn btn-secondary">Filter</button>
          <button class="btn btn-primary">Export</button>
        </div>
      </div>
      
      <div class="grid grid-cols-1 gap-3">
        ${sampleData.attendanceRecords
          .map(
            (record) => `
          <attendance-record
            date="${record.date}"
            class-name="${record.className}"
            status="${record.status}"
            time="${record.time}"
            instructor="${record.instructor}"
          ></attendance-record>
        `,
          )
          .join("")}
      </div>
      
      ${
        sampleData.attendanceRecords.length === 0
          ? `
        <div class="mt-8">
          <empty-state
            title="No Attendance Records"
            message="Your attendance records will appear here once you start attending classes."
            icon="📈"
          ></empty-state>
        </div>
      `
          : ""
      }
    </div>
  `;
}

// Attach event listeners
function attachEventListeners() {
  // Navigation tab switching
  const navigation = document.querySelector("app-navigation");
  if (navigation) {
    navigation.addEventListener("tab-change", (e) => {
      appState.currentTab = e.detail.tab;
      renderApp();
    });
  }

  // Action card clicks
  document.querySelectorAll("action-card").forEach((card) => {
    card.addEventListener("action-click", (e) => {
      alert(`Action clicked: ${e.detail.action}`);
    });
  });

  // Class card clicks
  document.querySelectorAll("class-card").forEach((card) => {
    card.addEventListener("class-details", (e) => {
      alert(`Viewing details for class ID: ${e.detail.classId}`);
    });
  });

  // Empty state actions
  document.querySelectorAll("empty-state").forEach((state) => {
    state.addEventListener("empty-state-action", () => {
      alert("Empty state action triggered!");
    });
  });
}

// Initialize application
function initApp() {
  // Listen for login success event
  document.addEventListener("login-success", (e) => {
    appState.isLoggedIn = true;
    appState.user = e.detail.user;
    renderApp();
  });

  // Initial render
  renderApp();
}

// Initialize app when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp);
} else {
  initApp();
}

// Export sample data
export { sampleData };
