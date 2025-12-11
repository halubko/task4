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
- Emotion/styled (styled components)
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
![Снимок экрана 2025-12-12 в 02.13.16.png](../../../../../var/folders/d1/yf6m7vwd1zxcxgs6j0z099l40000gn/T/TemporaryItems/NSIRD_screencaptureui_UK0Chm/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA%20%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0%202025-12-12%20%D0%B2%2002.13.16.png)