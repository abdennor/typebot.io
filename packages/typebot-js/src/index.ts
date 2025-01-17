import { initContainer } from './embedTypes/container'
import { initPopup, getPopupActions } from './embedTypes/popup'
import { initBubble, getBubbleActions } from './embedTypes/chat'
import { open, close, toggle, showMessage, hideMessage } from './commands'

export {
  initContainer,
  initPopup,
  initBubble,
  getPopupActions,
  getBubbleActions,
  open,
  close,
  toggle,
  showMessage,
  hideMessage,
}

const defaultExports = {
  initContainer,
  initPopup,
  initBubble,
  getPopupActions,
  getBubbleActions,
  open,
  close,
  toggle,
  showMessage,
  hideMessage,
}

export default defaultExports

export * from './types'
