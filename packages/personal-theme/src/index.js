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
      beforeSSR: async( { state, actions  }) =>{
        await actions.source.fetch("/contact");
        await actions.source.fetch("/");
      }
    }
  },
  libraries : {
    html2react: {
      processors: [p]
    }

  }
};


