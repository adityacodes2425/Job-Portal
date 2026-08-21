import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

// Ensure to call this before importing any other modules!
Sentry.init({
  dsn: "https://f076c5e68bc3cdb1751e5fadf3a6968c@o4508924957032448.ingest.us.sentry.io/4508929363673088",
  integrations: [
    // Add our Profiling integration
    nodeProfilingIntegration(),
    Sentry.mongooseIntegration(),
  ],
  profilesSampleRate: 1.0,
});

// Handle uncaught exceptions and rejections
process.on("uncaughtException", (err) => {
  console.error("Uncaught Exception:", err);
  Sentry.captureException(err);
  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection:", err);
  Sentry.captureException(err);
  process.exit(1);
});

export default Sentry;
