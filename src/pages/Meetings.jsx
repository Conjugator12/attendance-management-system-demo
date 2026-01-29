import React from "react";
import { attendanceRecords } from "../data/sampleData";
import AttendanceRecord from "../components/AttendanceRecord";
import "../styles/Meetings.css";
const Meetings = () => {
  return (
    <div className="meetings-page container">
      <h1 className="text-2xl font-bold mb-6">Meetings</h1>
      <p className="text-muted mb-4">
        Here are your recent attendance records for meetings and classes.
      </p>
      <div className="grid grid-cols-1 gap-3">
        {attendanceRecords.map((record, index) => (
          <AttendanceRecord
            key={index}
            date={record.date}
            className={record.className}
            status={record.status}
            time={record.time}
            instructor={record.instructor}
          />
        ))}
      </div>
    </div>
  );
};

export default Meetings;
