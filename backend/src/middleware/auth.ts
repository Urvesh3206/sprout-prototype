import { Request, Response, NextFunction } from 'express';
import { getDatabase } from '../db/database';
import { User, TeamMembership, TeamRole } from '../types';

export interface AuthenticatedRequest extends Request {
  user: User;
  memberships: TeamMembership[];
}

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const db = getDatabase();
  
  // Extract user id from header (defaulting to Alice Vance for easy exploration)
  const userId = (req.headers['x-user-id'] as string) || 'usr_alice';

  const user = db.prepare(`SELECT * FROM users WHERE id = ?`).get(userId) as User | undefined;

  if (!user) {
    return res.status(401).json({
      error: 'Unauthorized',
      message: `User '${userId}' not found in the identity directory.`,
      code: 'USER_NOT_FOUND'
    });
  }

  const memberships = db.prepare(`
    SELECT user_id, team_id, role
    FROM team_memberships
    WHERE user_id = ?
  `).all(userId) as TeamMembership[];

  (req as AuthenticatedRequest).user = user;
  (req as AuthenticatedRequest).memberships = memberships;

  next();
}

/**
 * Checks if a user has sufficient role on a team
 */
export function hasTeamRole(
  memberships: TeamMembership[],
  teamId: string,
  requiredRole: TeamRole,
  isAdmin: boolean
): boolean {
  if (isAdmin) return true;

  const membership = memberships.find(m => m.team_id === teamId);
  if (!membership) return false;

  if (requiredRole === 'VIEWER') return true;
  if (requiredRole === 'OPERATOR') return membership.role === 'OPERATOR' || membership.role === 'LEAD';
  if (requiredRole === 'LEAD') return membership.role === 'LEAD';

  return false;
}

export function getUserRoleInTeam(memberships: TeamMembership[], teamId: string): TeamRole | null {
  const m = memberships.find(mem => mem.team_id === teamId);
  return m ? m.role : null;
}
