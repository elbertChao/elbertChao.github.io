import React, { useState } from "react";
import { ImPointRight } from "react-icons/im";
import { IoChevronDown } from "react-icons/io5";
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
  const [expandedIds, setExpandedIds] = useState(() => new Set());

  const toggleExpanded = (id) => {
    setExpandedIds((current) => {
      const next = new Set(current);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedIds(new Set(experiences.map((experience) => experience.id)));
  };

  const collapseAll = () => {
    setExpandedIds(new Set());
  };

  const allExpanded = expandedIds.size === experiences.length;
  const hasExpanded = expandedIds.size > 0;

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

      <div className="experience-timeline-controls">
        <p className="experience-interaction-hint">
          Click <strong>View highlights</strong> on any role to keep details open. You can open
          multiple panels at once.
        </p>
        <div className="experience-timeline-actions">
          <button
            type="button"
            className="experience-action-btn"
            onClick={expandAll}
            disabled={allExpanded}
            aria-label="Expand all experience panels"
          >
            Expand all
          </button>
          <button
            type="button"
            className="experience-action-btn experience-action-btn-secondary"
            onClick={collapseAll}
            disabled={!hasExpanded}
            aria-label="Collapse all experience panels"
          >
            Collapse all
          </button>
        </div>
      </div>

      {experiences.map((experience, index) => {
        const isExpanded = expandedIds.has(experience.id);
        const position = getTimelinePosition(experience);
        const dateRange = getDateRangeLabel(experience);
        const duration = getDurationLabel(experience);
        const detailsId = `experience-details-${experience.id}`;

        return (
          <article
            key={experience.id}
            className={`experience-timeline-item ${isExpanded ? "is-expanded" : ""}`}
            style={{ animationDelay: `${index * 0.12}s` }}
          >
            <div className="experience-timeline-marker" aria-hidden="true">
              <span className="experience-timeline-dot" />
            </div>

            <div className="experience-card">
              <div className="experience-duration-track" aria-hidden="true">
                <span
                  className="experience-duration-bar"
                  style={{ left: `${position.left}%`, width: `${position.width}%` }}
                />
              </div>

              <div className="experience-card-header experience-card-split">
                <div className="experience-card-logo-panel">
                  <ExperienceLogo
                    logo={experience.logo}
                    initials={experience.logoInitials}
                    company={experience.company}
                  />
                </div>

                <div className="experience-card-content">
                  <div className="experience-card-title-block">
                    <div className="experience-card-meta">
                      <span className="experience-date-range">{dateRange}</span>
                      <span className="experience-duration">{duration}</span>
                      {experience.isCurrent && (
                        <span className="experience-current-badge">Current</span>
                      )}
                      {isExpanded && (
                        <span className="experience-open-badge">Open</span>
                      )}
                    </div>
                    <h3 className="experience-company">{experience.company}</h3>
                    <p className="experience-role">{experience.role}</p>
                    <p className="experience-location">{experience.location}</p>
                  </div>

                  <div className="experience-tech-stack">
                    {experience.techStack.map((tech) => (
                      <span key={tech} className="experience-tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                className="experience-expand-trigger"
                onClick={() => toggleExpanded(experience.id)}
                aria-expanded={isExpanded}
                aria-controls={detailsId}
              >
                <span className="experience-expand-trigger-label">
                  {isExpanded ? "Hide highlights" : "View highlights"}
                </span>
                <IoChevronDown
                  className={`experience-expand-icon ${isExpanded ? "is-open" : ""}`}
                  aria-hidden="true"
                />
              </button>

              <div id={detailsId} className="experience-card-details">
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
