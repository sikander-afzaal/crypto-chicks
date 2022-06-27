import React from "react";
import "./Mint.css";
// import bg from "../../Assets/mint.gif";
import { Link } from "react-router-dom";
function Mint() {
  return (
    <div className="mint">
      {/* <img src={bg} alt="" /> */}
      <Link to={"/main"}>
        <button>Connect Wallet</button>
      </Link>
    </div>
  );
}

export default Mint;
