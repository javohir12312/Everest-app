import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./About.scss";

import Ramatov_Abror from "../image/Ramatov_Abror.jpg";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import "../About/Teacher.scss";

const About = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          marginTop:"50px"
        }}
      >
        <div className="box">
          <h2 style={{ fontSize: 22, marginTop: 0, marginBottom: 30 }}>
            <strong>
              EVEREST ALISHER NAVOIYDA MATEMATIKANI QIYVORADIGAN USTOZ HAM BOR
              :)!
            </strong>
          </h2>

          <p style={{ fontSize: 18 }}>
            <strong>TANISHING - MATEMATIKA USTOZIMIZ - ABROR RAHMATOV:</strong>
          </p>

          <p style={{ fontSize: 17 }}>
            - Buxoro viloyati, Qorako'l tumanida tavallud topgan;
          </p>

          <p style={{ fontSize: 17 }}>
            - QORAKO'L FIZIKA-MATEMATIKA MAKTABI KEYINCHALIK LITSEYI
            BITIRUVCHISI;
          </p>

          <p style={{ fontSize: 17 }}>
            - Uzoq muddatli o'qituvchilik tajribasiga ega va shu kungacha
            1000dan ziyod abituriyenti mamlakatimiz Oliy O'quv Yurtlariga
            kirishga muvaffaq bo'lgan;
          </p>

          <p style={{ fontSize: 17 }}>
            - Ham o'zbek ham rus tillarida bemalol dars o'tish qobiliyatiga ega;
          </p>

          <p style={{ fontSize: 17 }}>
            - Xalqaro oliy o'quv yurtlari - WIUT, INHA va TURIN POLITEXNIKA
            universitetlariga alohida guruhlarda dars o'tadi va shu kungacha
            yuzlab talabalari ushbu o'quv yurtlari talabasi bo'lgan;
          </p>

          <p style={{ fontSize: 17 }}>
            - O'z ishining haqiqiy ustasi, o'quvchining natijasi uchun yurakdan
            kurashadigan qattiqqo'l pedagog;
          </p>
          <p style={{ fontSize: 17 }}>
            Qadrli EVERESTERLAR - ham xozirgi ham bo'lajak talabalarimiz!
          </p>

          <p style={{ fontSize: 17 }}>
            QORAKO'L FIZIKA VA MATEMATIKA MAKTABI, undagi metodika va fanni
            o'rgatishga bo'lgan munosabat haqida ortiqcha gapirib o'tirishni
            hojati yo'q, menimcha!
          </p>

          <p style={{ fontSize: 17 }}>
            ABROR RAHMATOV to'liqligicha ham uslub ham qattiqqo'llik jihatidan
            to'liq QORAKO'L uslubida dars o'tadigan MATEMATIKA ustozimiz!
          </p>

          <p style={{ fontSize: 17 }}>
            Agar haqiqatda MATEMATIKAni sifatli o'rganishga bel bog'lagan
            bo'lsangiz, siz uchun haqiqatda jon kuydiradigan, sizga tanbeh berib
            jazolasa ham aslida sizni manfaatingizni ko'zlaydigan haqiqiy ustoz
            kerak bo'lsa - EVEREST ALISHER NAVOIYga murojaat qiling va ABROR
            RAHMATOV guruhlariga yoziling!
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={true}
            className="mySwiper"
          >
            <SwiperSlide>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"../../assets/images/image_one.jpg"}
                width={450}
                height={300}
                alt="image"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                style={{ width: "100%", height: "100%" }}
                src={"../../assets/images/image_two.jpg"}
                width={450}
                height={300}
                alt="image"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="teacher">
        <ul className="teacher__list">
          <li>
            <span>Ism:</span>
            <strong>Abror</strong>
          </li>
          <li>
            <span>Familiya:</span>
            <strong>Rahmatov</strong>
          </li>
          <li>
            <span>Tel raqam:</span>
            <strong>
              <a href="tel:+998946440545">+998 (94) 644-05-45</a>
              <a href="tel:+998974430525">+998 (97) 443-05-25</a>
            </strong>
          </li>
          <li>
            <span>Email manzil:</span>
            <strong>
              <a href="mailto:abror_b95@mail.ru">abror_b95@mail.ru</a>
            </strong>
          </li>
          <li>
            <span>Telegram manzil:</span>
            <strong>
              <a href="https://t.me/Abror_Rahmatov" target={"_blank"}>
                Abror_Rahmatov
              </a>
            </strong>
          </li>
          <li>
            <span>Instagram manzil:</span>
            <strong>
              <a
                href="https://www.instagram.com/abror_rakhmatov/"
                target={"_blank"}
              >
                Abror_Rakhmatov
              </a>
            </strong>
          </li>
          <li>
            <span>Ish manzil:</span>
            <strong>
              <a
                href="https://maps.apple.com/maps?ll=41.321227442709215,69.24688592267167&q=41.321227442709215,69.24688592267167&t=m"
                target={"_blank"}
              >
                Everest Academy
              </a>
            </strong>
          </li>
          <li>
            <span>Telegram manzil:</span>
            <strong>
              <a href="https://t.me/everestofficial" target={"_blank"}>
                Everestofficial
              </a>
            </strong>
          </li>
          <li>
            <span>Instagram manzil:</span>
            <strong>
              <a
                href="https://www.instagram.com/everest_learning_center/"
                target={"_blank"}
              >
                Everest_learning_center
              </a>
            </strong>
          </li>
        </ul>
        <img
          className="teacher__image"
          src={Ramatov_Abror}
          width={300}
          height={300}
          alt="Ramatov Abror image"
        />
      </div>

      <div
        style={{
          maxWidth: "500px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "50px auto",
          marginBottom: "0",
        }}
      >
        <a
          style={{
            color: "blue",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          href="https://t.me/everestofficial"
        >
          <img src="../assets/images/telegram.png" alt="" width={20} /> Telegram
        </a>
        <a
          style={{
            color: "blue",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          href="https://instagram.com/everest_learning_center?igshid=MDM4ZDc5MmU="
        >
          <img src="../assets/images/instagram.png" alt="" width={20} />{" "}
          Instagram
        </a>
        <a
          style={{
            color: "blue",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
          href="https://youtube.com/@everest_official"
        >
          <img src="../assets/images/youtube.png" alt="" width={20} /> You Tube
        </a>
      </div>
    </>
  );
};

export default About;
