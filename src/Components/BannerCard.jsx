import "./bannerCard.css";

const BannerCard = (props) => {
//props se refere ao conteudo declarado no app dentro de <BannerCard />
  return (
    <div className="banner">
      <h1>{props.titulo}</h1>
      <h2>{props.subTitulo}</h2>
    </div>
  );
};
export default BannerCard;
