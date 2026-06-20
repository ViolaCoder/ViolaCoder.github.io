const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

if (navToggle && nav) {
  navToggle.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
    });
  });
}

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
    gallery: [
      "assets/img/bulk.png",
      "assets/img/rocket.png"
    ]
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
    gallery: [
      "assets/img/matarm.jpg",
      "assets/img/Sim.gif"
    ]
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

  "website": {
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
    gallery: [
      "assets/img/website.jpg"
    ]
  }
};

const modal = document.querySelector("#project-modal");
const modalBody = document.querySelector("#modal-body");
const modalClose = document.querySelector(".modal-close");

function openProject(projectId) {
  const project = projects[projectId];
  if (!project) return;

  modalBody.innerHTML = `
    <article>
      <div class="modal-hero">
        <p class="eyebrow">${project.category}</p>
        <h2>${project.title}</h2>
        <p>${project.overview}</p>
        <div class="modal-meta">
          ${project.tags.map((tag) => `<span>${tag}</span>`).join("")}
        </div>
        <img src="${project.hero}" alt="${project.title}">
      </div>

      ${project.sections
        .map(
          (section) => `
          <section class="modal-section">
            <h3>${section.heading}</h3>
            <p>${section.body}</p>
          </section>
        `
        )
        .join("")}

      <section class="modal-section">
        <h3>Project Images</h3>
        <div class="modal-gallery">
          ${project.gallery
            .map((image) => `<img src="${image}" alt="${project.title} image">`)
            .join("")}
        </div>
      </section>
    </article>
  `;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-locked");
}

function closeProject() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-locked");
}

document.querySelectorAll(".project-open").forEach((card) => {
  card.addEventListener("click", () => {
    openProject(card.dataset.project);
  });
});

modalClose.addEventListener("click", closeProject);

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    closeProject();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("open")) {
    closeProject();
  }
});
