import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
  scenarios: {
    news_story_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
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
      duration: '60s',
      startTime: '60s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    },
    news_story_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '120s',
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
      duration: '60s',
      startTime: '180s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/government-financial-boost-for-small-and-medium-housebuilders',
        APP_NAME: 'government-frontend'
      }
    },
    press_release_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '240s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers',
        APP_NAME: 'government-frontend'
      }
    },
    press_release_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '300s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers',
        APP_NAME: 'government-frontend'
      }
    },
    press_release_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '360s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers',
        APP_NAME: 'government-frontend'
      }
    },
    press_release_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '420s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/a-very-merry-fishmas-for-south-east-anglers',
        APP_NAME: 'government-frontend'
      }
    },
    government_response_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '480s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
        APP_NAME: 'government-frontend'
      }
    },
    government_response_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '540s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
        APP_NAME: 'government-frontend'
      }
    },
    government_response_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '600s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
        APP_NAME: 'government-frontend'
      }
    },
    government_response_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '660s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/new-child-car-seat-rules-no-change-for-existing-booster-seats',
        APP_NAME: 'government-frontend'
      }
    },
    world_news_story_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '720s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations',
        APP_NAME: 'government-frontend'
      }
    },
    world_news_story_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '780s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations',
        APP_NAME: 'government-frontend'
      }
    },
    world_news_story_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '840s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations',
        APP_NAME: 'government-frontend'
      }
    },
    world_news_story_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '900s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/news/british-high-commission-marks-his-majesty-king-charles-iiis-birthday-with-brilliantly-british-celebrations',
        APP_NAME: 'government-frontend'
      }
    },
    role_1_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '960s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/prime-minister',
        APP_NAME: 'collections'
      }
    },
    role_1_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1020s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/prime-minister',
        APP_NAME: 'collections'
      }
    },
    role_1_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1080s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/prime-minister',
        APP_NAME: 'collections'
      }
    },
    role_1_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1140s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/prime-minister',
        APP_NAME: 'collections'
      }
    },
    role_2_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1200s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3',
        APP_NAME: 'collections'
      }
    },
    role_2_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1260s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3',
        APP_NAME: 'collections'
      }
    },
    role_2_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1320s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3',
        APP_NAME: 'collections'
      }
    },
    role_2_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1380s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/secretary-of-state-for-culture-media-and-sport--3',
        APP_NAME: 'collections'
      }
    },
    role_3_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1440s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip',
        APP_NAME: 'collections'
      }
    },
    role_3_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1500s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip',
        APP_NAME: 'collections'
      }
    },
    role_3_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1560s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip',
        APP_NAME: 'collections'
      }
    },
    role_3_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1620s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers/captain-of-the-kings-bodyguard-of-the-yeoman-of-the-guard-lords-deputy-chief-whip',
        APP_NAME: 'collections'
      }
    },
    ministers_index_high: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1680s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers',
        APP_NAME: 'collections'
      }
    },
    ministers_index_low: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1740s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'false',
        BASE_PATH: '/government/ministers',
        APP_NAME: 'collections'
      }
    },
    ministers_index_high_graphql: {
      executor: 'constant-vus',
      vus: 500,
      duration: '60s',
      startTime: '1800s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers',
        APP_NAME: 'collections'
      }
    },
    ministers_index_low_graphql: {
      executor: 'constant-vus',
      vus: 25,
      duration: '60s',
      startTime: '1860s',
      exec: 'govuk_test',
      env: {
        GRAPHQL: 'true',
        BASE_PATH: '/government/ministers',
        APP_NAME: 'collections'
      }
    }
  }
}

export function govuk_test() {
  const res = http.get(`https://www-origin.staging.publishing.service.gov.uk${__ENV.BASE_PATH}/?graphql=${__ENV.GRAPHQL}`);
  sleep(1);
}
