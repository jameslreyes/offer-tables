import { Request, Response } from "express";

export interface HealthController {
  check: (req: Request, res: Response) => void;
}