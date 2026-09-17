import React, { useState } from "react";

function ExperienceLogo({ logo, initials, company }) {
  const [hasError, setHasError] = useState(false);

  const content =
    !logo || hasError ? (
      <div className="experience-logo experience-logo-placeholder" aria-hidden="true">
        {initials}
      </div>
    ) : (
      <img
        src={logo}
        alt={`${company} logo`}
        className="experience-logo"
        onError={() => setHasError(true)}
      />
    );

  return <div className="experience-logo-wrap">{content}</div>;
}

export default ExperienceLogo;
