(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/data.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ALL_SERVICES",
    ()=>ALL_SERVICES,
    "GOOGLE_REVIEWS_URL",
    ()=>GOOGLE_REVIEWS_URL,
    "SIGNATURE",
    ()=>SIGNATURE,
    "TESTIMONIALS",
    ()=>TESTIMONIALS,
    "WHATSAPP_BASE",
    ()=>WHATSAPP_BASE,
    "WHATSAPP_NUMBER",
    ()=>WHATSAPP_NUMBER,
    "slugify",
    ()=>slugify,
    "waBook",
    ()=>waBook
]);
const WHATSAPP_NUMBER = "917511193223";
const WHATSAPP_BASE = `https://wa.me/${WHATSAPP_NUMBER}`;
function waBook(treatment) {
    return `${WHATSAPP_BASE}?text=${encodeURIComponent(`Hi, I'd like to book ${treatment} at Tapasya Spa`)}`;
}
function slugify(s) {
    return s.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}
const SIGNATURE = [
    {
        name: "Tapasya Signature Massage",
        desc: "A complete full-body therapy using aromatic oils and expert techniques to restore energy flow and improve circulation.",
        durations: [
            {
                min: 60,
                price: 3750
            }
        ]
    },
    {
        name: "Sports Massage / Deep Tissue",
        desc: "Designed for muscle recovery and tension relief, using deep pressure techniques to improve mobility and reduce stiffness.",
        durations: [
            {
                min: 60,
                price: 2750
            },
            {
                min: 90,
                price: 3200
            }
        ]
    },
    {
        name: "Tapasya Balinese Massage",
        desc: "A unique blend of oil and dry massage focusing on pressure points to balance energy and rejuvenate the body.",
        durations: [
            {
                min: 60,
                price: 2900
            },
            {
                min: 90,
                price: 3400
            }
        ]
    },
    {
        name: "Facials",
        desc: "Rejuvenating skin treatments that cleanse, exfoliate, and hydrate — leaving your skin refreshed, glowing, and healthy.",
        durations: [
            {
                min: 45,
                price: 2500
            }
        ]
    }
];
const ALL_SERVICES = [
    {
        name: "Tapasya Signature Massage",
        desc: "Aroma oil full-body massage with foot reflexology, head, face & shoulder massage. Includes foot scrub, shower & detox tea.",
        durations: [
            {
                min: 60,
                price: 3750
            }
        ]
    },
    {
        name: "Sports Massage / Deep Tissue",
        desc: "Deep strokes for stiff muscles, joint pressure & stretches. Includes foot reflexology, shower & detox tea.",
        durations: [
            {
                min: 60,
                price: 2750
            },
            {
                min: 90,
                price: 3200
            }
        ]
    },
    {
        name: "Thai Traditional Massage",
        desc: "Dry stretch-based massage using passive yoga positions and acupressure. Includes foot ritual, foot care, shower & detox tea.",
        durations: [
            {
                min: 60,
                price: 3000
            },
            {
                min: 90,
                price: 3500
            }
        ]
    },
    {
        name: "Tapasya Body Scrub & Wrap",
        desc: "Sea salt or sugar scrub with aromatic essential oils. Exfoliates and hydrates for soft, smooth skin.",
        durations: [
            {
                min: 60,
                price: 3000
            }
        ]
    },
    {
        name: "Swedish Massage",
        desc: "The foundational Western spa massage. Gentle, soothing, ideal for beginners.",
        durations: [
            {
                min: 60,
                price: 2600
            },
            {
                min: 90,
                price: 3100
            }
        ]
    },
    {
        name: "Tapasya Balinese",
        desc: "Medium-pressure oil and dry massage focusing on pressure points to balance energy.",
        durations: [
            {
                min: 60,
                price: 2900
            },
            {
                min: 90,
                price: 3400
            }
        ]
    },
    {
        name: "Tapasya Foot Fix",
        desc: "Foot reflexology targeting pressure points for digestive issues, circulation, and tired or swollen feet.",
        durations: [
            {
                min: 30,
                price: 1500
            }
        ]
    },
    {
        name: "Hot Stone Massage",
        desc: "Heated stones placed on spine, chest, stomach, face, palms, and feet. Best suited for Kumily's cool climate.",
        durations: [
            {
                min: 60,
                price: 3500
            },
            {
                min: 90,
                price: 4000
            }
        ]
    },
    {
        name: "Bamboo Massage",
        desc: "Warm bamboo sticks of varying sizes with lotion and essential oil. A deep tissue and Swedish hybrid.",
        durations: [
            {
                min: 60,
                price: 5200
            },
            {
                min: 90,
                price: 6000
            }
        ]
    },
    {
        name: "Facials",
        desc: "D-TAN treatment for uneven skin tone, pigmentation and scars using O3+ Blueberry & Cranberry range.",
        durations: [
            {
                min: 45,
                price: 2500
            }
        ]
    },
    {
        name: "Aromatherapy Massage",
        desc: "Gentle strokes with lavender, peppermint, and chamomile oils. Promotes relaxation, mood, pain relief, and circulation.",
        durations: [
            {
                min: 60,
                price: 2700
            },
            {
                min: 90,
                price: 3100
            }
        ]
    },
    {
        name: "Lomi Lomi Massage",
        desc: "Traditional Hawaiian bodywork with long, flowing ocean-wave strokes using coconut or macadamia oil.",
        durations: [
            {
                min: 60,
                price: 2900
            },
            {
                min: 90,
                price: 3400
            }
        ]
    }
];
const TESTIMONIALS = [
    {
        name: "Louise Marie Letoublon",
        meta: "Local Guide · 12 reviews · 14 photos",
        when: "3 months ago",
        text: "It was one of the best massages I have received — and I live in Indonesia, just for reference! It was great from beginning to end. Extra clean, the therapist was very very good. It's very rare that I leave a review but this one deserves it. I was even able to shower after, and the lemongrass oil used for the massage smelled amazing. Thanks a lot!"
    },
    {
        name: "Uimma Uima",
        meta: "1 review · 2 photos",
        when: "9 months ago",
        text: "Best spa in Thekkady. Very clean and hygiene is maintained. Me and my girlfriends had a great time. We did facials and Swedish massage — very impressive. The staff are well trained and professional. Good hospitality."
    },
    {
        name: "Ezhil PS",
        meta: "1 review",
        when: "2 months ago",
        text: "You have the best sports therapist, honestly. The therapist was really good. I give 5/5 — the massage was really amazing and I could finally get a peaceful sleep!"
    },
    {
        name: "SenthilKumar Thangaraj",
        meta: "Local Guide · 4 reviews · 15 photos",
        when: "1 month ago",
        text: "This is the original location and the service is very professional. The owner Mr. Alex explained all types of services very humbly, listened to our requirements, and suggested the right treatment based on our needs."
    }
];
const GOOGLE_REVIEWS_URL = "https://www.google.com/search?q=tapasya+spa+kumily#lrd=0x22a7d3b0d3f69317:0x7234e2c8baa099a4,1,,,,";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Navbar",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const BRAND_GREEN = "#00846d";
const links = [
    {
        label: "About Us",
        href: "/about"
    },
    {
        label: "Services",
        href: "/services"
    },
    {
        label: "Contact",
        href: "/#contact"
    }
];
function Navbar() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            const onScroll = {
                "Navbar.useEffect.onScroll": ()=>setScrolled(window.scrollY > 20)
            }["Navbar.useEffect.onScroll"];
            onScroll();
            window.addEventListener("scroll", onScroll);
            return ({
                "Navbar.useEffect": ()=>window.removeEventListener("scroll", onScroll)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            if (searchOpen) {
                setTimeout({
                    "Navbar.useEffect": ()=>searchRef.current?.focus()
                }["Navbar.useEffect"], 50);
            }
        }
    }["Navbar.useEffect"], [
        searchOpen
    ]);
    const onSearchSubmit = (e)=>{
        e.preventDefault();
        const q = searchRef.current?.value.trim().toLowerCase() ?? "";
        setSearchOpen(false);
        if (!q) return;
        // Simple route: send any query to /services so user can scan treatments
        window.location.href = `/services#${q.replace(/\s+/g, "-")}`;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: `sticky top-0 left-0 right-0 z-40 transition-shadow duration-300 bg-white`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    backgroundColor: BRAND_GREEN
                },
                className: "text-white text-[12px] md:text-[13px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-5 md:px-8 h-9 flex items-center justify-end gap-5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "tel:07511193223",
                            className: "inline-flex items-center gap-1.5 hover:opacity-90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: "📞"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "075111 93223"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "mailto:tapasyawellnessspa@gmail.com",
                            className: "inline-flex items-center gap-1.5 hover:opacity-90",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    "aria-hidden": true,
                                    children: "✉️"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 54,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "tapasyawellnessspa@gmail.com"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 55,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "sm:hidden",
                                    children: "Email"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 53,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "hidden sm:inline opacity-50",
                            children: "|"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.instagram.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "Instagram",
                                    className: "inline-flex items-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                        size: 15,
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 60,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "https://www.facebook.com",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    "aria-label": "Facebook",
                                    className: "inline-flex items-center hover:opacity-80 transition",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                        size: 15,
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 76,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 69,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 59,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Navbar.tsx",
                    lineNumber: 48,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/Navbar.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 md:px-8 pt-2 pb-2",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: `flex items-center justify-between h-24 px-5 md:px-7 ${scrolled ? "shadow-[0_2px_20px_rgba(15,61,46,0.08)]" : ""}`,
                    style: {
                        backgroundColor: "#f5ece0",
                        borderRadius: 28
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "/#home",
                            className: "flex items-center shrink-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo.webp",
                                alt: "Tapasya Spa & Wellness",
                                width: 280,
                                height: 120,
                                decoding: "async",
                                fetchPriority: "high",
                                className: "h-[112px] md:h-[132px] w-auto block",
                                style: {
                                    background: "transparent"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Navbar.tsx",
                                lineNumber: 91,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 90,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "hidden md:flex items-center gap-1",
                            children: links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: l.href,
                                    className: "px-5 py-2 rounded-full text-[14px] font-medium transition-colors hover:bg-white/60",
                                    style: {
                                        color: "#1a1a1a"
                                    },
                                    children: l.label
                                }, l.href, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 106,
                                    columnNumber: 13
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 104,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Search",
                                    onClick: ()=>setSearchOpen((v)=>!v),
                                    className: "hidden md:inline-flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/60 transition",
                                    style: {
                                        color: BRAND_GREEN
                                    },
                                    children: searchOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18,
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 27
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 18,
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 125,
                                        columnNumber: 63
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 119,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"],
                                    target: "_blank",
                                    rel: "noreferrer",
                                    className: "hidden md:inline-flex items-center gap-2 pl-3 pr-5 py-2 rounded-full text-[13px] font-semibold text-white transition hover:opacity-90",
                                    style: {
                                        backgroundColor: BRAND_GREEN
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "inline-flex items-center justify-center w-7 h-7 rounded-full",
                                            style: {
                                                backgroundColor: "rgba(255,255,255,0.18)"
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                size: 13,
                                                strokeWidth: 2
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site/Navbar.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Navbar.tsx",
                                            lineNumber: 134,
                                            columnNumber: 13
                                        }, this),
                                        "Book Appointment"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 127,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    "aria-label": "Search",
                                    onClick: ()=>setSearchOpen((v)=>!v),
                                    className: "md:hidden p-2",
                                    style: {
                                        color: BRAND_GREEN
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                        size: 22,
                                        strokeWidth: 1.8
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 148,
                                        columnNumber: 13
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 142,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen((v)=>!v),
                                    className: "md:hidden p-2",
                                    style: {
                                        color: BRAND_GREEN
                                    },
                                    "aria-label": "Toggle menu",
                                    children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 156,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                        size: 24
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Navbar.tsx",
                                        lineNumber: 156,
                                        columnNumber: 39
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Navbar.tsx",
                                    lineNumber: 150,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 118,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Navbar.tsx",
                    lineNumber: 83,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/Navbar.tsx",
                lineNumber: 82,
                columnNumber: 7
            }, this),
            searchOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t",
                style: {
                    borderColor: "#e8dcc6",
                    backgroundColor: "#f5ece0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: onSearchSubmit,
                    className: "max-w-7xl mx-auto px-5 md:px-8 py-4 flex items-center gap-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            size: 18,
                            style: {
                                color: BRAND_GREEN
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 169,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: searchRef,
                            type: "text",
                            placeholder: "Search treatments — e.g. balinese, hot stone, facial…",
                            className: "flex-1 bg-transparent outline-none text-[15px]",
                            style: {
                                color: "#1a1a1a"
                            }
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 170,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            className: "px-4 py-2 rounded-full text-[12px] font-semibold uppercase tracking-[0.06em] text-white",
                            style: {
                                backgroundColor: BRAND_GREEN
                            },
                            children: "Go"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 177,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Navbar.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/Navbar.tsx",
                lineNumber: 164,
                columnNumber: 9
            }, this),
            open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden border-t",
                style: {
                    borderColor: "#e8dcc6",
                    backgroundColor: "#f5ece0"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col px-6 py-6 gap-5",
                    children: [
                        links.map((l)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: l.href,
                                onClick: ()=>setOpen(false),
                                className: "text-[16px]",
                                style: {
                                    color: "#1a1a1a"
                                },
                                children: l.label
                            }, l.href, false, {
                                fileName: "[project]/src/components/site/Navbar.tsx",
                                lineNumber: 192,
                                columnNumber: 15
                            }, this)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"],
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex justify-center items-center px-5 py-3 text-[14px] font-semibold uppercase tracking-[0.06em] rounded-full text-white",
                            style: {
                                backgroundColor: BRAND_GREEN
                            },
                            children: "Book Appointment"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Navbar.tsx",
                            lineNumber: 202,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Navbar.tsx",
                    lineNumber: 190,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/Navbar.tsx",
                lineNumber: 189,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/Navbar.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(Navbar, "oAa3NVrspJyudhxZkbExLDVtL5k=");
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
"use client";
;
;
;
function Footer() {
    const firstHalf = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_SERVICES"].slice(0, 6);
    const secondHalf = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ALL_SERVICES"].slice(6, 12);
    // Map footer service names → exact treatment slugs on /services page
    const NAME_TO_SLUG = {
        "Tapasya Signature Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Tapasya Signature Massage"),
        "Sports Massage / Deep Tissue": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Sports Massage / Deep Tissue"),
        "Thai Traditional Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Traditional Thai Massage"),
        "Tapasya Body Scrub & Wrap": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Tapasya Body Scrub & Wrap"),
        "Swedish Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Swedish Massage"),
        "Tapasya Balinese": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Tapasya Balinese Massage"),
        "Tapasya Foot Fix": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Tapasya Foot Fix (Reflexology)"),
        "Hot Stone Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Hot Stone Healing Therapy"),
        "Bamboo Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Warm Bamboo Therapy"),
        "Facials": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Advanced Radiance Facial"),
        "Aromatherapy Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Aromatherapy Healing Massage"),
        "Lomi Lomi Massage": (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])("Hawaiian Lomi Lomi Massage")
    };
    const linkFor = (name)=>`/services#${NAME_TO_SLUG[name] ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(name)}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "text-white",
        style: {
            backgroundColor: "#00846d"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 md:grid-cols-[1.8fr_1.2fr_1.2fr_1.4fr] gap-10 md:gap-10 items-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col items-center md:items-start",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/logo-white.webp",
                                alt: "Tapasya Spa & Wellness",
                                width: 420,
                                height: 240,
                                loading: "eager",
                                decoding: "async",
                                fetchPriority: "high",
                                className: "h-[190px] md:h-[224px] w-auto block",
                                style: {
                                    background: "transparent"
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-4 text-center md:text-left",
                                style: {
                                    fontSize: 15,
                                    lineHeight: 1.7,
                                    color: "#ffffff"
                                },
                                children: "Kumily's trusted spa for Western, Ayurvedic & Asian therapies."
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 44,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("address", {
                                className: "mt-4 not-italic text-center md:text-left",
                                style: {
                                    fontSize: 14,
                                    lineHeight: 1.7,
                                    color: "rgba(255,255,255,0.92)"
                                },
                                children: [
                                    "J575+5J7, Valiyakandam, Chelimada,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/site/Footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 13
                                    }, this),
                                    "Thekkady, Kumily, Kerala 685509",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block mt-2",
                                        style: {
                                            fontSize: 12.5,
                                            color: "rgba(255,255,255,0.78)"
                                        },
                                        children: "250m from Elephant Camp · 850m from Periyar Boat Ticket Counter"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/Footer.tsx",
                                        lineNumber: 57,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Footer.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "column-header uppercase",
                                style: {
                                    fontSize: 12,
                                    letterSpacing: "0.22em",
                                    fontWeight: 700,
                                    color: "#ffe9b8",
                                    marginBottom: 18
                                },
                                children: "Services"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 68,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: firstHalf.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: linkFor(s.name),
                                            className: "transition hover:text-white",
                                            style: {
                                                fontSize: 15,
                                                lineHeight: 2,
                                                color: "rgba(255,255,255,0.88)"
                                            },
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Footer.tsx",
                                            lineNumber: 83,
                                            columnNumber: 17
                                        }, this)
                                    }, s.name, false, {
                                        fileName: "[project]/src/components/site/Footer.tsx",
                                        lineNumber: 82,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Footer.tsx",
                        lineNumber: 67,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "services-column",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                "aria-hidden": true,
                                style: {
                                    height: 30,
                                    marginBottom: 0
                                },
                                className: "hidden md:block"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-1",
                                children: secondHalf.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: linkFor(s.name),
                                            className: "transition hover:text-white",
                                            style: {
                                                fontSize: 15,
                                                lineHeight: 2,
                                                color: "rgba(255,255,255,0.88)"
                                            },
                                            children: s.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Footer.tsx",
                                            lineNumber: 101,
                                            columnNumber: 17
                                        }, this)
                                    }, s.name, false, {
                                        fileName: "[project]/src/components/site/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Footer.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "column-header uppercase",
                                style: {
                                    fontSize: 12,
                                    letterSpacing: "0.22em",
                                    fontWeight: 700,
                                    color: "#ffe9b8",
                                    marginBottom: 18
                                },
                                children: "Connect"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mb-5",
                                children: [
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                        href: "#"
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"],
                                        href: "#"
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"],
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]
                                    },
                                    {
                                        Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
                                        href: "mailto:tapasyawellnessspa@gmail.com"
                                    }
                                ].map(({ Icon, href }, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: href,
                                        target: href.startsWith("http") ? "_blank" : undefined,
                                        rel: "noreferrer",
                                        className: "w-10 h-10 border flex items-center justify-center transition rounded-sm hover:bg-white/10",
                                        style: {
                                            borderColor: "rgba(255,255,255,0.6)",
                                            color: "#ffffff"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                            size: 16,
                                            strokeWidth: 1.5
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/Footer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 17
                                        }, this)
                                    }, i, false, {
                                        fileName: "[project]/src/components/site/Footer.tsx",
                                        lineNumber: 134,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "mailto:tapasyawellnessspa@gmail.com",
                                className: "transition hover:text-white",
                                style: {
                                    fontSize: 15,
                                    color: "rgba(255,255,255,0.92)"
                                },
                                children: "tapasyawellnessspa@gmail.com"
                            }, void 0, false, {
                                fileName: "[project]/src/components/site/Footer.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site/Footer.tsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site/Footer.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-t",
                style: {
                    borderColor: "rgba(255,255,255,0.2)"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row gap-3 justify-between",
                    style: {
                        fontSize: 13,
                        color: "rgba(255,255,255,0.8)"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                color: "rgba(255,255,255,0.8)",
                                fontSize: 13
                            },
                            children: "© 2025 Tapasya Spa & Wellness. All rights reserved."
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/Footer.tsx",
                            lineNumber: 161,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition",
                                    style: {
                                        color: "rgba(255,255,255,0.8)"
                                    },
                                    children: "Privacy Policy"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Footer.tsx",
                                    lineNumber: 165,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#",
                                    className: "hover:text-white transition",
                                    style: {
                                        color: "rgba(255,255,255,0.8)"
                                    },
                                    children: "Terms & Conditions"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/Footer.tsx",
                                    lineNumber: 168,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/Footer.tsx",
                            lineNumber: 164,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/Footer.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/Footer.tsx",
                lineNumber: 156,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site/Footer.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site/WhatsAppWidget.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "WhatsAppWidget",
    ()=>WhatsAppWidget
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const QUICK = [
    {
        q: "💆 What treatments do you offer?",
        reply: "We offer 12+ treatments including Signature Massage, Hot Stone, Bamboo, Thai, Balinese, Swedish, Aromatherapy, Lomi Lomi, Deep Tissue, Foot Fix, Body Scrub & Facials.",
        cta: {
            label: "See All Treatments on WhatsApp →",
            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]}?text=${encodeURIComponent("Hi, I'd like to know more about your treatments")}`
        }
    },
    {
        q: "💰 What are your prices?",
        reply: "Our prices range from ₹1,500 (Foot Fix, 30 min) to ₹6,000 (Bamboo Massage, 90 min). Couples packages start at ₹9,500.",
        cta: {
            label: "Get Full Price List →",
            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]}?text=${encodeURIComponent("Hi, can you share the full price list?")}`
        }
    },
    {
        q: "⏰ What are your timings?",
        reply: "Please reach out to us directly and we'll confirm availability for your preferred time 🕐",
        cta: {
            label: "Ask on WhatsApp →",
            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]}?text=${encodeURIComponent("Hi, what are your working hours?")}`
        }
    },
    {
        q: "📍 Where are you located?",
        reply: "We're at Valiyakandam, Chelimada, Thekkady, Kumily — just 250m from the Elephant Camp and 850m from the Periyar boat counter. 📍",
        cta: {
            label: "Chat with Us →",
            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]}?text=${encodeURIComponent("Hi, I need directions to Tapasya Spa")}`
        }
    },
    {
        q: "📅 I want to book an appointment",
        reply: "Great! Tap below and we'll confirm your slot right away 🙌",
        cta: {
            label: "Book on WhatsApp →",
            href: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"]}?text=${encodeURIComponent("Hi, I'd like to book an appointment at Tapasya Spa")}`
        }
    }
];
function WhatsAppWidget() {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [bounce, setBounce] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [active, setActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhatsAppWidget.useEffect": ()=>{
            const t = setTimeout({
                "WhatsAppWidget.useEffect.t": ()=>setBounce(true)
            }["WhatsAppWidget.useEffect.t"], 4000);
            const t2 = setTimeout({
                "WhatsAppWidget.useEffect.t2": ()=>setBounce(false)
            }["WhatsAppWidget.useEffect.t2"], 6000);
            return ({
                "WhatsAppWidget.useEffect": ()=>{
                    clearTimeout(t);
                    clearTimeout(t2);
                }
            })["WhatsAppWidget.useEffect"];
        }
    }["WhatsAppWidget.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `fixed z-50 bottom-0 right-0 md:bottom-24 md:right-6 w-full md:w-[380px] origin-bottom-right transition-all duration-300 ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "md:rounded-2xl rounded-t-2xl shadow-2xl overflow-hidden border flex flex-col max-h-[80vh]",
                    style: {
                        backgroundColor: "#faf7f2",
                        borderColor: "#b89b64"
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 flex items-center gap-3",
                            style: {
                                backgroundColor: "#00846d",
                                color: "#ffffff"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: "/logo.png",
                                    alt: "",
                                    loading: "lazy",
                                    decoding: "async",
                                    className: "h-[28px] w-auto"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "font-serif text-[16px] leading-tight text-white",
                                            children: "Tapasya Spa & Wellness"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-[11px] text-white/75 flex items-center gap-1.5",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "w-1.5 h-1.5 rounded-full bg-green-400"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                                    lineNumber: 86,
                                                    columnNumber: 17
                                                }, this),
                                                "Typically replies instantly"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 85,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setOpen(false),
                                    className: "text-white/75 hover:text-white",
                                    "aria-label": "Close",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        size: 18
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                        lineNumber: 91,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto p-4",
                            style: {
                                backgroundColor: "#faf7f2"
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white rounded-2xl rounded-tl-sm p-3.5 text-[14px] max-w-[85%] shadow-sm",
                                    style: {
                                        color: "#1a1a1a",
                                        borderLeft: "3px solid #ab8c4a"
                                    },
                                    children: "👋 Hi! Welcome to Tapasya Spa. How can we help you today?"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                    lineNumber: 96,
                                    columnNumber: 13
                                }, this),
                                active === null ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 space-y-2",
                                    children: QUICK.map((q, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive(i),
                                            className: "block w-full text-left rounded-full px-4 py-2.5 text-[14px] border transition",
                                            style: {
                                                backgroundColor: "#f2ede4",
                                                borderColor: "#ab8c4a",
                                                color: "#00846d"
                                            },
                                            onMouseEnter: (e)=>{
                                                e.currentTarget.style.backgroundColor = "#ab8c4a";
                                                e.currentTarget.style.color = "#ffffff";
                                            },
                                            onMouseLeave: (e)=>{
                                                e.currentTarget.style.backgroundColor = "#f2ede4";
                                                e.currentTarget.style.color = "#00846d";
                                            },
                                            children: q.q
                                        }, i, false, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 106,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                    lineNumber: 104,
                                    columnNumber: 15
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 ml-auto rounded-2xl rounded-tr-sm p-3.5 text-[14px] max-w-[85%]",
                                            style: {
                                                backgroundColor: "rgba(171,140,74,0.15)",
                                                color: "#1a1a1a"
                                            },
                                            children: QUICK[active].q
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 126,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-3 rounded-2xl rounded-tl-sm p-3.5 text-[14px] max-w-[88%] shadow-sm",
                                            style: {
                                                backgroundColor: "#f2ede4",
                                                color: "#1a1a1a",
                                                borderLeft: "3px solid #ab8c4a"
                                            },
                                            children: [
                                                QUICK[active].reply,
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: QUICK[active].cta.href,
                                                    target: "_blank",
                                                    rel: "noreferrer",
                                                    className: "block mt-3 text-center text-white text-[13px] font-semibold uppercase tracking-[0.06em] py-2.5 rounded-sm hover:opacity-90",
                                                    style: {
                                                        backgroundColor: "#ab8c4a"
                                                    },
                                                    children: QUICK[active].cta.label
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                                    lineNumber: 137,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setActive(null),
                                            className: "mt-3 inline-flex items-center gap-1 text-[13px] hover:underline",
                                            style: {
                                                color: "#7e7038"
                                            },
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                                    size: 12
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                                    lineNumber: 152,
                                                    columnNumber: 19
                                                }, this),
                                                " Back to questions"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                            lineNumber: 95,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WHATSAPP_BASE"],
                            target: "_blank",
                            rel: "noreferrer",
                            className: "block bg-[#25D366] text-white text-center text-[14px] font-semibold py-3.5 hover:bg-[#20bd5a] transition",
                            children: "Chat directly on WhatsApp →"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                    lineNumber: 80,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setOpen((v)=>!v),
                "aria-label": "Open WhatsApp chat",
                className: `fixed z-50 bottom-5 right-5 md:bottom-6 md:right-6 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_rgba(37,211,102,0.45)] hover:scale-105 transition-transform ${bounce ? "bounce-attn" : ""}`,
                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                    size: 24
                }, void 0, false, {
                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                    lineNumber: 176,
                    columnNumber: 17
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    size: 26,
                    fill: "currentColor",
                    strokeWidth: 0
                }, void 0, false, {
                    fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                    lineNumber: 176,
                    columnNumber: 35
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site/WhatsAppWidget.tsx",
                lineNumber: 169,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(WhatsAppWidget, "THxFtzBKd/MznJTKjeeRPN89pdY=");
_c = WhatsAppWidget;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppWidget");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/services/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ServicesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/Navbar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/Footer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$WhatsAppWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site/WhatsAppWidget.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/data.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Curated luxury spa imagery (Unsplash) — one per treatment
const TREATMENT_IMAGES = {
    "tapasya-signature-massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Signature-scaled.jpeg",
    "tapasya-balinese-massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Balinese-scaled.jpeg",
    "tapasya-balinese": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Balinese-scaled.jpeg",
    "hawaiian-lomi-lomi-massage": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=75",
    "lomi-lomi-massage": "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&fit=crop&w=800&q=75",
    "sports-massage-deep-tissue": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Sports-scaled.jpeg",
    "sports-massage-slash-deep-tissue": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Sports-scaled.jpeg",
    "traditional-thai-massage": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=75",
    "thai-traditional-massage": "https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&w=800&q=75",
    "swedish-massage": "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=75",
    "hot-stone-healing-therapy": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/2243.webp",
    "hot-stone-massage": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/2243.webp",
    "warm-bamboo-therapy": "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=800&q=75",
    "bamboo-massage": "https://images.unsplash.com/photo-1620733723572-11c53f73a416?auto=format&fit=crop&w=800&q=75",
    "aromatherapy-healing-massage": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=75",
    "aromatherapy-massage": "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=75",
    "tapasya-foot-fix-reflexology": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/141533975-1.webp",
    "tapasya-foot-fix": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/141533975-1.webp",
    "tapasya-body-scrub-and-wrap": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/best-body-scrub-massage-in-chennai-river-day-spa.webp",
    "advanced-radiance-facial": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Facial-scaled.jpeg",
    "facials": "https://www.graymatterdubai.com/wp-content/uploads/2026/04/Facial-scaled.jpeg"
};
const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=75";
const CATEGORIES = [
    {
        id: "signature-and-fusion",
        title: "Signature & Fusion Treatments",
        focus: "Unique experiences exclusive to Tapasya.",
        treatments: [
            {
                name: "Tapasya Signature Massage",
                priceLine: "₹3,750 (45 Min) · Price inclusive of all taxes",
                description: "Experience a masterfully choreographed therapy where our experts blend premium aroma oils for a full-body journey. Using a skillful combination of short and long strokes, this treatment targets deep-seated stress while restoring your body's natural energy flow. From the detailed foot reflexology to the calming head and face massage, every minute is designed to improve circulation and provide total rejuvenation.",
                inclusions: "60-min Signature Massage, 15-min Foot Scrub, Refreshing Shower, and Signature Detox Tea.",
                bestFor: "Total relaxation, improving blood flow, and restoring energy balance."
            },
            {
                name: "Tapasya Balinese Massage",
                priceLine: "₹2,900 (60 Min) | ₹3,400 (90 Min) · Prices inclusive of all taxes",
                description: "Experience a world-class fusion of traditional dry Thai stretching and the soothing flow of a medium-pressure oil massage. This unique therapy is specifically designed to provide the new energy your body needs after a long journey. By focusing on vital pressure points, our therapists help rebalance your internal energy while the oil-based strokes melt away muscle tension. It is the ideal choice for those who want the invigorating benefits of a Thai massage combined with the relaxation of an aromatic oil therapy.",
                inclusions: "Fusion Balinese Massage (Dry + Oil), Signature Aroma Oil, and access to a relaxing hot shower.",
                bestFor: "Balancing energy levels, deep muscle relaxation, and total body revitalization."
            },
            {
                name: "Hawaiian Lomi Lomi Massage",
                priceLine: "₹2,900 (60 Min) | ₹3,400 (90 Min) · Prices inclusive of all taxes",
                description: "Lomi Lomi is a sacred Hawaiian bodywork technique that translates to \"loving hands.\" Known for its unique, flowing rhythmic strokes that mimic the gentle ebbs and flows of ocean waves, this massage provides a deeply nurturing experience. Our therapists utilize long, continuous forearm strokes, kneading, and gentle stretching to release tension throughout the entire body. Infused with pure Coconut or Macadamia oils, this therapy not only calms the mind but leaves your skin deeply nourished and silky smooth.",
                inclusions: "Traditional Lomi Lomi session, Nourishing Coconut/Macadamia oil blend, and a Refreshing Hot Shower.",
                features: "Uses intuitive, rhythmic strokes to harmonize the body's energy and improve skin elasticity.",
                bestFor: "Deep emotional relaxation, intense skin nourishment, and those seeking a unique, rhythmic massage experience."
            }
        ]
    },
    {
        id: "global-therapeutic",
        title: "Global Therapeutic Massages",
        focus: "Proven international techniques for specific body needs.",
        treatments: [
            {
                name: "Sports Massage / Deep Tissue",
                priceLine: "₹2,750 (60 Min) | ₹3,200 (90 Min) · Prices inclusive of all taxes",
                description: "Engineered specifically for gym professionals, athletes, and trekkers, this therapy goes beyond relaxation to provide structural relief. Our therapists utilize deep, concentrated strokes to loosen stiff muscle fibers and improve localized blood flow. By applying targeted pressure to key joints and incorporating passive stretches, this treatment creates a perfect wellness balance, effectively preventing lactic acid buildup after intensive physical activity or long treks.",
                inclusions: "Deep Tissue Massage, Foot Reflexology, Refreshing Shower, and Signature Detox Tea.",
                bestFor: "Muscle recovery, joint flexibility, and relief from chronic physical tension."
            },
            {
                name: "Traditional Thai Massage",
                priceLine: "₹3,000 (60 Min) | ₹3,500 (90 Min) · Prices inclusive of all taxes",
                description: "This ancient healing art is a completely dry, oil-free therapy designed to unlock your body's hidden flexibility. Our expert therapists perform a sequence of rhythmic stretches and pulls, moving your body into guided yoga positions to achieve a deep, invigorating acupressure effect. It is the perfect treatment to realign your posture and release joint tension after a long journey.",
                inclusions: "Thai Massage session, traditional Foot Ritual, complete Foot Care, Refreshing Shower, and Signature Detox Tea.",
                bestFor: "Improving range of motion, relieving back pain, and increasing overall energy levels."
            },
            {
                name: "Swedish Massage",
                priceLine: "₹2,600 (60 Min) | ₹3,100 (90 Min) · Prices inclusive of all taxes",
                description: "Recognized as the foundation of Western spa therapy and widely popular across Europe, the Swedish massage is our top recommendation for spa beginners. This session utilizes long, gliding strokes and gentle kneading to melt away surface tension. Infused with therapeutic essential oils, this massage is specifically designed to comfort sore muscles, calm the nervous system, and rejuvenate the mind after a long day of travel.",
                inclusions: "Classic Swedish Massage, selection of therapeutic oils, and access to a relaxing hot shower.",
                bestFor: "Stress relief, beginners, and those seeking a gentle yet effective full-body refresh."
            },
            {
                name: "Hot Stone Healing Therapy",
                priceLine: "₹3,500 (60 Min) | ₹4,000 (90 Min) · Prices inclusive of all taxes",
                description: "This luxurious thermal therapy is the ultimate comfort for cold weather. Polished volcanic stones are heated to a precise temperature and strategically placed on key energy centers—including the spine, palms, and feet—to radiate warmth deep into the muscle tissue. Our therapists then use the heated stones as an extension of their hands, utilizing Swedish techniques like long strokes, kneading, and circular movements to melt away deep-seated tension and restore your body's natural rhythm.",
                inclusions: "Targeted placement on 7 key zones (Spine, Stomach, Face, Chest, Palms, Feet & Toes), Heated Stone Massage, and Relaxing Shower.",
                techniques: "Effleurage (Long strokes), Kneading, Vibration, and Thermal Point Therapy.",
                bestFor: "Chronic pain relief, improving circulation, and deep relaxation in cool climates."
            },
            {
                name: "Warm Bamboo Therapy",
                priceLine: "₹5,200 (60 Min) | ₹6,000 (90 Min) · Prices inclusive of all taxes",
                description: "This unique and powerful therapy represents the perfect marriage of Swedish relaxation and Deep Tissue precision. Using hollow bamboo stalks of various sizes, heated to a soothing temperature, our therapists roll and knead the muscles to reach depths that hands alone cannot achieve. Infused with professional-grade lotions and essential oils, the warm bamboo acts as a deep-tissue tool to instantly dissolve stubborn knots, improve lymphatic drainage, and leave you with a profound sense of lightness.",
                inclusions: "Heated Bamboo Session, selection of Therapeutic Essential Oils, Deep Tissue manipulation, and Refreshing Shower.",
                features: "Uses bamboo stalks of different diameters to target specific muscle groups with precision.",
                bestFor: "Releasing deep muscle tension, physical detoxification, and those who enjoy intense thermal relief."
            }
        ]
    },
    {
        id: "wellness-and-holistic",
        title: "Wellness & Holistic Healing",
        focus: "Emotional well-being and targeted relief.",
        treatments: [
            {
                name: "Aromatherapy Healing Massage",
                priceLine: "₹2,700 (60 Min) | ₹3,100 (90 Min) · Prices inclusive of all taxes",
                description: "This delicate therapy is designed for those seeking deep emotional and physical relaxation. By incorporating pure, therapeutic-grade essential oils, our therapists use gentle strokes, rhythmic kneading, and precise pressure point manipulation to release stress. Whether you choose the calming properties of Lavender, the refreshing energy of Peppermint, or the soothing touch of Chamomile, this treatment works in harmony with your senses to promote a profound sense of well-being and inner peace.",
                inclusions: "Professional Aromatherapy session, choice of premium essential oils (Lavender, Peppermint, or Chamomile), and Signature Detox Tea.",
                benefits: "Instant mood enhancement, emotional healing, pain relief, and enhanced blood circulation.",
                bestFor: "Stress management, sleep improvement, and gentle full-body rejuvenation."
            },
            {
                name: "Tapasya Foot Fix (Reflexology)",
                priceLine: "₹1,500 (30 Min) · Price inclusive of all taxes",
                description: "In a land of treks and jungle safaris, your feet carry the weight of your adventure. Tapasya Foot Fix is a specialized reflexology session that goes beyond a simple rub. By stimulating specific pressure points throughout the foot, this ancient therapy triggers a healing response throughout the entire body. It is an essential treatment for restoring vital energy and finding relief after a long day of exploring Kumily's natural beauty.",
                inclusions: "30-minute intensive Reflexology session, aromatic foot soak, and refreshing finish.",
                recommended: "Relieving swollen or tired feet, improving blood circulation, and aiding digestive health."
            }
        ]
    },
    {
        id: "body-and-skin",
        title: "Body Scrubs & Skin Radiance",
        focus: "Exfoliation and professional skincare.",
        treatments: [
            {
                name: "Tapasya Body Scrub & Wrap",
                priceLine: "₹3,000 (60 Min) · Price inclusive of all taxes",
                description: "This dual-action treatment is the ultimate secret to soft, glowing skin. Choose between a Superfine Sea Salt or Organic Sugar base, expertly mixed with our signature aromatic essential oils. Our therapists perform a deep exfoliation to remove toxins and dead skin cells, followed by a nourishing wrap that locks in moisture. This session is designed to hydrate the deepest layers of your skin, leaving it feeling silk-smooth and completely refreshed.",
                inclusions: "Choice of Sea Salt or Sugar Scrub, Mineral-rich Body Wrap, and moisturizing finish.",
                bestFor: "Deep detoxification, skin hydration, and achieving a healthy \"holiday glow.\""
            },
            {
                name: "Advanced Radiance Facial",
                priceLine: "₹2,500 (45 Min) · Price inclusive of all taxes",
                description: "Specifically designed to combat tanned and uneven skin tones, this advanced facial treatment uses oxygenating elements to restore instant radiance to your complexion. We exclusively utilize professional-grade O3+ D-TAN technology, enriched with Blueberry and Cranberry extracts, to target deep pigmentation and help eliminate the appearance of scars. It is the perfect clinical-grade refresh for travelers looking to brighten their skin and repair environmental damage.",
                inclusions: "Professional skin analysis, O3+ D-TAN Blueberry/Cranberry treatment, and pore-refining finish.",
                products: "Genuine O3+ professional skincare range.",
                bestFor: "Tan removal, evening out skin tone, and eliminating pigmentation/scars."
            }
        ]
    }
];
function ServicesPage() {
    _s();
    // Smooth-scroll to hash on load (accounting for sticky navbar)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ServicesPage.useEffect": ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            const scrollToHash = {
                "ServicesPage.useEffect.scrollToHash": ()=>{
                    const hash = window.location.hash;
                    if (!hash) return;
                    const el = document.getElementById(hash.slice(1));
                    if (el) {
                        const top = el.getBoundingClientRect().top + window.scrollY - 110;
                        window.scrollTo({
                            top,
                            behavior: "smooth"
                        });
                    }
                }
            }["ServicesPage.useEffect.scrollToHash"];
            // Delay to allow layout
            const t = setTimeout(scrollToHash, 80);
            window.addEventListener("hashchange", scrollToHash);
            return ({
                "ServicesPage.useEffect": ()=>{
                    clearTimeout(t);
                    window.removeEventListener("hashchange", scrollToHash);
                }
            })["ServicesPage.useEffect"];
        }
    }["ServicesPage.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "bg-background text-foreground",
        style: {
            scrollBehavior: "smooth"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Navbar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Navbar"], {}, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "services-top",
                style: {
                    backgroundImage: "linear-gradient(rgba(0,132,109,0.86), rgba(0,132,109,0.86)), url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=70')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                },
                className: "pt-20 pb-16 md:pt-24 md:pb-20 text-white",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-5xl mx-auto px-6 md:px-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "eyebrow",
                            style: {
                                color: "#b89b64",
                                letterSpacing: "0.2em",
                                fontSize: 13
                            },
                            children: "Our Treatments"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 260,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "font-serif font-bold mt-3",
                            style: {
                                color: "#ffffff",
                                fontSize: "clamp(32px, 5vw, 52px)",
                                lineHeight: 1.15
                            },
                            children: "Services & Therapies"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 266,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-5 mx-auto",
                            style: {
                                color: "#d4c9b0",
                                fontSize: 17,
                                lineHeight: 1.8,
                                maxWidth: 720
                            },
                            children: "From signature fusions to globally proven techniques — every Tapasya treatment is designed to restore balance, ease tension, and leave you feeling renewed."
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 272,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-8 flex flex-wrap justify-center gap-3",
                            children: CATEGORIES.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `#${c.id}`,
                                    className: "transition",
                                    style: {
                                        fontSize: 13,
                                        fontWeight: 600,
                                        letterSpacing: "0.06em",
                                        textTransform: "uppercase",
                                        padding: "9px 16px",
                                        borderRadius: 3,
                                        border: "1.5px solid #ffffff",
                                        color: "#ffffff"
                                    },
                                    onMouseEnter: (e)=>{
                                        e.currentTarget.style.background = "#ffffff";
                                        e.currentTarget.style.color = "#00846d";
                                    },
                                    onMouseLeave: (e)=>{
                                        e.currentTarget.style.background = "transparent";
                                        e.currentTarget.style.color = "#ffffff";
                                    },
                                    children: c.title
                                }, c.id, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 283,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 281,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 249,
                columnNumber: 7
            }, this),
            CATEGORIES.map((cat, ci)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    id: cat.id,
                    className: "py-16 md:py-20",
                    style: {
                        backgroundImage: `linear-gradient(${ci % 2 === 0 ? "rgba(250,247,242,0.92), rgba(250,247,242,0.92)" : "rgba(245,241,235,0.92), rgba(245,241,235,0.92)"}), url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=70')`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundAttachment: "fixed",
                        scrollMarginTop: 110
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-6 md:px-10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-12",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "eyebrow",
                                        style: {
                                            color: "#ab8c4a",
                                            letterSpacing: "0.2em",
                                            fontSize: 13
                                        },
                                        children: cat.focus
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 333,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "font-serif font-bold mt-2",
                                        style: {
                                            color: "#00846d",
                                            fontSize: "clamp(26px, 3.5vw, 40px)",
                                            lineHeight: 1.2
                                        },
                                        children: cat.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 339,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        "aria-hidden": true,
                                        className: "mx-auto mt-5",
                                        style: {
                                            width: 56,
                                            height: 2,
                                            backgroundColor: "#ab8c4a"
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 345,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 332,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
                                children: cat.treatments.map((t)=>{
                                    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["slugify"])(t.name);
                                    const img = TREATMENT_IMAGES[id] ?? FALLBACK_IMAGE;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TreatmentCard, {
                                        id: id,
                                        treatment: t,
                                        image: img
                                    }, id, false, {
                                        fileName: "[project]/src/app/services/page.tsx",
                                        lineNumber: 357,
                                        columnNumber: 19
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/app/services/page.tsx",
                                lineNumber: 352,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 331,
                        columnNumber: 11
                    }, this)
                }, cat.id, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 315,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$Footer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 365,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2f$WhatsAppWidget$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WhatsAppWidget"], {}, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 366,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 245,
        columnNumber: 5
    }, this);
}
_s(ServicesPage, "OD7bBpZva5O2jO+Puf00hKivP7c=");
_c = ServicesPage;
function TreatmentCard({ id, treatment: t, image }) {
    _s1();
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        id: id,
        className: "bg-white rounded-sm overflow-hidden flex flex-col h-full",
        style: {
            boxShadow: "0 2px 16px rgba(14,60,44,0.06)",
            borderLeft: "3px solid #ab8c4a",
            scrollMarginTop: 110
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full overflow-hidden",
                style: {
                    aspectRatio: "16 / 10"
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: image,
                    alt: t.name,
                    width: 800,
                    height: 500,
                    loading: "lazy",
                    decoding: "async",
                    fetchPriority: "low",
                    className: "w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                }, void 0, false, {
                    fileName: "[project]/src/app/services/page.tsx",
                    lineNumber: 393,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 392,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 md:p-8 flex flex-col flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif font-semibold",
                        style: {
                            color: "#00846d",
                            fontSize: 22,
                            lineHeight: 1.25
                        },
                        children: t.name
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 406,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2",
                        style: {
                            color: "#ab8c4a",
                            fontSize: 13,
                            fontWeight: 700,
                            letterSpacing: "0.04em"
                        },
                        children: t.priceLine
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 412,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            color: "#4a4a3a",
                            fontSize: 15,
                            lineHeight: 1.75
                        },
                        className: `mt-4 mb-2 ${expanded ? "" : "line-clamp-3"}`,
                        children: t.description
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 425,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>setExpanded((v)=>!v),
                        className: "self-start mb-4",
                        style: {
                            color: "#ab8c4a",
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: "0.12em",
                            textTransform: "uppercase",
                            padding: "4px 0"
                        },
                        children: expanded ? "Show Less −" : "Show More +"
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 432,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `overflow-hidden transition-all duration-300 ${expanded ? "max-h-[2000px]" : "max-h-0"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dl", {
                            className: "grid gap-3 mb-6 mt-2 md:mt-3",
                            children: [
                                t.inclusions && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Inclusions",
                                    value: t.inclusions
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 455,
                                    columnNumber: 30
                                }, this),
                                t.features && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Special Features",
                                    value: t.features
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 456,
                                    columnNumber: 28
                                }, this),
                                t.techniques && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Techniques Used",
                                    value: t.techniques
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 457,
                                    columnNumber: 30
                                }, this),
                                t.benefits && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Key Benefits",
                                    value: t.benefits
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 458,
                                    columnNumber: 28
                                }, this),
                                t.products && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Featured Products",
                                    value: t.products
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 459,
                                    columnNumber: 28
                                }, this),
                                t.recommended && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Recommended For",
                                    value: t.recommended
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 460,
                                    columnNumber: 31
                                }, this),
                                t.bestFor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DetailRow, {
                                    label: "Best For",
                                    value: t.bestFor
                                }, void 0, false, {
                                    fileName: "[project]/src/app/services/page.tsx",
                                    lineNumber: 461,
                                    columnNumber: 27
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 449,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-auto pt-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$data$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["waBook"])(t.name),
                            target: "_blank",
                            rel: "noreferrer",
                            className: "inline-flex items-center justify-center transition",
                            style: {
                                padding: "11px 22px",
                                fontSize: 13,
                                fontWeight: 600,
                                letterSpacing: "0.06em",
                                textTransform: "uppercase",
                                borderRadius: 3,
                                background: "#ab8c4a",
                                color: "#ffffff"
                            },
                            onMouseEnter: (e)=>e.currentTarget.style.background = "#8a6f31",
                            onMouseLeave: (e)=>e.currentTarget.style.background = "#ab8c4a",
                            children: "Book This Treatment"
                        }, void 0, false, {
                            fileName: "[project]/src/app/services/page.tsx",
                            lineNumber: 466,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/services/page.tsx",
                        lineNumber: 465,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 405,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 383,
        columnNumber: 5
    }, this);
}
_s1(TreatmentCard, "DuL5jiiQQFgbn7gBKAyxwS/H4Ek=");
_c1 = TreatmentCard;
function DetailRow({ label, value }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-1 md:grid-cols-[140px_1fr] gap-1 md:gap-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dt", {
                style: {
                    color: "#ab8c4a",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    paddingTop: 2
                },
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 495,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("dd", {
                style: {
                    color: "#1a1a1a",
                    fontSize: 14.5,
                    lineHeight: 1.7
                },
                children: value
            }, void 0, false, {
                fileName: "[project]/src/app/services/page.tsx",
                lineNumber: 507,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/services/page.tsx",
        lineNumber: 494,
        columnNumber: 5
    }, this);
}
_c2 = DetailRow;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ServicesPage");
__turbopack_context__.k.register(_c1, "TreatmentCard");
__turbopack_context__.k.register(_c2, "DetailRow");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_0.80e2j._.js.map