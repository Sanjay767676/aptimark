export default function NotFound() {
  return (
    <main style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#faf5ee', color: '#3a302a', fontFamily: 'Manrope, sans-serif' }}>
      <div style={{ textAlign: 'center', padding: '2rem' }}>
        <h1 style={{ fontFamily: 'Eb Garamond, serif', fontSize: '3rem', marginBottom: '0.75rem' }}>Page not found</h1>
        <p>The page you are looking for does not exist.</p>
      </div>
    </main>
  );
}
