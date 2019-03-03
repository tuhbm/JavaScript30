const inputs = document.querySelectorAll('.controls input')

function handler(event) {
  const { target } = event
  const suffix = target.dataset.sizing || ''

  document
    .documentElement
    .style
    .setProperty(`--${target.name}`, `${target.value}${suffix}`)
}

inputs.forEach((input) => input.addEventListener('input', handler))
