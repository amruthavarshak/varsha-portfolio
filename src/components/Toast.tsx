
export default function Toast({ message, type = 'success' }: { message: string; type?: 'success' | 'error' }) {
  const styles = type === 'success' ? 'bg-emerald-500' : 'bg-rose-500'
  return (<div className={`fixed bottom-4 right-4 text-white px-4 py-2 rounded shadow ${styles}`}>{message}</div>)
}
