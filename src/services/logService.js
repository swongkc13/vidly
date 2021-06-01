function init() {
  // Sentry.init({
  //   dsn:
  //     "https://e320259cf12047fd83fb30fdab29083f@o731525.ingest.sentry.io/5783590",
  //   integrations: [new Integrations.BrowserTracing()],
  //   // Set tracesSampleRate to 1.0 to capture 100%
  //   // of transactions for performance monitoring.
  //   // We recommend adjusting this value in production
  //   tracesSampleRate: 1.0,
  // });
}

function log(error) {
  console.error(error);
  //Sentry.captureException(error);
}

export default {
  init,
  log,
};
