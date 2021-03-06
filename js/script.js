import initMenuMobile from './modules/menu-mobile.js';
import initTabNavigation from './modules/navegacao-por-tab.js';
import initAnimationNumers from './modules/animation-numbers.js';
import initAnimaScroll from './modules/anima-scroll.js';
import initTooltip from './modules/tooltip.js';
import initWriter from './modules/writer.js';
import initHistoryApi from './modules/historyapi.js';

initMenuMobile();
initTabNavigation();
initAnimationNumers();
initAnimaScroll();
initTooltip();
initWriter();
initHistoryApi();

export function activeFunctions() {
  initTabNavigation();
  initAnimaScroll();
  initTooltip();
  initWriter();
}