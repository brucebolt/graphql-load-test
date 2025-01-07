import http from "k6/http";
import { sleep } from "k6";

const pages = JSON.parse(open("./pages.json"));

const scenarios = {};

for (const vus of [25, 50, 100, 200, 400, 800]) {
  for (const page of pages) {
    scenarios[`${page.name}_${vus}`] = {
      executor: "constant-vus",
      vus,
      duration: "60s",
      exec: "govuk_test",
      env: {
        GRAPHQL: "false",
        BASE_PATH: page.basePath,
      },
    };

    scenarios[`${page.name}_${vus}_graphql`] = {
      executor: "constant-vus",
      vus,
      duration: "60s",
      exec: "govuk_test",
      env: {
        GRAPHQL: "true",
        BASE_PATH: page.basePath,
      },
    };
  }
}

const { SCENARIO } = __ENV;
const options = {
  scenarios: SCENARIO ? { [SCENARIO]: scenarios[SCENARIO] } : scenarios,
};

function govuk_test() {
  const res = http.get(
    `https://www-origin.staging.publishing.service.gov.uk${__ENV.BASE_PATH}/?graphql=${__ENV.GRAPHQL}`
  );
  sleep(1);
}

export { options, govuk_test };
