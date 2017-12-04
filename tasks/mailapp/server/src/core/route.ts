import { RequestHandler, Request, Response, NextFunction } from "express";

const handleError =  (handler: RequestHandler): RequestHandler => {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        }
        catch(e) {
            next(e);
        }
    }
};

export const createRoute = (handler: RequestHandler): RequestHandler => {
    return handleError(handler);
};