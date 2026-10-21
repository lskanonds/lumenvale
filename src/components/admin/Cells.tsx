import type { DefaultServerCellComponentProps } from 'payload'

/**
 * The "Show in the main menu" column, in words.
 *
 * Payload prints a checkbox in a list as `true` or `false`, in a monospaced chip. Both are
 * programmer's words for a question the column already asks in English, and `false` reads
 * to most people like something has gone wrong rather than like an answer.
 */
export function InNavCell({ cellData }: DefaultServerCellComponentProps) {
  return (
    <span style={{ color: cellData ? 'inherit' : 'var(--theme-elevation-400)' }}>
      {cellData ? 'In the menu' : 'Not in the menu'}
    </span>
  )
}
