export default function SectionDivider() {
  return (
    <svg
      className="wave-divider text-surface"
      viewBox="0 0 1440 60"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path
        d="M0 30 Q360 60 720 30 T1440 30 V60 H0 Z"
        fill="currentColor"
        className="opacity-30"
      >
        <animate
          attributeName="d"
          dur="8s"
          repeatCount="indefinite"
          values="M0 30 Q360 60 720 30 T1440 30 V60 H0 Z;M0 30 Q360 0 720 30 T1440 30 V60 H0 Z;M0 30 Q360 60 720 30 T1440 30 V60 H0 Z"
        />
      </path>
    </svg>
  );
}
