module.exports = {
  "*": (files) => {
    const fileArg = files.join(" ");
    return [`git add ${fileArg}`];
  },
  "(common|glossary).json": ["yarn lang:sort"],
  "*.(js|ts|jsx|tsx|graphql)": ["eslint --fix"],
};
