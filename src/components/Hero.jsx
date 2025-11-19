import React from "react"

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 sm:pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-emerald-200/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-[36rem] h-[36rem] rounded-full bg-teal-200/40 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
              Advancing Wellbeing Journeys across communities
            </h1>
            <p className="mt-5 text-lg text-slate-700 max-w-2xl">
              AWJ partners with governments, employers, and communities to design, scale, and measure high-impact health programs aligned with culture and national priorities.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#services" className="inline-flex items-center px-5 py-3 rounded-lg bg-teal-600 text-white font-medium hover:bg-teal-700 transition-colors">Explore Services</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-teal-700 font-medium border border-teal-200 hover:bg-teal-50 transition-colors">Request a Proposal</a>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-xl">
              {[{label:'Lives Reached',value:'2M+'},{label:'Programs Delivered',value:'120+'},{label:'Client Satisfaction',value:'98%'}].map((card)=> (
                <div key={card.label} className="bg-white rounded-xl border border-slate-200 p-4 shadow-sm">
                  <div className="text-2xl font-bold text-slate-900">{card.value}</div>
                  <div className="text-sm text-slate-600">{card.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.15),transparent_45%)]" />
              <div className="absolute inset-0 flex items-end justify-start p-6">
                <div className="bg-white/90 backdrop-blur rounded-lg p-4 max-w-sm">
                  <p className="text-sm text-slate-700">
                    From national awareness campaigns to workplace wellness and community initiatives, we deliver measurable outcomes through evidence-based design.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
