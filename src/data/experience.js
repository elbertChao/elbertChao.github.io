const experiences = [
  {
    id: "pinterest",
    company: "Pinterest",
    role: "Machine Learning Intern, User Understanding",
    location: "San Francisco, CA",
    startYear: 2026,
    startMonth: 5,
    endYear: 2026,
    endMonth: 8,
    isCurrent: false,
    logo: null,
    logoInitials: "P",
    techStack: [
      "PyTorch",
      "Two-Tower Retrieval",
      "Transformers",
      "Recommendation Systems",
      "Distributed ML",
    ],
    highlights: [
      "Improved Homefeed candidate-retrieval quality on the User Understanding team by ramping on production ML workflows and establishing reproducible baselines for model and training comparisons.",
      "Identified margin-based pairwise ranking as the strongest offline lift for separating engaged Pins from similar non-engaged content through systematic tuning across key engagement metrics.",
      "Built transformer-based user-interest embeddings from engagement sequences and added serving diagnostics for retrieval overlap, latency, and per-interest visualization.",
      "Evaluated multi-interest aggregation, auxiliary training objectives, and multi-faceted item representations while documenting tradeoffs between offline relevance gains and serving complexity.",
      "Prepared model artifacts, experiment configuration, and controlled online A/B setup to validate whether offline retrieval improvements translated into user-facing engagement gains.",
    ],
  },
  {
    id: "western-research",
    company: "Western University",
    role: "Graduate Researcher",
    location: "London, ON",
    startYear: 2025,
    startMonth: 8,
    endYear: null,
    endMonth: null,
    isCurrent: true,
    logo: null,
    logoInitials: "WU",
    techStack: ["Python", "PyTorch", "CNNs", "Transformers"],
    highlights: [
      "Architected SR-MedT++, a hybrid CNN–Transformer model with stratified resampling for kidney ablation segmentation, reaching DSC/F1 of 0.8165 ± 0.0224 and IoU of 0.7082 ± 0.0257.",
      "Generated pixel-level epistemic uncertainty maps with Monte Carlo Dropout and layer-wise heatmaps to flag low-confidence regions for clinical review.",
      "Built a validation pipeline over 1,500 CT scans (125 patients) to benchmark prediction variance and reliability under real-world anomalies.",
    ],
  },
  {
    id: "pm-accelerator",
    company: "PM Accelerator",
    role: "AI Engineer Intern",
    location: "Remote (Boston, MA)",
    startYear: 2025,
    startMonth: 6,
    endYear: 2025,
    endMonth: 8,
    isCurrent: false,
    logo: null,
    logoInitials: "PM",
    techStack: ["Python", "FastAPI", "OpenAI API", "MongoDB"],
    highlights: [
      "Boosted resume-to-job alignment accuracy by 35% with semantic matching powered by OpenAI embeddings and a FastAPI backend.",
      "Cut manual job data processing by 60% with a Python scraping and normalization pipeline for unstructured listings at scale.",
      "Shipped RESTful APIs for resume parsing and context-aware interview question generation to reduce prep time for end users.",
    ],
  },
  {
    id: "fast",
    company: "Free Appropriate Sustainability Technology (FAST)",
    role: "Full-Stack Developer",
    location: "London, ON",
    startYear: 2024,
    startMonth: 11,
    endYear: 2025,
    endMonth: 4,
    isCurrent: false,
    logo: null,
    logoInitials: "F",
    techStack: ["Next.js", "Python", "Flask", "Nginx", "PM2"],
    highlights: [
      "Built a full-stack ML platform with Next.js and Flask that increased crop monitoring effectiveness by 90% through real-time strawberry health insights.",
      "Reduced live classification latency to under 500ms by iterating on edge cases and feature inputs in production-like testing.",
      "Maintained 99%+ uptime over a 2-month campus deployment using Nginx load balancing and PM2 process management.",
    ],
  },
];

export const TIMELINE_START = { year: 2024, month: 10 };
export const TIMELINE_END = { year: 2026, month: 9 };

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function toMonthIndex(year, month) {
  return year * 12 + (month - 1);
}

export function getExperienceEnd(experience) {
  if (experience.isCurrent) {
    return toMonthIndex(TIMELINE_END.year, TIMELINE_END.month);
  }

  return toMonthIndex(experience.endYear, experience.endMonth);
}

export function getDurationLabel(experience) {
  const start = toMonthIndex(experience.startYear, experience.startMonth);
  const end = getExperienceEnd(experience);
  const months = end - start + 1;

  if (months < 1) {
    return "1 mo";
  }

  if (months === 1) {
    return "1 mo";
  }

  if (months < 12) {
    return `${months} mo`;
  }

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (remainingMonths === 0) {
    return years === 1 ? "1 yr" : `${years} yr`;
  }

  return `${years} yr ${remainingMonths} mo`;
}

export function getDateRangeLabel(experience) {
  const start = `${MONTHS[experience.startMonth - 1]} ${experience.startYear}`;

  if (experience.isCurrent) {
    return `${start} – Present`;
  }

  return `${start} – ${MONTHS[experience.endMonth - 1]} ${experience.endYear}`;
}

export function getTimelinePosition(experience) {
  const timelineStart = toMonthIndex(TIMELINE_START.year, TIMELINE_START.month);
  const timelineEnd = toMonthIndex(TIMELINE_END.year, TIMELINE_END.month);
  const span = timelineEnd - timelineStart;

  const start = toMonthIndex(experience.startYear, experience.startMonth);
  const end = getExperienceEnd(experience);

  const left = ((start - timelineStart) / span) * 100;
  const width = ((end - start + 1) / span) * 100;

  return {
    left: Math.max(0, Math.min(left, 100)),
    width: Math.max(4, Math.min(width, 100 - left)),
  };
}

export default experiences;
