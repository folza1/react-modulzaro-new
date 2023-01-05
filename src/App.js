import "./App.css";
import cart from "./cart.jpg";

var data = require("./data.json");

function ListItem() {
  return (
    <>
      {data.map((obj) => (
        <div className="divStyle" key={obj.id}>
          <div
            id="thumbNail"
            style={{ backgroundImage: `url(${obj.thumbnail})` }}
          ></div>
          <div id="product">
            <div id="title">
              <p>{obj.title}</p>
            </div>
            <div id="price">
              <p>${obj.price}</p>
            </div>
            <div
              id="cart"
              style={{
                backgroundImage: `url(${cart})`,
              }}
            ></div>
          </div>
          <div id="reszletek">
            <button id="buttonDetails">Részletek</button>
          </div>
        </div>
      ))}
    </>
  );
}

function DetailsBox() {
  return (
    <>
      {data.map((details) => (
        <div id="window" key={details.id}>
          <div className="details">
            <div>{details.title}</div>
            <div>{details.description}</div>
            <div>${details.price}</div>
            <div>Discount: ${details.discountPercentage}</div>
          </div>
          <div className="close">Bezárás</div>
        </div>
      ))}
    </>
  );
}

function App() {
  return (
    <div id="main">
      <ListItem />
      <DetailsBox />
    </div>
  );
}

export default App;
