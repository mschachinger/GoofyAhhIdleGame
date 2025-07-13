import React, { useContext, useState } from "react";

function UnitProgressBar() {
  const [unitXP, setUnitXP] = useState(5);
  const [unitAmount, setUnitAmount] = useState(2);
  const progressBarWidth = (unitXP / unitAmount) * 100;

  return (
    <>
      <div
        style={{
          backgroundColor: "red",
          width: "{progressBarWidth}%",
          height: "20px",
          borderRadius: "10px",
        }}
      ></div>
    </>
  );
}

export default UnitProgressBar;
