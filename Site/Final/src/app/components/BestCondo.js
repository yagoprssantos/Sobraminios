import React from "react";

const ImageCard = ({ src, alt }) => (
  <div className="bg-neutral-400 rounded-xl">
    <img
      src={src}
      alt={alt}
      width={100}
      height={100}
      priority
      className="w-full h-full object-cover"
    />
  </div>
);

export function BestCondo() {
  const images = [
    {
      src: "https://www.rivaincorporadora.com.br/wp-content/uploads/2023/07/Guarita-Alto-do-Horizonte-Riva.jpg?x97331",
      alt: "Condominio",
    },
    {
      src: "https://jornaldesobradinho.com.br/wp-content/uploads/2020/08/Condominio-RK.jpg",
      alt: "Condominio",
    },
    {
      src: "https://2.bp.blogspot.com/-IgBGUIkHXQI/WS7zBBmGTiI/AAAAAAAARMM/syPMi_fTzRM1a_n6a5DwVDGQKrCJguBdgCLcB/s1600/unnamed%2B%25281%2529.png",
      alt: "Condominio",
    },
  ];

  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-rows-1 sm:grid-rows-2 grid-rows-3 gap-10">
      {images.map((image, index) => (
        <ImageCard key={index} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}
