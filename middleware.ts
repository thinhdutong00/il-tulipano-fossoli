import { NextResponse, type NextRequest } from 'next/server'

const maintenanceHtml = `
<!doctype html>
<html lang="it">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Torneremo presto</title>

    <style>
      body {
        margin: 0;
        min-height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: Arial, sans-serif;
        background: #f7f7f7;
        color: #1d1d1d;
      }

      .box {
        max-width: 600px;
        margin: 20px;
        padding: 45px 30px;
        background: white;
        border-radius: 18px;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
        text-align: center;
      }

      h1 {
        margin: 0 0 15px;
        font-size: 36px;
      }

      p {
        margin: 0;
        font-size: 18px;
        line-height: 1.6;
        color: #555;
      }
    </style>
  </head>

  <body>
    <main class="box">
      <h1>Torneremo presto</h1>
      <p>
        Il sito è temporaneamente in manutenzione per un passaggio di gestione.
        Torneremo online il prima possibile.
      </p>
    </main>
  </body>
</html>
`

export function middleware(request: NextRequest) {
  const maintenanceMode = process.env.MAINTENANCE_MODE === 'true'

  if (!maintenanceMode) {
    return NextResponse.next()
  }

  const { pathname } = request.nextUrl

  if (
    pathname.startsWith('/_next') ||
    pathname === '/favicon.ico'
  ) {
    return NextResponse.next()
  }

  return new NextResponse(maintenanceHtml, {
    status: 503,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-store, no-cache, must-revalidate',
      'X-Robots-Tag': 'noindex, nofollow',
      'Retry-After': '86400',
    },
  })
}

export const config = {
  matcher: '/:path*',
}