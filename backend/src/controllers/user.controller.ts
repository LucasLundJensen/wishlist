import { Request, Response } from "express";
import jwt_decode from "jwt-decode";
import * as UserService from "../services/user.service";
import logger from "../logging";

export async function getUserByIdToken(req: Request, res: Response) {
  const { id_token } = req.body;
  const userIdentifier: { sub: string } = jwt_decode(id_token);

  const user = await UserService.getUserByIdentityId(+userIdentifier.sub);
  if (!user) {
    res.status(404).json({
      message: "User not found",
      data: null,
    });
  }

  res.status(200).json({
    data: user,
  });
}
