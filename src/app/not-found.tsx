export default function NotFound() {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'system-ui, sans-serif', display: 'grid', placeItems: 'center', minHeight: '100vh', margin: 0, background: '#fbfaf7', color: '#16181d' }}>
        <main style={{ textAlign: 'center', padding: '2rem' }}>
          <p style={{ fontSize: '3rem', fontWeight: 700, margin: 0 }}>404</p>
          <p style={{ color: '#68697' + '4' }}>This page could not be found.</p>
          <p><a href="/" style={{ color: '#e23c26', fontWeight: 600 }}>← VersionDude</a></p>
        </main>
      </body>
    </html>
  );
}
