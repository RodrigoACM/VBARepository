CREATE TABLE tbl_teste(coluna NVARCHAR(10) PRIMARY KEY);
INSERT INTO tbl_teste 
VALUES ('Linha 1'), ('Linha 2'), ('Linha 3'), ('Linha 4');

SELECT * FROM tbl_teste

ALTER TABLE tbl_teste
ADD ID INT;

UPDATE x
SET x.ID = x.N_ID
FROM (
      SELECT ID, ROW_NUMBER() OVER (ORDER BY ID) AS N_ID
      FROM tbl_teste
      ) x
      
SELECT * FROM tbl_teste

--DROP TABLE tbl_teste