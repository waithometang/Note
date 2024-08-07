export const cancelAnimationFrame = window.cancelAnimationFrame;

export function rafTimeout(fn, delay = 0, interval = false) {
  const requestAnimationFrame =
    typeof window !== "undefined" ? window.requestAnimationFrame : () => {};
  let start = null;

  function timeElapse(timestamp) {
    if (!start) {
      start = timestamp;
    }

    if (timestamp - start >= delay) {
      fn();

      if (interval) {
        start = null;
        raf.id = requestAnimationFrame(timeElapse);
      }
    } else {
      raf.id = requestAnimationFrame(timeElapse);
    }
  }

  const raf = {
    id: requestAnimationFrame(timeElapse),
  };
  return raf;
}

export function cancelRaf(raf) {
  const cancelAnimationFrame =
    typeof window !== "undefined" ? window.cancelAnimationFrame : () => {};
  if (raf && raf.id) {
    cancelAnimationFrame(raf.id);
  }
}
