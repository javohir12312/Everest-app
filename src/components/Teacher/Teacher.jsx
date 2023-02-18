import React from 'react';
import "./Teacher.scss"
import Ramatov_Abror from "../image/Ramatov_Abror.jpg"

const Teacher = () => {
  return (
    <div className='teacher'>
      <ul className='teacher__list'>
        <li>
          <span>Ism:</span>
          <strong>Abror</strong>
        </li>
        <li>
          <span>Familiya:</span>
          <strong>Ramatov</strong>
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
            <a href="https://t.me/Abror_Rahmatov" target={"_blank"}>Abror_Rahmatov</a>
          </strong>
        </li>
        <li>
          <span>Instagram manzil:</span>
          <strong>
            <a href="https://www.instagram.com/abror_rakhmatov/" target={"_blank"}>Abror_Rakhmatov</a>
          </strong>
        </li>
        <li>
          <span>Ish manzil:</span>
          <strong>
            <a href="https://maps.apple.com/maps?ll=41.321227442709215,69.24688592267167&q=41.321227442709215,69.24688592267167&t=m" target={"_blank"}>Everest Academy</a>
          </strong>
        </li>
        <li>
          <span>Telegram manzil:</span>
          <strong>
            <a href="https://t.me/everestofficial" target={"_blank"}>Everestofficial</a>
          </strong>
        </li>
        <li>
          <span>Instagram manzil:</span>
          <strong>
            <a href="https://www.instagram.com/everest_learning_center/" target={"_blank"}>Everest_learning_center</a>
          </strong>
        </li>
      </ul>
      <img className='teacher__image' src={Ramatov_Abror} width={300} height={300} alt="Ramatov Abror image" />
    </div>
  );
}

export default Teacher;
