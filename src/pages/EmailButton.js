import React from "react";

const EmailButton = ({ email }) => {
  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <button onClick={handleEmailClick}>Send Email</button>
  );
};

export default EmailButton;
