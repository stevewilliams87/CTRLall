document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ Steve's unified main.js is running");

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

  const facebook = document.getElementById("facebook-share");
  const reddit = document.getElementById("reddit-share");
  const bluesky = document.getElementById("bluesky-share");
  const threads = document.getElementById("threads-share");

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

  if (isVisible) {
    dropdown.style.display = "none";
    dropdown.style.animation = "";
  } else {
    const rect = dropbtn.getBoundingClientRect();
    dropdown.style.position = "fixed";
    dropdown.style.top = "60px";
    dropdown.style.right = "20px";
    dropdown.style.display = "flex"; // 🔥 force horizontal layout
    dropdown.style.flexDirection = "row"; // 🔥 side-by-side
    dropdown.style.gap = "12px"; // 🔥 spacing between icons
    dropdown.style.alignItems = "center";
    dropdown.style.animation = "fadeIn 0.2s ease-out";
  }
});

    document.addEventListener("click", (e) => {
      if (!dropdown.contains(e.target) && !dropbtn.contains(e.target)) {
        dropdown.style.display = "none";
        dropdown.style.animation = "";
      }
    });
  }

  // ─── Topbar Hover Behavior ──────────────────
  const shareTrigger = document.querySelector(".topbar-share-trigger");
  const shareBar = document.querySelector(".topbar-share-bar");

  if (shareTrigger && shareBar) {
    shareTrigger.addEventListener("click", (e) => {
      e.preventDefault();
      shareBar.classList.toggle("active");
    });

    document.addEventListener("click", (e) => {
      if (!shareBar.contains(e.target) && !shareTrigger.contains(e.target)) {
        shareBar.classList.remove("active");
      }
    });

    shareTrigger.addEventListener("mouseenter", () => {
      shareBar.classList.add("active");
    });

    shareTrigger.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!shareBar.matches(":hover")) {
          shareBar.classList.remove("active");
        }
      }, 100);
    });

    shareBar.addEventListener("mouseleave", () => {
      shareBar.classList.remove("active");
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
