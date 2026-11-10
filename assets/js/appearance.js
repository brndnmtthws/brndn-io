const sitePreference = document.documentElement.getAttribute(
  "data-default-appearance",
)
const userPreference = localStorage.getItem("appearance")

function getCSSValue(varName) {
  return window
    .getComputedStyle(document.documentElement)
    .getPropertyValue(varName)
    .trim()
}

function setThemeColor() {
  var metaThemeColor = document.querySelector("meta[name=theme-color]")
  document.documentElement.classList.contains("dark")
    ? metaThemeColor.setAttribute("content", getCSSValue("--theme-color-dark"))
    : metaThemeColor.setAttribute("content", getCSSValue("--theme-color-light"))
  return true
}

if (
  (sitePreference === "dark" && userPreference === null) ||
  userPreference === "dark"
) {
  document.documentElement.classList.add("dark")
  setThemeColor()
}

if (document.documentElement.getAttribute("data-auto-appearance") === "true") {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches &&
    userPreference !== "light"
  ) {
    document.documentElement.classList.add("dark")
    setThemeColor()
  }
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      setThemeColor()
    })
}

function add_to_top_elem() {
  var body = document.body
  var html = document.documentElement

  const height =
    Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight,
    ) - 150

  const elem = document.getElementById("to-top")
  if (elem === null || elem === undefined) {
    return
  }

  elem.hidden = height < window.innerHeight
}

function handleTocState() {
  const tocDetails = document.getElementById("toc-details")
  if (!tocDetails) return

  const tocState = localStorage.getItem("tocState")
  const isSmallScreen = window.innerWidth < 640 // sm breakpoint in Tailwind

  // Set initial state based on screen size and stored preference
  if (tocState !== null) {
    tocDetails.open = tocState === "true"
  } else {
    tocDetails.open = !isSmallScreen
  }

  // Store state when toggled
  tocDetails.addEventListener("toggle", () => {
    localStorage.setItem("tocState", tocDetails.open)
  })

  // Update state on resize
  window.addEventListener("resize", () => {
    const newIsSmallScreen = window.innerWidth < 640
    if (tocState === null && isSmallScreen !== newIsSmallScreen) {
      tocDetails.open = !newIsSmallScreen
    }
  })
}

// Marks the table-of-contents link for the section being read.
function handleTocHighlight() {
  const links = [...document.querySelectorAll("#TableOfContents a")]
  const sections = links
    .map((link) => ({
      link,
      heading: document.getElementById(decodeURIComponent(link.hash.slice(1))),
    }))
    .filter((section) => section.heading !== null)
  if (sections.length === 0) return

  const update = () => {
    // The current section is the last heading above the top quarter of the viewport.
    const line = window.innerHeight / 4
    let current = null
    for (const section of sections) {
      if (section.heading.getBoundingClientRect().top > line) break
      current = section
    }
    for (const section of sections) {
      if (section === current) {
        section.link.setAttribute("aria-current", "location")
      } else {
        section.link.removeAttribute("aria-current")
      }
    }
  }

  update()
  window.addEventListener("scroll", update, { passive: true })
}

window.addEventListener("DOMContentLoaded", (event) => {
  add_to_top_elem()
  setThemeColor()
  handleTocState()
  handleTocHighlight()
  var switchers = document.querySelectorAll("[id^='appearance-switcher']")
  switchers.forEach((switcher) => {
    switcher.addEventListener("click", () => {
      document.documentElement.classList.toggle("dark")
      setThemeColor()
      localStorage.setItem(
        "appearance",
        document.documentElement.classList.contains("dark") ? "dark" : "light",
      )
    })
    switcher.addEventListener("contextmenu", (event) => {
      event.preventDefault()
      localStorage.removeItem("appearance")
    })
  })
})
