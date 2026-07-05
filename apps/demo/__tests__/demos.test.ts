import { describe, it, expect } from 'vitest'
import { demos } from '@/data/demos'

describe('demos data', () => {
  it('should have 4 demo entries', () => {
    expect(demos).toHaveLength(4)
  })

  it('should have valid slugs for all demos', () => {
    const slugs = demos.map((d) => d.slug)
    expect(slugs).toEqual(['revenue', 'procurement', 'commerce', 'retail'])
  })

  it('should have all required fields for each demo', () => {
    demos.forEach((demo) => {
      expect(demo.slug).toBeDefined()
      expect(demo.index).toBeDefined()
      expect(demo.domain).toBeDefined()
      expect(demo.engine).toBeDefined()
      expect(demo.title).toBeDefined()
      expect(demo.heroSub).toBeDefined()
      expect(demo.cardTagline).toBeDefined()
      expect(demo.cardStats).toBeInstanceOf(Array)
      expect(demo.phases).toBeInstanceOf(Array)
      expect(demo.benchmark).toBeInstanceOf(Array)
      expect(demo.value).toBeDefined()
      expect(demo.audit).toBeDefined()
      expect(demo.build).toBeDefined()
      expect(demo.team).toBeDefined()
      expect(demo.ongoing).toBeDefined()
    })
  })

  it('should have exactly 3 phases for each demo', () => {
    demos.forEach((demo) => {
      expect(demo.phases).toHaveLength(3)
      expect(demo.phases.map((p) => p.name)).toEqual(['Audit', 'Build', 'Operate'])
    })
  })

  it('should have valid card stats with value and label', () => {
    demos.forEach((demo) => {
      expect(demo.cardStats.length).toBeGreaterThan(0)
      demo.cardStats.forEach((stat) => {
        expect(stat.value).toBeDefined()
        expect(stat.label).toBeDefined()
        expect(typeof stat.value).toBe('string')
        expect(typeof stat.label).toBe('string')
      })
    })
  })

  it('should have valid value breakdown that sums to 100%', () => {
    demos.forEach((demo) => {
      const totalPct = demo.value.split.reduce((sum, s) => sum + s.pct, 0)
      expect(totalPct).toBe(100)
    })
  })

  it('should have audit data with required fields', () => {
    demos.forEach((demo) => {
      expect(demo.audit.heading).toBeDefined()
      expect(demo.audit.intro).toBeDefined()
      expect(demo.audit.interviews).toBeInstanceOf(Array)
      expect(demo.audit.docs).toBeInstanceOf(Array)
      expect(demo.audit.systems).toBeInstanceOf(Array)
      expect(demo.audit.stats).toBeInstanceOf(Array)
      expect(demo.audit.automation).toBeDefined()
      expect(demo.audit.timeline).toBeInstanceOf(Array)
    })
  })

  it('should have build data with agents and trace', () => {
    demos.forEach((demo) => {
      expect(demo.build.heading).toBeDefined()
      expect(demo.build.intro).toBeDefined()
      expect(demo.build.agents).toBeInstanceOf(Array)
      expect(demo.build.agents.length).toBeGreaterThan(0)
      expect(demo.build.trace).toBeDefined()
      expect(demo.build.trace.steps).toBeInstanceOf(Array)
      expect(demo.build.outcomes).toBeInstanceOf(Array)
    })
  })

  it('should have team roles with queues', () => {
    demos.forEach((demo) => {
      expect(demo.team.roles).toBeInstanceOf(Array)
      expect(demo.team.roles.length).toBe(3)
      demo.team.roles.forEach((role) => {
        expect(role.key).toBeDefined()
        expect(role.label).toBeDefined()
        expect(role.handled).toBeInstanceOf(Array)
        expect(role.queue).toBeInstanceOf(Array)
      })
    })
  })
})
