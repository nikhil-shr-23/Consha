# Consha

Consha is a screen recording & sharing app — like Loom, but better.

## Project Structure

```
consha/
├── apps/
│   ├── landing/          # Next.js marketing site
│   ├── desktop-app-frontend/  # Tauri desktop app
│   └── web/              # Web-based recorder (coming soon)
├── packages/             # Shared packages
├── infra/                # Docker, nginx configs
└── .agent/               # AI assistant configs
```

## Tech Stack

- **Frontend**: Next.js, React, TypeScript, Tailwind CSS
- **Desktop**: Tauri (Rust + React)
- **Monorepo**: pnpm workspaces + Turborepo
- **Design System**: Storybook

## Getting Started

```bash
# Install dependencies
pnpm install

# Run all apps in dev mode
pnpm dev

# Run Storybook
pnpm storybook

# Build all apps
pnpm build
```

## Apps

| App                    | Description            | Port |
| ---------------------- | ---------------------- | ---- |
| `landing`              | Marketing website      | 3000 |
| `desktop-app-frontend` | Tauri desktop app      | 3001 |
| `web`                  | Browser-based recorder | TBD  |

## License

See [LICENSE](./LICENSE) for details.
