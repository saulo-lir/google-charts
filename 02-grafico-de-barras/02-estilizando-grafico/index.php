<html>
	<head>
		<meta charset='utf-8'>
		<title>Google Charts</title>
	</head>

	<body>

		<!-- O gráfico será renderizado nessa div -->
		<div id='my-chart'>
			
		</div>

		<div>
		
			
			<table id='my-table' border='1'>
				<thead>
					<tr>
						<th>Autores</th>
						<th>Preferências 2016</th>
						<th>Preferências 2017</th>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<th scope='row'>JRR Tolken</th>
						<td>10</td>
						<td>5</td>
					</tr>
					<tr>
						<th scope='row'>JK Rowling</th>
						<td>15</td>
						<td>10</td>
					</tr>
					<tr>
						<th scope='row'>CSS Lewis</th>
						<td>20</td>
						<td>25</td>
					</tr>
				</tbody>
				
			</table>

		</div>		
		

		<!-- Carregando a biblioteca de charts do google-->
		<!-- O arquivo loader.js carrega o google.charts contido na primeira linha do nosso arquivo script.js -->
		<script type='text/javascript' src='http://www.gstatic.com/charts/loader.js'></script>
		<script type='text/javascript' src='script.js'></script>
	</body>

</html>