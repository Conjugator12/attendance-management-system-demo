// src/data/sampleData.js
export const studentData = {
  name: "John Doe",
  id: "STU001",
  department: "Computer Science",
  email: "john.doe@university.edu",
  semester: "Fall 2023",
  totalClasses: 12,
  attendanceRate: 92,
};

export const classesData = [
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
];

export const attendanceRecords = [
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
];

export const stats = {
  totalClasses: 12,
  attendanceRate: 92,
  presentDays: 23,
  absentDays: 2,
  lateDays: 1,
};
