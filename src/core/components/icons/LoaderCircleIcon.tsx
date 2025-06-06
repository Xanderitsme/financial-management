import type { JSX } from 'solid-js/jsx-runtime'

export const LoaderCircleIcon = (props: JSX.SVGElementTags['svg']) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    {...props}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)
