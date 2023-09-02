import logger from "../logging";
import prisma from "../prisma";

export async function getUserById(id: string) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    });

    return user;
  } catch (error) {
    logger.error(`Error fetching user by id: ${id}`, error);
    return null;
  }
}

export async function getUserByIdentityId(id: number) {
  try {
    const user = await prisma.user.findUnique({
      where: {
        identityId: id,
      },
    });

    return user;
  } catch (error) {
    logger.error(`Error fetching user by identity Id: ${id}`, error);
    return null;
  }
}
