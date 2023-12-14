import PageWrapper from "./components/PageWrapper";
import MainWrapper from "./components/MainWrapper";
import Section from "./components/Section";
import Container from "./components/Container";
import BigButton from "./components/BigButton";
import Image from "next/image";
import git from "@/app/img/githubLink.png";
import NavBar from "./components/NavBar";

export default function Page() {
  return (
    <PageWrapper>
      <MainWrapper>
        <NavBar />
        <Section identifier="hero" className="bg-hero-background px-32 py-40">
          <Container>
            <h1 className="text-center text-6xl antialiased font-semibold text-white">
              A REDE SOCIAL DO SEU CONDOMÍNIO
            </h1>
            <p className="text-3xl font-normal text-center leading-snug text-neutral-400 mt-12">
              Somos mais do que uma simples rede social; Somos a voz coletiva de
              Sobradinho. Nosso objetivo é criar um espaço online, seguro e
              colaborativo, unindo os moradores para compartilharem informações,
              experiências e, mais importante, garantirem a segurança e a
              qualidade de vida em seus condomínios.
            </p>
            <p className="text-3xl font-normal text-center leading-snug text-neutral-400 mt-6">
              Nossa plataforma fornece uma série de ferramentas, com um foco
              principal em registro de ocorrências com o intuito de propor
              melhorias para o condomínio. Isso tudo é feito com a exposição de
              problemas feitas pelos próprios usuários, o que torna todo o
              processo mais eficiente e confiável.
            </p>
          </Container>
        </Section>
        <Section identifier="about" className="bg-tertiaryHomePage px-32 py-40">
          <Container>
            <h2 className="text-3xl font-semibold leading-snug text-center text-textColorHomePage">
            Bem-vindo ao Sobramínios, a plataforma que une e fortalece as
            comunidades de Sobradinho, DF. Essa rede social é dedicada exclusivamente
            aos moradores dos diversos condomínios desta região.
            </h2>
          </Container>
        </Section>
        <Section identifier="users" className="bg-secondaryHomePage py-20">
          <Container>
            <h2 className="text-xl font-medium text-center text-white">
              NOSSO SERVIÇO É UTILIZADO POR
            </h2>
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 gap-16 mt-16">
              <p className="text-5xl leading-snug font-semibold text-white text-center">
                ALTO DA BOA VISTA
              </p>
              <p className="text-5xl leading-snug font-semibold text-white text-center">
                JARDIM EUROPA II
              </p>
              <p className="text-5xl leading-snug font-semibold text-white text-center">
                NOVA COLINA
              </p>
            </div>
          </Container>
        </Section>
        <Section identifier="about" className="bg-tertiaryHomePage px-32 py-40">
          <Container className="flex flex-col items-center">
            <BigButton />
            <div className="flex flex-col lg:flex-row items-center lg:space-x-20 space-y-20 mt-20">
              <h2 className="text-3xl font-semibold lg:text-start text-center leading-snug text-textColorHomePage">
              O desenvolvimento deste sistema web para o registro,
              gerenciamento e análise de ocorrências em uma rede de
              condomínios existentes apenas em Sobradinho-DF é fruto
              de uma avaliação final da matéria “Programação para Web”.
              Este projeto pode ser acessado por inteiro em nosso Github
              clicando na imagem ao lado. 
              </h2>
              <a href="https://github.com/yagoprssantos/Sobraminios">
                <img src={git.src} alt="Company Logo" width={2400} height={2400} />
              </a>
            </div>
          </Container>
        </Section>
      </MainWrapper>
    </PageWrapper>
  );
}
