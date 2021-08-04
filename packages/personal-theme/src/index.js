import Root from "./components/Root"
import p from "./processors/paragraph"

export default {
  name: "personal-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {
      beforeSSR: async( { actions  }) =>{
        await actions.source.fetch("/contact");
      }
    }
  },
  libraries : {
    html2react: {
      processors: [p]
    }

  }
};


