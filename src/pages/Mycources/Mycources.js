import React from "react";
import "./Mycources.css";
import IMG from "../../images/c embedded.png";
import { useNavigate } from "react-router-dom";
const MyCourses = () => {
  const email = localStorage.getItem("userEmail");
  const navigate = useNavigate();
  const courses = [
    {
      id: 1,
      title: "STM32 Thanh Ghi",
      description: "Khóa học về lập trình thanh ghi, ngoại vi, sensor...",
      img: IMG,
      progress: 60,
    },
    {
      id: 2,
      title: "FreeRTOS Cơ Bản",
      description: "Task, Queue, Semaphores, Event Groups,...",
      img: IMG,
      progress: 20,
    },
  ];

  const goToCource = (id) => {
    console.log("Email: ", email);

    navigate(`/course/${id}`);
  };

  return (
    <div className="mycourses-container">
      <h1>Khóa Học Của Tôi</h1>
      {email ? (
        <>
          <div className="course-list">
            {courses.map((course) => (
              <div className="course-card" key={course.id}>
                <img
                  src={course.img}
                  alt={course.title}
                  className="course-img"
                />

                <div className="course-info">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>

                  <div className="progress-box">
                    <div
                      className="progress-bar"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>

                  <button
                    onClick={() => goToCource(course.id)}
                    className="btn-view"
                  >
                    Tiếp tục học
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="login-warning-box">
          <h2>
            Bạn phải <span>ĐĂNG NHẬP</span> để tiếp tục
          </h2>
          <p>Vui lòng đăng nhập bằng Google để xem khóa học.</p>
        </div>
      )}
    </div>
  );
};

export default MyCourses;
