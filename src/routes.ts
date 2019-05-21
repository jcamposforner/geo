import { UserController } from "./controller/UserController";
import { requestMiddleware } from "./middleware/requestMiddleware";
import { requestMiddlewar } from "./middleware/requestMiddlewar";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all",
    middleware: [requestMiddleware, requestMiddlewar]
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save",
    middleware: [requestMiddleware]
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove",
    middleware: [requestMiddleware]
}];