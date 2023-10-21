"use strict";

module.exports = {
  extends: ["gitmoji", "cz"],
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"]
  }
};
