import React from "react";
import { Link } from "react-router-dom";
import useTitle from "../../Hooks/UseTitle";

const TermsCondition = () => {
  useTitle("Terms");
  return (
    <div>
      <h3>Here is our Terms and COnditions</h3>
      <p>
        Go back to :<Link to="/signup">Registration</Link>
      </p>
    </div>
  );
};

export default TermsCondition;
