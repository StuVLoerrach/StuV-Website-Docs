# Page Builder Components Documentation

This repository contains the documentation for the Page Builder Components library.

## Structure

- `mdx/` - MDX documentation files for each component
- `meta/` - JSON metadata files containing component information
- `assets/` - Images, videos, and other media assets
- `examples/` - Code examples for each component

## Adding New Components

1. Create an MDX file in the `mdx/` directory
2. Add corresponding metadata in the `meta/` directory
3. Include example code in the `examples/` directory
4. Add any assets to the `assets/` directory

## File Naming Convention

- Use kebab-case for all file names
- Component files should match the component name exactly
- Example: `hero-section.mdx`, `hero-section.json`

## Metadata Schema

Each component should have a corresponding JSON file in the `meta/` directory with the following structure:

\`\`\`json
{
  "id": "component-id",
  "name": "Component Name",
  "description": "Component description",
  "category": "category-name",
  "variants": 3,
  "tags": ["tag1", "tag2"],
  "props": {
    "propName": {
      "type": "string",
      "required": true,
      "description": "Prop description"
    }
  },
  "examples": [
    {
      "name": "Example Name",
      "description": "Example description",
      "code": "examples/component/example.tsx"
    }
  ]
}
\`\`\`

## Contributing

1. Fork this repository
2. Create a new branch for your changes
3. Add or update documentation files
4. Submit a pull request

## License

MIT License
