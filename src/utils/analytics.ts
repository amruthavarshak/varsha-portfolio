
export function Analytics() {
  const id = import.meta.env.VITE_ANALYTICS_ID
  if (!id) return null
  return (<script defer data-domain={id} src="https://plausible.io/js/script.js"></script>)
}
