speed = 50

osc(20, 0.03, 8)
  .kaleid()
  .mult(osc(20, 0.001, 0).rotate(1.61803398875))
  .blend(o0, 0.95)
  .modulateScale(osc(10, 0, 8),-0.03).scale(0.8, () => (1.0 + 0.1 * Math.sin(0.05*time)))
  .out(o0)