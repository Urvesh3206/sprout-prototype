import { Router } from 'express';
import { getDatabase } from '../db/database';

export const teamsRouter = Router();

teamsRouter.get('/', (req, res) => {
  const db = getDatabase();
  const teams = db.prepare(`SELECT * FROM teams ORDER BY name ASC`).all();
  res.json(teams);
});

export const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  const db = getDatabase();
  const users = db.prepare(`SELECT id, name, email, avatar, is_system_admin, created_at FROM users ORDER BY name ASC`).all();
  
  // Attach their team memberships
  const memberships = db.prepare(`
    SELECT tm.user_id, tm.team_id, tm.role, t.name as team_name
    FROM team_memberships tm
    JOIN teams t ON tm.team_id = t.id
  `).all() as any[];

  const usersWithTeams = users.map((u: any) => ({
    ...u,
    memberships: memberships.filter(m => m.user_id === u.id)
  }));

  res.json(usersWithTeams);
});
