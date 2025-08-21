// FlipCard.jsx
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const FlipCard = ({
  name = "Brijesh DEV",
  title = "Backend Developer · FastAPI & Python",
  avatarUrl = "https://res.cloudinary.com/defazdfkp/image/upload/v1755761576/illustration-web-development-programmer-coding-website_746655-2851_srevzi.avif",
  skills = ["Python", "FastAPI", "React", "Tailwind CSS", "PostgreSQL", "Docker"],
  socialLinks = {
    github: "https://github.com/yourhandle",
    linkedin: "https://www.linkedin.com/in/yourhandle/",
    twitter: "https://twitter.com/yourhandle",
    email: "mailto:your@email.com",
  },
  resumeUrl,
  contactLabel = "Contact Me",
  location = "India (Remote)",
  availability = "Open to work",
  yearsOfExperience = 3,
  projectsCount = 12,
  responseTime = "~24h",
  services = [
    "API Design",
    "Microservices",
    "Integrations",
    "Testing & QA",
    "Performance",
    "CI/CD",
  ],
  projects = [
    { name: "Inventory API", blurb: "FastAPI + Postgres · 50k req/day" },
    { name: "Auth Service", blurb: "JWT/OAuth2, role-based access" },
  ],
  flipOnHover = false,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleClick = () => setFlipped((prev) => !prev);
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setFlipped((prev) => !prev);
    }
  };

  return (
    <div className="relative mx-auto my-12 w-[20rem] h-[28rem] sm:w-[22rem] sm:h-[30rem]" style={{ perspective: "1200px" }}>
      {/* subtle gradient glow */}
      <div className="pointer-events-none absolute -inset-2 rounded-[1.25rem] bg-gradient-to-br from-blue-500/30 via-indigo-500/20 to-purple-500/30 blur-2xl" />

      <div
        role="button"
        tabIndex={0}
        aria-pressed={flipped}
        aria-label="Flip profile card"
        className={`relative h-full w-full cursor-pointer select-none transition-transform ease-out focus:outline-none focus-visible:scale-[1.01] hover:scale-[1.01] ${prefersReducedMotion ? "duration-0" : "duration-700"
          }`}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onMouseEnter={() => flipOnHover && setFlipped(true)}
        onMouseLeave={() => flipOnHover && setFlipped(false)}
        style={{ transformStyle: "preserve-3d", transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
      >
        {/* Front Side */}
        <div
          className="absolute inset-0 rounded-2xl bg-white/90 backdrop-blur shadow-2xl ring-1 ring-black/5 flex p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="flex h-full w-full flex-col items-center justify-between">
            {/* Top section */}
            <div className="flex w-full flex-col items-center">
              <div className="relative mb-4">
                <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-[3px] rounded-full">
                  <img
                    src={avatarUrl}
                    alt={`${name} avatar`}
                    loading="lazy"
                    className="w-28 h-28 rounded-full bg-white object-cover"
                  />
                </div>
              </div>
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
                  {title}
                </span>
                <span className="inline-flex items-center rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
                  {availability}
                </span>
              </div>
              <h2 className="text-2xl font-semibold text-slate-900">{name}</h2>
              <p className="mt-1 text-slate-600">📍 {location}</p>
              <div className="mt-4 h-px w-16 bg-slate-200" />
              <p className="mt-3 max-w-[18rem] text-center text-sm text-slate-500">
                Building reliable APIs and scalable systems with a focus on clarity and DX.
              </p>
            </div>

            {/* Middle section */}
            <div className="mt-4 grid w-full grid-cols-3 gap-2">
              <div className="rounded-lg bg-slate-50 p-2 text-center ring-1 ring-slate-200">
                <div className="text-base font-semibold text-slate-900">{yearsOfExperience}y</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">Exp</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 text-center ring-1 ring-slate-200">
                <div className="text-base font-semibold text-slate-900">{projectsCount}+</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">Projects</div>
              </div>
              <div className="rounded-lg bg-slate-50 p-2 text-center ring-1 ring-slate-200">
                <div className="text-base font-semibold text-slate-900">{responseTime}</div>
                <div className="text-[10px] uppercase tracking-wide text-slate-500">Response</div>
              </div>
            </div>

            {/* Bottom section */}
            <div className="mt-4 flex w-full items-center justify-center gap-2">
              <a
                href={socialLinks.email}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex flex-1 items-center justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm ring-1 ring-black/5 transition hover:bg-slate-800"
              >
                {contactLabel}
              </a>
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-slate-100"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Back Side */}
        <div
          className="absolute inset-0 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-2xl p-6 flex flex-col justify-between"
          style={{ transform: "rotateY(180deg)", backfaceVisibility: "hidden" }}
        >
          <div className="flex-1 w-full max-w-[18rem] mx-auto">
            <h3 className="text-lg font-semibold tracking-wide">Skills</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {skills.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-white/10 px-3 py-1 text-sm ring-1 ring-white/15 hover:bg-white/15 transition"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <h4 className="text-sm font-semibold tracking-wide text-white/80">Services</h4>
              <div className="mt-2 flex flex-wrap gap-2">
                {services.map((svc) => (
                  <span key={svc} className="rounded-md bg-white/5 px-2.5 py-1 text-xs ring-1 ring-white/15">
                    {svc}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-5">
              <h4 className="text-sm font-semibold tracking-wide text-white/80">Recent projects</h4>
              <ul className="mt-2 space-y-1.5 flex flex-col items-center justify-center">
                {projects.map(({ name: pName, blurb }) => (
                  <li key={pName} className="flex items-start gap-2 ">
                    {/* <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/60" /> */}
                    <div>
                      <div className="text-sm font-medium leading-5">{pName}</div>
                      <div className="text-xs text-white/70">{blurb}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="pt-4 flex flex-col items-center">
            <div className="mb-4 flex items-center gap-3">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 hover:scale-105 transition"
              >
                <FaGithub size={18} />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 hover:scale-105 transition"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                title="Twitter"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 ring-1 ring-white/20 hover:bg-white/20 hover:scale-105 transition"
              >
                <FaTwitter size={18} />
              </a>
            </div>
            <div className="flex items-center gap-2">
              {resumeUrl && (
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center justify-center rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 transition hover:bg-white/20"
                >
                  Resume
                </a>
              )}
              <a
                href={socialLinks.email}
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 font-semibold text-slate-900 shadow-sm ring-1 ring-black/5 transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                {contactLabel}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
