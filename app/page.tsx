import Link from "next/link";
import Image from "next/image";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/lib/firebase";
import QuoteCarousel from "@/components/QuoteCarousel";
import HeroSection from "@/components/HeroSection";
import ExpandableCardText from "@/components/home/ExpandableCardText";
import type { HeroSettings, PortfolioItem } from "@/lib/types/cms";

const fallbackHero: HeroSettings = {
  id: "hero",
  headline: "Design. Develop. Deploy.",
  subtext:
    "We architect scalable AI and web systems that make teams faster, safer, and more profitable.",
  videoUrl: "",
  primaryCtaLabel: "Explore Services",
  primaryCtaHref: "/services",
  secondaryCtaLabel: "Book Consultation",
  secondaryCtaHref: "/booking",
};

function getIndependentDomain(url?: string): string {
  if (!url) return "";
  try {
    const parsed = new URL(url);
    return parsed.hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
}

function looksLikeDomain(value: string): boolean {
  return /^[a-z0-9-]+(\.[a-z0-9-]+)+([/?#].*)?$/i.test(value.trim());
}

function normalizeExternalUrl(value?: string): string | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    return new URL(trimmed).toString();
  } catch {
    return looksLikeDomain(trimmed) ? `https://${trimmed}` : null;
  }
}

function getPortfolioLinks(item: PortfolioItem): {
  caseStudyHref: string | null;
  liveHref: string | null;
} {
  const liveHref = normalizeExternalUrl(item.liveUrl);
  if (liveHref) {
    return { caseStudyHref: `/portfolio/${item.id}`, liveHref };
  }

  const idAsDomain = looksLikeDomain(item.id)
    ? normalizeExternalUrl(item.id)
    : null;

  if (idAsDomain) {
    return { caseStudyHref: null, liveHref: idAsDomain };
  }

  return { caseStudyHref: `/portfolio/${item.id}`, liveHref: null };
}

export default async function HomePage() {
  const [heroSnapshot, servicesSnapshot, portfolioSnapshot] = await Promise.all([
    getDoc(doc(db, "settings", "hero")),
    getDocs(collection(db, "services")),
    getDocs(collection(db, "portfolio")),
  ]);

  const heroData = heroSnapshot.data();
  const hero: HeroSettings = heroSnapshot.exists()
    ? {
        id: heroSnapshot.id,
        headline: String(heroData?.headline ?? fallbackHero.headline),
        subtext: String(heroData?.subtext ?? fallbackHero.subtext),
        videoUrl: String(heroData?.videoUrl ?? ""),
        primaryCtaLabel: String(
          heroData?.primaryCtaLabel ?? fallbackHero.primaryCtaLabel
        ),
        primaryCtaHref: String(
          heroData?.primaryCtaHref ?? fallbackHero.primaryCtaHref
        ),
        secondaryCtaLabel: String(
          heroData?.secondaryCtaLabel ?? fallbackHero.secondaryCtaLabel
        ),
        secondaryCtaHref: String(
          heroData?.secondaryCtaHref ?? fallbackHero.secondaryCtaHref
        ),
      }
    : fallbackHero;
  const portfolio = portfolioSnapshot.docs.map((entry) => ({
    id: entry.id,
    ...(entry.data() as Omit<PortfolioItem, "id">),
  }));
  const featuredPortfolio = portfolio.slice(0, Math.max(6, portfolio.length));

  const stats = [
    { label: "Projects Delivered", value: "120+" },
    { label: "Average Uptime", value: "99.9%" },
    { label: "Automation Workflows", value: "75+" },
    { label: "Client Satisfaction", value: "5.0/5" },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden">
      <HeroSection hero={hero} />

      <section className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-3xl border border-neutral-200 bg-white p-6 dark:border-neutral-700 dark:bg-neutral-900">
        <div className="marquee-container relative flex overflow-x-hidden">
          <div className="marquee-content flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <p className="text-3xl font-black text-neutral-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </div>
          <div
            className="marquee-content flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 md:gap-16"
            aria-hidden="true"
          >
            {stats.map((stat) => (
              <div key={`${stat.label}-dup`} className="flex flex-col items-center text-center">
                <p className="text-3xl font-black text-neutral-900 dark:text-white">{stat.value}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="mx-auto mt-14 max-w-6xl rounded-3xl border border-neutral-200 bg-gradient-to-r from-cyan-50 to-sky-50 p-8 dark:border-neutral-700 dark:from-neutral-900 dark:to-neutral-800">
        <SectionHeading className="mb-0">Why Choose Us</SectionHeading>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {[
            "Scalable architecture from day one.",
            "Security-focused development lifecycle.",
            "Fast delivery with measurable business impact.",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/70 bg-white/70 p-4 dark:border-neutral-700 dark:bg-neutral-900/60"
            >
              <p className="font-semibold text-neutral-700 dark:text-neutral-200">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-6xl rounded-3xl border border-cyan-300 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
        <h2 className="text-3xl font-black md:text-4xl">Ready to build your next platform?</h2>
        <p className="mt-2 max-w-3xl text-cyan-50">
          Let us design and ship a secure, high-performance system tailored to your growth stage.
        </p>
        <div className="mt-5 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-2">
          <Link href="/booking" className="cta-border-light rounded-xl bg-white px-5 py-3 font-semibold text-cyan-700">
            Book Consultation
          </Link>
          <Link
            href="/contact"
            className="cta-border-light rounded-xl border border-white/60 px-5 py-3 font-semibold text-white"
            style={{ animationDelay: "0.6s" }}
          >
            Contact Team
          </Link>
        </div>
      </section>
    </div>
  );
}

function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`mb-6 text-3xl font-black text-transparent bg-gradient-to-r from-cyan-600 via-blue-600 to-sky-500 bg-clip-text animate-fade-in md:text-4xl ${className}`}
    >
      {children}
    </h2>
  );
}
