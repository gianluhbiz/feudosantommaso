const base =
  'inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-[background-color,color,box-shadow,transform] duration-150 ease-out active:scale-[0.97]'

const variants = {
  primary: 'bg-terra text-paper shadow-[0_8px_24px_-12px_rgba(168,70,31,0.8)] hover:bg-terra-deep',
  whatsapp: 'bg-whatsapp text-white hover:bg-[#17633e]',
  ghostDark: 'text-ink ring-1 ring-ink/25 hover:bg-ink/5',
  ghostLight: 'text-moon ring-1 ring-moon/30 hover:bg-moon/10',
  light: 'bg-moon text-night hover:bg-paper',
}

export type Variant = keyof typeof variants

export const buttonClass = (variant: Variant, extra = '') => `${base} ${variants[variant]} ${extra}`
