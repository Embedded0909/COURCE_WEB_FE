import React from "react";
import "./Content.css";

const Content = () => {
    const qrImage = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform";

    return (
        <div className="content-page">
            <h1>Khóa Học STM32 Cơ Bản</h1>

            <div className="content-container">
                <section className="qr-section">
                    <h2>Quét mã QR để đăng ký</h2>
                    <img src={qrImage} alt="QR Code đăng ký" />
                    <p>Hoặc truy cập link: <a href="https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform" target="_blank" rel="noopener noreferrer">Click vào đây</a></p>
                </section>

                <section className="steps-section">
                    <h2>Các bước đăng ký khóa học</h2>
                    <ol>
                        <li>Đăng nhập vào website bằng Google</li>
                        <li>Truy cập trang khóa học cơ bản</li>
                        <li>Quét mã QR hoặc nhấp vào link đăng ký</li>
                        <li>Điền thông tin và gửi</li>
                        <li>Bạn sẽ nhận được email xác nhận</li>
                    </ol>
                </section>
            </div>
        </div>
    );
};

export default Content;
