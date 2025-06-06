import Banner from "@/component/Banner/Banner";
import Price from "@/component/Price/Price";
import Spoiler from "@/component/Spoiler/Spoiler";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <section className="flex w-full text-2xl text-white">
        <Banner />
      </section>
      <section className="p-10">
        <div className="flex items-center justify-center flex-wrap gap-5 text-[#807170]">
          <article className="flex items-center flex-col p-5 rounded-lg bg-white gap-1.5 min-w-[180]">
            <Image src="/sand-timer.png" alt="время" width={48} height={48} />
            <h5>Время процедуры</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>60 минут</p>
          </article>
          <article className="flex items-center flex-col p-5 rounded-lg bg-white gap-1.5 min-w-[180]">
            <Image src="/calendar.png" alt="время" width={48} height={48} />
            <h5>Курс</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Нет</p>
          </article>
          <article className="flex items-center flex-col p-5 rounded-lg bg-white gap-1.5 min-w-[180]">
            <Image src="/firsaid.png" alt="время" width={48} height={48} />
            <h5>Реабилитация</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Да</p>
          </article>
          <article className="flex items-center flex-col p-5 rounded-lg bg-white gap-1.5 min-w-[180]">
            <Image src="/moviboard.png" alt="время" width={48} height={48} />
            <h5>Видео</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Смотреть</p>
          </article>
        </div>
      </section>
      <section>
        <div className="max-w-[1200px] m-auto p-4">
          <h2 className="text-center">Увеличение и коррекция губ гиалуроновой кислотой</h2>
          <p className="text-center">
            Многие из девушек хоть раз задумывалась об увеличении губ. Увлажненные и пышные губы способны преобразить
            любое лицо, сделать его моложе и добавить женщине уверенности. И тут на помощь придет контурная пластика
            губ, которая проводится с помощью филлеров на основе гиалуроновой кислоты.
          </p>
        </div>
      </section>
      <section>
        <h2 className="text-center">Особенности процедуры</h2>
        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3 max-w-[1200px] m-auto p-4">
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px]">
            <p>
              Интернет так и пестрит неудачными примерами увеличения губ гиалуронкой, что заставляет пациентов
              переживать.
            </p>
            <p>
              В клинике MOLODOST вы можете быть уверены в том, что не станете обладателем «губ-уточек» или «плоского
              банта» — лицо имеет определенные пропорции, которые отвечают стандартам золотого сечения. По ним губы
              должны соотноситься верхняя к нижней как 1:1,6.
            </p>
            <p>
              Мы не стремимся сделать губы одинакового размера — гармония достигается, когда верхняя губа окажется
              меньше нижней. На предварительной консультации врач-косметолог подберет препарат и необходимый объем,
              исходя пожеланий и анатомии лица.
            </p>
            <button className=" rounded-lg bg-[#807170] text-white p-2">Оставить заявку</button>
          </div>
          <div className="relative">
            <Image src="/img_1.jpg" alt="" fill className=" object-cover rounded-2xl " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-3 max-w-[1200px] m-auto p-4">
          <div className="relative order-1 md:order-0">
            <Image src="/img_2.jpg" alt="" fill className=" object-cover rounded-2xl " />
          </div>
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px]">
            <p>
              Интернет так и пестрит неудачными примерами увеличения губ гиалуронкой, что заставляет пациентов
              переживать.
            </p>
            <p>
              В клинике MOLODOST вы можете быть уверены в том, что не станете обладателем «губ-уточек» или «плоского
              банта» — лицо имеет определенные пропорции, которые отвечают стандартам золотого сечения. По ним губы
              должны соотноситься верхняя к нижней как 1:1,6.
            </p>
            <p>
              Мы не стремимся сделать губы одинакового размера — гармония достигается, когда верхняя губа окажется
              меньше нижней. На предварительной консультации врач-косметолог подберет препарат и необходимый объем,
              исходя пожеланий и анатомии лица.
            </p>
            <button className=" rounded-lg bg-[#807170] text-white p-2">Оставить заявку</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center">Показания и противопоказания к процедуре</h2>
        <div className="flex max-w-[1200px] gap-4 m-auto p-4 flex-col md:flex-row">
          <Spoiler title={"Показания"} className="md:flex-1/2 " open={true}>
            <p>
              Увеличение губ назначается в двух случаях: для коррекции возрастных изменений и для эстетической
              коррекции.
            </p>
            <br />
            <p>Процедура подойдет вам, если у вас:</p>
            <ul>
              <li>— от природы тонкие или ассиметричные губы;</li>
              <li>— становятся заметны возрастные изменения;</li>
              <li>— часто наблюдается сухость или шелушение;</li>
              <li>— у губ нет четкого контура;</li>
              <li>— цвет губ недостаточно насыщенный.</li>
            </ul>
          </Spoiler>
          <Spoiler title={"Противопоказания"} className="md:flex-1/2 ">
            <p>К сожалению, увеличить объем губ получится не у всех. Процедура запрещена тем, у кого:</p>
            <ul>
              <li>— имеются онкологические заболевания;</li>
              <li>— наблюдаются приступы эпилепсии;</li>
              <li>— имеются очаги воспаления на губах;</li>
              <li>— период беременности или лактации.</li>
            </ul>
          </Spoiler>
        </div>
      </section>
      <section>
        <h2 className="text-center">Особенности процедуры</h2>
        <div className="grid grid-cols-1  grid-rows-[400px_1fr] md:grid-rows-1 md:grid-cols-2 gap-3 max-w-[1200px] m-auto p-4">
          <div className="relative">
            <Image src="/img_3.jpg" alt="" fill className=" object-cover rounded-2xl object-center " />
          </div>
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px] font-accent">
            <p>Как проходит увеличение губ гиалуроновой кислотой?</p>
            <p>
              Любая процедура в клинике начинается с подготовки — консультации врача-косметолога, на ней он выяснит,
              какой результат вы хотите получить. Затем врач нанесет на губы гель-анестетик и точечно введет в губы
              гиалуроновую кислоту. Вся процедура займет около получаса.
            </p>
            <p>Результат процедуры</p>
            <p>
              Помимо сексуальных и пухлых губ приятным бонусом для обладательницы станет их увлажненность и насыщенность
              цвета. Также контурная пластика губ поднимет уголки рта, которые создают впечатление грустного или
              угрюмого человека. А еще результат можно скорректировать спустя время. И обязательно подготовьтесь к морю
              комплиментов!
            </p>
            <p>Какие препараты используются?</p>
            <p>
              Современные филлеры на основе гиалуроновой кислоты отличаются вязкостью и плотностью. Так, некоторые из
              них используются непосредственно для увеличения губ, другие — для коррекции морщинок, а третьи — для
              увлажнения губ без их увеличения. Врач подберет наиболее подходящий из них индивидуально.
            </p>
            <button className=" rounded-lg bg-[#807170] text-white p-2">Оставить заявку</button>
          </div>
        </div>
      </section>
      <section>
        <h2 className="text-center">Цены на увеличение губ</h2>
        <div className="max-w-[1200px] m-auto p-4">
          <Price />
        </div>
      </section>
    </>
  );
};

export default Home;
