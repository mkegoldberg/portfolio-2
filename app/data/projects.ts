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
  return Object.values(projects).map((p) => {
    const match = p.path.match(/^\/projects\/(.+)\/$/)
    return match ? match[1] : ''
  })
}
