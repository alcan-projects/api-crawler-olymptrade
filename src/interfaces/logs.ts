export type LogScore = {
    type: "error" | "warning" | "ok" | "create",
    message: string
}
export type LogScoreRes = {
    _id: string
    type: "error" | "warning" | "ok" | "create"
    message: string
    createdAt: string
    updatedAt: string
}