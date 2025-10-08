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
      }, 1500); // Hide after 1.5 seconds
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

  const linkedin = document.getElementById("linkedin-share");
  const facebook = document.getElementById("facebook-share");
  const reddit = document.getElementById("reddit-share");
  const bluesky = document.getElementById("bluesky-share");
  const threads = document.getElementById("threads-share");

  if (linkedin) linkedin.href = `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`;
  if (facebook) facebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
  if (reddit) reddit.href = `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`;
  if (bluesky) bluesky.href = `https://bsky.app/intent/compose?text=${pageTitle}%20${pageUrl}`;
  if (threads) threads.href = `https://www.threads.net/intent/post?text=${pageTitle}%20${pageUrl}`;

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
      dropdown.style.right = "20px";
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
    const savedState = localStorage.getItem("sidebarCollapsed") === "true";
    if (savedState) {
      sidebarWrapper.classList.add("collapsed");
      toggleBtn.setAttribute("aria-expanded", "false");
    }

    toggleBtn.addEventListener("click", () => {
      const isCollapsed = sidebarWrapper.classList.toggle("collapsed");
      toggleBtn.setAttribute("aria-expanded", !isCollapsed);
      localStorage.setItem("sidebarCollapsed", isCollapsed);
    });
  }

  // ─── Mobile Sidebar Toggle (Unified) ────────
  const sidebarToggle = document.getElementById("sidebar-toggle");

  if (sidebarToggle && sidebarWrapper) {
    sidebarToggle.addEventListener("click", () => {
      const isOpen = sidebarWrapper.classList.toggle("open");
      document.body.classList.toggle("sidebar-open", isOpen);
      console.log("Mobile sidebar toggled:", isOpen);
    });
  } else {
    console.warn("Mobile sidebar toggle failed: missing #sidebar-toggle or .sidebar-wrapper");
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
    if (window.innerHeight > window.innerWidth) {
      overlay.style.display = "flex";
    } else {
      overlay.style.display = "none";
    }
  }

  window.addEventListener("resize", checkOrientation);
  window.addEventListener("load", checkOrientation);
});

 // ─── Modal Image Preview ─────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");

  document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
      modalImg.alt = img.alt;
    });
  });

  document.querySelector(".close").addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
