// preview.ts file
import type { Preview } from "@storybook/react";

// Configuration files for the stories you write
const preview: Preview = {
  parameters: {
    controls: {
      // Match property names in your component props 
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
