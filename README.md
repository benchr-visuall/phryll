# BenchCMS

A starter template for generating static websites with AI assistants.

## How It Works

1. Clone this template
2. Describe the website you want to an AI assistant (Claude, Gemini, etc.)
3. The AI follows the conventions in `AGENTS.md` to build your site
4. Deploy anywhere

## Quick Start

```bash
pnpm install
pnpm dev
```

Your site runs at [http://localhost:3000](http://localhost:3000).

## What's Included

| Technology     | Purpose                         |
| -------------- | ------------------------------- |
| Next.js 16     | React framework with App Router |
| Tailwind CSS 4 | Utility-first styling           |
| TypeScript     | Type safety                     |
| Zod            | Form validation                 |
| Resend         | Transactional emails            |
| Prettier       | Code formatting                 |

## Email (Optional)

To enable contact forms:

1. Get an API key at [resend.com](https://resend.com)
2. Copy `.env.example` to `.env.local`
3. Add your key

## AI Guidelines

The `AGENTS.md` file tells AI assistants how to:

- Structure pages (data layer + presentation layer)
- Handle forms with Server Actions and Zod
- Use Tailwind for styling
- Send emails with Resend

AI assistants read this file automatically and follow its conventions.
