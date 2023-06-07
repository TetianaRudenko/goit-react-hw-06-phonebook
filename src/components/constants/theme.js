const theme = Object.freeze({
  colors: {
    primaryColor: "rgb(100, 243, 140)",
    secondaryColor: "rgb(111, 70, 0)",
    primaryAlfaColor: "rgba(100, 243, 140, 0.6)",
    accentColor: "rgb(247, 157, 0)",
    errorColor: "rgb(255, 100, 0)",
  },
  spacing: value => `${4 * value}px`
})

export { theme }