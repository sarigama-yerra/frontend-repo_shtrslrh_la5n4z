import React from "react"

export function MissionVision() {
  const values = [
    { title: "Mission", desc: "Empower healthier lives by designing culturally aligned, scalable health solutions that improve wellbeing across the region." },
    { title: "Vision", desc: "A future where every community can access data-driven, sustainable programs that turn health ambitions into measurable impact." },
    { title: "Values", desc: "Integrity, cultural alignment, evidence-based design, collaboration, and accountability." },
  ]
  return (
    <section id="mission" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Mission, Vision & Values</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">Grounded in culture and guided by science, AWJ aligns national goals with on-the-ground execution to drive lasting change.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-2">{v.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Services() {
  const services = [
    { title: "Program Design", desc: "Human-centered design for national and workplace health programs." },
    { title: "Campaigns & Communications", desc: "Culturally aligned messaging and multimedia awareness campaigns." },
    { title: "Implementation & PMO", desc: "End-to-end delivery with governance, vendor management, and PMO." },
    { title: "Monitoring & Evaluation", desc: "KPIs, dashboards, and impact measurement frameworks." },
    { title: "Training & Capacity Building", desc: "Upskilling teams and healthcare workers with certified content." },
    { title: "Digital Health Solutions", desc: "Platforms, apps, and tools to scale engagement and outcomes." },
  ]
  return (
    <section id="services" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">Flexible engagement models from strategic advisory to full program management.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <div key={s.title} className="rounded-xl bg-white border border-emerald-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Initiatives() {
  const items = [
    { title: "National Health Days", desc: "Design and execution of large-scale awareness campaigns across regions." },
    { title: "Workplace Wellness", desc: "End-to-end employee wellbeing programs for public and private sectors." },
    { title: "Community Screening", desc: "Mobile clinics and community activations to increase early detection." },
    { title: "Youth Health", desc: "School-based programs promoting nutrition, activity, and mental wellbeing." },
  ]
  return (
    <section id="initiatives" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Flagship Health Initiatives</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">A portfolio built with ministries, authorities, and leading institutions.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {items.map((i) => (
            <div key={i.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">{i.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Impact() {
  const metrics = [
    { label: "Screenings Conducted", value: "350k" },
    { label: "Worksites Enrolled", value: "1,200+" },
    { label: "Community Events", value: "650+" },
    { label: "Clinician Partners", value: "900+" },
  ]
  return (
    <section id="impact" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Impact At a Glance</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">We track what matters. These are sample indicators across engagements.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-xl bg-white border border-emerald-200 p-6 text-center">
              <div className="text-3xl font-extrabold text-slate-900">{m.value}</div>
              <div className="text-sm text-slate-600 mt-1">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Partnerships() {
  const partners = [
    "Ministry of Health",
    "Public Health Authority",
    "Major Employers",
    "Universities",
    "NGOs & Foundations",
    "Media Networks",
  ]
  return (
    <section id="partnerships" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Strategic Partnerships</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">We collaborate across sectors to move health outcomes at scale.</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {partners.map((p) => (
            <div key={p} className="rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-center text-slate-700 text-sm">{p}</div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function CaseStudies() {
  const cases = [
    {
      title: "Health Conferences",
      obj: "Elevate national dialogue and best-practice exchange.",
      role: "Program strategy, speaker curation, and end-to-end operations.",
      result: "5,000+ attendees, 95% satisfaction, sustained policy working groups.",
    },
    {
      title: "Workplace Wellness",
      obj: "Improve employee health outcomes and productivity.",
      role: "Assessment, program design, onsite activations, and digital engagement.",
      result: "42% increase in participation, 18% improvement in activity levels.",
    },
    {
      title: "Awareness Campaigns",
      obj: "Drive prevention behaviors across priority diseases.",
      role: "Behavioral messaging, omnichannel content, and media partnerships.",
      result: "National reach with measurable uplift in screenings and hotline calls.",
    },
    {
      title: "Community Initiatives",
      obj: "Expand access for underserved populations.",
      role: "Mobile clinics, community leaders engagement, and volunteer networks.",
      result: "Tens of thousands reached with early detection and referrals.",
    },
  ]
  return (
    <section id="cases" className="py-20 bg-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Case Studies</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">Selected examples showing objectives, our role, and measurable results.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="rounded-xl bg-white border border-emerald-200 p-6">
              <h3 className="font-semibold text-slate-900">{c.title}</h3>
              <div className="mt-3 grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-slate-500">Objectives</div>
                  <div className="text-slate-800 mt-1 leading-relaxed">{c.obj}</div>
                </div>
                <div>
                  <div className="text-slate-500">Our Role</div>
                  <div className="text-slate-800 mt-1 leading-relaxed">{c.role}</div>
                </div>
                <div>
                  <div className="text-slate-500">Results</div>
                  <div className="text-slate-800 mt-1 leading-relaxed">{c.result}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Team() {
  const skills = [
    { title: "Public Health Strategy", desc: "Epidemiologists, policy experts, and program designers." },
    { title: "Behavioral Science", desc: "Specialists in culturally aligned engagement and nudges." },
    { title: "Clinical Partnerships", desc: "Networks across hospitals, primary care, and NGOs." },
    { title: "Data & Evaluation", desc: "Impact measurement, dashboards, and learning cycles." },
  ]
  return (
    <section id="team" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Who We Are</h2>
          <p className="text-slate-600 mt-2 max-w-3xl">An interdisciplinary team with deep local knowledge and global standards.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((s) => (
            <div key={s.title} className="rounded-xl border border-slate-200 p-6">
              <h3 className="font-semibold text-slate-900 mb-2">{s.title}</h3>
              <p className="text-slate-700 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactCTA() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">Collaborate with AWJ</h2>
          <p className="text-emerald-100 mt-2 max-w-3xl">Ready to design an impactful health initiative? Choose a quick action to get started.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          <a href="#" className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 p-6 transition backdrop-blur">
            <div className="text-lg font-semibold">Request a Proposal</div>
            <p className="text-emerald-100 mt-1 text-sm">Share your objectives and timeline to receive a tailored plan.</p>
          </a>
          <a href="#" className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 p-6 transition backdrop-blur">
            <div className="text-lg font-semibold">Book Services</div>
            <p className="text-emerald-100 mt-1 text-sm">Schedule a scoping call or onsite activation package.</p>
          </a>
          <a href="#" className="rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 p-6 transition backdrop-blur">
            <div className="text-lg font-semibold">Access Programs</div>
            <p className="text-emerald-100 mt-1 text-sm">Explore AWJ programs ready to implement in your organization.</p>
          </a>
        </div>
        <form className="mt-10 grid md:grid-cols-3 gap-4">
          <input className="px-4 py-3 rounded-lg text-slate-900" placeholder="Name" />
          <input className="px-4 py-3 rounded-lg text-slate-900" placeholder="Email" />
          <input className="px-4 py-3 rounded-lg text-slate-900" placeholder="Organization" />
          <textarea className="md:col-span-3 px-4 py-3 rounded-lg text-slate-900" placeholder="Tell us about your goals"></textarea>
          <button type="button" className="md:col-span-3 inline-flex justify-center items-center px-5 py-3 rounded-lg bg-white text-teal-700 font-semibold hover:bg-emerald-50">Send Message</button>
        </form>
        <p className="mt-6 text-emerald-100 text-sm">By submitting, you agree to be contacted by our team.</p>
      </div>
    </section>
  )
}
