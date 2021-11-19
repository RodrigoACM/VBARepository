
# referencia as bibliotecas tydeverse e a de import de arquivos excel
library("tidyverse")
library(readxl)

# Lê arquivo excel into a new dataset
bagagemdemao_37 <- read_excel("employees.xlsx")

# Cria a coluna grupos e divide as observações de ID de funcionário em 4 quartís, infinito a 0,25, 0,25 à 0,50, 0.50 à 0.75 e 0.75 à infinito 
bagagemdemao_37 <- bagagemdemao_37 %>% mutate(grupos = cut(EmployeeID,
                                                 c(-Inf, quantile(bagagemdemao_37$EmployeeID,
                                                                  type = 5,
                                                                  probs = c(0.25, 0.50, 0.75),
                                                                  TRUE),Inf),
                                                 c("primeiro quartil",
                                                   "segundo quartil",
                                                   "terceiro quartil",
                                                   "quarto quartil")))
# Detalha grupos												   
table(bagagemdemao_37$grupos)
