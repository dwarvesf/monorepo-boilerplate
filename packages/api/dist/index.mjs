// src/libs/fetcher.ts
import fetch from "isomorphic-unfetch";

// src/libs/emitter.ts
import mitt from "mitt";
var EVENTS = {
  API_ERROR: "API_ERROR"
};
var emitter = mitt();

// src/libs/fetcher.ts
async function fetcher(input, init) {
  const res = await fetch(input, init);
  if (res.ok) {
    const contentType = res.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return res.json();
    }
    return res.text();
  }
  const error = new Error(res.statusText);
  const response = await res.json();
  error.response = response;
  error.message = response.message;
  emitter.emit(EVENTS.API_ERROR, {
    input,
    status: res.status,
    statusText: res.statusText,
    response: res
  });
  return Promise.reject(error);
}

// src/libs/apis.ts
var GET_PATHS = {
  getUsers: "/users"
};
var Client = class {
  constructor(baseUrl = "http://localhost:3000/api") {
    this.headers = {
      "Content-Type": "application/json"
    };
    this.baseUrl = baseUrl;
  }
  getUsers() {
    return fetcher(`${this.baseUrl}/users`, {
      headers: this.headers
    });
  }
};
export {
  Client,
  EVENTS,
  GET_PATHS,
  emitter
};
//# sourceMappingURL=index.mjs.map