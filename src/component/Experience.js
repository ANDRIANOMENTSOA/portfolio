import Title from "../shared/Title";
import logoWaouh from "../assets/image/waouh.png";
import logoZomatel from "../assets/image/zomatel.jpg";
import logoErgoMada from "../assets/image/ergo.PNG";
import logoSymphony from "../assets/image/symphony.png";

function CardExperience({ logoSociety, titre, annee }) {
  return (
    <div className="col-md-3 col-sm-6">
      <div className="card">
        <img src={logoSociety} alt=""></img>
        <p>{titre}</p>
        <p>{annee}</p>
      </div>
    </div>
  );
}

function Experience() {
  return (
    <>
      <Title title="Experience" />
      <div className="row ">
        <CardExperience
          logoSociety={logoErgoMada}
          titre="Développeur web"
          annee="2020 - En cours"
        />
        <CardExperience
          logoSociety={logoSymphony}
          titre="Développeur web"
          annee="1 ans"
        />
        <CardExperience
          logoSociety={logoWaouh}
          titre="Développeur web"
          annee="7 mois"
        />
        <CardExperience
          logoSociety={logoZomatel}
          titre="Responsable Informatique"
          annee="3 ans"
        />
      </div>
    </>
  );
}
export default Experience;
