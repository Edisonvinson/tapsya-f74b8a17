"use client";

const WHATSAPP_LINK =
  "https://api.whatsapp.com/send/?phone=917511193223&text&type=phone_number&app_absent=0";
const CONTACT_LINK = "https://www.hornbillspa.com/contact-us/";
const SITE_LINK = "https://www.hornbillspa.com/";

export function Hero() {
  return (
    <section id="home" className="w-full bg-white pt-0 pb-2">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: 28, minHeight: "min(560px, 70vh)" }}
        >
          {/* Background image */}
          <img
            src="/assets/hero-1.webp"
            alt="Hornbill Spa — formerly Tapasya Spa & Wellness, Kumily"
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
                "linear-gradient(90deg, rgba(0,132,109,0.95) 0%, rgba(0,132,109,0.80) 40%, rgba(0,132,109,0.28) 70%, rgba(0,132,109,0.05) 90%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex items-center min-h-[560px] md:min-h-[600px]">
            <div className="px-7 md:px-14 py-14 md:py-20 max-w-2xl">
              <span
                className="inline-flex items-center px-4 py-1.5 text-[11px] md:text-[12px] font-semibold uppercase tracking-[0.18em]"
                style={{
                  backgroundColor: "rgba(255,255,255,0.18)",
                  color: "#ffffff",
                  borderRadius: 999,
                  border: "1px solid rgba(255,255,255,0.35)",
                }}
              >
                We&apos;ve Rebranded
              </span>

              <h1 className="font-serif text-white text-[38px] md:text-[60px] lg:text-[68px] leading-[1.05] font-bold mt-5">
                Welcome to the
                <br />
                New Hornbill Spa
              </h1>

              <div className="text-white/90 text-[15px] md:text-[16px] mt-6 max-w-lg leading-[1.7] space-y-4">
                <p className="font-semibold text-white">
                  <em>Formerly Tapasya Spa, we are now Hornbill Spa.</em>
                </p>

                <p>
                  We are delighted to welcome you to a new chapter of our journey. Our brand has evolved into{" "}
                  <em>Hornbill Spa</em>, and we have relocated to a beautiful new luxury space, thoughtfully designed to provide an even more refined, relaxing, and rejuvenating wellness experience.
                </p>

                <p>
                  We invite you to explore our new home and discover our enhanced range of spa and wellness services.
                </p>

                <p>
                  <span className="block font-semibold text-white">Visit our new website:</span>
                  <a
                    href={SITE_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold underline underline-offset-4"
                  >
                    https://www.hornbillspa.com
                  </a>
                </p>

                <div className="pt-2">
                  <p className="font-semibold text-white mb-1">Important Brand Notice</p>
                  <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65]">
                    Please note that <em>Hornbill Spa (formerly Tapasya Spa)</em> has{" "}
                    <strong>no affiliation, association, or business relationship</strong> with any other spa or wellness business currently operating under the name &quot;Tapasya Spa.&quot;
                  </p>
                  <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] mt-2">
                    Any treatments, services, customer experiences, bookings, offers, or representations made by such businesses are entirely their own. <em>Hornbill Spa accepts no responsibility or liability</em> for the services, products, or customer experiences provided by any other business using the name &quot;Tapasya Spa.&quot;
                  </p>
                  <p className="text-white/85 text-[14px] md:text-[15px] leading-[1.65] mt-2">
                    We look forward to welcoming you to <em>Hornbill Spa</em>, where the trusted team you know now offers an elevated luxury wellness experience in our new location.
                  </p>
                </div>
              </div>

              <p className="text-white/90 text-[15px] md:text-[16px] mt-4 font-semibold">
                Call or WhatsApp:{" "}
                <a href="tel:+917511193223" className="underline underline-offset-4">
                  075111 93223
                </a>
              </p>

              <div className="flex flex-wrap items-center gap-3 mt-8">
                <a
                  href={CONTACT_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-[14px] font-semibold transition hover:bg-white/90"
                  style={{ color: "#00846d", borderRadius: 999 }}
                >
                  Contact Us
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center px-8 py-4 text-[14px] font-semibold text-white transition hover:bg-white/20"
                  style={{
                    borderRadius: 999,
                    border: "1.5px solid rgba(255,255,255,0.75)",
                  }}
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
