import fetch from 'isomorphic-fetch'
import {flatten, sortedUniqBy, sortBy} from 'lodash'

async function fetchDestinationForWriteKey(writeKey) {
  const res = await fetch(
    `https://cdn.segment.com/v1/projects/${writeKey}/integrations`
  )

  if (!res.ok) {
    throw new Error(
      `Failed to fetch integrations for write key ${writeKey}: HTTP ${
        res.status
      } ${res.statusText}`
    )
  }

  const destinations = await res.json()

  // Rename creationName to id to abstract the weird data model
  for (const destination of destinations) {
    /**
     * Impact Radius is now Impact on Segment.. maybe this is why
     * the requests are failing. So we'll change the name here and test
     * to see if this works
     */
    const name = destination.creationName
    destination.id = name
    delete destination.creationName
  }

  return destinations
}

export default async function fetchDestinations(writeKeys) {
  const destinationsRequests = []
  for (const writeKey of writeKeys) {
    destinationsRequests.push(fetchDestinationForWriteKey(writeKey))
  }

  let destinations = flatten(await Promise.all(destinationsRequests))
  // Remove the dummy Repeater destination
  destinations = destinations.filter(d => d.id !== 'Repeater')
  destinations = sortBy(destinations, ['id'])
  destinations = sortedUniqBy(destinations, 'id')

  return destinations
}
