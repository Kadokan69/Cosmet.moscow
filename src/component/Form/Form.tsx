"use client";
import React, { useState } from "react";
import style from "./Form.module.scss";
import { setTimeout } from "timers";

interface IFormProps {
  id?: string;
}

function Form(props: IFormProps) {
  const [messengerCheck, setMessengerCheck] = useState(false);
  const [selectedMessenger, setSelectedMessenger] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [status, setSatatus] = useState(false);

  const formPrefix = props.id ? `${props.id}-` : "";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContactMethodChange = (isMessenger: boolean) => {
    setMessengerCheck(isMessenger);
    if (!isMessenger) {
      setSelectedMessenger("");
    }
  };

  const handleMessengerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedMessenger(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const submissionData = {
      ...formData,
      contactMethod: messengerCheck ? "messenger" : "call",
      messenger: messengerCheck ? selectedMessenger : null,
    };

    try {
      const response = await fetch("api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      });
      const result = await response.json();
      if (result.success) {
        setSatatus(true);
        setTimeout(() => {
          setSatatus(false);
        }, 2000);
      }

      setFormData({ name: "", phone: "" });
      setMessengerCheck(false);
      setSelectedMessenger("");
    } catch {}
  };

  return (
    <form
      onSubmit={handleSubmit}
      {...(props.id && { id: props.id })}
      className={`${style.form} bg-white p-5 flex flex-col gap-3 rounded-3xl text-[#5e452e]`}
    >
      <p className="text-center text-lg">Оставьте свои данные, мы свяжемся с вами в ближайшее время</p>

      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Ваше имя"
          className="bg-[#f6f6f6] p-2.5 w-full"
          required
        />
      </div>

      <div>
        <fieldset className="flex gap-2.5 flex-col md:flex-row">
          <legend>Как удобнее связаться?</legend>
          <div className={`flex gap-1 items-center ${style.customRadio}`}>
            <input
              type="radio"
              id={`${formPrefix}call`}
              name="contactMethod"
              value="call"
              onChange={() => handleContactMethodChange(false)}
              checked={!messengerCheck}
            />
            <label htmlFor={`${formPrefix}call`}>Позвонить</label>
          </div>
          <div className={`flex gap-1 items-center ${style.customRadio}`}>
            <input
              type="radio"
              id={`${formPrefix}messenger`}
              name="contactMethod"
              value="messenger"
              onChange={() => handleContactMethodChange(true)}
              checked={messengerCheck}
            />
            <label htmlFor={`${formPrefix}messenger`}>Написать в мессенджер</label>
          </div>
        </fieldset>
      </div>

      {messengerCheck && (
        <div id="messengerChoice">
          <fieldset className="flex gap-2.5 flex-col md:flex-row">
            <legend>Выберите мессенджер</legend>
            <div className={`flex gap-1 items-center ${style.customRadio}`}>
              <input
                type="radio"
                id={`${formPrefix}whatsapp`}
                name="messenger"
                value="whatsapp"
                onChange={handleMessengerChange}
                checked={selectedMessenger === "whatsapp"}
              />
              <label htmlFor={`${formPrefix}whatsapp`}>WhatsApp</label>
            </div>
            <div className={`flex gap-1 items-center ${style.customRadio}`}>
              <input
                type="radio"
                id={`${formPrefix}telegram`}
                name="messenger"
                value="telegram"
                onChange={handleMessengerChange}
                checked={selectedMessenger === "telegram"}
              />
              <label htmlFor={`${formPrefix}telegram`}>Telegram</label>
            </div>
          </fieldset>
        </div>
      )}

      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          placeholder="+7 (999) 999-99-99"
          className="bg-[#f6f6f6] p-2.5 w-full"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-[#807170] text-white p-2.5 rounded"
        disabled={messengerCheck && !selectedMessenger}
      >
        Отправить
      </button>

      <p className="text-center text-xs italic">
        Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь c политикой
        конфиденциальности.
      </p>

      <div
        className={`
        fixed top-[50%] left-[50%] p-5 bg-green-500 text-white rounded-lg shadow-lg
        transition-all duration-500 ease-in-out transform translate-[-50%]
        ${status ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[-100%] pointer-events-none"}
      `}
      >
        ✅ Сообщение успешно отправлено!
      </div>
    </form>
  );
}

export default Form;
