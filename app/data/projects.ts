import rawProjects from './projects.json'

export interface Project {
  path: string
  thumbnailPath: string
  images: string[]
  title: string
  description: string
  techUsed: string[]
  siteLink: string
}

export const projects: Record<string, Project> = rawProjects

export function getProjectBySlug(slug: string): Project | undefined {
  return Object.values(projects).find((p) => p.path === `/projects/${slug}/`)
}

export function getAllSlugs(): string[] {
  return Object.values(projects).map((p) => slugFromPath(p.path))
}

function slugFromPath(path: string): string {
  const match = path.match(/^\/projects\/(.+)\/$/)
  return match ? match[1] : ''
}

export function getAdjacentProjects(slug: string) {
  const all = Object.values(projects)
  const index = all.findIndex((p) => p.path === `/projects/${slug}/`)
  if (index === -1) return { prev: null, next: null }

  const toLink = (p: Project) => ({ title: p.title, slug: slugFromPath(p.path) })

  return {
    prev: index > 0 ? toLink(all[index - 1]) : null,
    next: index < all.length - 1 ? toLink(all[index + 1]) : null,
  }
}
