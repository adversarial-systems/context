export const advance = (state, { payload }) => ({
  ...state,
  timer: true,
  chrono: { ...state.chrono, 
    daysFromCreation: Number(((Date.now()-((state && state.chrono && state.chrono.created)))/(86400*1000)))
  },
});

export const delay = (state, { payload }) => ({
  ...state,
  chrono: { ...state.chrono, 
    delay: Number(payload.timer.delay)
  },
})


export const age = (state, { payload }) => ({
  ...state,
  chrono: { ...state.chrono, 
    created: state.chrono.created - Number(payload.created.adjustment),
  },
})