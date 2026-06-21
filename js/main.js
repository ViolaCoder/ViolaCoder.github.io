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

const projects = {
  "baja-driver-model": {
    title: "Ergonomic Driver Model",
    category: "Baja SAE",
    hero: "assets/img/model_cad_iteration1.png",
    tags: ["SolidWorks", "Fusion 360", "MeshLab", "LiDAR Scans"],
    overview:
      "Created a driver modeling workflow to evaluate driver fit, cockpit clearance, and rule compliance for the Baja SAE vehicle.",
    sections: [
      {
        heading: "Problem",
        body:
          "The team needed a repeatable way to evaluate whether different drivers could fit comfortably and safely inside the cockpit while satisfying clearance requirements."
      },
      {
        heading: "Process",
        body:
          "I used LiDAR scans, mesh cleanup, CAD segmentation, and SolidWorks assemblies to create driver models with adjustable joints and representative body dimensions."
      },
      {
        heading: "Result",
        body:
          "The workflow helped expand the viable driver range by approximately 15% and gave the ergonomics team a clearer way to validate cockpit packaging decisions."
      }
    ],
    gallery: [
      "assets/img/model_cad_iteration1.png",
      "assets/img/model_mechanism.gif",
      "assets/img/model_refined_simulation.gif",
      "assets/img/bracing.png"
    ]
  },

  "baja-jig": {
    title: "Adjustable Ergonomic Jig",
    category: "Baja SAE",
    hero: "assets/img/Ergo_Jig_Andrew.jpg",
    tags: ["SolidWorks", "80/20", "Driver Testing", "Vehicle Ergonomics"],
    overview:
      "Designed and tested an adjustable physical jig for steering wheel and pedal placement experiments.",
    sections: [
      {
        heading: "Problem",
        body:
          "Before finalizing the chassis, the team needed physical driver feedback on steering position, pedal placement, and cockpit comfort."
      },
      {
        heading: "Design",
        body:
          "The jig was designed to allow repeatable adjustments to key driver-interface dimensions so different drivers could test configurations."
      },
      {
        heading: "Impact",
        body:
          "The jig connected CAD packaging decisions with real driver feedback, reducing guesswork in the ergonomics design process."
      }
    ],
    gallery: [
      "assets/img/Ergo_Jig_Andrew.jpg",
      "assets/img/Pedal.gif",
      "assets/img/Steering.gif"
    ]
  },

  "carbon-fiber": {
    title: "Carbon Fiber Seat + Steering Wheel",
    category: "Baja SAE",
    hero: "assets/img/CFcar.jpg",
    tags: ["Carbon Fiber", "Wet Layup", "Vacuum Bagging", "Manufacturing"],
    overview:
      "Manufactured composite Baja components using wet layup, vacuum bagging, trimming, finishing, and vehicle fitment.",
    sections: [
      {
        heading: "Goal",
        body:
          "Produce lightweight, rigid driver-interface components while learning composite manufacturing methods."
      },
      {
        heading: "Manufacturing",
        body:
          "The process included fabric preparation, resin application, vacuum bagging, curing, trimming, sanding, and fitment checks."
      },
      {
        heading: "Reflection",
        body:
          "This project gave me hands-on experience with messy, tolerance-sensitive manufacturing where process control matters as much as CAD design."
      }
    ],
    gallery: [
      "assets/img/CFcar.jpg",
      "assets/img/CFseat.jpg",
      "assets/img/CFsteering.jpg",
      "assets/img/CFdrip.jpg"
    ]
  },

  "rocket-bulkhead": {
    title: "Thrust Bulkhead",
    category: "Rocket Project UCLA",
    hero: "assets/img/bulk.png",
    tags: ["SolidWorks", "Structures", "Fasteners", "Hand Calculations"],
    overview:
      "Designed a rocket thrust bulkhead with attention to load transfer, bearing stress, fastener layout, and manufacturability.",
    sections: [
      {
        heading: "Engineering Problem",
        body:
          "The bulkhead needed to transfer thrust loads into the rocket structure while remaining manufacturable and lightweight."
      },
      {
        heading: "Design Work",
        body:
          "I evaluated fastener placement, material thickness, and bearing stress while balancing structural margin against packaging constraints."
      },
      {
        heading: "Skills Used",
        body:
          "This project combined SolidWorks modeling, mechanical reasoning, hand calculations, and design-for-manufacturing tradeoffs."
      }
    ],
    gallery: ["assets/img/bulk.png", "assets/img/rocket.png"]
  },

  "robot-arm": {
    title: "3-DOF Robotic Arm Simulation",
    category: "Class / Technical Project",
    hero: "assets/img/matarm.jpg",
    tags: ["MATLAB", "Simscape", "Inverse Kinematics", "SolidWorks"],
    overview:
      "Built a simulated robotic arm using CAD import, inverse kinematics, and coordinate-based motion input.",
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
    hero: "assets/img/draw.png",
    tags: ["SolidWorks", "FEA", "Fabrication", "Ergonomics"],
    overview:
      "Designed an adjustable leg support system with CAD, simulation, and fabrication-oriented decision making.",
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
    gallery: ["assets/img/draw.png"]
  },

  "faraday-bed": {
    title: "Faraday Cage Bed",
    category: "Personal Project",
    hero: "assets/img/faraday.jpg",
    tags: ["Prototyping", "SolidWorks", "Arduino", "Shielding"],
    overview:
      "Designed and built a dorm-compatible Faraday cage bed prototype to test RF shielding, blackout performance, airflow, and sleep discipline.",
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
    progress: "20%",
    overview:
      "Servo-actuated faucet controller for automatically filling a water bottle through repeatable timed cycles.",
    sections: [
      {
        heading: "Goal",
        body:
          "Create a simple, repeatable setup that fills the bottle with one button press while accounting for the RO system flow slowing down over time."
      },
      {
        heading: "Current Status",
        body:
          "Planning the actuation mechanism, mapping the faucet motion, and preparing CAD work. More useful prototyping will begin once the servo motors arrive."
      },
      {
        heading: "Next Steps",
        body:
          "Measure fill timing, design the servo linkage, create a bottle/faucet alignment jig, and later 3D print the housing."
      }
    ]
  },

  "busy-indicator": {
    title: "Busy Indicator",
    category: "Current Project",
    progress: "10%",
    overview:
      "A small visible indicator system to show when I am busy, recording, studying, or should not be interrupted.",
    sections: [
      {
        heading: "Goal",
        body:
          "Build a simple physical status display that communicates availability clearly."
      },
      {
        heading: "Current Status",
        body:
          "Concept stage. Main decisions are display type, enclosure style, and whether it should use buttons, LEDs, or wireless control."
      }
    ]
  },

  blinds: {
    title: "Automated Blinds",
    category: "Current Project",
    progress: "5%",
    overview:
      "Motorized blinds project for controlling room light automatically or with a simple user input.",
    sections: [
      {
        heading: "Goal",
        body:
          "Create a compact mechanism that can open and close blinds reliably without permanently modifying the apartment."
      },
      {
        heading: "Current Status",
        body:
          "Early concept stage. Need to inspect the blind geometry and decide between servo, stepper, or geared DC motor actuation."
      }
    ]
  },

  "umbrella-robot": {
    title: "Umbrella Robot",
    category: "Current Project",
    progress: "5%",
    overview:
      "Mobile robot concept that could carry or position an umbrella to provide shade or rain coverage.",
    sections: [
      {
        heading: "Goal",
        body:
          "Explore a small wheeled robot platform with a mounted umbrella and basic stability/control constraints."
      },
      {
        heading: "Current Status",
        body:
          "Idea stage. Needs early sketches, load/stability estimates, and drivetrain concept selection."
      }
    ]
  }
};

const personalSections = {
  ideas: {
    title: "Ideas",
    category: "Personal",
    overview:
      "A place for strange ideas, half-formed concepts, future projects, writing fragments, and thoughts that do not fit neatly into the engineering portfolio.",
    sections: [
      {
        heading: "Current Notes",
        body:
          "Add ideas here later. This can include invention concepts, video ideas, writing fragments, strange builds, or anything that feels worth preserving."
      }
    ]
  },

  aspirations: {
    title: "Aspirations",
    category: "Personal",
    overview:
      "A place to write about the kind of life, work, family, environment, and character I want to build toward.",
    sections: [
      {
        heading: "Direction",
        body:
          "Add aspirations here later. This could include career direction, personal principles, places I want to live, people I want to become closer to, and the kind of future I want."
      }
    ]
  },

  hobbies: {
    title: "Hobbies",
    category: "Personal",
    overview:
      "A place for music, books, films, habits, aesthetics, travel, and other non-engineering interests.",
    sections: [
      {
        heading: "Non-Engineering",
        body:
          "Add hobbies here later. This can include viola, music, books, walking, film, YouTube ideas, or anything else that matters outside engineering."
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

      ${(project.sections || [])
        .map(
          (section) => `
            <section class="modal-section">
              <h3>${section.heading}</h3>
              <p>${section.body}</p>
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
const contactOpen = document.getElementById("contact-open");
const contactClose = document.getElementById("contact-close");

if (contactOpen && contactModal) {
  contactOpen.addEventListener("click", () => {
    contactModal.classList.add("open");
  });
}

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
  secretButton.addEventListener("click", () => {
    secretSection.classList.toggle("open");
  });
}
