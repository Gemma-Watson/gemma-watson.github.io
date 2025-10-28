import { diffParts } from "./date-utils.js"
import { formatCountdownText } from "./graduation-rules.js"

const $ = id => document.getElementById(id)

// 31 October 2026 at midnight local
const graduationDate = new Date("2026-10-31T00:00:00")

function update() {
  const el = $("grad-countdown")
  if (!el) return
  const parts = diffParts(graduationDate, new Date())
  el.textContent = formatCountdownText(parts)
}

document.addEventListener("DOMContentLoaded", () => {
  update()
  setInterval(update, 1000)  // live tick
})
