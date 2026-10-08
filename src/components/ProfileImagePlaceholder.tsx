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
import Image from "next/image";

export default function ProfileImagePlaceholder() {
  return (
    <Image
      src="/Image/profile.png"
      alt="Avinkumar Subburam"
      width={480}
      height={560}
      className="rounded-[var(--radius-card)] object-cover object-top w-full h-full"
      style={{ aspectRatio: "480 / 560" }}
      priority
    />
  );
}
