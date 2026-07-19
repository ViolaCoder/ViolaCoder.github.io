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
