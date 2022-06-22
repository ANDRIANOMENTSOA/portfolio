import Title from "../shared/Title";
import logoAngular from "../src/assets/image/angular.jpg";

function Reference() {
  return (
    <div className="reference">
      <Title title="Reference" />
      <div className="row">
        <div className="card cardReference">
          <a href="https://dev.aime.heruko.app">Shop</a>
          <img src={logoAngular} alt=""></img>
        </div>
      </div>
    </div>
  );
}
export default Reference;
