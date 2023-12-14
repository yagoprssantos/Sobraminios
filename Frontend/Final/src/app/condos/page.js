import React from "react";
import PageWrapper from "../components/PageWrapper";
import MainWrapper from "../components/MainWrapper";
import Section from "../components/Section";
import Container from "../components/Container";
import { BestCondo } from "../components/BestCondo";
import NavBar from "../components/NavBar";

const TopCondoSection = ({ title }) => (
  <div className="flex justify-center flex-col gap-12">
    <h2 className="text-center text-5xl text-white font-semibold leading-tight drop-shadow-lg">
      {title}
    </h2>
    <BestCondo />
  </div>
);

export default function Page() {
  const top3Condominios = [
    "TOP 3 MELHORES SOBRAMÍNIOS",
    "TOP 3 SOBRAMÍNIOS MAIS SEGUROS",
    "TOP 3 SOBRAMÍNIOS MAIS ATIVOS",
  ];

  return (
    <PageWrapper>
      <MainWrapper>
        <NavBar />
        <Section
          identifier="Melhores Condominios"
          className="bg-tertiaryHomePage px-32 py-40"
        >
          <Container>
            <h3 className="text-3xl font-semibold text-center leading-snug text-textColorHomePage">
              Bem-vindo ao Sobramínios, a plataforma que une e fortalece as
              comunidades de Sobradinho, DF. Essa rede social é dedicada
              exclusivamente aos moradores dos diversos condomínios desta
              região.
            </h3>
            <div className="flex flex-col gap-40 mt-20">
              {top3Condominios.map((title, index) => (
                <TopCondoSection key={index} title={title} />
              ))}
            </div>
          </Container>
        </Section>
      </MainWrapper>
    </PageWrapper>
  );
}
