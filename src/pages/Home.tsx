import { SEO } from "@/components/SEO";
import { Link } from "react-router-dom";
import {
  BookOpen,
  ClipboardList,
  Sparkles,
  ArrowRight,
  ChevronDown,
  Shield,
  Zap,
  GraduationCap,
  MessageCircle,
  BarChart3,
  Target,
  CheckCircle2,
  Lock,
  Flame,
  TrendingUp,
  Brain,
} from "lucide-react";
import { MathMindLogo } from "@/components/MathMindLogo";
import { useAuth } from "@/contexts/AuthContext";
import { PublicHeader } from "@/components/layout/PublicHeader";
import { TypingText } from "@/components/home/TypingText";
import { FloatingIcons } from "@/components/home/FloatingIcons";
import { ScrollReveal } from "@/components/home/ScrollReveal";
import { TestimonialsCarousel } from "@/components/home/TestimonialsCarousel";
import { MiniQuiz } from "@/components/home/MiniQuiz";
import { curriculum } from "@/data/curriculum";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

/* ── data ───────────────────────────────────────────────── */

const features = [
  {
    icon: BookOpen,
    title: "Structured Lessons",
    description:
      "Curriculum-aligned content mapped to Victorian Curriculum strands for Year 9 and Year 10, with step-by-step worked examples.",
  },
  {
    icon: ClipboardList,
    title: "Interactive Quizzes",
    description:
      "Test your understanding with instant feedback at lesson, topic, and category level. Track your progress over time.",
  },
  {
    icon: Sparkles,
    title: "AI Maths Tutor",
    description:
      "Get instant help from an AI tutor that explains concepts in plain language, whenever you need it.",
  },
];

const trustBadges = [
  { icon: GraduationCap, label: "Victorian Curriculum aligned" },
  { icon: Zap, label: "Instant feedback" },
  { icon: Shield, label: "Private and secure" },
];

const steps = [
  {
    icon: BookOpen,
    title: "Pick a topic",
    description: "Browse the Victorian Curriculum strands and choose any lesson to begin.",
  },
  {
    icon: Target,
    title: "Learn and practise",
    description:
      "Read step-by-step explanations, then test yourself with a short quiz.",
  },
  {
    icon: BarChart3,
    title: "Track progress",
    description:
      "Watch your mastery grow as you complete lessons and earn streaks.",
  },
];

const vcStrands = [
  {
    title: "Number and Algebra",
    description:
      "From index laws and linear equations through to quadratics and algebraic fractions. Build fluency with the foundational skills that underpin every branch of mathematics.",
    topics: ["Index Laws", "Linear Equations", "Simultaneous Equations", "Quadratics", "Algebraic Fractions"],
  },
  {
    title: "Measurement and Geometry",
    description:
      "Explore Pythagoras, trigonometry, surface area, volume, and geometric reasoning. Apply measurement concepts to real-world and abstract problems.",
    topics: ["Pythagoras' Theorem", "Trigonometry", "Surface Area and Volume", "Geometric Reasoning", "Circle Geometry"],
  },
  {
    title: "Statistics and Probability",
    description:
      "Analyse data distributions, calculate probabilities, and interpret statistical summaries. Develop the critical thinking skills needed for data literacy.",
    topics: ["Data Representation", "Measures of Spread", "Probability", "Two-way Tables", "Statistical Analysis"],
  },
];

const trustPoints = [
  {
    icon: GraduationCap,
    title: "Curriculum-mapped progression",
    description:
      "Every lesson, quiz, and worked example is structured around the Victorian Curriculum achievement standards for Levels 9 and 10.",
  },
  {
    icon: ClipboardList,
    title: "Instant, detailed feedback",
    description:
      "Students receive immediate results with AI-generated summaries that identify strengths, weak areas, and recommended revision topics.",
  },
  {
    icon: Target,
    title: "Built for mastery, not shortcuts",
    description:
      "MathMind focuses on genuine understanding through worked examples and progressive difficulty, not rote memorisation.",
  },
  {
    icon: Lock,
    title: "Safe and private",
    description:
      "Student data is stored securely and is never shared with third parties. No ads, no tracking, no distractions.",
  },
];

const faqItems = [
  {
    q: "Is MathMind free to use?",
    a: "Yes. All core lessons and quizzes are completely free. Premium features may be added in the future.",
  },
  {
    q: "Which curriculum does MathMind follow?",
    a: "MathMind is aligned with the Victorian Curriculum (VC) for Year 9 and Year 10 mathematics, covering all three strands: Number and Algebra, Measurement and Geometry, and Statistics and Probability.",
  },
  {
    q: "How does the AI Tutor work?",
    a: "The AI Tutor uses a large language model to answer your maths questions in plain language with worked examples. Type your question and get an instant response.",
  },
  {
    q: "Can I use MathMind on my phone?",
    a: "Yes. MathMind is fully responsive and works on any device, including phone, tablet, or desktop.",
  },
  {
    q: "Is my data private?",
    a: "Yes. Your progress data is stored securely and is never shared with third parties.",
  },
  {
    q: "Is MathMind suitable for VCE preparation?",
    a: "MathMind currently covers Year 9 and Year 10 Victorian Curriculum content, with Year 11 VCE pathways including General Mathematics, Mathematical Methods, and Specialist Mathematics now available.",
  },
];

/* ── component ──────────────────────────────────────────── */

export default function Home() {
  const { user } = useAuth();

  const scrollToCurriculum = () => {
    document
      .getElementById("curriculum")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="MathMind | AI Maths Tutor for Australian Students"
        description="MathMind helps Australian students learn maths with AI tutoring, curriculum-aligned lessons, quizzes, practice questions, and progress tracking."
        canonicalPath="/"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "MathMind",
            url: "https://mathsmind.lovable.app",
            logo: "https://mathsmind.lovable.app/logo.png",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "MathMind",
            url: "https://mathsmind.lovable.app",
            inLanguage: "en-AU",
          },
          {
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "MathMind",
            applicationCategory: "EducationalApplication",
            operatingSystem: "Web",
            url: "https://mathsmind.lovable.app",
            description:
              "MathMind helps Australian students learn maths with AI tutoring, curriculum-aligned lessons, quizzes, practice questions, and progress tracking.",
            audience: {
              "@type": "EducationalAudience",
              educationalRole: "student",
              geographicArea: { "@type": "Country", name: "Australia" },
            },
            educationalUse: "maths learning, practice, tutoring",
            about: { "@type": "Thing", name: "Mathematics" },
            offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
          },
        ]}
      />
      <PublicHeader />


      <main>
        {/* ─── HERO ─────────────────────────────────────── */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="relative overflow-hidden gradient-hero pt-12 pb-20 md:pt-20 md:pb-28 px-4"
        >
          <div className="hero-blob hero-blob--1" aria-hidden="true" />
          <div className="hero-blob hero-blob--2" aria-hidden="true" />

          <FloatingIcons />

          <div className="relative z-10 max-w-6xl mx-auto grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            {/* ── Left column: copy + CTAs ─────────────────── */}
            <div className="text-center lg:text-left">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 rounded-full border border-border bg-card/70 backdrop-blur-sm text-xs sm:text-sm font-medium text-muted-foreground">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary animate-pulse" aria-hidden="true" />
                  Victorian Curriculum • Year 9–10 Maths
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h1
                  id="hero-heading"
                  className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-foreground leading-[1.1] tracking-tight"
                >
                  Master maths with an AI tutor built for{" "}
                  <span className="text-gradient">Victorian students</span>
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={140}>
                <p
                  className="font-display text-lg md:text-xl font-semibold text-primary h-7 mb-4"
                  aria-live="polite"
                >
                  <TypingText
                    phrases={[
                      "Learn faster",
                      "Practise smarter",
                      "Ask anything",
                      "Master maths",
                    ]}
                  />
                </p>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl lg:max-w-none mx-auto lg:mx-0 leading-relaxed">
                  Structured lessons, instant-feedback quizzes, and an AI tutor that explains
                  every step in plain English — built for Australian secondary students working
                  through the Victorian Curriculum.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={260}>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-6">
                  <Link
                    to={user ? "/dashboard" : "/login"}
                    className="btn-primary text-base !px-7 !py-3.5 inline-flex items-center justify-center gap-2 group"
                  >
                    Start Learning
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    to={user ? "/chat" : "/login?redirect=%2Fchat"}
                    className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-xl px-7 py-3.5 border border-border bg-card text-foreground hover:border-primary/40 hover:bg-primary/5 transition-all"
                    aria-label="Try the AI maths tutor"
                  >
                    <Sparkles className="w-5 h-5 text-primary" aria-hidden="true" />
                    Try AI Tutor
                  </Link>
                  <button
                    onClick={scrollToCurriculum}
                    className="inline-flex items-center justify-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors px-4 py-3.5"
                    aria-label="Scroll to curriculum overview"
                  >
                    View Curriculum
                    <ChevronDown className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={320}>
                <div
                  className="flex flex-wrap justify-center lg:justify-start gap-2"
                  role="list"
                  aria-label="Key benefits"
                >
                  {trustBadges.map((b) => (
                    <span
                      key={b.label}
                      role="listitem"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card border border-border text-xs sm:text-sm text-muted-foreground"
                    >
                      <b.icon className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
                      {b.label}
                    </span>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* ── Right column: preview card (desktop only) ── */}
            <ScrollReveal delay={200}>
              <div className="hidden lg:block">
                <HeroPreviewCard />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── FEATURES ─────────────────────────────────── */}
        <section
          id="features"
          aria-labelledby="features-heading"
          className="py-20 md:py-28 px-4 bg-background"
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="features-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-14 text-foreground"
              >
                Everything you need to succeed in maths
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <ScrollReveal key={f.title} delay={i * 120}>
                  <article className="bg-card rounded-2xl p-6 shadow-sm border border-border text-center group hover:shadow-md hover:-translate-y-1 hover:border-primary/30 transition-all duration-300">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                      <f.icon className="w-7 h-7 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                      {f.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {f.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── HOW IT WORKS ─────────────────────────────── */}
        <section
          id="how-it-works"
          aria-labelledby="how-heading"
          className="py-20 md:py-28 px-4 bg-muted/40"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2
                id="how-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-14 text-foreground"
              >
                How MathMind works
              </h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-8 relative">
              {/* Connector line — uses border token so it's visible in dark mode */}
              <div
                className="hidden md:block absolute top-12 left-[16.6%] right-[16.6%] h-0.5 bg-border"
                aria-hidden="true"
              />
              {steps.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 150}>
                  <article className="text-center relative">
                    <div className="w-24 h-24 mx-auto rounded-full bg-card border-2 border-border flex items-center justify-center mb-5 relative z-10 shadow-sm">
                      <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-sm">
                        {i + 1}
                      </span>
                      <s.icon className="w-9 h-9 text-primary" aria-hidden="true" />
                    </div>
                    <h3 className="font-display text-lg font-bold mb-2 text-foreground">
                      {s.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                      {s.description}
                    </p>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── VICTORIAN CURRICULUM ALIGNMENT ──────────── */}
        <section
          id="victorian-curriculum"
          aria-labelledby="vc-heading"
          className="py-20 md:py-28 px-4 bg-background"
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="vc-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-4 text-foreground"
              >
                Aligned to the Victorian Curriculum
              </h2>
              <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto leading-relaxed">
                MathMind lessons and quizzes are structured around the three core strands of the
                Victorian Curriculum for Mathematics at Levels 9 and 10, ensuring every topic
                maps directly to what students cover in class across Victoria, Australia.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-6">
              {vcStrands.map((strand, i) => (
                <ScrollReveal key={strand.title} delay={i * 120}>
                  <article className="bg-card rounded-2xl p-6 shadow-sm border border-border h-full flex flex-col hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <h3 className="font-display text-lg font-bold mb-3 text-foreground">
                      {strand.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-5 leading-relaxed flex-1">
                      {strand.description}
                    </p>
                    <ul className="flex flex-wrap gap-1.5" role="list">
                      {strand.topics.map((topic) => (
                        <li
                          key={topic}
                          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/8 border border-primary/15 text-xs font-medium text-foreground"
                        >
                          <CheckCircle2 className="w-3 h-3 text-primary shrink-0" aria-hidden="true" />
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHY PARENTS & TEACHERS TRUST MATHMIND ───── */}
        <section
          id="trust"
          aria-labelledby="trust-heading"
          className="py-20 md:py-28 px-4 bg-muted/40"
        >
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2
                id="trust-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-4 text-foreground"
              >
                Why parents and teachers trust MathMind
              </h2>
              <p className="text-muted-foreground text-center mb-14 max-w-2xl mx-auto leading-relaxed">
                MathMind is designed as a structured learning companion, not a homework shortcut.
                Every feature supports genuine understanding aligned to the Victorian Curriculum.
              </p>
            </ScrollReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {trustPoints.map((point, i) => (
                <ScrollReveal key={point.title} delay={i * 100}>
                  <article className="bg-card rounded-2xl p-6 shadow-sm border border-border flex gap-4 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <point.icon className="w-6 h-6 text-primary" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold mb-1 text-foreground">
                        {point.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ─── CURRICULUM BROWSER ──────────────────────── */}
        <section
          id="curriculum"
          aria-labelledby="curriculum-heading"
          className="py-20 md:py-28 px-4 scroll-mt-20 bg-background"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2
                id="curriculum-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-4 text-foreground"
              >
                Curriculum coverage
              </h2>
              <p className="text-muted-foreground text-center mb-10 max-w-xl mx-auto leading-relaxed">
                Aligned with the Victorian Curriculum for Year 9 and Year 10 mathematics.
                Browse every topic before you sign up.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <CurriculumTabs />
            </ScrollReveal>
          </div>
        </section>

        {/* ─── INTERACTIVE DEMO ───────────────────────────── */}
        <section
          id="demo"
          aria-labelledby="demo-heading"
          className="py-20 md:py-28 px-4 bg-muted/40"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2
                id="demo-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-4 text-foreground"
              >
                See it in action
              </h2>
              <p className="text-muted-foreground text-center mb-10">
                Try a sample question — no sign-up required.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <MiniQuiz />
            </ScrollReveal>
          </div>
        </section>

        {/* ─── TESTIMONIALS ─────────────────────────────── */}
        <section
          id="testimonials"
          aria-labelledby="testimonials-heading"
          className="py-20 md:py-28 px-4 bg-background"
        >
          <div className="max-w-4xl mx-auto">
            <ScrollReveal>
              <h2
                id="testimonials-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-14 text-foreground"
              >
                What students say about MathMind
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <TestimonialsCarousel />
            </ScrollReveal>
          </div>
        </section>

        {/* ─── FAQ ──────────────────────────────────────── */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className="py-20 md:py-28 px-4 bg-muted/40"
        >
          <div className="max-w-2xl mx-auto">
            <ScrollReveal>
              <h2
                id="faq-heading"
                className="font-display text-2xl md:text-3xl font-bold text-center mb-10 text-foreground"
              >
                Frequently asked questions
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <Accordion type="single" collapsible className="space-y-2">
                {faqItems.map((item, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="bg-card rounded-2xl px-6 shadow-sm border border-border"
                  >
                    <AccordionTrigger className="text-left font-display font-bold text-foreground hover:no-underline py-4">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* ─── BOTTOM CTA ─────────────────────────────── */}
        <section
          id="get-started"
          aria-labelledby="cta-heading"
          className="py-20 md:py-28 px-4 gradient-cta relative overflow-hidden"
        >
          {/* Decorative wash, theme-friendly */}
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.4), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.3), transparent 50%)",
            }}
          />
          <ScrollReveal>
            <div className="relative max-w-3xl mx-auto text-center">
              <h2
                id="cta-heading"
                className="font-display text-2xl md:text-3xl font-bold mb-4 text-primary-foreground"
              >
                Ready to master maths?
              </h2>
              <p className="text-primary-foreground/90 mb-8 max-w-lg mx-auto leading-relaxed">
                Join students across Victoria who are building confidence and improving their
                grades with MathMind. Free to start, no credit card required.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  to={user ? "/dashboard" : "/login"}
                  className="bg-card text-foreground font-semibold rounded-xl px-8 py-3.5 text-base inline-flex items-center justify-center gap-2 group hover:bg-card/90 active:scale-[0.98] transition-all shadow-md"
                >
                  Get started for free
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to={user ? "/chat" : "/login?redirect=%2Fchat"}
                  className="inline-flex items-center justify-center gap-2 text-base font-semibold rounded-xl px-8 py-3.5 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 active:scale-[0.98] transition-all"
                >
                  <Sparkles className="w-5 h-5" aria-hidden="true" />
                  Talk to AI Tutor
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* ─── SEO CONTENT (crawlable, visually subtle) ── */}
        <section
          className="py-16 px-4 border-t border-border bg-background"
          aria-label="About MathMind"
        >
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-lg font-bold mb-4 text-foreground">
              About MathMind
            </h2>
            <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
              <p>
                MathMind is an AI maths tutor and online maths learning platform built for
                Australian secondary school students. Aligned to the Victorian Curriculum (VC),
                it provides structured lessons, interactive quizzes, and instant AI-powered
                explanations for Year 9 and Year 10 mathematics.
              </p>
              <p>
                Whether you need help with Year 9 algebra, Year 10 geometry, index laws, linear
                equations, trigonometry, or probability, MathMind delivers curriculum-aligned maths
                revision with worked examples designed to build genuine understanding. Each topic
                follows the Victorian Curriculum strands — Number and Algebra, Measurement and
                Geometry, and Statistics and Probability — so what students learn maps directly to
                their school programme.
              </p>
              <p>
                MathMind also offers Year 11 VCE pathways for General Mathematics, Mathematical
                Methods, and Specialist Mathematics, giving students in Victoria a clear path from
                secondary school through to senior study. The platform tracks progress at every
                level, from individual lessons to full category mastery, so students, parents, and
                teachers always know where to focus next.
              </p>
              <p>
                MathMind is free to use, works on any device, and keeps all student data private.
                It is designed and built in Australia for Australian students.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ───────────────────────────────────── */}
      <footer
        className="border-t border-border py-10 px-4 bg-card/30"
        role="contentinfo"
      >
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <MathMindLogo size="sm" />
            <span className="font-display font-bold text-foreground">MathMind</span>
          </div>
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <a href="#features" className="hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#victorian-curriculum" className="hover:text-foreground transition-colors">
              Curriculum
            </a>
            <a href="#faq" className="hover:text-foreground transition-colors">
              FAQ
            </a>
            <Link
              to={user ? "/dashboard" : "/login"}
              className="font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {user ? "Dashboard" : "Login"}
            </Link>
          </nav>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} MathMind. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

/* ── Hero Preview Card ──────────────────────────────────── */
/**
 * Polished mockup that gives visitors a glimpse of the logged-in experience.
 * Uses real design tokens so it adapts to dark mode.
 */
function HeroPreviewCard() {
  return (
    <div className="relative">
      {/* Soft glow behind card */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 rounded-3xl bg-primary/15 blur-2xl"
      />

      <div className="relative bg-card rounded-3xl shadow-xl border border-border p-5 sm:p-6 space-y-4">
        {/* ── Mock app header ── */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
              <BookOpen className="w-4 h-4 text-primary" aria-hidden="true" />
            </div>
            <p className="text-sm font-semibold text-foreground">Your dashboard</p>
          </div>
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/20 text-accent-foreground text-[11px] font-semibold">
            <Flame className="w-3 h-3" aria-hidden="true" />7 day streak
          </span>
        </div>

        {/* ── Stat row ── */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              </div>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded-full">
                <TrendingUp className="w-2.5 h-2.5" aria-hidden="true" />+12%
              </span>
            </div>
            <p className="font-display text-xl font-bold leading-none tabular-nums">
              24<span className="text-xs text-muted-foreground font-normal ml-0.5">/30</span>
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">Lessons done</p>
            <div className="h-1.5 mt-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "80%" }} />
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-3">
            <div className="flex items-center justify-between mb-2">
              <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
                <ClipboardList className="w-3.5 h-3.5 text-primary" aria-hidden="true" />
              </div>
              <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-success bg-success/10 px-1.5 py-0.5 rounded-full">
                <TrendingUp className="w-2.5 h-2.5" aria-hidden="true" />+8%
              </span>
            </div>
            <p className="font-display text-xl font-bold leading-none tabular-nums">
              92<span className="text-xs text-muted-foreground font-normal ml-0.5">%</span>
            </p>
            <p className="text-[11px] text-muted-foreground mt-1">Quiz score avg</p>
            <div className="h-1.5 mt-2 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "92%" }} />
            </div>
          </div>
        </div>

        {/* ── Continue lesson card ── */}
        <div className="rounded-xl border border-border bg-muted/40 p-3">
          <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground mb-1">
            Continue learning
          </p>
          <p className="font-semibold text-sm text-foreground">Quadratic Equations</p>
          <p className="text-[11px] text-muted-foreground">Year 10 • Algebra</p>
          <div className="flex items-center justify-between mt-2.5">
            <div className="h-1.5 flex-1 mr-3 rounded-full bg-muted overflow-hidden">
              <div className="h-full rounded-full bg-primary" style={{ width: "60%" }} />
            </div>
            <span className="text-[11px] font-semibold text-primary tabular-nums">60%</span>
          </div>
        </div>

        {/* ── AI Tutor sample message ── */}
        <div className="rounded-xl border border-primary/20 bg-primary/5 p-3 flex gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-primary text-primary-foreground flex items-center justify-center shrink-0">
            <Brain className="w-4 h-4" aria-hidden="true" />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold text-primary mb-0.5">AI Tutor</p>
            <p className="text-xs text-foreground leading-relaxed">
              To factorise <span className="font-mono font-semibold">x² − 5x + 6</span>, find two
              numbers that multiply to <span className="font-semibold">6</span> and add to{" "}
              <span className="font-semibold">−5</span>. Try{" "}
              <span className="font-mono font-semibold">−2</span> and{" "}
              <span className="font-mono font-semibold">−3</span>…
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Curriculum Tabs sub-component ──────────────────────── */

function CurriculumTabs() {
  const [activeYear, setActiveYear] = useState("year-9");
  const year = curriculum.find((y) => y.id === activeYear)!;

  return (
    <Tabs value={activeYear} onValueChange={setActiveYear}>
      <TabsList className="w-full max-w-xs mx-auto mb-8 bg-muted">
        <TabsTrigger
          value="year-9"
          className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
        >
          Year 9
        </TabsTrigger>
        <TabsTrigger
          value="year-10"
          className="flex-1 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground text-muted-foreground"
        >
          Year 10
        </TabsTrigger>
      </TabsList>

      <TabsContent value={activeYear}>
        <Accordion type="multiple" className="space-y-2">
          {year.categories.map((cat) => (
            <AccordionItem
              key={cat.id}
              value={cat.id}
              className="bg-card rounded-2xl px-6 shadow-sm border border-border"
            >
              <AccordionTrigger className="text-left font-display font-bold text-foreground hover:no-underline py-4">
                <span className="flex items-center gap-2">
                  <span aria-hidden="true">{cat.icon}</span>
                  {cat.name}
                  <span className="ml-2 text-xs font-normal text-muted-foreground">
                    {cat.topics.length} topics
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4">
                <ul className="space-y-2" role="list">
                  {cat.topics.map((topic) => (
                    <li
                      key={topic.id}
                      className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-muted/40 transition-colors"
                    >
                      <div>
                        <p className="font-medium text-foreground text-sm">{topic.title}</p>
                        <p className="text-xs text-muted-foreground">{topic.lessons} lessons</p>
                      </div>
                      <MessageCircle
                        className="w-4 h-4 text-muted-foreground"
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </TabsContent>
    </Tabs>
  );
}
