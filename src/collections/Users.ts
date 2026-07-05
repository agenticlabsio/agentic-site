import type { CollectionConfig } from 'payload'
import { isAdmin, isAdminField, isAdminOrSelf } from '../access/roles'

export const Users: CollectionConfig = {
  slug: 'users',
  auth: {
    tokenExpiration: 7200, // 2 hours
    maxLoginAttempts: 5,
    lockTime: 600000, // 10 minutes
  },
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  // Team management: only admins can add or remove employees. An editor can
  // read and update their own account (name, password) but not anyone else's,
  // and the `roles` field below is admin-only so editors cannot self-promote.
  // (Payload still allows the very first user to be created when the DB is empty.)
  access: {
    read: isAdminOrSelf,
    create: isAdmin,
    update: isAdminOrSelf,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      options: [
        { label: 'Admin', value: 'admin' },
        { label: 'Editor', value: 'editor' },
      ],
      defaultValue: ['editor'],
      saveToJWT: true,
      access: {
        // Prevent privilege escalation: an editor editing their own profile
        // cannot change their roles; only admins can grant/revoke roles.
        update: isAdminField,
      },
    },
  ],
}
