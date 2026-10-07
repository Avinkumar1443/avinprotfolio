/**
 * ProfileImagePlaceholder
 *
 * Replace this component with your actual profile image.
 * Expected image path: /public/images/profile.png
 *
 * Usage after replacement:
 * <Image
 *   src="/images/profile.png"
 *   alt="Avinkumar Subburam"
 *   width={480}
 *   height={560}
 *   className="rounded-2xl object-cover"
 *   priority
 * />
 */
export default function ProfileImagePlaceholder() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        aspectRatio: "480 / 560",
        borderRadius: "var(--radius-card)",
        background: "var(--gradient-accent)",
      }}
    >
      {/* Decorative grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.15]"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="profile-grid"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 32 0 L 0 0 0 32"
              fill="none"
              stroke="var(--color-accent)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#profile-grid)" />
      </svg>

      {/* Decorative geometric shapes */}
      <div
        className="absolute top-8 right-8 w-16 h-16 border-2 opacity-20 rotate-12"
        style={{
          borderColor: "var(--color-accent)",
          borderRadius: "var(--radius-sm)",
        }}
      />
      <div
        className="absolute bottom-12 left-8 w-12 h-12 opacity-10 rounded-full"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
      <div
        className="absolute top-1/3 left-1/4 w-20 h-20 border-2 opacity-10 -rotate-6"
        style={{
          borderColor: "var(--color-accent)",
          borderRadius: "50%",
        }}
      />

      {/* Center label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "rgba(37, 99, 235, 0.08)",
            border: "2px dashed var(--color-accent)",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
          </svg>
        </div>
        <span
          className="text-sm font-medium"
          style={{ color: "var(--color-accent)" }}
        >
          Profile Image
        </span>
        <span
          className="text-xs px-3 py-1 rounded-full"
          style={{
            color: "var(--color-text-muted)",
            backgroundColor: "rgba(37, 99, 235, 0.06)",
          }}
        >
          480 × 560
        </span>
      </div>
    </div>
  );
}
