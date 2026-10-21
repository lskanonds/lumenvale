'use client'

import { useCallback, useEffect, useRef, useSyncExternalStore } from 'react'
import { createPortal } from 'react-dom'

/*
  A draggable divider between the edit form and the live preview.

  Payload fixes the split at 40/60 in its stylesheet with no setting to change it, and
  below 1024px gives the preview the full width, so on a laptop the form disappears
  entirely while the preview is open.

  The widths are written as inline styles, which override the stylesheet without
  !important. Everything is guarded: if a future Payload renames these classes, the handle
  hides itself and the admin behaves exactly as it would without it.

  Positioning goes through refs rather than state, because the handle moves on every drag
  frame and re-rendering React for that would be wasted work. The chosen split is stored per
  browser, since it is a personal working preference.
*/

const STORAGE_KEY = 'admin:preview-split'

/** Payload's own class names. Everything below hides itself if it stops finding them. */
const WRAPPER = '.collection-edit__main-wrapper'
const FORM = '.collection-edit__main'
const PREVIEW = '.live-preview-window--is-live-previewing'

const DEFAULT_SPLIT = 0.6
const MIN_SPLIT = 0.25
const MAX_SPLIT = 0.8

/** Below this width two columns are too narrow, and Payload's own stacking is right. */
const MIN_VIEWPORT = 900

const clamp = (value: number) => Math.min(MAX_SPLIT, Math.max(MIN_SPLIT, value))

/** False during server rendering, true in the browser, without an extra render pass. */
const useMounted = () =>
  useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  )

export function PreviewSplit() {
  const mounted = useMounted()
  const handleRef = useRef<HTMLDivElement>(null)
  const splitRef = useRef(DEFAULT_SPLIT)
  const draggingRef = useRef(false)

  /**
   * Write the split onto Payload's two columns and put the handle on the seam. Runs on
   * every relevant change, because Payload mounts and unmounts the preview column as it is
   * toggled.
   */
  const apply = useCallback(() => {
    const handle = handleRef.current
    if (!handle) return

    const wrapper = document.querySelector<HTMLElement>(WRAPPER)
    const form = wrapper?.querySelector<HTMLElement>(FORM)
    const preview = wrapper?.querySelector<HTMLElement>(PREVIEW)

    if (!wrapper || !form || !preview || window.innerWidth < MIN_VIEWPORT) {
      // Hand the column back exactly as it was found.
      form?.style.removeProperty('width')
      handle.style.display = 'none'
      return
    }

    const fraction = splitRef.current
    form.style.width = `${(1 - fraction) * 100}%`
    preview.style.width = `${fraction * 100}%`

    // The seam is calculated from the wrapper rather than measured from a column: Payload
    // animates column widths, so measuring mid-transition would leave the handle behind.
    const bounds = wrapper.getBoundingClientRect()
    handle.style.display = 'block'
    handle.style.left = `${bounds.right - bounds.width * fraction - 6}px`
    // The handle is portalled to the body, where Payload's CSS variables for the document
    // header do not reach, so the top comes from the wrapper as well.
    handle.style.top = `${Math.max(0, bounds.top)}px`
    handle.setAttribute('aria-valuenow', String(Math.round(fraction * 100)))
  }, [])

  const store = useCallback(
    (fraction: number) => {
      splitRef.current = fraction
      window.localStorage.setItem(STORAGE_KEY, String(fraction))
      apply()
    },
    [apply],
  )

  useEffect(() => {
    const stored = Number(window.localStorage.getItem(STORAGE_KEY))
    if (Number.isFinite(stored) && stored > 0) splitRef.current = clamp(stored)
    apply()

    // The preview column comes and goes with the toggle, and the whole edit view is
    // replaced when moving between documents.
    const observer = new MutationObserver(apply)
    observer.observe(document.body, { childList: true, subtree: true, attributeFilter: ['class'] })
    window.addEventListener('resize', apply)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', apply)
    }
  }, [apply])

  /** The rule and the grip change together, so the seam reads as one control. */
  const paint = (handle: HTMLDivElement, state: 'rest' | 'hover' | 'drag') => {
    const rule = handle.querySelector<HTMLElement>('[data-rule]')
    const grip = handle.querySelector<HTMLElement>('[data-grip]')
    const tone = state === 'rest' ? '200' : state === 'hover' ? '400' : '500'
    if (rule) rule.style.background = `var(--theme-elevation-${tone})`
    if (grip) {
      grip.style.borderColor = `var(--theme-elevation-${tone})`
      grip.style.background =
        state === 'rest' ? 'var(--theme-elevation-50)' : 'var(--theme-elevation-100)'
    }
  }

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.setPointerCapture(event.pointerId)
    paint(event.currentTarget, 'drag')
    draggingRef.current = true
  }

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return

    const bounds = document.querySelector<HTMLElement>(WRAPPER)?.getBoundingClientRect()
    if (!bounds || bounds.width === 0) return

    splitRef.current = clamp((bounds.right - event.clientX) / bounds.width)
    apply()
  }

  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    event.currentTarget.releasePointerCapture(event.pointerId)
    paint(event.currentTarget, 'rest')
    draggingRef.current = false
    store(splitRef.current)
  }

  /** Arrow keys move the seam; Shift moves it further. */
  const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const direction = event.key === 'ArrowLeft' ? 1 : event.key === 'ArrowRight' ? -1 : 0
    if (direction === 0) return

    event.preventDefault()
    store(clamp(splitRef.current + direction * (event.shiftKey ? 0.1 : 0.02)))
  }

  if (!mounted) return null

  /*
    Portalled to the body. Payload mounts `afterNavLinks` inside the sticky nav, which is
    its own stacking context and is painted below the document area, so no z-index there
    could lift the handle above the preview.
  */
  return createPortal(
    <div
      ref={handleRef}
      role="separator"
      aria-orientation="vertical"
      aria-label="Resize the preview"
      aria-valuenow={Math.round(DEFAULT_SPLIT * 100)}
      aria-valuemin={Math.round(MIN_SPLIT * 100)}
      aria-valuemax={Math.round(MAX_SPLIT * 100)}
      tabIndex={0}
      title="Drag to resize · double-click to reset"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onDoubleClick={() => store(DEFAULT_SPLIT)}
      onKeyDown={onKeyDown}
      onMouseEnter={(event) => paint(event.currentTarget, 'hover')}
      onMouseLeave={(event) => {
        if (!draggingRef.current) paint(event.currentTarget, 'rest')
      }}
      onFocus={(event) => paint(event.currentTarget, 'hover')}
      onBlur={(event) => {
        if (!draggingRef.current) paint(event.currentTarget, 'rest')
      }}
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        width: '13px',
        zIndex: 50,
        cursor: 'col-resize',
        touchAction: 'none',
        // Hidden until `apply` finds a preview to sit beside; only edit views have one.
        display: 'none',
      }}
    >
      {/* Visible at rest, like the divider in any other split-pane tool: an invisible
          handle that only appears on hover is one nobody finds. */}
      <span
        data-rule
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '6px',
          width: '1px',
          background: 'var(--theme-elevation-200)',
        }}
      />
      <span
        data-grip
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '3px',
          width: '9px',
          height: '38px',
          borderRadius: '5px',
          border: '1px solid var(--theme-elevation-200)',
          background: 'var(--theme-elevation-50)',
        }}
      >
        {[0, 1, 2].map((dot) => (
          <span
            key={dot}
            style={{
              width: '2px',
              height: '2px',
              borderRadius: '50%',
              background: 'var(--theme-elevation-500)',
            }}
          />
        ))}
      </span>
    </div>,
    document.body,
  )
}
