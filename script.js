import http from 'k6/http';
import { check } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 25,
  // A string specifying the total duration of the test run.
  duration: '30s',
}

export default function() {
  const res = http.get('https://www-origin.staging.publishing.service.gov.uk/world');

  check(res, {
    'is status 200': (r) => r.status === 200,
  });
}
