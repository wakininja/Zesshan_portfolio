// Smooth scroll to section
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Responsive menu toggle
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Project modal data
const projectData = {
  project1: `
    <h2>Refund Automation System</h2>
    <p><b>Problem:</b> Manual refund reconciliation caused delays.</p>
    <p><b>Solution:</b> Built Excel automation workflow using Google Apps Script.</p>
    <p><b>Tools:</b> Excel, Apps Script</p>
    <p><b>Impact:</b> Reduced processing time by 50%.</p>
  `,
  project2: `
    <h2>Incident Monitoring Dashboard</h2>
    <p><b>Problem:</b> Incidents tracked across multiple systems.</p>
    <p><b>Solution:</b> Built centralized monitoring dashboard in Power BI & Looker Studio.</p>
    <p><b>Tools:</b> Power BI, Looker Studio</p>
    <p><b>Impact:</b> Reduced resolution time by 20%.</p>
  `,
  project3: `
    <h2>AI Reporting Automation</h2>
    <p><b>Problem:</b> Weekly reports required manual work.</p>
    <p><b>Solution:</b> Automated report generation using AI tools.</p>
    <p><b>Tools:</b> AI, Automation</p>
    <p><b>Impact:</b> Saved 40% reporting time.</p>
  `,
  project4: `
    <h2>Sales Process Optimization</h2>
    <p><b>Problem:</b> Inefficient loan sales workflow.</p>
    <p><b>Solution:</b> Redesigned workflow using Excel & CRM analysis.</p>
    <p><b>Tools:</b> Excel, CRM</p>
    <p><b>Impact:</b> Achieved ₹1.4 Crore in sales within 2 months.</p>
  `
};

// Open modal
function openModal(project) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-body").innerHTML = projectData[project];
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Animated counters
const counters = document.querySelectorAll(".counter");
let countersStarted = false;

const animateCounters = () => {
  const metricsSection = document.getElementById("metrics");
  if (!countersStarted && window.scrollY > metricsSection.offsetTop - 300) {
    counters.forEach(counter => {
      const target = +counter.getAttribute("data-target");
      let count = 0;

      const update = () => {
        count += target / 100;
        if (count < target) {
          counter.innerText = Math.floor(count);
          requestAnimationFrame(update);
        } else {
          counter.innerText = target;
        }
      };
      update();
    });
    countersStarted = true;
  }
};

window.addEventListener("scroll", animateCounters);

// Close modal when clicking outside
window.addEventListener("click", function(event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
});
