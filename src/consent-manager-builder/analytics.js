export default function conditionallyLoadAnalytics({
  writeKey,
  destinations,
  destinationPreferences,
  isConsentRequired,
  shouldReload = true,
  onConsent,
}) {
  const integrations = {All: false, 'Segment.io': true}
  let isAnythingEnabled = false

  console.log('===> inside analytics');

  if (!destinationPreferences) {
    console.log('===> destination preferences', destinationPreferences);
    if (isConsentRequired) {
      console.log('====> consent is required');
      return
    }

    console.log('===> load a.js');
    // Load a.js normally when consent isn't required and there's no preferences
    if (!window.analytics.initialized) {
      window.analytics.load(writeKey)
    }
    return
  }

  for (const destination of destinations) {
    const isEnabled = Boolean(destinationPreferences[destination.id])
    if (isEnabled) {
      isAnythingEnabled = true
    }
    integrations[destination.id] = isEnabled
  }

  // Reload the page if the trackers have already been initialised so that
  // the user's new preferences can take affect
  if (window.analytics.initialized) {
    if (shouldReload) {
      window.location.reload()
    }
    return
  }

  console.log('===> gone pass destination setups');
  // Don't load a.js at all if nothing has been enabled
  if (isAnythingEnabled) {
    console.log('===> if something is enabled', onConsent);
    window.analytics.load(writeKey, {integrations})
    onConsent()
  }
}
