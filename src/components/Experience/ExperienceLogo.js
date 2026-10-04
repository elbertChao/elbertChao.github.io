import React, { useState } from "react";

function ExperienceLogo({ logo, initials, company, className = "" }) {
  const [hasError, setHasError] = useState(false);

  const content =
    !logo || hasError ? (
      <div className={`experience-logo experience-logo-placeholder ${className}`.trim()} aria-hidden="true">
        {initials}
      </div>
    ) : (
      <img
        src={logo}
        alt={`${company} logo`}
        className={`experience-logo ${className}`.trim()}
        loading="lazy"
        decoding="async"
        onError={() => setHasError(true)}
      />
    );

  return <div className="experience-logo-wrap">{content}</div>;
}

export default ExperienceLogo;
