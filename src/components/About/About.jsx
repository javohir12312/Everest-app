import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./About.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const About = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-evenly"}}>
      <div style={{width: "50%"}}>
        <h2 style={{fontSize: 22, marginTop: 0, marginBottom: 30}}>
          <strong>EVEREST ALISHER NAVOIYDA MATEMATIKANI QIYVORADIGAN USTOZ HAM BOR :)!</strong>
        </h2>

        <p style={{fontSize: 18}}><strong>TANISHING - MATEMATIKA USTOZIMIZ - ABROR RAHMATOV:</strong></p>

        <p style={{fontSize: 17}}>- Buxoro viloyati, Qorako'l tumanida tavallud topgan;</p>

        <p style={{fontSize: 17}}>
          - QORAKO'L FIZIKA-MATEMATIKA MAKTABI KEYINCHALIK LITSEYI BITIRUVCHISI;
        </p>

        <p style={{fontSize: 17}}>
          - Uzoq muddatli o'qituvchilik tajribasiga ega va shu kungacha 1000dan
          ziyod abituriyenti mamlakatimiz Oliy O'quv Yurtlariga kirishga
          muvaffaq bo'lgan;
        </p>

        <p style={{fontSize: 17}}>
          - Ham o'zbek ham rus tillarida bemalol dars o'tish qobiliyatiga ega;
        </p>

        <p style={{fontSize: 17}}>
          - Xalqaro oliy o'quv yurtlari - WIUT, INHA va TURIN POLITEXNIKA
          universitetlariga alohida guruhlarda dars o'tadi va shu kungacha
          yuzlab talabalari ushbu o'quv yurtlari talabasi bo'lgan;
        </p>

        <p style={{fontSize: 17}}>
          - O'z ishining haqiqiy ustasi, o'quvchining natijasi uchun yurakdan
          kurashadigan qattiqqo'l pedagog;
        </p>
        <p style={{fontSize: 17}}>Qadrli EVERESTERLAR - ham xozirgi ham bo'lajak talabalarimiz!</p>

        <p style={{fontSize: 17}}>
          QORAKO'L FIZIKA VA MATEMATIKA MAKTABI, undagi metodika va fanni
          o'rgatishga bo'lgan munosabat haqida ortiqcha gapirib o'tirishni
          hojati yo'q, menimcha!
        </p>

        <p style={{fontSize: 17}}>
          ABROR RAHMATOV to'liqligicha ham uslub ham qattiqqo'llik jihatidan
          to'liq QORAKO'L uslubida dars o'tadigan MATEMATIKA ustozimiz!
        </p>

        <p style={{fontSize: 17}}>
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
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
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
        <SwiperSlide>
          <img
            style={{ width: "100%", height: "100%" }}
            src={"../../assets/images/Ramatov_Abror.jpg"}
            width={450}
            height={300}
            alt="image"
          />
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </div>
  );
};

export default About;
