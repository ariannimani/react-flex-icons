module.exports = [
  {
    type: "select",
    name: "type",
    message: "What type of icon do you want to create?",
    choices: ["icons"],
  },
  {
    type: "input",
    name: "name",
    message: "Icon name?",
    validate: (input) => {
      if (!/^[A-Z][A-Za-z]*$/.test(input)) {
        return "Icon name must start with an uppercase letter and contain only alphabetic characters.";
      }
      return true;
    },
  },
];
