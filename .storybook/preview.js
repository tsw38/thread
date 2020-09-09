export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}



import Router from 'next/router';

Router.router = {
    push: () => {},
    prefetch: () => new Promise((resolve, reject) => {}),
};