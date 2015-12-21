install.packages("VennDiagram")
require(VennDiagram)
venn.diagram(
  list(NCAA_D1=1:340, QS_US_Top130=249:378),
  fill=c("red", "blue"),
  alpha=c(0.5, 0.5),
  rotation.degree=45,

  main="NCAA Division 1 Colleges and Top 130 Colleges",
  cex=2,
  cat.pos=c(-45, 20),
  cat.dist = c(0.05, 0.03),

  filename="debate.png",
  compression="lzw",
  resolution=128,
  height=500,
  width=500
)
