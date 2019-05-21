import { NextFunction, Request, Response } from 'express'

export const requestMiddleware = (req: Request, res: Response, next: NextFunction) => {

    next();
}