import Banner from "@/component/Banner/Banner";
import Form from "@/component/Form/Form";
import Price from "@/component/Price/Price";
import Spoiler from "@/component/Spoiler/Spoiler";
import Image from "next/image";
import Portfolio from "@/component/Portfolio/Portfolio";
import { portfolio } from "@/constant/constant";
import ButtomOpenModal from "@/component/ButtonOpenModal/ButtomOpenModal";

const Home = () => {
  return (
    <>
      <section className="flex w-full text-2xl text-white" id="banner">
        <Banner />
      </section>
      <section className="pt-10" id="facts">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-[1200px] m-auto p-4">
          <article className="flex items-center flex-col p-2 lg:p-5 rounded-lg bg-white gap-1.5 min-w-[150] md:min-w-[180]">
            <Image src="/sand-timer.png" alt="время" width={48} height={48} />
            <h5>Время процедуры</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>60 минут</p>
          </article>
          <article className="flex items-center flex-col p-2 lg:p-5 rounded-lg bg-white gap-1.5 min-w-[150] md:min-w-[180]">
            <Image src="/calendar.png" alt="время" width={48} height={48} />
            <h5>Курс</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Нет</p>
          </article>
          <article className="flex items-center flex-col p-2 lg:p-5 rounded-lg bg-white gap-1.5 min-w-[150] md:min-w-[180]">
            <Image src="/firsaid.png" alt="время" width={48} height={48} />
            <h5>Реабилитация</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Да</p>
          </article>
          <article className="flex items-center flex-col p-2 lg:p-5 rounded-lg bg-white gap-1.5 min-w-[150] md:min-w-[180]">
            <Image src="/moviboard.png" alt="время" width={48} height={48} />
            <h5>Видео</h5>
            <Image src="/eyebrow.svg" alt="my-app/public/eyebrow.svg" width={18} height={4} />
            <p>Смотреть</p>
          </article>
        </div>
      </section>
      <section className="pt-10 pb-10" id="welcome">
        <h2 className="text-center">Добро пожаловать в кабинет врача-косметолога</h2>
        <div className="grid grid-cols-1 grid-rows-[550px_1fr] sm:grid-rows-[650px_1fr] md:grid-rows-1 md:grid-cols-2 gap-3 max-w-[1200px] m-auto p-4">
          <div className="relative">
            <Image src="/doc-1.jpg" alt="" fill className=" object-cover rounded-2xl object-center " />
          </div>
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px]">
            <p>
              Меня зовут Даниелян Гаянэ, я практикующий врач-косметолог с более чем 8-летним опытом работы в медицине.
            </p>
            <p>
              Моя философия основана на глубоком убеждении: косметология — это прежде всего медицина, требующая знаний,
              ответственности и безупречного соблюдения стандартов. Каждую процедуру я провожу, руководствуясь ключевыми
              принципами:
            </p>
            <p>1. Абсолютная стерильность и безопасность:</p>
            <p>
              Ваше здоровье — мой приоритет. Я неукоснительно соблюдаю все нормы асептики и антисептики. Обработка
              кабинета, инструментария и зон воздействия проводится по строгим медицинским протоколам. Используются
              только одноразовые расходные материалы и стерилизуемые инструменты. Ваша безопасность гарантирована на
              каждом этапе.
            </p>
            <p>2. Индивидуальный подход:</p>
            <p>
              е бывает двух одинаковых лиц. Я тщательно изучаю ваш анамнез, анатомические особенности и учитываю ваши
              пожелания. На основе этой информации разрабатывается персонализированная программа коррекции, учитывающая
              все нюансы и исключающая шаблонные решения.
            </p>
            <p>3. Только сертифицированные препараты: </p>
            <p>
              Я работаю исключительно с препаратами, имеющими необходимые регистрационные удостоверения Минздрава РФ,
              подтверждающие их безопасность и эффективность. Качество и происхождение используемых средств прозрачны и
              надежны.
            </p>
          </div>
          <div className="text-[18px] md:col-span-2">
            <p>Готовы к преображению?</p>
            <p>
              На этом сайте вы можете подробно ознакомиться с полным перечнем моих услуг, узнать больше о методиках
              инъекционной косметологии и записаться на персональную консультацию.
            </p>
            <p>Вместе мы определим оптимальный путь к вашему сияющему и уверенному образу.</p>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10" id="about-lips">
        <div className="p-4 pb-0 max-w-[1200px] m-auto">
          <h2 className="text-center">Увеличение и коррекция губ гиалуроновой кислотой</h2>
          <p className="text-[18px] mt-2">
            Многие из девушек хоть раз задумывалась об увеличении губ. Желание обладать выразительными, гармоничными и
            ухоженными губами — совершенно естественно. Контурная пластика губ с помощью филлеров на основе гиалуроновой
            кислоты — это современный, эффективный и безопасный метод коррекции, позволяющий достичь желаемого
            результата без операции.
          </p>
        </div>

        <div className="grid grid-cols-1 grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3 max-w-[1200px] m-auto p-4">
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px] min-h-[350]">
            <p>
              Многие откладывают мечту о красивых губах из-за пугающих фото в интернете или историй о неудачной
              контурной пластике.
            </p>
            <p>
              Важно понимать: подобные результаты – чаще всего следствие: отсутствия врачебного подхода, нарушения
              техники, игнорирования индивидуальности.
            </p>
            <p>
              В моей практике приоритеты иные: вы можете быть уверены, что не станете обладателем «утиных губ». Моя цель
              – гармоничный, свежий, естественный вид. &quot;Больше&quot; – не значит &quot;лучше&quot;.
            </p>
          </div>
          <div className="relative">
            <Image src="/pac.jpg" alt="" fill className=" object-cover rounded-2xl " />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 md:grid-rows-1 gap-3 max-w-[1200px] m-auto p-4">
          <div className="relative order-1 md:order-0 min-h-[350]">
            <Image src="/IMG_6058.JPG" alt="" fill className=" object-cover rounded-2xl " />
          </div>
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px]">
            <p>
              На предварительной консультации я подбираю необходимый препарат и объем, исходя из ваших пожеланий и
              анатомии лица.
            </p>
            <p>
              Поэтому не стоит отказываться от мечты из-за чужих негативных примеров. Красивые, здоровые губы – это
              реальность, достижимая благодаря профессионализму и индивидуальному подходу.
            </p>
            <ButtomOpenModal>Записаться на прием</ButtomOpenModal>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10" id="indications">
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
      <section className="pt-10 pb-10" id="features">
        <h2 className="text-center">Особенности процедуры</h2>
        <div className="grid grid-cols-1  grid-rows-[500px_1fr] lg:grid-rows-1 lg:grid-cols-2 gap-3 max-w-[1200px] m-auto p-4">
          <div className="relative">
            <Image src="/IMG_6060.JPG" alt="" fill className=" object-cover rounded-2xl object-center " />
          </div>
          <div className="flex flex-col justify-start gap-6 items-start w-full text-[18px]">
            <p>
              Любая процедура начинается с консультации, на которой я внимательно выслушаю ваши пожелания, мы детально
              обсудим желаемый объем и форму. Я объясню все возможные варианты коррекции, реалистичные ожидания,
              подробно расскажу о процедуре, используемом препарате и возможных ощущениях. Только после полного
              понимания и согласования плана мы переходим к процедуре. Для максимального комфорта применяется
              аппликационная анестезия (крем), после чего с помощью тончайшей иглы я ввожу препарат строго по
              предварительно намеченным точкам в определенные слои тканей. Процедура обычно занимает от 30 до 60 минут.
            </p>
            <p>Какие препараты используются?</p>
            <p>
              Для увеличения губ используются специальные препараты — филлеры, основным компонентом которых является
              стабилизированная гиалуроновая кислота. Это вещество естественным образом присутствует в нашей коже,
              отвечая за увлажнение и объем. Современные филлеры биосовместимы, безопасны и при необходимости могут быть
              растворены с помощью фермента гиалуронидазы.
            </p>
            <p>Препарат подбирается индивидуально непосредственно перед процедурой.</p>
            <ButtomOpenModal>Записаться на прием</ButtomOpenModal>
          </div>
        </div>
      </section>
      <section className="pt-10 pb-10" id="price">
        <h2 className="text-center">Цены на увеличение губ</h2>
        <div className="max-w-[1200px] m-auto p-4">
          <Price />
        </div>
      </section>
      <section className="pt-10 pb-10" id="portfolio">
        <h2 className="text-center">Увеличение губ: фото До и После</h2>
        <p className="text-center">На фото представлены результаты до и после контурной пластики губ.</p>
        <Portfolio data={portfolio} />
      </section>
      <section className="pt-10 pb-10" id="contact">
        <div className="max-w-[1200px] m-auto p-4 flex flex-col md:flex-row gap-4 ">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3>Записаться на консультацию</h3>
            <p>Консультация бесплатная. Скидка 10% на первое посещение.</p>
          </div>
          <div className="w-full md:w-1/2 p-3 md:p-0 ">
            <Form id="page-form"/>
          </div>
        </div>
      </section>
      <section>
        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9c38b30556909274b9a907e18ec696a735af57eced15ecd9965e4c46b475a422&amp;source=constructor"
            width="100%"
            height="400"
          ></iframe>
        </div>
      </section>
    </>
  );
};

export default Home;
