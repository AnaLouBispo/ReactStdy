import "./card.css";

const Card = () => {
  const cardDatas = [
    {
      titulo: "Card 1",
      description: "Este é o primeiro card",
      link: "#",
    },
    {
      titulo: "Card 2",
      description: "Este é o segundo card",
      link: "#",
    },
    {
        titulo: "Card 3",
        description: "Este é o terceiro card",
        link: "#",
      },
    {
        titulo: "Card 4",
        description: "Este é o quarto card",
        link: "#",
      },
    
  ];

  console.log(cardDatas);

  return (
    <div className="card-container">
      {cardDatas.map((card, index) => {
        return(
        <div className="card" key={index}>
          <h2>{card.titulo}</h2>
          <p>{card.description}</p>
          <a href={card.link}>Veja aqui</a>
        </div>

        )
        
    })}
    </div>
  );
};

export default Card;
