import Title from "../shared/Title";
import logoMysql from "../assets/image/mysql.png";
import logoNode from "../assets/image/node.PNG";
import logoBootstrap from "../assets/image/bootstrap.jpg";
import logoGit from "../assets/image/git.png";
import logoHtmlCss from "../assets/image/htmlCss.PNG";
import logoJs from "../assets/image/js.png";
import logoLoopback from "../assets/image/loopback.jpg";
import logoMongoDd from "../assets/image/mongoDB.png";
import logoReact from "../assets/image/logo512.png";
import logoMaterial from "../assets/image/material.png";
import logoAngular from "../assets/image/angular.jpg";
import logoTs from "../assets/image/logoTs.png";

function CardConnaisance({ logoTechno }) {
  return (
    <div className="col-md-2 col-sm-6 col-xs-12 col text-center">
      <div className="cardConnaisance">
        <img src={logoTechno} alt=""></img>
      </div>
    </div>
  );
}

function Connaisance() {
  return (
    <>
      <Title title="Connaisance" />
      <div className="row">
        <CardConnaisance logoTechno={logoHtmlCss} />
        <CardConnaisance logoTechno={logoMaterial} />
        <CardConnaisance logoTechno={logoBootstrap} />
        <CardConnaisance logoTechno={logoJs} />
        <CardConnaisance logoTechno={logoAngular} />
        <CardConnaisance logoTechno={logoReact} />
        <CardConnaisance logoTechno={logoLoopback} />
        <CardConnaisance logoTechno={logoNode} />
        <CardConnaisance logoTechno={logoMysql} />
        <CardConnaisance logoTechno={logoMongoDd} />
        <CardConnaisance logoTechno={logoGit} />
        <CardConnaisance logoTechno={logoTs} />
      </div>
    </>
  );
}

export default Connaisance;
