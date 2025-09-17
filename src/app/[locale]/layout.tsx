export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Arvo:wght@400;700&display=swap" rel="stylesheet" />
        <style dangerouslySetInnerHTML={{
          __html: `
            body { font-family: 'Arvo', serif !important; }
            h1, h2, h3, h4, h5, h6 { font-family: 'Arvo', serif !important; }
            p, div, span { font-family: 'Arvo', serif !important; }
          `
        }} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
