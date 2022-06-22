import andry from "../assets/image/andry.PNG";

function MyInfo() {
  return (
    <div className="header">
      <div className="container information">
        <h2>Aimé Joseph ANDRIANOMENTSOA</h2>
        <p>Développeur Web</p>
        <img src={andry} alt=""></img>
      </div>
    </div>
  );
}
export default MyInfo;
