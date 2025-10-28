export function formatCountdownText(parts) {
  const { days, hours, minutes, done } = parts
  if (done) return "Graduated!"
  return `${days} days ${hours} hrs ${minutes} mins`
}
