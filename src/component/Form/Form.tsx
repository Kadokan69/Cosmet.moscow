"use client";
import React, { useState } from "react";
import style from "./Form.module.scss";

function Form() {
  const [messengerCheck, setMessengerCheck] = useState(false);
  return (
    <form id="contactForm" className={`${style.form} bg-white p-5 flex flex-col gap-3 rounded-3xl`}>
      <p className="text-center text-lg">Оставьте свои данные, мы свяжемся с вами в ближайшее время</p>
      <div>
        <input type="text" name="name" placeholder="Ваше имя" className="bg-[#f6f6f6] p-2.5 w-full" required />
      </div>

      <div>
        <fieldset className="flex gap-2.5 flex-col md:flex-row">
          <legend>Как удобнее связаться?</legend>
          <div className={`flex gap-1 items-center ${style.customRadio}`}  >
            <input type="radio" id="call" name="contactMethod" value="call" onClick={() => setMessengerCheck(false)} />
            <label htmlFor="call">Позвонить</label>
          </div>
          <div className={`flex gap-1 items-center ${style.customRadio}`}>
            <input
              type="radio"
              id="messenger"
              name="contactMethod"
              value="messenger"
              onClick={() => setMessengerCheck(true)}
            />
            <label htmlFor="messenger">Написать в мессенджер</label>
          </div>
        </fieldset>
      </div>
      {messengerCheck && (
        <div id="messengerChoice">
          <fieldset className="flex gap-2.5 flex-col md:flex-row">
            <legend>Выберите мессенджер</legend>
            <div className={`flex gap-1 items-center ${style.customRadio}`}>
              <input type="radio" id="whatsapp" name="messenger" value="whatsapp" />
              <label htmlFor="whatsapp">WhatsApp</label>
            </div>
            <div className={`flex gap-1 items-center ${style.customRadio}`}>
              <input type="radio" id="telegram" name="messenger" value="telegram" />
              <label htmlFor="telegram">Telegram</label>
            </div>
          </fieldset>
        </div>
      )}

      <div>
        <input
          type="tel"
          name="phone"
          placeholder="+7 (999) 999-99-99"
          className="bg-[#f6f6f6] p-2.5 w-full"
          required
        />
      </div>

      <button type="submit" className="bg-[#807170] text-white p-2.5 rounded">
        Отправить
      </button>
      <p className="text-center text-xs italic">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
        конфиденциальности.
      </p>
    </form>
  );
}

export default Form;
