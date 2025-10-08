document.addEventListener("DOMContentLoaded", () => {
  // ─── Share Menu Actions ─────────────────────
  function copyPageLink() {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert("Page link copied to clipboard!");
    });
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

  // ─── Sidebar Toggle ─────────────────────────
  document.querySelectorAll(".nav-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      const submenu = button.nextElementSibling;
      const isNowOpen = submenu.classList.toggle("show");
      button.classList.toggle("expanded", isNowOpen);
    });
  });

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
});

  // ─── GIF Mobile orientation checker ─────────
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



  // ─── GIF Mobile navbar toggle ─────────
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebar = document.querySelector(".sidebar");

if (sidebarToggle && sidebar) {
  sidebarToggle.addEventListener("click", () => {
    sidebar.classList.toggle("open");
  });
}

