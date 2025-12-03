import "./Home.css";
import React from "react";
import stm32Img from "../../images/STM32F1 HAL.png";
import Stm32TG from "../../images/stm32thanhghi.png";
import Espidf from "../../images/espidf.png";
import CourseCard from "../../components/cource/cource";

function Home() {
  const courses = [
    {
      id: 1,
      image: Stm32TG,
      tag: "STM32",
      title: "STM32 THANH GHI",
      oldPrice: "1.200.000₫",
      newPrice: "360.000₫",
      description: `Vi điều khiển STM32 thanh ghi.<br/>- Ngoại vi<br/>- Memory,...`,
      link: "https://docs.google.com/document/d/1-m-1rWXeWirnZqyD3jf6-D07fNg9CIxU7PBn-R0Gau0/edit?tab=t.0",
    },
    {
      id: 2,
      image: Espidf,
      tag: "ESP32",
      title: "ESP32 IDF",
      oldPrice: "1.200.000₫",
      newPrice: "270.000₫",
      description: `Vi điều khiển ESP32 - IDF.<br/>- Ngoại vi<br/>- Sensor,...`,
      link: "https://docs.google.com/document/d/1-m-1rWXeWirnZqyD3jf6-D07fNg9CIxU7PBn-R0Gau0/edit?tab=t.0",
    },
  ];
  return (
    <>
      <header class="flex">
        <article>
          <h1 class="title big">
            Welcome to <br />
            <em>Học Cùng ET</em> Embedded
          </h1>
          <p>
            Nội dung: Chanel dành cho các bạn đam mê lĩnh vực lập trình nhúng
            hay còn gọi là embedded
            <br />- Tiếp cận với các dòng vi điều khiển phổ biến: STM32, ESP32,
            ARDUINO, ESP8266,...
          </p>
          <a href="#" class="btn btn_3">
            Explore more
          </a>
        </article>
        <section class="flex"></section>
      </header>

      <div className="divisions division_3 padding_2x">
        <section className="title_header">
          <h1 className="title">Seri mất phí</h1>
          <p>Sống là để học embedded hết mình</p>
          <span className="bar"></span>
        </section>
        <section className="slider padding_0x">
          <ul className="card logo-slider blog-slider">
            <>
              {courses.map((item, index) => (
                <CourseCard key={index} {...item} />
              ))}
            </>
          </ul>
        </section>
      </div>
    </>
  );
}

export default Home;
