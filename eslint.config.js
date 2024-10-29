module.exports = [
  {
    rules: {
      "react/jsx-no-target-blank": "off",
      "react/prop-types": 0,
      "testing-library/prefer-screen-queries": 0,
      "react/no-children-prop": 0,
      "no-else-return": "error",
      "no-restricted-globals": [
        "error",
        {
          name: "document",
          message:
            "Use React refs or other methods instead of directly accessing the document object.",
        },
      ],
      "max-lines": [
        "error",
        { max: 350, skipBlankLines: true, skipComments: true },
      ],
    },
  },
];
