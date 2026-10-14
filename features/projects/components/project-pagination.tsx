import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { projectsHref } from "@/features/projects/lib/catalog"
import type { ProjectCategory } from "@/features/projects/types"

interface ProjectPaginationProps {
  category?: ProjectCategory
  currentPage: number
  totalPages: number
}

export function ProjectPagination({
  category,
  currentPage,
  totalPages,
}: ProjectPaginationProps) {
  if (totalPages <= 1) return null

  return (
    <Pagination className="mt-16">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={projectsHref(category, currentPage - 1)}
            />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
          <PaginationItem key={n}>
            <PaginationLink
              href={projectsHref(category, n)}
              isActive={n === currentPage}
            >
              {n}
            </PaginationLink>
          </PaginationItem>
        ))}
        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext href={projectsHref(category, currentPage + 1)} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
