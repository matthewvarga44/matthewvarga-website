# Masterclass setup-only publication

The page at `/masterclass` is a public, unlisted setup preview of the user-approved source-based design. It is not an active registration or webinar-delivery funnel. The original Thursday schedule/countdown, WhatsApp delivery references and live-session copy are examples, qualified by the setup notice; a prerecorded format and launch date are not yet confirmed.

Name/email fields and submit are disabled in HTML and guarded in JavaScript. No registration API, session-storage write, success redirect or email send is performed. `/masterclass/thank-you` and trailing-slash variants resolve to the setup landing page while activation is incomplete. The original thank-you design/code is saved under `saved-preview/` but is not included in deployed output.

The original page markup, inline design styles, shared stylesheet, fonts and images are preserved apart from resource URLs, setup notices and disabled registration. All 26 original media files are versioned here and their hashes are checked in the build. `scripts/masterclass-static.mjs` emits only `masterclass.html` and namespaced assets after the existing SPA and Roadmap build. Existing React/global CSS, site routes, signup endpoints, dependencies and lockfile are unchanged.

Robots meta and route headers discourage search indexing; these do not restrict public access. There is no new navigation promotion, analytics, tracking, signup event or traffic campaign.

Before activation: confirm prerecorded/on-demand or scheduled delivery and truthful copy, provide the finished recording and gifts, create a dedicated Masterclass email segment and delivery workflow, connect a registration endpoint that acknowledges success only after a confirmed signup, and update the thank-you flow. Do not route Masterclass registrations to the existing Money Roadmap endpoint. Any optional webinar-attendee group is separate from paid community membership or individual-course access.
