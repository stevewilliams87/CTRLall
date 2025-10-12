document.addEventListener("DOMContentLoaded", () => {
  // ─── Topbar Menu Toggle ─────────────────────
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });
  }

  // ─── Share Menu Actions ─────────────────────
  function copyPageLink() {
    const url = window.location.href;
    navigator.clipboard.writeText(url)
      .then(() => {
        const tooltip = document.getElementById("copy-tooltip");
        tooltip.style.visibility = "visible";
        setTimeout(() => {
          tooltip.style.visibility = "hidden";
        }, 1500);
      })
      .catch(err => console.error("Copy failed:", err));
  }

  function emailCurrentPage(event) {
    event.preventDefault();
    const subject = "Check this out";
    const body = window.location.href;
    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // ─── Populate Social Share Links ─────────────
  const pageUrl = encodeURIComponent(window.location.href);
  const pageTitle = encodeURIComponent(document.title);

  const socialLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    reddit: `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`,
    bluesky: `https://bsky.app/intent/compose?text=${pageTitle}%20${pageUrl}`,
    threads: `https://www.threads.net/intent/post?text=${pageTitle}%20${pageUrl}`
  };

  Object.entries(socialLinks).forEach(([id, url]) => {
    const el = document.getElementById(`${id}-share`);
    if (el) el.href = url;
  });

  // ─── Share Dropdown Behavior ────────────────
  const dropbtn = document.querySelector(".dropbtn");
  const dropdown = document.getElementById("share-dropdown");

  if (dropbtn && dropdown) {
    dropbtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isVisible = dropdown.style.display === "block";
      dropdown.style.display = isVisible ? "none" : "flex";
      dropdown.style.position = "fixed";
      dropdown.style.top = "60px";
      dropdown.style.left = "50%";
      dropdown.style.transform = "translateX(-50%)";
      dropdown.style.flexDirection = "row";
      dropdown.style.gap = "12px";
      dropdown.style.alignItems = "center";
      dropdown.style.animation = isVisible ? "" : "fadeIn 0.2s ease-out";
    });

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
        dropdown.style.display = "none";
        dropdown.style.animation = "";
      }
    });
  }

  // ─── Sidebar Nested Toggle ──────────────────
  document.querySelectorAll(".nav-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;
      const isNowOpen = submenu.classList.toggle("show");
      button.classList.toggle("expanded", isNowOpen);
      button.setAttribute("aria-expanded", isNowOpen);
    });
  });

  // ─── Sidebar Collapse Toggle ────────────────
  const toggleBtn = document.getElementById("navbar-toggle");
  const sidebarWrapper = document.querySelector(".sidebar-wrapper");

  if (toggleBtn && sidebarWrapper) {
    const wasCollapsed = localStorage.getItem("sidebarCollapsed") === "true";
    if (wasCollapsed) {
      sidebarWrapper.classList.add("collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
    } else {
      sidebarWrapper.classList.remove("collapsed");
      toggleBtn.setAttribute("aria-expanded", "true");
    }

    toggleBtn.addEventListener("click", () => {
      const isCollapsed = sidebarWrapper.classList.toggle("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);
    });
  }

  // ─── Footer Fade-In on Scroll ───────────────
  const footer = document.querySelector(".site-footer");
  window.addEventListener("scroll", () => {
    const scrollBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
    footer.style.opacity = scrollBottom ? "1" : "0";
  });

  // ─── GIF Tooltip on Table Row Hover ─────────
  const tooltip = document.getElementById("gif-tooltip");
  const tooltipImg = tooltip?.querySelector("img");

  if (tooltip && tooltipImg) {
    document.querySelectorAll(".tooltip-row").forEach((row) => {
      row.addEventListener("mouseenter", () => {
        const gifSrc = row.getAttribute("data-gif");
        tooltipImg.src = gifSrc;
        tooltip.style.display = "block";
      });

      row.addEventListener("mousemove", (e) => {
        tooltip.style.left = e.pageX + 15 + "px";
        tooltip.style.top = e.pageY + 15 + "px";
      });

      row.addEventListener("mouseleave", () => {
        tooltip.style.display = "none";
        tooltipImg.src = "";
      });
    });
  }

  // ─── Mobile Orientation Overlay ─────────────
  function checkOrientation() {
    const overlay = document.getElementById("portrait-overlay");
    if (overlay) {
      overlay.style.display = window.innerHeight > window.innerWidth ? "flex" : "none";
    }
  }

  window.addEventListener("resize", checkOrientation);
  window.addEventListener("load", checkOrientation);

  // ─── Modal Image Preview ─────────────────────
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  const closeBtn = document.querySelector(".close");
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // ─── Portrait Mode Warning ──────────────────────
function checkOrientation() {
  const warning = document.getElementById('portrait-warning');
  if (window.matchMedia("(orientation: portrait)").matches) {
    warning.style.display = 'flex';
  } else {
    warning.style.display = 'none';
  }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);
document.addEventListener('DOMContentLoaded', checkOrientation);

  // ─── Contact Form Subject Line ───────────────
  const category = document.getElementById("category");
  const subjectLine = document.getElementById("subjectLine");

  if (category && subjectLine) {
    category.addEventListener("change", () => {
      const selected = category.value;
      subjectLine.value = selected && selected !== "#" ? `Inquiry from ${selected}` : "New Inquiry";
    });
  }

  // ─── Contact Form Confirmation ───────────────
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("formSuccess");

  if (form && successMessage) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        if (response.ok) {
          form.reset();
          successMessage.style.display = "block";
        } else {
          alert("Oops! Something went wrong. Please try again.");
        }
      } catch (error) {
        console.error("Form submission error:", error);
        alert("Network error. Please try again later.");
      }
    });
  }
});
