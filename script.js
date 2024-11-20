import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 3000,
  // A string specifying the total duration of the test run.
  duration: '30s',
}

export default function() {
  const res = http.get('http://collections.apps.svc.cluster.local/world');

  check(res, {
    'is status 200': (r) => r.status === 200,
    'is status 2xx, not 200': (r) => r.status >= 201 && r.status <= 299,
    'is status 3xx': (r) => r.status >= 300 && r.status <= 399,
    'is status 4xx': (r) => r.status >= 400 && r.status <= 499,
    'is status 5xx': (r) => r.status >= 500 && r.status <= 599,
  });

  sleep(1);
}
