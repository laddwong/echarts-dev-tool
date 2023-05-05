export const baseConfig = {
  disable_properties: true,
  theme: 'bootstrap5',
  iconlib: "fontawesome4",
  compact: true,
  schema: {
    title: 'Chart options',
      type: 'object',
      properties: {
        color: {
          type: "array",
          items: {
            type: "string",
            format: "color",
          }
        }
      }
  }
}