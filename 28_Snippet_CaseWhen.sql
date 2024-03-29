SELECT 
     (YEAR(a.[OrderDate]) * 100) + MONTH(a.[OrderDate]) AS AnoMes
     ,COUNT(a.SalesOrderID) as QTD_Vendas
     ,CONVERT(DECIMAL(10,2), SUM(a.SubTotal)) as VLR_Vendas
     ,CONVERT(DECIMAL(10,2), SUM(a.SubTotal)/COUNT(a.SalesOrderID)) as TicketMedio
     ,COUNT(DISTINCT a.CustomerID) as Clientes_Unicos
     ,SUM(CASE WHEN a.ShipMethodID = 5 AND B.[Group] = 'Europe' THEN 1 ELSE 0 END) as Env_Cargo_Europa
     ,CONVERT(DECIMAL(10,2), SUM(CASE WHEN a.ShipMethodID = 5 AND B.[Group] = 'Europe' THEN a.SubTotal ELSE 0 END)) as  Env_Cargo_Europa_VLR
  FROM [AdventureWorks2008R2].[Sales].[SalesOrderHeader] as A
        INNER JOIN [AdventureWorks2008R2].[Sales].[SalesTerritory] as B 
              ON A.TerritoryID = B.TerritoryID
  WHERE a.[Status] = 5
  GROUP BY
     (YEAR(a.[OrderDate]) * 100) + MONTH(a.[OrderDate])
  ORDER BY 
        1   