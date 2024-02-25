import Clock from "@/assets/icons/Clock.svg";
import Certificate from "@/assets/icons/Certificate.svg";
import Lightbulb from "@/assets/icons/Lightbulb.svg";

const cards = [
  {
    id: 0,
    title: "Сжатые сроки",
    icons: Clock,
    text: "Обработка стекла и изготовление продукции осуществляется в максимально сжатые сроки",
  },
  {
    id: 1,
    title: "Соблюдение Госта",
    icons: Certificate,
    text: "Все работы производятся с соблюдением норм и требований государственных стандартов",
  },
  {
    id: 2,
    title: "Творческий подход",
    icons: Lightbulb,
    text: "Продукция из стекла производится по индивидуально разработанным проектам, либо по эскизам, предоставленным клиентом",
  },
];

const description = [
  {
    id: 0,
    text: "Если любимое дело приносит радость и отличный результат, этим хочется делиться со всеми вокруг. Наша команда всем своим составом хочет, чтобы у каждого потенциального клиента была возможность оценить результаты трудов специалистов.",
  },
  {
    id: 1,
    text: "Мы постоянно работаем над заказами своих клиентов, производя уникальные изделия гнутого моллированого стекла. Наши работы отображают ответственный подход и профессионализм мастеров. Изделия, заказанные в нашей компании используют для оформления частных домов, элитных торговых залов, лучших салонов красоты.",
  },
  {
    id: 2,
    text: "За многолетний опыт работы мы не только довели до совершенства технологию моллирования стекла, но и разработали собственные технологии по гнутью огнеупорного керамического стекла, создали универсальную печь для моллирования, разработали систему сферического гнутья и создали собственное оборудование для химической закалки и гравитационного молирования.",
  },
];

export { cards, description }