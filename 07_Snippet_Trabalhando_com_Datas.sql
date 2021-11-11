
SELECT 
	GETDATE()         AS 'TimeStamp'
	,CONVERT(DATE, GETDATE()) as 'Data'
	,CONVERT(DATE, DATEADD(month, DATEDIFF(m, 0, GETDATE()), 0)) AS 'PriDiaMes'
	,CONVERT(DATE, DATEADD(s,-1,DATEADD(mm, DATEDIFF(m,0,GETDATE())+1,0))) AS 'UltDiaMes' --Se o SQL Serve for > 2012 você pode usar EOMONTH()
	,(YEAR(GETDATE()) * 100) + MONTH(GETDATE()) AS 'AnoMes'
	,Convert(varchar, convert(datetime, '2021-01-11', 103), 103) as 'ConvertDeYYYMMDD'
	,CONVERT(char(10), GetDate(),126) as 'ConvertDeYYYMMDD_OMesmo'
	
