"use strict";

module.exports = {
  extends: ["git-commit-emoji", "cz"],
  rules: {
    "type-empty": [2, "never"],
    "subject-empty": [2, "never"]
  }
};
