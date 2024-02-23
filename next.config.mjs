import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  // disable: process.env.NODE_ENV === "development",
  register: true,
  scope: "/",
  // sw: "service-worker.js",
  //...
  workboxOptions: {
    // Workbox options go here...
  },
  // customWorkerSrc: "service-worker",
  // customWorkerDest: "somewhere-else", // defaults to `dest`
  // customWorkerPrefix: "not/a-worker",
  // ...
  fallbacks: {
    // Failed page requests fallback to this.
    document: "/~offline",
    // This is for /_next/.../.json files.
    // data: "/fallback.json",
    // This is for images.
    // image: "/fallback.webp",
    // This is for audio files.
    // audio: "/fallback.mp3",
    // This is for video files.
    // video: "/fallback.mp4",
    // This is for fonts.
    // font: "/fallback-font.woff2",
  },
});

export default withPWA({
  // Your Next.js config
});
