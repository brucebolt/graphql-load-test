import http from 'k6/http';
import { sleep } from 'k6';

 const scenarios = {
    news_story_high: {
      executor: 'constant-vus',
      vus: 1000,
      duration: '10s',
      startTime: '0s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    },
    news_story_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '10s',
      startTime: '10s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    },
    news_story_high_graphql: {
      executor: 'constant-vus',
      vus: 1000,
      duration: '10s',
      startTime: '20s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    },
    news_story_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '10s',
      startTime: '30s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    }
  }


const { SCENARIO } = __ENV;
export const options = {
  scenarios: SCENARIO ? { [SCENARIO]: scenarios[SCENARIO] } : scenarios,
}
export function govuk_test() {
  const res = http.get(`https://www-origin.staging.publishing.service.gov.uk${__ENV.BASE_PATH}/?graphql=${__ENV.GRAPHQL}`);
  sleep(1);
}
