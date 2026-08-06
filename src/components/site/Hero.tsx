"use client";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=917511193223&text&type=phone_number&app_absent=0";
const CONTACT_LINK = "https://www.hornbillspa.com/contact-us/";
const SITE_LINK = "https://www.hornbillspa.com/";

export function Hero() {
  return (
    <section id="home" className="w-full bg-white pt-0 pb-2">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative overflow-hidden" style={{ borderRadius: 28 }}>
          {/* Background image */}
          <img
            src="/assets/hero-1.webp"
            alt="Hornbill Spa — formerly Hornbill Spa & Wellness, Kumily"
            width={1400}
            height={600}
            loading="eager"
            decoding="sync"
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(0,132,109,0.95) 0%, rgba(0,132,109,0.88) 55%, rgba(0,132,109,0.55) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-10 md:py-14">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
              {/* Left — headline + CTAs */}
              <div>
                <span
                  className="inline-flex items-center px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.18)",
                    color: "#ffffff",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.35)",
                  }}
                >
                  We&apos;ve Rebranded
                </span>

                <h1 className="font-serif text-white text-[34px] md:text-[50px] leading-[1.05] font-bold mt-4">
                  Hornbill is now
                  <br />
                  Hornbill Spa
                </h1>

                <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] mt-4 max-w-xl">
                  We have relocated to a beautiful new luxury space, thoughtfully designed for an
                  even more refined, relaxing, and rejuvenating wellness experience.
                </p>

                <p className="text-white text-[14px] md:text-[15px] mt-4 font-semibold">
                  Visit our new website:{" "}
                  <a
                    href={SITE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                  >
                    www.hornbillspa.com
                  </a>
                </p>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <a
                    href={CONTACT_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-7 py-3 bg-white text-[14px] font-semibold transition hover:bg-white/90"
                    style={{ color: "#00846d", borderRadius: 999 }}
                  >
                    Contact Us
                  </a>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center px-7 py-3 text-[14px] font-semibold text-white transition hover:bg-white/20"
                    style={{ borderRadius: 999, border: "1.5px solid rgba(255,255,255,0.75)" }}
                  >
                    WhatsApp Us
                  </a>
                </div>

                <p className="text-white/90 text-[14px] md:text-[15px] mt-4 font-semibold">
                  Call or WhatsApp:{" "}
                  <a href="tel:+917511193223" className="underline underline-offset-4">
                    075111 93223
                  </a>
                </p>
              </div>

              {/* Right — notice card */}
              <aside
                className="p-5 md:p-6"
                style={{
                  backgroundColor: "rgba(255,255,255,0.10)",
                  border: "1px solid rgba(255,255,255,0.35)",
                  borderRadius: 18,
                  backdropFilter: "blur(4px)",
                }}
              >
                <p
                  className="text-[11px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: "#ffe9b8" }}
                >
                  Important Brand Notice
                </p>
                <div className="mt-3 space-y-3 text-white/85 text-[13px] md:text-[13.5px] leading-[1.6]">
                  <p>
                    Please note that <em>Hornbill Spa (formerly Hornbill Spa)</em> has{" "}
                    <strong>no affiliation, association, or business relationship</strong> with any
                    other spa or wellness business currently operating under the name &quot;Hornbill
                    Spa.&quot;
                  </p>
                  <p>
                    Any treatments, services, customer experiences, bookings, offers, or
                    representations made by such businesses are entirely their own.{" "}
                    <em>Hornbill Spa accepts no responsibility or liability</em> for the services,
                    products, or customer experiences provided by any other business using that
                    name.
                  </p>
                  <p>
                    We look forward to welcoming you to <em>Hornbill Spa</em>, where the trusted
                    team you know now offers an elevated luxury wellness experience in our new
                    location.
                  </p>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
