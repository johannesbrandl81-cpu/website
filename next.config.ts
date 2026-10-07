import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Das Verzeichnis kann in einem größeren Repository liegen; ohne diese Angabe
  // sucht Turbopack die Projektwurzel anhand der Lockfiles und findet die falsche.
  turbopack: { root: __dirname },

  // Die Seite hieß in der ersten Vorschau /neurologie.
  async redirects() {
    return [{ source: "/neurologie", destination: "/untersuchungen", permanent: true }];
  },

  async headers() {
    return [
      {
        source: "/:pfad*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
