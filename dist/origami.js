const l = () => ({
  hello: () => {
    console.log("hello world");
  }
}), { hello: e } = l();
export {
  e as hello
};
