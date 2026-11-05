// Enforces Conventional Commits (type(scope)!: subject) on PR titles, which
// become the squash commits release-please reads to build CHANGELOG.md.
// Uses the standard ruleset, plus one local rule: GitHub appends "(#PR)" when
// squashing, so a title must not end with a PR number of its own.
export default {
  extends: ["@commitlint/config-conventional"],
  plugins: [
    {
      rules: {
        "header-no-pr-number": ({ header }) => [
          !/\(#\d+\)\s*$/.test(header ?? ""),
          "don't end the title with (#number); GitHub adds the PR number on merge. Put an issue in the scope instead, e.g. fix(#824): ...",
        ],
      },
    },
  ],
  rules: {
    "header-no-pr-number": [2, "always"],
  },
};
