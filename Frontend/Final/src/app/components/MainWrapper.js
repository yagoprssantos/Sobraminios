export default function MainWrapper({ children, className }) {
  return <main className={`main-wrapper ${className || ""}`}>{children}</main>;
}
