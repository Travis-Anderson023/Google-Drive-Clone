module.exports = {
  "*": (files) => {
    const fileArg = files.join(" ");
    return ["yarn nx format",`git add ${fileArg}`];
  },
  "(common|glossary).json": ["yarn lang:sort"],
  "*.(js|ts|jsx|tsx)": ["eslint --fix"],
};
