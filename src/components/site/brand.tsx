/**
 * Brand primitives.
 */

import logo from "@/assets/logo.webp";

export const WHATSAPP_NUMBER = "917625008887";
export const WHATSAPP_DISPLAY = "+91 76250 08887";
export const PHONE_DISPLAY = "080 437 26852";
export const PHONE_TEL = "08043726852";
export const EMAIL = "trips@sannciaholiday.com";

export const whatsappHref = (
  message = "Hi Sanncia Holiday, I would like to plan a customised trip. Please help me with the details.",
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src={logo}
      alt="Sanncia Holiday"
      className={`h-10 w-auto shrink-0 object-contain ${className}`}
    />
  );
}
