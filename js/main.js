ChatGPT






Pasted text.txt
Document
ok here are the files. Don't change the asset names because they are correct.

html

css
:root{--bg:#f7f4ef;--text:#1f2933;--muted:#667085;--card:#fff;--accent:#1f4e5f;--accent-dark:#163b48;--border:#ddd6cc;--soft:#eee7dd;--shadow:0 20px 60px rgba(31,41,51,.08)}
*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;background:var(--bg);color:var(--text);line-height:1.6}img{max-width:100%;display:block}button,input,textarea,select{font:inherit}.site-header{position:sticky;top:0;z-index:50;display:flex;justify-content:space-between;align-items:center;padding:18px 7%;background:rgba(247,244,239,.94);backdrop-filter:blur(12px);border-bottom:1px solid var(--border)}.logo{font-weight:900;color:var(--text);text-decoration:none}.nav{display:flex;gap:22px;align-items:center}.nav a{color:var(--text);text-decoration:none;font-weight:700;font-size:.95rem}.nav a:hover{color:var(--accent)}.nav-toggle{display:none;background:none;border:0;font-size:1.6rem;cursor:pointer;color:var(--text)}.hero{min-height:calc(100vh - 76px);display:grid;grid-template-columns:minmax(0,1.25fr) minmax(340px,.75fr);gap:46px;align-items:center;padding:48px 7%}.hero-text{min-width:0}.eyebrow{text-transform:uppercase;letter-spacing:.13em;color:var(--accent);font-size:.78rem;font-weight:900}h1{font-size:clamp(2.45rem,5.5vw,5.25rem);line-height:.98;margin:12px 0 24px;letter-spacing:-.055em}h2{font-size:clamp(2rem,4vw,3rem);line-height:1.05;margin:0 0 18px;letter-spacing:-.035em}h3,h4{margin:0 0 8px;line-height:1.2}.hero-summary{max-width:720px;color:var(--muted);font-size:1.16rem}.hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}.button{display:inline-block;padding:12px 18px;border-radius:999px;font-weight:900;text-decoration:none;border:1px solid var(--accent)}.button.primary{background:var(--accent);color:#fff}.button.primary:hover{background:var(--accent-dark)}.button.secondary{color:var(--accent);background:transparent}.hero-side{display:grid;gap:18px}.hero-card,.progress-panel,.project-card,.timeline article,.skills-grid div{background:var(--card);border:1px solid var(--border);box-shadow:var(--shadow)}.hero-card{border-radius:28px;padding:18px}.hero-card.compact{display:grid;grid-template-columns:92px 1fr;gap:16px;align-items:center;padding:16px}.hero-card.compact img{width:92px;height:92px;border-radius:20px;object-fit:cover;margin:0}.hero-card.compact h2{font-size:1.2rem;margin-bottom:6px;letter-spacing:0}.hero-card.compact p{font-size:.9rem;margin:0;color:var(--muted)}.progress-panel{border-radius:28px;padding:20px}.progress-panel h3{margin-bottom:16px}.progress-circle-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.progress-circle-card{width:100%;border:1px solid var(--border);background:var(--bg);border-radius:20px;padding:14px 10px;cursor:pointer;text-align:center;color:inherit;transition:transform .2s ease,box-shadow .2s ease}.progress-circle-card:hover{transform:translateY(-3px);box-shadow:0 12px 28px rgba(31,41,51,.12)}.circle-progress{--size:74px;width:var(--size);height:var(--size);margin:0 auto 10px;border-radius:50%;display:grid;place-items:center;background:radial-gradient(circle closest-side,var(--card) 72%,transparent 73%),conic-gradient(var(--accent) calc(var(--progress)*1%),#e7dfd4 0)}.circle-progress span{font-size:.9rem;font-weight:900;color:var(--accent)}.progress-circle-card p{margin:0;font-size:.82rem;font-weight:900;line-height:1.2}.section{padding:86px 7%}.section-heading{max-width:760px;margin-bottom:32px}.section-subtitle{color:var(--muted);max-width:700px}.project-category{margin-top:54px}.project-category>h3{font-size:1.55rem;margin-bottom:18px}.project-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:28px}.project-card{width:100%;padding:0;text-align:left;cursor:pointer;border-radius:24px;overflow:hidden;color:inherit;transition:transform .2s ease,box-shadow .2s ease}.project-card:hover{transform:translateY(-4px);box-shadow:0 18px 48px rgba(31,41,51,.12)}.project-card img{width:100%;height:280px;object-fit:cover;background:#ddd}.card-body{padding:22px}.tag{color:var(--accent);font-size:.78rem;font-weight:900;text-transform:uppercase;letter-spacing:.08em;margin:0 0 10px}.project-card h4{font-size:1.28rem}.project-card p,.project-card li,.timeline p,.skills-grid p,.resume-section p{color:var(--muted)}.split{display:grid;grid-template-columns:.7fr 1.3fr;gap:48px;border-top:1px solid var(--border)}.timeline{display:grid;gap:24px}.timeline article,.skills-grid div{border-radius:20px;padding:24px}.date{font-weight:800;color:var(--accent);margin-top:0}.skills-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:18px}.resume-section{text-align:center;max-width:900px;margin:auto}.resume-section .hero-actions{justify-content:center}footer{padding:32px 7%;color:var(--muted);border-top:1px solid var(--border)}.project-modal{position:fixed;inset:0;z-index:100;display:none;background:rgba(20,24,28,.72);padding:32px;overflow-y:auto}.project-modal.open{display:block}.modal-content{position:relative;max-width:1050px;margin:0 auto;background:var(--bg);border-radius:28px;padding:42px;box-shadow:0 30px 90px rgba(0,0,0,.35)}.modal-close{position:sticky;top:0;float:right;z-index:2;width:44px;height:44px;border:0;border-radius:50%;background:var(--text);color:#fff;font-size:2rem;line-height:1;cursor:pointer}.modal-hero{margin-bottom:32px}.modal-hero img{width:100%;max-height:460px;object-fit:cover;border-radius:22px;margin-top:24px}.modal-meta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0}.modal-meta span{background:#fff;border:1px solid var(--border);border-radius:999px;padding:8px 12px;font-weight:800;color:var(--accent)}.modal-section{margin:34px 0}.modal-section p,.modal-section li{color:var(--muted)}.modal-gallery{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:18px;margin-top:18px}.modal-gallery img{border-radius:18px;aspect-ratio:4/3;object-fit:cover;background:#ddd}.modal-callout{padding:18px;border-radius:18px;background:#fff;border:1px solid var(--border)}body.modal-locked{overflow:hidden}@media (max-width:1000px){.hero{grid-template-columns:1fr;min-height:auto;padding-top:58px}.hero-side{grid-template-columns:1fr 1fr}.skills-grid{grid-template-columns:repeat(2,1fr)}}@media (max-width:760px){.site-header{padding:16px 5%}.nav{display:none;position:absolute;top:64px;right:5%;left:5%;flex-direction:column;align-items:flex-start;padding:18px;background:var(--card);border:1px solid var(--border);border-radius:18px;box-shadow:var(--shadow)}.nav.open{display:flex}.nav-toggle{display:block}.hero,.section{padding-left:5%;padding-right:5%}.hero-side,.project-grid,.split,.skills-grid,.modal-gallery{grid-template-columns:1fr}.project-card img{height:230px}.project-modal{padding:12px}.modal-content{padding:24px}.hero-card.compact{grid-template-columns:76px 1fr}.hero-card.compact img{width:76px;height:76px}}@media (max-width:480px){.progress-circle-grid{grid-template-columns:1fr}.project-card img{height:210px}h1{font-size:2.45rem}}

/* Hero redesign: profile card left, contact/progress right */
.hero {
  grid-template-columns: minmax(0, 1.15fr) minmax(340px, 0.85fr);
  gap: 34px;
}

.hero-profile-card {
  min-width: 0;
  display: grid;
  grid-template-columns: minmax(230px, 0.46fr) minmax(0, 0.54fr);
  gap: 28px;
  align-items: center;
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 34px;
  padding: 28px;
  box-shadow: var(--shadow);
}

.profile-image-wrap img {
  width: 100%;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 26px;
  background: #ddd;
}

.profile-copy h1 {
  font-size: clamp(3rem, 6vw, 5.8rem);
  margin-bottom: 12px;
}

.role-line {
  color: var(--accent);
  font-size: 1.08rem;
  font-weight: 900;
  margin: 0 0 14px;
}

.contact-panel {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 28px;
  padding: 22px;
  box-shadow: var(--shadow);
}

.contact-panel h2 {
  font-size: 1.55rem;
  margin-bottom: 18px;
  letter-spacing: -0.02em;
}

.contact-links {
  display: grid;
  gap: 10px;
}

.contact-links a {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 14px;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--bg);
  color: var(--text);
  font-weight: 900;
  text-decoration: none;
  transition: transform 0.2s ease, box-shadow 0.2s ease, color 0.2s ease;
}

.contact-links a::after {
  content: "↗";
  color: var(--accent);
}

.contact-links a[href^="mailto"]::after {
  content: "→";
}

.contact-links a:hover {
  transform: translateY(-2px);
  color: var(--accent);
  box-shadow: 0 10px 24px rgba(31, 41, 51, 0.1);
}

@media (max-width: 1000px) {
  .hero-profile-card {
    grid-template-columns: 220px 1fr;
  }

  .hero-side {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 760px) {
  .hero-profile-card,
  .hero-side {
    grid-template-columns: 1fr;
  }

  .profile-image-wrap img {
    max-height: 380px;
  }
}


Pasted text(1).txt
Document

portfolio.css
File

main.js
JavaScript
ok it didn't work. I'll give you my java, css, and html



index (2).html
File

portfolio (1).css
File

main (1).js
JavaScript


Pasted text(2).txt
Document
ok that's a bit too much instruction for me, so can you just add it in the correct spots and make it so I can control A control V? Here is my current main



Pasted text(3).txt
Document
it says you got Minified React error #185; visit https://react.dev/errors/185 for the full message or use the non-minified dev environment for full errors and additional helpful warnings.
Does that mean you didn't finish generating the code? This is what you generated. Generate the rest (and only the rest) if you didn't finish the generation.



index (3).html
File

portfolio (2).css
File

main (2).js
JavaScript
The pop up buttons are visible without entering the secret room


Pasted text(4).txt
Document
ok wait can you just give me a full copy pastable thing? Here is my Java file


Pasted text(5).txt
Document
can you verify that this is correct?


Pasted text(8).txt
Document
ok I'm a bit confused where to put the project thing in js. Here is my current js



Pasted text(9).txt
Document

Worked for 3m 42s
Here is the complete replacement main.js:

main_documentation.js

Open it, press Ctrl+A → Ctrl+C, then open your existing main.js and press Ctrl+A → Ctrl+V.

Your existing projects, personal section, contact popup, secret section, and modal system are preserved from the uploaded file. 

 


Inside every regular and current project, you will now see:

documentation: {
  projectOverview: "",
  role: "",
  timeline: "",
  problemStatement: "",
  functionalRequirements: [""],
  designIterations: [
    {
      title: "",
      objective: "",
      whatChanged: "",
      expectedResult: "",
      actualResult: "",
      failureMode: "",
      lesson: ""
    }
  ],
  // More documentation fields...
},
Search for:

documentation:
to jump between projects. Empty fields are automatically hidden, so unfinished documentation will not appear on the website.


it doesn't let me download the file

Use this link instead:

main.js


still no. Can you put it in a txt or maybe just have it copyable

Try the text version:

main.txt

Then open it, press Ctrl+A, Ctrl+C, and paste everything into your existing main.js.


main.txt


const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");

    const isOpen = nav.classList.contains("open");
    navToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const modal = document.querySelector("#project-modal");
const modalBody = document.querySelector("#modal-body");
const modalClose = document.querySelector(".modal-close");

/*
  ============================================================
  EXTENSIVE PROJECT DOCUMENTATION

  Fill in the "documentation" object inside any project below.
  Empty fields are automatically hidden from the website.
  ============================================================
*/

function hasDocumentationContent(value) {
  if (Array.isArray(value)) {
    return value.some(hasDocumentationContent);
  }

  if (value && typeof value === "object") {
    return Object.values(value).some(hasDocumentationContent);
  }

  return typeof value === "string"
    ? value.trim().length > 0
    : value !== null && value !== undefined && value !== false;
}

function documentationList(items = []) {
  const visibleItems = items.filter(hasDocumentationContent);

  if (!visibleItems.length) return "";

  return `
    <ul>
      ${visibleItems.map((item) => `<li>${item}</li>`).join("")}
    </ul>
  `;
}

function documentationHeadingList(title, items = []) {
  const list = documentationList(items);
  return list ? `<h4>${title}</h4>${list}` : "";
}

function createDocumentationSections(documentation = {}) {
  const sections = [];

  const summaryItems = [
    ["Role", documentation.role],
    ["Timeline", documentation.timeline],
    ["Team", documentation.team],
    ["Status", documentation.status]
  ].filter(([, value]) => hasDocumentationContent(value));

  if (
    hasDocumentationContent(documentation.projectOverview) ||
    summaryItems.length
  ) {
    sections.push({
      heading: "Project Overview",
      html: `
        ${
          hasDocumentationContent(documentation.projectOverview)
            ? `<p>${documentation.projectOverview}</p>`
            : ""
        }

        ${
          summaryItems.length
            ? `
              <div class="documentation-summary">
                ${summaryItems
                  .map(
                    ([label, value]) => `
                      <div>
                        <strong>${label}</strong>
                        <p>${value}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }
      `
    });
  }

  if (hasDocumentationContent(documentation.problemStatement)) {
    sections.push({
      heading: "Problem Statement",
      html: `<p>${documentation.problemStatement}</p>`
    });
  }

  if (
    hasDocumentationContent(documentation.functionalRequirements) ||
    hasDocumentationContent(documentation.performanceRequirements) ||
    hasDocumentationContent(documentation.constraints) ||
    hasDocumentationContent(documentation.successCriteria)
  ) {
    sections.push({
      heading: "Requirements and Constraints",
      html: `
        ${documentationHeadingList(
          "Functional Requirements",
          documentation.functionalRequirements
        )}
        ${documentationHeadingList(
          "Performance Requirements",
          documentation.performanceRequirements
        )}
        ${documentationHeadingList("Constraints", documentation.constraints)}
        ${documentationHeadingList(
          "Success Criteria",
          documentation.successCriteria
        )}
      `
    });
  }

  if (
    hasDocumentationContent(documentation.backgroundResearch) ||
    hasDocumentationContent(documentation.keyFindings)
  ) {
    sections.push({
      heading: "Background Research",
      html: `
        ${
          hasDocumentationContent(documentation.backgroundResearch)
            ? `<p>${documentation.backgroundResearch}</p>`
            : ""
        }
        ${
          hasDocumentationContent(documentation.keyFindings)
            ? `<h4>Key Findings</h4><p>${documentation.keyFindings}</p>`
            : ""
        }
      `
    });
  }

  if (
    hasDocumentationContent(documentation.initialApproach) ||
    hasDocumentationContent(documentation.initialAssumptions)
  ) {
    sections.push({
      heading: "Initial Approach",
      html: `
        ${
          hasDocumentationContent(documentation.initialApproach)
            ? `<p>${documentation.initialApproach}</p>`
            : ""
        }
        ${documentationHeadingList(
          "Initial Assumptions",
          documentation.initialAssumptions
        )}
      `
    });
  }

  const designIterations = (documentation.designIterations || []).filter(
    hasDocumentationContent
  );

  if (designIterations.length) {
    sections.push({
      heading: "Design Iterations",
      html: designIterations
        .map(
          (iteration, index) => `
            <div class="design-iteration">
              <h4>${iteration.title || `Iteration ${index + 1}`}</h4>

              ${
                hasDocumentationContent(iteration.objective)
                  ? `<h5>Objective</h5><p>${iteration.objective}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.whatChanged)
                  ? `<h5>What Changed</h5><p>${iteration.whatChanged}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.why)
                  ? `<h5>Why</h5><p>${iteration.why}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.expectedResult)
                  ? `<h5>Expected Result</h5><p>${iteration.expectedResult}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.actualResult)
                  ? `<h5>Actual Result</h5><p>${iteration.actualResult}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.failureMode)
                  ? `<h5>Failure Mode</h5><p>${iteration.failureMode}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.lesson)
                  ? `<h5>Lesson</h5><p>${iteration.lesson}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(iteration.image)
                  ? `
                    <figure class="documentation-figure">
                      <img
                        src="${iteration.image}"
                        alt="${iteration.imageAlt || iteration.title || "Project iteration"}"
                      >
                      ${
                        hasDocumentationContent(iteration.caption)
                          ? `<figcaption>${iteration.caption}</figcaption>`
                          : ""
                      }
                    </figure>
                  `
                  : ""
              }
            </div>
          `
        )
        .join("")
    });
  }

  const engineeringDecisions = (
    documentation.engineeringDecisions || []
  ).filter(hasDocumentationContent);

  if (engineeringDecisions.length) {
    sections.push({
      heading: "Major Engineering Decisions",
      html: engineeringDecisions
        .map(
          (decision, index) => `
            <div class="engineering-decision">
              <h4>${decision.title || `Decision ${index + 1}`}</h4>

              ${
                hasDocumentationContent(decision.selectedApproach)
                  ? `<h5>Selected Approach</h5><p>${decision.selectedApproach}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(decision.why)
                  ? `<h5>Why It Was Considered</h5><p>${decision.why}</p>`
                  : ""
              }

              ${documentationHeadingList(
                "Alternatives",
                decision.alternatives || []
              )}

              ${documentationHeadingList(
                "Tradeoffs",
                decision.tradeoffs || []
              )}

              ${
                hasDocumentationContent(decision.finalReasoning)
                  ? `<h5>Final Reasoning</h5><p>${decision.finalReasoning}</p>`
                  : ""
              }
            </div>
          `
        )
        .join("")
    });
  }

  if (
    hasDocumentationContent(documentation.calculations) ||
    hasDocumentationContent(documentation.simulation)
  ) {
    sections.push({
      heading: "Engineering Analysis",
      html: `
        ${
          hasDocumentationContent(documentation.calculations)
            ? `<h4>Calculations</h4><div class="calculation-block">${documentation.calculations}</div>`
            : ""
        }

        ${
          hasDocumentationContent(documentation.simulation)
            ? `<h4>Simulation</h4><p>${documentation.simulation}</p>`
            : ""
        }
      `
    });
  }

  if (
    hasDocumentationContent(documentation.manufacturingMaterial) ||
    hasDocumentationContent(documentation.manufacturingProcess) ||
    hasDocumentationContent(documentation.manufacturingEquipment) ||
    hasDocumentationContent(documentation.manufacturingParameters) ||
    hasDocumentationContent(documentation.manufacturingChallenges) ||
    hasDocumentationContent(documentation.designForManufacturingChanges)
  ) {
    const manufacturingSummary = [
      ["Material", documentation.manufacturingMaterial],
      ["Process", documentation.manufacturingProcess],
      ["Equipment", documentation.manufacturingEquipment]
    ].filter(([, value]) => hasDocumentationContent(value));

    sections.push({
      heading: "Manufacturing",
      html: `
        ${
          manufacturingSummary.length
            ? `
              <div class="documentation-summary">
                ${manufacturingSummary
                  .map(
                    ([label, value]) => `
                      <div>
                        <strong>${label}</strong>
                        <p>${value}</p>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            `
            : ""
        }

        ${documentationHeadingList(
          "Manufacturing Parameters",
          documentation.manufacturingParameters
        )}

        ${
          hasDocumentationContent(documentation.manufacturingChallenges)
            ? `<h4>Manufacturing Challenges</h4><p>${documentation.manufacturingChallenges}</p>`
            : ""
        }

        ${
          hasDocumentationContent(
            documentation.designForManufacturingChanges
          )
            ? `<h4>Design for Manufacturing Changes</h4><p>${documentation.designForManufacturingChanges}</p>`
            : ""
        }
      `
    });
  }

  if (
    hasDocumentationContent(documentation.validationObjective) ||
    hasDocumentationContent(documentation.validationProcedure) ||
    hasDocumentationContent(documentation.validationResults) ||
    hasDocumentationContent(documentation.validationConclusion) ||
    hasDocumentationContent(documentation.validationImage)
  ) {
    sections.push({
      heading: "Validation and Testing",
      html: `
        ${
          hasDocumentationContent(documentation.validationObjective)
            ? `<h4>Test Objective</h4><p>${documentation.validationObjective}</p>`
            : ""
        }

        ${
          hasDocumentationContent(documentation.validationProcedure)
            ? `
              <h4>Test Procedure</h4>
              <ol>
                ${documentation.validationProcedure
                  .filter(hasDocumentationContent)
                  .map((step) => `<li>${step}</li>`)
                  .join("")}
              </ol>
            `
            : ""
        }

        ${documentationHeadingList(
          "Results",
          documentation.validationResults
        )}

        ${
          hasDocumentationContent(documentation.validationConclusion)
            ? `<h4>Conclusion</h4><p>${documentation.validationConclusion}</p>`
            : ""
        }

        ${
          hasDocumentationContent(documentation.validationImage)
            ? `
              <figure class="documentation-figure">
                <img
                  src="${documentation.validationImage}"
                  alt="${documentation.validationImageAlt || "Project validation test"}"
                >
                ${
                  hasDocumentationContent(documentation.validationCaption)
                    ? `<figcaption>${documentation.validationCaption}</figcaption>`
                    : ""
                }
              </figure>
            `
            : ""
        }
      `
    });
  }

  if (hasDocumentationContent(documentation.results)) {
    sections.push({
      heading: "Results",
      html: documentationList(documentation.results)
    });
  }

  const journalEntries = (documentation.designJournal || []).filter(
    hasDocumentationContent
  );

  if (journalEntries.length) {
    sections.push({
      heading: "Design Journal",
      html: journalEntries
        .map(
          (entry) => `
            <div class="journal-entry">
              ${
                hasDocumentationContent(entry.date)
                  ? `<p class="journal-date">${entry.date}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(entry.title)
                  ? `<h4>${entry.title}</h4>`
                  : ""
              }

              ${
                hasDocumentationContent(entry.whatITried)
                  ? `<p><strong>What I tried:</strong></p><p>${entry.whatITried}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(entry.expected)
                  ? `<p><strong>What I expected:</strong></p><p>${entry.expected}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(entry.actual)
                  ? `<p><strong>What happened:</strong></p><p>${entry.actual}</p>`
                  : ""
              }

              ${
                hasDocumentationContent(entry.learned)
                  ? `<p><strong>What I learned:</strong></p><p>${entry.learned}</p>`
                  : ""
              }
            </div>
          `
        )
        .join("")
    });
  }

  if (
    hasDocumentationContent(documentation.biggestMistake) ||
    hasDocumentationContent(documentation.whatIdDoDifferently) ||
    hasDocumentationContent(documentation.remainingLimitations) ||
    hasDocumentationContent(documentation.nextVersion)
  ) {
    sections.push({
      heading: "What I Would Change",
      html: `
        ${
          hasDocumentationContent(documentation.biggestMistake)
            ? `<h4>Biggest Mistake</h4><p>${documentation.biggestMistake}</p>`
            : ""
        }

        ${
          hasDocumentationContent(documentation.whatIdDoDifferently)
            ? `<h4>What I Would Do Differently</h4><p>${documentation.whatIdDoDifferently}</p>`
            : ""
        }

        ${documentationHeadingList(
          "Remaining Limitations",
          documentation.remainingLimitations
        )}

        ${
          hasDocumentationContent(documentation.nextVersion)
            ? `<h4>Next Version</h4><p>${documentation.nextVersion}</p>`
            : ""
        }
      `
    });
  }

  if (hasDocumentationContent(documentation.engineeringLessons)) {
    sections.push({
      heading: "Engineering Lessons",
      html: documentationList(documentation.engineeringLessons)
    });
  }

  if (hasDocumentationContent(documentation.manufacturingLessons)) {
    sections.push({
      heading: "Manufacturing Lessons",
      html: documentationList(documentation.manufacturingLessons)
    });
  }

  const answeredInterviewQuestions = (
    documentation.interviewQuestions || []
  ).filter(
    (item) =>
      hasDocumentationContent(item.question) &&
      hasDocumentationContent(item.answer)
  );

  if (answeredInterviewQuestions.length) {
    sections.push({
      heading: "Interview Preparation",
      html: answeredInterviewQuestions
        .map(
          (item) => `
            <div class="interview-question">
              <h4>${item.question}</h4>
              <p>${item.answer}</p>
            </div>
          `
        )
        .join("")
    });
  }

  const projectFiles = (documentation.projectFiles || []).filter(
    (file) =>
      hasDocumentationContent(file.label) &&
      hasDocumentationContent(file.href)
  );

  if (projectFiles.length) {
    sections.push({
      heading: "Project Files",
      html: `
        <div class="project-file-links">
          ${projectFiles
            .map(
              (file) => `
                <a
                  href="${file.href}"
                  ${file.download ? "download" : 'target="_blank" rel="noopener noreferrer"'}
                >
                  ${file.label}
                </a>
              `
            )
            .join("")}
        </div>
      `
    });
  }

  return sections;
}


const projects = {
  "baja-driver-model": {
    title: "Ergonomic Driver Model",
    category: "Baja SAE",
    hero: "assets/img/model_refined_simulation.gif",
    tags: ["SolidWorks", "Fusion 360", "MeshLab", "LiDAR Scans"],
    overview:
      "Created a driver modeling workflow to evaluate driver fit, cockpit clearance, and rule compliance for the Baja SAE vehicle.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Problem",
        body:
          "To optimize driver packaging, maintaining rules compliance and minimizing weight, we needed a reliable method of modeling drivers in SolidWorks, accounting for numerous positions."
      },
      {
        heading: "Process",
        body:
          "I used LiDAR scans of real drivers, processed the meshes, and brought simplified body models into CAD to evaluate clearance, helmet position, steering reach, pedal reach, and overall packaging. The models were movable at each joint, and I had 3 inch clearance shells around each body part to ensure rules compliance. I only was told the goal with no guidance on how to achieve it. This process required 4 different software as well as a lot of different, creative solutions to produce, which is why I am proud of it. It also facilitated collaboration across subteams, which allowed me to better understand the entirety of the car, as well as learn how to and when to compromise. "
      },
      {
        heading: "Result",
        body:
          "The workflow helped expand the viable driver range by approximately 15% and gave the ergonomics team a clearer way to validate cockpit packaging decisions. This novel workflow will be used by future ergonomics project engineers, who will continue to improve it."
      }
    ],
    gallery: [
      "assets/img/model_cad_iteration1.png",
      "assets/img/model_mechanism.gif",
      "assets/img/model_refined_simulation.gif",
      "assets/img/a4j74a.gif"
    ]
  },

  "baja-jig": {
    title: "Adjustable Ergonomic Jig",
    category: "Baja SAE",
    hero: "assets/img/Demonstrationfr-ezgif.com-video-to-gif-converter.gif",
    tags: ["SolidWorks", "Driver Testing", "Vehicle Ergonomics"],
    overview:
      "Designed and tested an adjustable physical jig for steering wheel and pedal placement validation.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Problem",
        body:
          "Before finalizing the chassis based on the LiDAR models, Driver Interface requires physical driver feedback on steering position, pedal placement, and cockpit comfort to validate the SolidWorks designs, created with theoretical comfort angles."
      },
      {
        heading: "Design",
        body:
          "The jig was designed to allow for easy, repeatable adjustments to key driver interface dimensions, allowing for subtle alterations to optimize for driver comfort and system integration."
      },
      {
        heading: "Result",
        body:
          "The jig validated CAD packaging decisions with real driver feedback, allowing for a confident manufacturing process."
      }
    ],
    gallery: [
      "assets/img/Ergo_Jig_Andrew.jpg",
      "assets/img/Pedal.gif",
      "assets/img/Steering.gif",
      "assets/img/Demonstrationfr-ezgif.com-video-to-gif-converter.gif"
    ]
  },

  "carbon-fiber": {
    title: "Carbon Fiber Seat + Steering Wheel",
    category: "Baja SAE",
    hero: "assets/img/DI.jpg",
    tags: ["Carbon Fiber", "Wet Layup", "Vacuum Bagging", "Manufacturing"],
    overview:
      "Manufactured composite Baja components using wet layup, vacuum bagging, and oven.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Produce lightweight, rigid driver-interface components."
      },
      {
        heading: "Manufacturing",
        body:
          "The process included fabric preparation, resin application, vacuum bagging, curing, trimming, sanding, and integration validation."
      },
      {
        heading: "Reflection",
        body:
          "This project gave me hands-on experience with messy, geometrically complex, tolerance-sensitive manufacturing where precision and prudence is essential."
      }
    ],
    gallery: [
      "assets/img/seatimg.jpg",
      "assets/img/CFseat.jpg",
      "assets/img/CFsteering.jpg",
      "assets/img/CFdrip.jpg"
    ]
  },

  "robot-arm": {
    title: "3-DOF Robotic Arm Simulation",
    category: "Class / Technical Project",
    hero: "assets/img/matarm.jpg",
    tags: ["MATLAB", "Simscape", "Inverse Kinematics", "SolidWorks"],
    overview:
      "Built a simulated robotic arm using CAD import, inverse kinematics, and coordinate-based motion input.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Objective",
        body:
          "Create a robotic arm model that could move toward user-defined coordinates using inverse kinematics."
      },
      {
        heading: "Implementation",
        body:
          "I modeled the arm geometry, imported CAD into Simscape Multibody, and connected the motion logic to MATLAB calculations."
      },
      {
        heading: "What I Learned",
        body:
          "This project strengthened my understanding of kinematics, coordinate transformations, and simulation-based prototyping."
      }
    ],
    gallery: ["assets/img/matarm.jpg", "assets/img/Sim.gif"]
  },

  "leg-drawers": {
    title: "Home Ergonomic Leg Drawers",
    category: "Class / Technical Project",
    hero: "assets/img/cabinetness.gif",
    tags: ["SolidWorks", "FEA", "Fabrication", "Ergonomics"],
    overview:
      "Designed an adjustable leg support system with CAD, simulation, and fabrication-oriented decision making.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Create an ergonomic support system that could adjust to different leg positions while staying compact and manufacturable."
      },
      {
        heading: "Design",
        body:
          "The project involved CAD modeling, mechanical layout decisions, and evaluation of how the structure would support expected loads."
      }
    ],
    gallery: ["assets/img/draw.jpg",
             "assets/img/cabinetness.gif"
             ]
  },

  "faraday-bed": {
    title: "Faraday Cage Bed",
    category: "Personal Project",
    hero: "assets/img/faraday.jpg",
    tags: ["Prototyping", "SolidWorks", "Arduino", "Shielding"],
    overview:
      "Designed and built a dorm-compatible Faraday cage bed prototype to test RF shielding, blackout performance, airflow, and sleep discipline.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Motivation",
        body:
          "I wanted a physical system that made my sleep environment more controlled by reducing light, distractions, and wireless signal exposure near the bed."
      },
      {
        heading: "Constraints",
        body:
          "The design had to be removable, dorm-safe, inexpensive, ventilated, and compatible with an existing bed frame."
      },
      {
        heading: "Build",
        body:
          "The prototype used shielding material, blankets, frame elements, hinges, and airflow considerations. It was intentionally built under real dorm constraints rather than ideal shop conditions."
      }
    ],
    gallery: [
      "assets/img/faraday.jpg",
      "assets/img/faraday.gif",
      "assets/img/Bed_assem.jpg",
      "assets/img/meonbed.jpg"
    ]
  },

  website: {
    title: "Portfolio Website",
    category: "Personal Project",
    hero: "assets/img/website.jpg",
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    overview:
      "A personal website for presenting engineering projects, documentation, resume material, and project photos.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Purpose",
        body:
          "The site is meant to help recruiters quickly understand my strongest engineering work while still preserving detailed project documentation."
      },
      {
        heading: "Design Direction",
        body:
          "The redesign prioritizes project cards, grouped categories, clean typography, and expandable project documentation."
      }
    ],
    gallery: ["assets/img/website.jpg"]
  }
};

const currentProjects = {
  "water-bottle": {
    title: "Water Bottle Auto-Fill System",
    category: "Current Project",
    progress: "30%",
    overview:
      "Servo-actuated faucet controller for automatically filling a 5-gallon water bottle through timed cycles.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Create a simple, user-friendly setup that fills the bottle with one button press while accounting for the reverse osmosis system flow slowing down over time, requiring multiple actuations within one cycle."
      },
      {
        heading: "Current Status",
        body:
          "Currently printing water bottle mount and servo housing. Prototype testing very soon."
      },
      {
        heading: "Next Steps",
        body:
          "Measure fill timing; refine servo logic."
      }
    ]
  },

  "busy-indicator": {
    title: "Room Communicator",
    category: "Current Project",
    progress: "5%",
    overview:
      "A small visible indicator system in multiple rooms to show when I am busy, recording, studying, or should not be interrupted. The current method of communication is yelling, which disrupts focus at bad times, so allowing for an indicator, as well as telecommunication through a speaking voice is required.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Create a display to allow for quick verification of status before communication. Busy status should allow for recorded messages, and for them to play immediately after switching status off. Available status should allow for instant telecommunication."
      },
      {
        heading: "Current Status",
        body:
          "Concept stage."
      }
    ]
  },

  blinds: {
    title: "Automated Blinds",
    category: "Current Project",
    progress: "5%",
    overview:
      "Motorized blinds project for controlling room light automatically or with a simple user input.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Create a compact mechanism that can roll and unroll blinds at high, inconvenient areas."
      },
      {
        heading: "Current Status",
        body:
          "Early concept stage."
      }
    ]
  },

  "umbrella-robot": {
    title: "Umbrella Robot",
    category: "Current Project",
    progress: "1%",
    overview:
      "Mobile robot concept that could carry or position an umbrella to provide shade for outdoor working.",
    documentation: {
      // Fill in any fields you want. Leave unused fields empty.
      projectOverview: "",
      role: "",
      timeline: "",
      team: "",
      status: "",

      problemStatement: "",

      functionalRequirements: [
        ""
      ],

      performanceRequirements: [
        ""
      ],

      constraints: [
        ""
      ],

      successCriteria: [
        ""
      ],

      backgroundResearch: "",
      keyFindings: "",

      initialApproach: "",

      initialAssumptions: [
        ""
      ],

      designIterations: [
        {
          title: "",
          objective: "",
          whatChanged: "",
          why: "",
          expectedResult: "",
          actualResult: "",
          failureMode: "",
          lesson: "",
          image: "",
          imageAlt: "",
          caption: ""
        }
      ],

      engineeringDecisions: [
        {
          title: "",
          selectedApproach: "",
          why: "",
          alternatives: [
            ""
          ],
          tradeoffs: [
            ""
          ],
          finalReasoning: ""
        }
      ],

      // You may use normal text or HTML, including equations and lists.
      calculations: "",
      simulation: "",

      manufacturingMaterial: "",
      manufacturingProcess: "",
      manufacturingEquipment: "",

      manufacturingParameters: [
        ""
      ],

      manufacturingChallenges: "",
      designForManufacturingChanges: "",

      validationObjective: "",

      validationProcedure: [
        ""
      ],

      validationResults: [
        ""
      ],

      validationConclusion: "",
      validationImage: "",
      validationImageAlt: "",
      validationCaption: "",

      results: [
        ""
      ],

      designJournal: [
        {
          date: "",
          title: "",
          whatITried: "",
          expected: "",
          actual: "",
          learned: ""
        }
      ],

      biggestMistake: "",
      whatIdDoDifferently: "",

      remainingLimitations: [
        ""
      ],

      nextVersion: "",

      engineeringLessons: [
        ""
      ],

      manufacturingLessons: [
        ""
      ],

      interviewQuestions: [
        {
          question: "Why did you choose this design?",
          answer: ""
        },
        {
          question: "What was the most difficult technical problem?",
          answer: ""
        },
        {
          question: "What failed, and how did you respond?",
          answer: ""
        },
        {
          question: "How did you validate the design?",
          answer: ""
        },
        {
          question: "What assumptions did you make?",
          answer: ""
        },
        {
          question: "How would you manufacture 10,000 units?",
          answer: ""
        },
        {
          question: "What would you improve with more time?",
          answer: ""
        }
      ],

      projectFiles: [
        {
          label: "",
          href: "",
          download: false
        }
      ]
    },
    sections: [
      {
        heading: "Goal",
        body:
          "Explore a small wheeled robot platform with a mounted umbrella and basic stability/control constraints."
      },
      {
        heading: "Current Status",
        body:
          "Idea stage. Have multiple iterative plans, but will be very difficult project."
      }
    ]
  }
};

const personalSections = {
ideas: {
  title: "Ideas",
  category: "Personal",
  overview:
    "Anything that comes to mind.",
  sections: [
    {
  heading: "Philosophies",
  html: `
    <div class="essay-block">
      <h4>High School</h4>

      <p>My philosophy is ever changing, likely due to the nature of being fairly young. When I was in high school, I was more hot-headed and ambitious. I still have that ambition, but it was better manifested in high school. I got really into astronomy in my freshman year, expanding on it when COVID hit in March. The futility of life was detrimental to my sense of control and everything that I experienced a radical shift in my perception and identity. I became more bitter at the external because I noticed all of the stupid things that we focus on and that try to grab our attention, when we only have one life. So much time wasted by poor planning. I hated school assemblies. I hated class. I hated these things because I thought I could learn faster on my own and have more time to do meaningful things. I didn't know what meaningful things were, but I knew that it wasn't in the classroom or in the assembly. I began practicing violin seriously. That became meaning for me. I got into politics. I never particularly thought politics were meaningful, but I do think that me gaining opinions on matters helped with development, even if I still believe that my involvement in politics would optimally be at 0%.</p>

      <h4>The Ideal</h4>

      <p>I dedicated myself to trying to look the best for college. I did so many clubs. I took every AP that I could. I did instrumental conservatory after school, which would make 3/5 days 8:30 am to 5:45 pm. I went to work out in the morning too, which would require me to be at school at 6:30 am. All this effort into college was effort that I thought I was putting into myself. I wanted to get as close to my potential as possible, as my idea of potential is that it is The Ideal. It is the version of yourself that The Ideal version of yourself would say is Ideal. Now that seems sort of circular, but I say this in this way because it is true that oftentimes what we think we want is not what we actually want. And sometimes what we actually want is not what is actually best. So, if we have an ideal, it is likely that that ideal is not The Ideal, which can only be manifested if you were already The Ideal.</p>

      <p>Now, enough semantics. I strove for The Ideal. I believed that even if my idea of The Ideal is not what the actual Ideal is, then that would be alright because I was almost certain that it would be closer to it than where I was then.</p>

      <p>I liked to encourage people to do the same. It's sort of like religion, when you think you are saving someone. Not in the savior complex way, but in a "I feel good because I am helping this person who would have otherwise stayed the same." I went to the gym, and many friends started coming with me. I felt like I was a good catalyst. I felt like I was bringing people to do meaningful things, instead of waste their time with "trivialities."</p>

      <h4>College</h4>

      <p>Now that I'm in University, my perspective has undergone another paradigm shift. Previous Nathan was hot headed and ambitious, which I still respect, and often try to reclaim that part of myself, but now I am more mature. Engineering has helped me see the flaws in everything. Even designing components, you have to consider tolerances and design for clearance and understand the manufacturing limitations. It is impossible, or at the very least, infeasible to create something perfect. I still agree with previous Nathan that we should try to limit the amount of time we waste for other people. I still get angry at the EDI and harassment training because the odds that it prevents something is virtually 0. The school knows that we know that it is nonsense, but they do it anyways to cover their behinds. The issue is that it takes hours to complete. Run that across 30k students, and you have a significant amount of time wasted on something so inconsequential that destroys a part of someone's day, when they could be doing something more meaningful with their one life on this planet.</p>

      <p>This philosophy, however, has prevented me from growing. Following the philosophy means that you have to take the path less travelled. Everyone loves to read that poem and say that it's good to take that road, but there is a reason that some of those roads are less travelled. It is true that the chalice will be found in the darkest part of the forest, where no one wants to go, but it is also true that going in without a plan will leave you lost. It is also true that many roads look similar, and that the likely road that you will end up on is a road that is less travelled because it goes nowhere.</p>

      <p>The first two years of college, I only went to classes that I needed to. The reason for this was because of my "time-wasting" philosophy, where I believed that I could learn better by myself. It turns out that I was half-right. I had the willpower and endurance to pick up what was necessary using only a textbook and a pencil, but I didn't have the discipline to do it at the correct time. School was structure. Of course, it didn't help that I was overloading each quarter because I was double majoring in music, which had completely different requirements. The music class reinforced my philosophy because the classes were super easy, but attendance was mandatory. I could be practicing. I could be studying for my actual difficult classes. Why was I trapped again?</p>

      <p>I did this till the end of Winter, Sophomore year before quitting music. I was good. I think that people don't give me enough credit. Mainly because I don't show myself or brag, but I often see people, who I think are less accomplished, receiving praise that I think I should have received. This doesn't make me bitter, and I do acknowledge how pretentious this makes me seem, but I think for me to be understood, I would have to be lived.</p>

      <p>The continuous indifference to my accomplishments and the potential that I see for myself did continue to burden me. It made me worried about my self worth. "If I'm a Project Engineer for Baja, I was double majoring in music, I somehow got an above average grade in the hardest Mech E class, then why am I not anywhere near where I want to be? Why am I not getting hired? Why is my friend group stagnant? Why was I better in high school?"</p>

      <p>All of these questions plagued me. I am someone who encourages criticism because I like to see the entirety of me. I like to see where I shine and where I need polish. I like to try to look at the parts of myself that I want to keep hidden. Because of this, I am extremely critical of myself. I tend to equate the lack of external validation with a lack of progress. It very well could be a lack of progress. But then I feel this cognitive dissonance with what I believe I am and what I believe I could be with the external feedback of what the world thinks I am. What people I care about think I am. I realize that the face that people see is drastically different than the one I see in the mirror.</p>

      <p>To sum this up, high school was the hero's journey. College has been the degradation after accomplishing the destruction of the ring.</p>

      <h4>The Future/My Current</h4>

      <p>Yes, I am still in college, but I do want to take a snapshot of where I am now.</p>

      <p>Noise is noise. Data is data. When you put the two together, you get something that is a bit more difficult to decipher. I think that I put too much emphasis on feedback because not all feedback is useful. If I were a drone, operating with limited noise reduction, then at high frequencies, I may veer off and destroy myself. However, that doesn't mean that I ignore the feedback. The overused adage of a grain of salt proves to be true. Comparing myself to myself to other people then back to myself, mapping that trajectory should prove to provide me with a better map, rather than only listening to the external. I have these many goals. I know I can do it, but I just need the proof from myself. I need to know that I am not just talk. I do know that because of the previous things I have accomplished, but if you ask me to play a piece, I will do it poorly. If you ask me to do a trick, I will fall. If you ask me to edit a video, you will ask for your money back. I am a jack of all trades. I want to at least master one. At the very least, I want to be able to point to something documented to proved that at least at one time, I was competent at the things I enjoy.</p>
    </div>
  `
},
    {
      heading: "Engineering Goals",
      body:
        "Long-term technical ambitions, project ideas, inventions, mechanisms, robots, and systems I want to build."
    },
    {
      heading: "School Plans",
      body:
        "Academic plans, classes to take seriously, research goals, internships, and things I want to improve before graduating."
    }
  ]
},

  aspirations: {
    title: "Aspirations",
    category: "Personal",
    overview:
      "End goals, mid goals, and now goals.",
    sections: [
      {
        heading: "End",
        body:
          "Thoughts about the ultimate direction of life: what I want everything to point toward."
      },
      {
        heading: "Family",
        body:
          "Ideas about marriage, children, home life, traditions, and the kind of family culture I want to build."
      },
      {
        heading: "Location",
        body:
          "Places I might want to live, land, houses, towns, climates, and the kind of environment I want around me."
      },
      {
        heading: "Career",
        body:
          "The kind of work I want to do, companies or industries to pursue, and what I want my professional life to become."
      },
      {
        heading: "Health",
        body:
          "Fitness, sleep, food, discipline, long-term strength, and the body I want to maintain."
      }
    ]
  },

  hobbies: {
    title: "Hobbies",
    category: "Personal",
    overview:
      "Stuff I like.",
    sections: [
      {
        heading: "Things to Do",
        body:
          "Activities, places to visit, people to see, skills to try, and experiences I do not want to forget."
      },
      {
        heading: "Books to Write",
        body:
          "Story concepts, essays, personal reflections, fiction ideas, and writing projects I may want to develop."
      },
      {
        heading: "Books to Read",
        body:
          "Books I want to read, reread, study, or understand more deeply."
      },
      {
        heading: "Movies to Watch",
        body:
          "Films, directors, genres, and visual styles I want to explore."
      },
      {
        heading: "Music to Play",
        body:
          "Stuff to do here. Better runaroo."
      }
    ]
  }
};

function renderModal(project) {
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <article>
      <div class="modal-hero">
        <p class="eyebrow">${project.category}</p>
        <h2>${project.title}</h2>
        <p>${project.overview}</p>

        <div class="modal-meta">
          ${(project.tags || []).map((tag) => `<span>${tag}</span>`).join("")}
          ${project.progress ? `<span>${project.progress} complete</span><span>In progress</span>` : ""}
        </div>

        ${project.hero ? `<img src="${project.hero}" alt="${project.title}">` : ""}
      </div>

      ${[
        ...(project.sections || []),
        ...createDocumentationSections(project.documentation)
      ]
  .map(
    (section) => `
      <section class="modal-section">
        <h3>${section.heading}</h3>
        ${section.html || `<p>${section.body}</p>`}
      </section>
    `
  )
  .join("")}

      ${
        project.gallery
          ? `
            <section class="modal-section">
              <h3>Project Images</h3>
              <div class="modal-gallery">
                ${project.gallery.map((image) => `<img src="${image}" alt="${project.title} image">`).join("")}
              </div>
            </section>
          `
          : ""
      }
    </article>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-locked");
}

function closeModal() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-locked");
}

document.querySelectorAll(".project-open").forEach((card) => {
  card.addEventListener("click", () => {
    const project = projects[card.dataset.project];
    if (project) renderModal(project);
  });
});

document.querySelectorAll(".current-open").forEach((card) => {
  card.addEventListener("click", () => {
    const project = currentProjects[card.dataset.current];
    if (project) renderModal(project);
  });
});

document.querySelectorAll(".personal-open").forEach((card) => {
  card.addEventListener("click", () => {
    const section = personalSections[card.dataset.personal];
    if (section) renderModal(section);
  });
});

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) closeModal();
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal && modal.classList.contains("open")) {
    closeModal();
  }
});

const contactModal = document.getElementById("contact-modal");
const contactClose = document.getElementById("contact-close");

document.querySelectorAll(".contact-trigger").forEach((button) => {
  button.addEventListener("click", () => {
    if (contactModal) contactModal.classList.add("open");
  });
});

if (contactClose && contactModal) {
  contactClose.addEventListener("click", () => {
    contactModal.classList.remove("open");
  });
}

if (contactModal) {
  contactModal.addEventListener("click", (event) => {
    if (event.target === contactModal) {
      contactModal.classList.remove("open");
    }
  });
}
const secretButton = document.getElementById("secret-open");
const secretSection = document.getElementById("personal");

if (secretButton && secretSection) {
  secretButton.addEventListener("click", (e) => {
    e.preventDefault(); // Don't jump to the top of the page
    secretSection.classList.toggle("open");
  });
}
