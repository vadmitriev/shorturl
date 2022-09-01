import { lazy } from "react";
import { IRoute } from "./routes.interface";
import { PUBLIC_ROUTES } from "./constants";

export const publicRoutes: IRoute[] = [
  {
    path: PUBLIC_ROUTES.LOGIN,
    name: "Логин",
    component: lazy(() => import("src/pages/Auth/Auth")),
  },
  {
    path: PUBLIC_ROUTES.SIGN_UP,
    name: "Регистрация",
    component: lazy(() => import("src/pages/Auth/Auth")),
  },
];
