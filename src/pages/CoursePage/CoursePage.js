import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./CoursePage.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzBtNGSPeQ9YazFxwGipytrffyMpndD-Ju6V6Q7Fl0R9giS4BrzfyJOeUQwtq-aoo8myg/exec";

const CoursePage = () => {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [networkError, setNetworkError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((rows) => {
        // Group theo course_id
        const courses = {};

        rows.forEach((r) => {
          if (!courses[r.course_id]) {
            courses[r.course_id] = {
              title: r.course_title,
              lessons: [],
            };
          }

          courses[r.course_id].lessons.push({
            id: Number(r.lesson_id),
            title: r.lesson_title,
            video: r.video_url,
          });
        });

        const selectedCourse = courses[id];

        if (selectedCourse) {
          setCourse(selectedCourse);
          setSelectedLesson(selectedCourse.lessons[0]);
        }
      })
      .catch((err) => { setNetworkError(true); console.error("Lỗi fetch:", err) });
  }, [id]);
  if (networkError) {
    return (
      <div className="mycourses-container">
        <div className="login-warning-box">
          <h2>Mạng không ổn định</h2>
          <p>Vui lòng kiểm tra kết nối Internet và thử lại.</p>
        </div>
      </div>
    );
  }
  if (!course) return <div className="loading-spinner"></div>;


  return (
    <div className="course-container">
      <aside className="course-sidebar">
        <h2>{course.title}</h2>
        <ul>
          {course.lessons.map((lesson) => (
            <li
              key={lesson.id}
              className={selectedLesson?.id === lesson.id ? "active" : ""}
              onClick={() => setSelectedLesson(lesson)}
            >
              {lesson.title}
            </li>
          ))}
        </ul>
      </aside>

      <main className="course-content">
        <h1>{selectedLesson?.title}</h1>
        <iframe
          width="100%"
          height="450"
          src={selectedLesson?.video}
          title="Course Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </main>
    </div>
  );
};

export default CoursePage;
