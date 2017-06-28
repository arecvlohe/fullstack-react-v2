module.exports = function(plop) {
  plop.setGenerator("View", {
    description: "Adds a new view to the client/view directory",
    prompts: [
      {
        type: "input",
        name: "view",
        message: "What is the name of your view?",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        }
      }
    ],
    actions: [
      {
        type: "add",
        path: "client/views/{{properCase view}}/index.js",
        templateFile: "templates/index.txt"
      },
      {
        type: "add",
        path: "client/views/{{properCase view}}/container.js",
        templateFile: "templates/container.txt"
      },
      {
        type: "add",
        path: "client/views/{{properCase view}}/component.js",
        templateFile: "templates/component.txt"
      }
    ]
  });

  plop.setGenerator("Webpack", {
    description: "Create webpack config file",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of your webpack config file?",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "name is required";
        }
      }
    ],
    actions: [
      {
        type: "add",
        path: "./{{dotCase name}}.js",
        templateFile: "templates/webpack.txt"
      },
      {
        type: "add",
        path: "./.babelrc",
        templateFile: "templates/babel.txt"
      }
    ]
  });

  plop.setGenerator("Store", {
    description: "Creates a redux store for directory",
    prompts: [],
    actions: [
      {
        type: "add",
        path: "./client/store/actions/index.js",
        templateFile: "templates/blank.txt"
      },
      {
        type: "add",
        path: "./client/store/reducers/index.js",
        templateFile: "templates/reducers.txt"
      },
      {
        type: "add",
        path: "./client/store/selectors/index.js",
        templateFile: "templates/blank.txt"
      },
      {
        type: "add",
        path: "./client/store/types/index.js",
        templateFile: "templates/blank.txt"
      },
      {
        type: "add",
        path: "./client/store/index.js",
        templateFile: "templates/store.txt"
      }
    ]
  });

  plop.setGenerator("Types", {
    description: "Creates redux actions types (constants)",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is the name of the action type?",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "action type is required";
        }
      },
      {
        type: "input",
        name: "filename",
        message: "Where would you like to append these values?",
        validate: function(value) {
          if (/.+/.test(value)) {
            return true;
          }
          return "filename is required";
        }
      }
    ],
    actions: [
      {
        type: "modify",
        path: "client/store/types/{{filename}}",
        pattern: /$(?![\r\n])/g,
        templateFile: "templates/types.txt"
      }
    ]
  });
};
