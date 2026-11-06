export default function PageGrid() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden justify-center lg:flex"
    >
      <div className="relative h-full w-full max-w-shell px-12">
        <span className="absolute inset-y-0 left-12 w-px bg-line/40" />
        <span className="absolute inset-y-0 left-1/3 w-px bg-line/20" />
        <span className="absolute inset-y-0 left-2/3 w-px bg-line/20" />
        <span className="absolute inset-y-0 right-12 w-px bg-line/40" />
      </div>
    </div>
  )
}
