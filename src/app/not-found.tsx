export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', display: 'grid', placeItems: 'center', minHeight: '100vh', margin: 0, background: '#16181d', color: '#f7f5f0' }}>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '3rem', fontWeight: 700, margin: 0, fontFamily: 'Georgia, serif' }}>404</p>
          <p style={{ opacity: 0.7 }}>This page could not be found.</p>
          <p><a href="/" style={{ color: '#e8472b', fontWeight: 600 }}>← VersionDude</a></p>
        </main>
      </body>
    </html>
  );
}
