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
						<th>Candidatos</th>
						<th>Intenção de Votos</th>
					</tr>
				</thead>
				
				<tbody>
					<tr>
						<th scope='row'>Joazinho</th>
						<td>10</td>
					</tr>
					<tr>
						<th scope='row'>Mariazinha</th>
						<td>15</td>
					</tr>
					<tr>
						<th scope='row'>Fulaninho</th>
						<td>20</td>
					</tr>
					<tr>
						<th scope='row'>Sr. Estrupício</th>
						<td>2</td>
					</tr>
					<tr>
						<th scope='row'>Zezinho</th>
						<td>3</td>
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