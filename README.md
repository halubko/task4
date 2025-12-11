# Task 4 (Social Network Application - TypeScript & TanStack)

## [Task](https://innowise-group.atlassian.net/jira/software/c/projects/JST/boards/390?selectedIssue=JST-2422) | [Deploy](https://task4deploy.vercel.app)

## Project description:
Created social network app with using TS + Tanstack.
### Realized:
- ✅ Infinity scroll;
- ✅ Modals with full information about post with comments; 
- ✅ Liking post and comment;
- ✅ Creating post (with YouTube video or images) and adding comment on a post;
- ✅ Login/Registration with saving access/refresh tokens;
- ✅ AutoLogin by access/refresh tokens;
- ✅ Chat with WebSocket connection;
- ✅ Profile page with showing its own posts and information;
- ✅ Editing users profile;
- ✅ Logout and account delete;

## Technology stack:
- Typescript (no any)
- Tanstack Query/Router (File-Based Routing)
- MobX
- Emotion/styled (styled-components)
- React-hook-form + zod
- React-intersection-observer
- Toastify
- Vitest

## Installation instructions:
1) Clone repository:
```bash
  git clone https://github.com/halubko/task4.git
```
2) Install dependencies:
```bash
  nmp install
```


## Running the app locally:
1) Create .env.local file:
```bash
  cp .env.example .env.local
```
2) Run dev server:
```bash
  npm run dev
```

## Running tests:
```bash
  npm run test
```

## Build instructions:
Build script includes creating .env, generating routerTree.gen.ts and building
```bash
  npm run build
```

## Lighthouse deploy test screenshot:
<img width="374" height="121" alt="Снимок экрана 2025-12-12 в 02 19 30" src="https://github.com/user-attachments/assets/acdead09-9275-47ae-9053-4d4bf5d50497" />
