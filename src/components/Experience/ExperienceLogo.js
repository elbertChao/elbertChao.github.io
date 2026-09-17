import React, { useState } from "react";

function ExperienceLogo({ logo, initials, company }) {
  const [hasError, setHasError] = useState(false);

  if (!logo || hasError) {
    return (
      <div className="experience-logo experience-logo-placeholder" aria-hidden="true">
        {initials}
      </div>
    );
  }

  return (
    <img
      src={logo}
      alt={`${company} logo`}
      className="experience-logo"
      onError={() => setHasError(true)}
    />
  );
}

export default ExperienceLogo;
