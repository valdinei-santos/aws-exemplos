import { log } from './log.mjs';

export const handler = async (event) => {
    const response = {
      statusCode: 200,
      body: JSON.stringify(event),
      headers: {
        "content-type": "application/json",
      }
    };
    log('event: ', JSON.stringify(event));
    return response;
  };