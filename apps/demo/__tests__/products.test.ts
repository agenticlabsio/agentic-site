import { describe, it, expect } from 'vitest'
import { products } from '@/data/products'

describe('products data', () => {
  it('should have products array', () => {
    expect(products).toBeInstanceOf(Array)
    expect(products.length).toBeGreaterThan(0)
  })

  it('should have required fields for each product', () => {
    products.forEach((product) => {
      expect(product.slug).toBeDefined()
      expect(product.name).toBeDefined()
      expect(product.industry).toBeDefined()
      expect(typeof product.slug).toBe('string')
      expect(typeof product.name).toBe('string')
      expect(typeof product.industry).toBe('string')
    })
  })

  it('should have unique slugs', () => {
    const slugs = products.map((p) => p.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })
})
