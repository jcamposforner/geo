import { NextFunction, Request, Response } from 'express'

export const requestMiddlewar = (req: Request, res: Response, next: NextFunction) => {

    res.status(200).send('a');
}