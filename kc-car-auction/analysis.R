# set wd
setwd("~/Documents/GitHub/kc-car-auction")

# load data and library
cars <- read.csv("~/Documents/GitHub/kc-car-auction/allcars.csv")
library(ggplot2)

# make density plot
den1 <- ggplot(cars, aes(cars$Year)) +
  geom_density()
den1 + theme(panel.grid.major = element_blank(), panel.grid.minor = element_blank(),
           panel.background = element_blank(), axis.line = element_line(colour = "black"))
