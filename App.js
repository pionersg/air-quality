import React from 'react';
import logo from './logo.svg';
import './App.scss';
import HeroBlock from "./components/HeroBlock/HeroBlock";
import Facts from "./components/Facts/Facts";
import AirQuality from "./components/AirQuality/AirQuality";
import SectorLists from "./components/SectorLists/SectorList";
import Footer from "./components/Footer/Footer";
import gcLogo from "./assets/GC_logo.svg";
import itnLogo from "./assets/ITN_logo.svg";
import shidLogo from "./assets/shid_emozhl_logo.svg"; 

function App() {
  const partners = [
    shidLogo,
    itnLogo,
    gcLogo
     ]

     const navLinks = [
       {
         title: "Основные факты",
         href: "#facts"
       },
       {
        title: "Индекс качества воздуха",
        href: "#index"
      },
      {
        title: "Политика по уменьшению загрязнений",
        href: "#policy"
      }
     ]

     const factSlides = [
       {
         id: '1332',
         imgUrl: require("./assets/facts-slider/slide-1.jpg"),
         desc: 'Женщины и дети – главные жертвы загрязнения воздуха',
       },
       {
        id: '1333',
        imgUrl: require("./assets/facts-slider/slide-2.jpg"),
        desc: 'Защитники окружающей среды подвергаются преследованиям',
      },
      {
        id: '1334',
        imgUrl: require("./assets/facts-slider/slide-3.jpg"),
        desc: 'Загрязнение воздуха – нарушение прав человека',
      },
      {
        id: '1335',
        imgUrl: require("./assets/facts-slider/slide-4.jpg"),
        desc: '4,2 миллиона случаев преждевременной смерти людей из-за загрязнения атмосферного воздуха',
      },
      {
        id: '1336',
        imgUrl: require("./assets/facts-slider/slide-5.jpg"),
        desc: 'Согласно оценкам, суммарный объем затрат в связи с загрязнением воздуха превышает 5 трлн долл. в год.',
      },
     ]
     
     const sectors = [
       {
         name: "Промышленность",
         description: "Чистые технологии, способствующие уменьшению выбросов из промышленных дымовых труб; улучшенная утилизация городских и сельскохозяйственных отходов, включая каптаж (улавливание) метана, выделяемого в местах утилизации отходов, в качестве варианта, альтернативного сжиганию (для использования в качестве биогаза)",
         imgUrl: require("./assets/sectors/industry.jpg")         
        },
        {
          name: "Транспорт",
          description: "Переход к чистым способам выработки энергии; уделение приоритетного внимания скоростному городскому транспорту, пешеходным и велосипедным сетям в городах, а также железнодорожным междугородным грузовым и пассажирским перевозкам; переход к использованию более чистых большегрузных дизельных транспортных средств и автомобилей с низким уровнем выбросов, а также более чистых видов топлива, включая топливо со сниженной концентрацией серы",
          imgUrl: require("./assets/sectors/transport.jpg")            
         },
         {
          name: "Городское планирование",
          description: "Улучшение энергетической эффективности зданий и обеспечение более зеленых и компактных и тем самым более энергоэффективных городов",
          imgUrl: require("./assets/sectors/cityes.jpg")             
         },
         {
          name: "Энергия",
          description: "Обеспечение доступа к недорогостоящим источникам энергии в быту для приготовления пищи, отопления и освещения",
          imgUrl: require("./assets/sectors/energy.jpg")             
         },
         {
          name: "Энергетика",
          description: " Более широкое использование видов топлива с низким уровнем выбросов и возобновляемых источников энергии, не основанных на сжигании (таких как энергия солнца, ветра или гидроэнергия); комбинированная выработка тепла и энергии; и распределенная выработка энергии (например, энергетические минисистемы и размещаемые на крыше установки для выработки энергии из солнечной энергии)",
          imgUrl: require("./assets/sectors/energetics.jpg")             
         },
         {
          name: "Утилизация отходов",
          description: "Cтратегии уменьшения отходов, сортировки отходов, рециклирования, повторного использования или переработки отходов; а также улучшенные методы биологической утилизации отходов, такие как анаэробная переработка отходов для производства биогаза, являются практически осуществимыми, недорогими альтернативными вариантами открытому сжиганию твердых отходов",
          imgUrl: require("./assets/sectors/rubbish.jpg")             
         },

     ]

     const author = "Владимиром Метёлкиным";
     const design = "Валерией Бубырь";
  
     return (
    <>
      <HeroBlock title="Качество атмосферного воздуха и здоровье" 
      logos={partners} 
      links={navLinks}/>

      <Facts title="Основые факты"slides={factSlides}/>
      <AirQuality />
      <SectorLists 
            title="Политика по уменьшению загрязнений" 
            subtitle="Для того чтобы узнать уровень загрязнения атмосферного воздуха (качество воздуха) в городе Киев, необходимо выбрать соответствующую станцию мониторинга на карте выше."
            items={sectors}
            />
            

            <Footer links={navLinks} partners={partners} author={author} design={design} />
            
    </>
  );
}

export default App;
