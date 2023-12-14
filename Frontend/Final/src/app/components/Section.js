export default function Section({ identifier, className, children }) {
  const sectionClasses = `section_${identifier} ${className || ""}`;
  return <section className={sectionClasses}>{children}</section>;
}
