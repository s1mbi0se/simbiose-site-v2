"use client";
import "./styles/style.css";
import TechnologiesCard from "@/app/components/technologiesCard/technologiesCard";
import data from "@/app/data/home.json";
import SectionName from "../global/SectionName/Enterprise";
import Carousel from "nuka-carousel";
import { useContext } from "react";
import MobileObserverContext from "@/app/data/MobileObserverContext";

const TechnologiesSection = () => {
  const TechSectionData = data.home.tecnologias;
  const isMobile = useContext(MobileObserverContext);
  const params = {
    autoplay: false,
    withoutControls: true,
    autoplayInterval: 2000,
    slidesToShow: isMobile ? 1 : 4,
    wrapAround: false,
  };

  return (
    <div className="technologies-section">
      <SectionName name={"Linguagens"} />
      <div className="technologies-section-title-and-subtitle">
        <span className="technologies-section-title">
          {TechSectionData.title}
        </span>
        <span>{TechSectionData.subtitle}</span>
      </div>
      <div className="technologies-cards">
        <Carousel {...params} className="languages-carousel">
          {TechSectionData.cards.map((item, index) => {
            return (
              <TechnologiesCard
                title={item.title}
                icons={item.icons}
                key={index}
              />
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default TechnologiesSection;
