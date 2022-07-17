"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target, mod));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Client: () => Client,
  EVENTS: () => EVENTS,
  GET_PATHS: () => GET_PATHS,
  emitter: () => emitter
});
module.exports = __toCommonJS(src_exports);

// src/libs/fetcher.ts
var import_isomorphic_unfetch = __toESM(require("isomorphic-unfetch"));

// src/libs/emitter.ts
var import_mitt = __toESM(require("mitt"));
var EVENTS = {
  API_ERROR: "API_ERROR"
};
var emitter = (0, import_mitt.default)();

// src/libs/fetcher.ts
async function fetcher(input, init) {
  const res = await (0, import_isomorphic_unfetch.default)(input, init);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Client,
  EVENTS,
  GET_PATHS,
  emitter
});
//# sourceMappingURL=index.js.map