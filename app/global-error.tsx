"use client"

// error boundaries shoulw be client side rendered
export default function GlobalError({ }: {
    error: Error & { digest?: string };
}) {
    return (
        <html>
            <body>
                <h2>Global Error</h2>
            </body>
        </html>
    )
}