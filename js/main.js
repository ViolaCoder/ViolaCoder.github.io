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
      heading: "Philosophies",
      html: `
        <div class="essay-block">
          <h4>High School</h4>
          <p>My philosophy is ever changing, likely because I am still young. In high school, I was more hot-headed and ambitious. I still have that ambition, but it was better manifested then.</p>
          <p>I became interested in astronomy freshman year, and when COVID hit, that interest intensified. Thinking about the scale and futility of life radically shifted my perception and identity. I became bitter toward the external world because I noticed how much attention is wasted on stupid things when we only have one life.</p>
          <p>I hated school assemblies. I hated class. I thought I could learn faster on my own and spend more time doing meaningful things. I did not fully know what meaningful things were, but I knew they were not in the classroom or assembly.</p>
          <p>I began practicing violin seriously. That became meaning for me. I also got into politics. I do not think politics were especially meaningful, but developing opinions helped me develop, even if I still believe my optimal involvement in politics would be zero.</p>

          <h4>The Ideal</h4>
          <p>I dedicated myself to looking as good as possible for college. I did clubs, AP classes, instrumental conservatory, morning workouts, and long school days. I thought all that effort was effort I was putting into myself.</p>
          <p>I wanted to get as close to my potential as possible. To me, potential was The Ideal: the version of yourself that the ideal version of yourself would recognize as ideal.</p>
          <p>That sounds circular, but I think it is true that what we think we want is often not what we actually want, and what we actually want is not always what is best. Even if my idea of The Ideal was imperfect, I believed moving toward it would still bring me closer than staying where I was.</p>
          <p>I liked encouraging others to do the same. I felt like a catalyst. I brought friends to the gym. I wanted people to do meaningful things instead of wasting time on trivialities.</p>

          <h4>College</h4>
          <p>In college, my perspective changed again. Previous Nathan was hot-headed and ambitious. I still respect that version of myself and often want to reclaim him, but I am more mature now.</p>
          <p>Engineering helped me see the flaws in everything. Even designing simple components requires tolerances, clearance, manufacturing limits, and tradeoffs. Perfection is impossible, or at least infeasible.</p>
          <p>I still believe we should limit the time we waste for other people. I still get angry at useless institutional requirements because they consume thousands of hours across thousands of students for almost no meaningful result.</p>
          <p>But this philosophy also prevented me from growing. Everyone praises taking the road less traveled, but some roads are less traveled because they go nowhere. The chalice may be in the darkest forest, but walking in without a plan can leave you lost.</p>
          <p>For my first two years of college, I only went to classes when I thought I needed to. I believed I could learn better on my own. I was half-right. I had the endurance to learn from a textbook and pencil, but not always the discipline to do it at the correct time. School was structure.</p>
          <p>Music reinforced this because the classes were easy but attendance was mandatory. I felt trapped when I could have been practicing or studying difficult engineering classes.</p>

          <h4>Recognition and Self-Worth</h4>
          <p>I quit music at the end of Winter sophomore year. I was good, and I do not think people give me enough credit. I do not show myself or brag much, so I often see people I think are less accomplished receive praise I wish I had received.</p>
          <p>The lack of external recognition burdened me. I wondered why, if I was a Baja Project Engineer, had double-majored in music, and had survived hard mechanical engineering classes, I still was not near where I wanted to be.</p>
          <p>I encourage criticism because I want to see the entirety of myself: where I shine and where I need polish. But because of this, I am extremely self-critical. I often confuse lack of external validation with lack of progress.</p>
          <p>High school was the hero’s journey. College has felt like the degradation after accomplishing the destruction of the ring.</p>

          <h4>The Future / Current Snapshot</h4>
          <p>Noise is noise. Data is data. When they mix, the signal becomes harder to decipher. I think I have put too much emphasis on feedback, because not all feedback is useful.</p>
          <p>If I were a drone operating with limited noise reduction, high-frequency feedback could make me veer off and destroy myself. But that does not mean feedback should be ignored. It means it should be filtered.</p>
          <p>Comparing myself to myself, to other people, and back to myself may give me a better map than only listening to the external world.</p>
          <p>I have many goals. I know I can do them, but I need proof from myself. I need to know I am not just talk. I know I have accomplished things before, but I want documented evidence that, at least at one time, I was competent at the things I enjoy.</p>
          <p>I am a jack of all trades. I want to master at least one.</p>
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
}

  aspirations: {
    title: "Aspirations",
    category: "Personal",
    overview:
      "A place to write about the kind of life, work, family, environment, and character I want to build toward.",
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
      "A place for music, books, films, habits, aesthetics, travel, and other non-engineering interests.",
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
          "Viola pieces, songs, repertoire, chamber music, and musical ideas I want to return to."
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
  ${section.html ? section.html : `<p>${section.body}</p>`}
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
