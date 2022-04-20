// preview.config.js

/** @type {import("@previewjs/config").PreviewConfig} */
module.exports = {
 
    /**
     * Configure a public assets directory.
     */
    publicDir: "public",
  
    /**
     * Set up a custom component to wrap around previewed components.
     *
     * Useful to set up context providers and global CSS.
     */
    wrapper: {
      path: "__previewjs__/Wrapper.tsx",
      componentName: "Wrapper"
    },
  };