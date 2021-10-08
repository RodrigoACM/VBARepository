
--Cria��o de tabela

CREATE TABLE Areas(
    Id INT NOT NULL,
    Area VARCHAR(50) NOT NULL,
    Id_Pai INT NULL    
)

-- Inclus�o de Itens para o Exemplo

INSERT INTO Areas (Id, Area, Id_Pai)
VALUES  (1, 'Presid�ncia', Null ),
		(2, 'VP A', 1 ),
		(3, 'VP B', 1),
		(4, 'Diretoria A', 2),
		(5, 'Diretoria B', 3),
		(6, 'Superintend�ncia A', 4),
		(7, 'Superintend�ncia B', 4),
		(8, 'Superintend�ncia C', 5),
		(9, 'Superintend�ncia D', 5),
		(10, 'Ger�ncia A', 6),
		(11, 'Ger�ncia B', 7),
		(12, 'Ger�ncia C', 8),
		(13, 'Ger�ncia D', 9),
		(14, 'Coordena��o A', 10);

SELECT * FROM Areas

-- Query montando toda a �rvore de hierarquia para a �rea ID = 14, que � o exemplo

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