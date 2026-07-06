import type { Access, FieldAccess } from 'payload'

// Role model: every user has a `roles` array (see collections/Users.ts).
// 'admin' can manage the team and everything content editors can do;
// 'editor' manages content but cannot touch other users' accounts or roles.

const hasAdminRole = (roles: unknown): boolean => Array.isArray(roles) && roles.includes('admin')

// Collection-level: admins only.
export const isAdmin: Access = ({ req: { user } }) => hasAdminRole(user?.roles)

// Field-level: admins only (e.g. the `roles` field itself).
export const isAdminField: FieldAccess = ({ req: { user } }) => hasAdminRole(user?.roles)

// Collection-level: admins see/act on everyone; a signed-in editor is scoped
// to their own document via a query constraint.
export const isAdminOrSelf: Access = ({ req: { user } }) => {
  if (!user) return false
  if (hasAdminRole(user.roles)) return true
  return { id: { equals: user.id } }
}
