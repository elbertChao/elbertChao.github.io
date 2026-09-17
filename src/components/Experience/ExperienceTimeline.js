import React, { useState } from "react";
import { ImPointRight } from "react-icons/im";
import ExperienceLogo from "./ExperienceLogo";
import {
  getDateRangeLabel,
  getDurationLabel,
  getTimelinePosition,
  TIMELINE_END,
  TIMELINE_START,
} from "../../data/experience";

const AXIS_LABELS = [
  { year: 2024, month: 10, label: "Oct '24" },
  { year: 2025, month: 1, label: "2025" },
  { year: 2025, month: 6, label: "Jun" },
  { year: 2026, month: 1, label: "2026" },
  { year: 2026, month: 9, label: "Now" },
];

function ExperienceTimeline({ experiences }) {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpanded = (id) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div className="experience-timeline">
      <div className="experience-timeline-axis" aria-hidden="true">
        <div className="experience-timeline-axis-labels">
          {AXIS_LABELS.map((point) => (
            <span key={`${point.year}-${point.month}`}>{point.label}</span>
          ))}
        </div>
        <div className="experience-timeline-axis-track">
          <span className="experience-timeline-axis-line" />
        </div>
      </div>

      {experiences.map((experience, index) => {
        const isExpanded = expandedId === experience.id;
        const position = getTimelinePosition(experience);
        const dateRange = getDateRangeLabel(experience);
        const duration = getDurationLabel(experience);

        return (
          <article
            key={experience.id}
            className={`experience-timeline-item ${isExpanded ? "is-expanded" : ""}`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="experience-timeline-marker" aria-hidden="true">
              <span className="experience-timeline-dot" />
            </div>

            <div
              className="experience-card"
              onClick={() => toggleExpanded(experience.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  toggleExpanded(experience.id);
                }
              }}
              role="button"
              tabIndex={0}
              aria-expanded={isExpanded}
            >
              <div className="experience-duration-track" aria-hidden="true">
                <span
                  className="experience-duration-bar"
                  style={{ left: `${position.left}%`, width: `${position.width}%` }}
                />
              </div>

              <div className="experience-card-header">
                <div className="experience-card-top">
                  <ExperienceLogo
                    logo={experience.logo}
                    initials={experience.logoInitials}
                    company={experience.company}
                  />

                  <div className="experience-card-title-block">
                    <div className="experience-card-meta">
                      <span className="experience-date-range">{dateRange}</span>
                      <span className="experience-duration">{duration}</span>
                      {experience.isCurrent && (
                        <span className="experience-current-badge">Current</span>
                      )}
                    </div>
                    <h3 className="experience-company">{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                    <p className="experience-location">{experience.location}</p>
                  </div>
                </div>

                <div className="experience-tech-stack">
                  {experience.techStack.map((tech) => (
                    <span key={tech} className="experience-tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="experience-hover-hint">
                  {isExpanded ? "Highlights" : "Hover or tap to view highlights"}
                </p>
              </div>

              <div className="experience-card-details">
                <ul className="experience-highlights">
                  {experience.highlights.map((highlight) => (
                    <li key={highlight}>
                      <ImPointRight className="experience-highlight-icon" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}

      <p className="experience-timeline-footnote">
        Timeline spans {TIMELINE_START.month === 10 ? "Oct" : TIMELINE_START.month}{" "}
        {TIMELINE_START.year} through present ({TIMELINE_END.month === 9 ? "Sep" : TIMELINE_END.month}{" "}
        {TIMELINE_END.year}).
      </p>
    </div>
  );
}

export default ExperienceTimeline;
