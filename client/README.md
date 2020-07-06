This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

run `yarn start` to run the app after all dependencies are installed.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

---

Tech stack includes `React + Redux + React-Router + Typescript + axios + Semantic-UI`

A simple demo :

![demo](public/1KcNDtM0CK.gif)

Project Structure : 

```
├── App.css
├── App.test.tsx
├── App.tsx
├── components
│   ├── Test.tsx
│   ├── admin
│   │   ├── AdminSidebar.tsx
│   │   ├── Category.tsx
│   │   ├── Dashboard.tsx
│   │   ├── MenuSelector.tsx
│   │   ├── Post.tsx
│   │   ├── admin.css
│   │   └── page
│   │       └── EditPost.tsx
│   ├── auth
│   │   ├── LoginModal.tsx
│   │   └── RegisterModal.tsx
│   └── utils
│       ├── Header.tsx
│       ├── Notification.tsx
│       └── util.css
├── index.css
├── index.tsx
├── layouts
├── logo.svg
├── react-app-env.d.ts
├── service
│   ├── category.service.ts
│   └── user.service.ts
├── serviceWorker.ts
├── setupTests.ts
├── store
│   ├── actions
│   │   ├── auth.action.ts
│   │   ├── index.ts
│   │   ├── notification.action.ts
│   │   └── test.action.ts
│   ├── constants.ts
│   ├── index.ts
│   └── reducers
│       ├── auth.reducer.ts
│       ├── index.ts
│       ├── notification.reducer.ts
│       └── test.reducer.ts
└── types
    ├── enum.ts
    └── interfaces.ts
```

Backend is powered by **Spring Boot**



