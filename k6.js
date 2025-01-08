import http from "k6/http";
import { sleep } from "k6";

const data = JSON.parse(open("./data.json"));
const scenarios = {};
const baseScenarioOptions = {
  executor: "constant-vus",
  duration: "60s",
  exec: "govuk_test",
};

for (const page of data.pages) {
  for (const vus of data.vus) {
    scenarios[`${page.name}_${vus}`] = {
      ...baseScenarioOptions,
      vus,
      env: {
        GRAPHQL: "false",
        BASE_PATH: page.basePath,
      },
    };

    scenarios[`${page.name}_${vus}_graphql`] = {
      ...baseScenarioOptions,
      vus,
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
  let url = `https://www-origin.staging.publishing.service.gov.uk${__ENV.BASE_PATH}`;

  if (__ENV.GRAPHQL === "true") url += `?graphql=${__ENV.GRAPHQL}`

  const res = http.get(url);

  sleep(1);
}

export { govuk_test, options };
