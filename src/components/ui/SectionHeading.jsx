export default function SectionHeading({ badge, headlineTop, headlineGradient, support, id }) {
  return (
    <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16" id={id}>
      {badge && <span className="badge badge-green mb-5">{badge}</span>}
      <h2 className="headline-lg text-[var(--text-primary)] text-balance">
        {headlineTop} <span className="text-gradient-green">{headlineGradient}</span>
      </h2>
      {support && <p className="lead mt-5 max-w-2xl mx-auto text-pretty">{support}</p>}
    </div>
  );
}