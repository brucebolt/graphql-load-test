import http from 'k6/http';
import { sleep } from 'k6';

export const options = { scenarios: {}}
let startTime = 0;
for(const vus of [25, 50, 100, 200, 400, 800]) {
  options.scenarios[`news_story_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders'
      }
  }

  options.scenarios[`news_story_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+60}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders'
      }
  }

  options.scenarios[`press_release_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+120}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers'
      }
  }

  options.scenarios[`press_release_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+180}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers'
      }
  }

  options.scenarios[`government_response_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+240}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
      }
  }

  options.scenarios[`government_response_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+300}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
      }
  }

  options.scenarios[`world_news_story_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+360}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations'
      }
  }

  options.scenarios[`world_news_story_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+420}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations'
      }
  }

  options.scenarios[`role_1_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+480}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/prime-minister'
      }
  }

  options.scenarios[`role_1_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+540}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/prime-minister'
      }
  }

  options.scenarios[`role_2_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+600}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3'
      }
  }

  options.scenarios[`role_2_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+660}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3'
      }
  }

  options.scenarios[`role_3_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+720}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip'
      }
  }

  options.scenarios[`role_3_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+780}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip'
      }
  }

  options.scenarios[`ministers_index_${vus}`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+840}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers'
      }
  }

  options.scenarios[`ministers_index_${vus}_graphql`] = {
    executor: 'constant-vus',
      vus,
      duration: '60s',
      startTime: `${startTime+900}s`,
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers'
      }
  }

  startTime += 960;
}

export function govuk_test() {
  const res = http.get(`https://www-origin.staging.publishing.service.gov.uk${__ENV.BASE_PATH}/?graphql=${__ENV.GRAPHQL}`);
  sleep(1);
}
