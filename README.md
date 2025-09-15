# HRMS-BACKEND
```
├── .gitignore               # Ignore node_modules, env files, etc.
├── README.md                # Project overview, setup, usage, contribution guide
├── package.json             # Dependencies, scripts, metadata
├── tsconfig.json            # TypeScript compiler configuration
├── src/                     # Main source directory
│   ├── app.ts               # Express app setup (middleware, routes)
│   ├── server.ts            # Server bootstrap (port, DB connection)
│   ├── config/
│   │   └── db.ts            # MongoDB connection logic
│   ├── controllers/         # Business logic for each domain
│   │   ├── medicineController.ts
│   │   ├── purchaseController.ts
│   │   ├── reportController.ts
│   │   └── saleController.ts
│   ├── middleware/
│   │   └── authMiddleware.ts # JWT or session-based auth
│   ├── models/              # Mongoose schemas
│   │   ├── Medicine.ts
│   │   ├── Purchase.ts
│   │   ├── Sale.ts
│   │   └── User.ts
│   ├── routes/              # API route definitions
│   │   ├── auth.ts
│   │   ├── medicineRoutes.ts
│   │   ├── protected.ts
│   │   ├── purchaseRoutes.ts
│   │   ├── reportRoutes.ts
│   │   └── saleRoutes.ts

```
