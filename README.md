# Job Tracker

A web app I'm building during my own job search to keep track of applications,
their status and follow-ups.

**Status:** 🚧 In progress. The backend API is working; the frontend still uses
mock data and is not connected to it yet.

## Tech stack

- **Frontend:** React 19, TypeScript, React Router, Bootstrap
- **Backend:** ASP.NET Core Web API (.NET 10), EF Core, SQL Server, AutoMapper, Swagger

## Project structure

```
backend/JobTracker.API   ASP.NET Core Web API
frontend                 React + Vite app
```

## Run locally

### Backend

Requires the .NET 10 SDK and a local SQL Server instance.

```bash
cd backend/JobTracker.API
dotnet ef database update
dotnet run
```

The API runs on http://localhost:5090 and Swagger is available at
http://localhost:5090/swagger.

### Frontend

```bash
cd frontend
npm install
npm run dev
```

## Screenshots

_Coming soon._

## Roadmap

1. ~~Build the frontend with mock data~~
2. ~~Build the ASP.NET Core + EF Core backend~~
3. Connect frontend and backend
4. Add authentication (JWT)
5. Tests, CI and Docker
