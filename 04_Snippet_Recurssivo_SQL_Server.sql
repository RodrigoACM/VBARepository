
--Criação de tabela

CREATE TABLE Areas(
    Id INT NOT NULL,
    Area VARCHAR(50) NOT NULL,
    Id_Pai INT NULL    
)

-- Inclusão de Itens para o Exemplo

INSERT INTO Areas (Id, Area, Id_Pai)
VALUES  (1, 'Presidência', Null ),
		(2, 'VP A', 1 ),
		(3, 'VP B', 1),
		(4, 'Diretoria A', 2),
		(5, 'Diretoria B', 3),
		(6, 'Superintendência A', 4),
		(7, 'Superintendência B', 4),
		(8, 'Superintendência C', 5),
		(9, 'Superintendência D', 5),
		(10, 'Gerência A', 6),
		(11, 'Gerência B', 7),
		(12, 'Gerência C', 8),
		(13, 'Gerência D', 9),
		(14, 'Coordenação A', 10);

SELECT * FROM Areas

-- Query montando toda a árvore de hierarquia para a área ID = 14, que é o exemplo

DECLARE @id INT;
SET @id = 14;
WITH tbl_Recurssivo AS
(
    SELECT *
        FROM Areas WHERE Id = @id
    UNION ALL
    SELECT Areas.*
        FROM Areas  JOIN tbl_Recurssivo  ON Areas.Id = tbl_Recurssivo.Id_Pai
)
SELECT * FROM  tbl_Recurssivo 
    WHERE Id <> @id ORDER BY id