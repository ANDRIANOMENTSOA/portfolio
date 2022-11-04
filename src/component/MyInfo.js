import andry from "../assets/image/andry.PNG";

function MyInfo() {
  return (
    <div className="header">
      <div className="container information">
        <h2 className="animate__animated animate__bounceIn">
          Aimé Joseph ANDRIANOMENTSOA
        </h2>
        <p className="animate__animated animate__fadeInUp">Développeur Web</p>
        <img src={andry} alt=""></img>
      </div>
    </div>
  );
}
export default MyInfo;
