// Extra JavaScript for Spokane Mountaineers website

document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const mobileNavToggle = document.querySelector(".md-header__button.md-icon")
  if (mobileNavToggle) {
    mobileNavToggle.setAttribute("aria-label", "Open navigation menu")
  }

  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href")
      if (targetId !== "#") {
        e.preventDefault()
        document.querySelector(targetId).scrollIntoView({
          behavior: "smooth",
        })
      }
    })
  })

  // Initialize current date for copyright
  const currentYear = new Date().getFullYear()
  const copyrightEl = document.querySelector(".md-footer-copyright")
  if (copyrightEl) {
    copyrightEl.innerHTML = `Copyright &copy; ${currentYear} Spokane Mountaineers`
  }

  // Add active class to current navigation item
  const currentPath = window.location.pathname
  document.querySelectorAll(".md-nav__link").forEach((link) => {
    const linkPath = link.getAttribute("href")
    if (linkPath && currentPath.includes(linkPath) && linkPath !== "/") {
      link.classList.add("md-nav__link--active")
    } else if (currentPath === "/" && linkPath === "/") {
      link.classList.add("md-nav__link--active")
    }
  })
})
