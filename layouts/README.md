# Layouts Directory

This directory contains layout templates for the starter module in Hugo. In Hugo, layouts define how your content is rendered to HTML.

Layouts in Hugo are written in HTML with embedded template actions that use Go's templating language. They determine the structure and presentation of your content, allowing you to create consistent designs across your site.

The layouts directory has a specific structure that Hugo follows to determine which template to use for a given page:

- **_default/**: Contains default templates that are used when more specific ones don't exist
- **partials/**: Contains reusable template snippets that can be included in other templates
- **shortcodes/**: Contains templates for shortcodes that can be used within content files
- **index.html**: Used for the site's homepage
- **Content type directories**: Named after specific content types (e.g., `post/`, `page/`)

For more information on how Hugo handles layouts, refer to the [Hugo documentation on Templates](https://gohugo.io/templates/).