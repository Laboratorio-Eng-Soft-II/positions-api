import { PositionController } from "./controllers/position-controller"

export const Routes = [{
    method: "get",
    route: "/positions",
    controller: PositionController,
    action: "all"
}, {
    method: "get",
    route: "/positions/:cnpj",
    controller: PositionController,
    action: "allFromSingleCompany"
}, {
    method: "get",
    route: "/positions/get/:id",
    controller: PositionController,
    action: "one"
}, {
    method: "post",
    route: "/positions",
    controller: PositionController,
    action: "save"
}, {
    method: "delete",
    route: "/positions/:id",
    controller: PositionController,
    action: "remove"
}, {
    method: "post",
    route: "/positions/:id",
    controller: PositionController,
    action: "approveOrRejectPosition"
}, {
    method: "post",
    route: "/enrollment/:id",
    controller: PositionController,
    action: "enroll"
}]