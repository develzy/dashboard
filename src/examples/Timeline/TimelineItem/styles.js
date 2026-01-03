function timelineItem(theme, ownerState) {
  if (!theme || !theme.borders) return {};
  const { borders } = theme;
  const { lastItem } = ownerState;

  const { borderWidth, borderColor } = borders;

  return {
    "&:after": {
      content: !lastItem && "''",
      position: "absolute",
      top: "10%",
      left: "14px",
      height: "100%",
      borderRight: `${borderWidth[2]} solid ${borderColor}`,
    },
  };
}

function timelineItemIcon(theme, ownerState) {
  if (!theme || !theme.palette) return {};
  const { palette, typography, functions } = theme;
  const { color } = ownerState;

  const { gradients, transparent } = palette;
  const { size, fontWeightMedium } = typography;
  const { linearGradient } = functions;

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-52%, -50%)",
    fontSize: size.xl,
    fontWeight: fontWeightMedium,
    zIndex: 1,
    backgroundImage: gradients[color]
      ? linearGradient(gradients[color].main, gradients[color].state)
      : transparent.main,
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
  };
}

export { timelineItem, timelineItemIcon };
