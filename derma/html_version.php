<!DOCTYPE html>
<html lang="en">
  	<head>
    	<meta charset="utf-8">
    	<meta name="viewport" content="width=device-width, initial-scale=1">
    	<link href='https://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300,700' rel='stylesheet' type='text/css'>
    	<link rel="stylesheet" href="derma/derma.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
		<script src="derma/derma-elem.js"></script>
		<script src="derma/derma-anim.js"></script>
	</head>
	<body>
		<div class = "division">
			<div class = "division-header" style = "background: rgba( 52, 152, 219, 1 );">
				Containers
			</div>

			<span>DFrame</span>
			<div class = "dframe">
				<div class = "dframe-bar">
					DFrame
				</div>
				<div class = "dframe-body">
					Text imitates DLabel<br>
					Multilining doesn't seem to break anything<br>
					<br>
					Regardless of line count<br>
				</div>
			</div>
			<br>

			<span>DPanel</span>
			<div class = "dpanel">
				Text imitates DLabel<br>
				Multilining doesn't seem to break anything<br>
				<br>
				Regardless of line count
				DPanel <b>SADLY</b> has a very faint color that makes it barelly visible on this background
			</div>
			<br>

			<span>DCategoryList</span>
			<div class = "dcategorylist" >
				<div class = "dcategorylist-bar">
					DCategoryList
				</div>
				<div class = "dcategorylist-body">
					This can contain other elements as easily as in GMod.<br><br>
					<div class = "dpanel">
						An example Panel<br>
						Works fine
					</div>
					<div class = "dbutton">
						Example Button - works too
					</div>
				</div>
			</div>
			<br>

			<span>DColumnSheet</span>
			<div class = "dcolumnsheet">
				<div class = "dcolumnsheet-tabs">
					<div class = "dcolumnsheet-tab">
						Test1
					</div>
					<div class = "dcolumnsheet-tab">
						Test2
					</div>
					<div class = "dcolumnsheet-tab">
						Test3
					</div>
				</div>
				<div class = "dcolumnsheet-panel">
					Content will appear here, if you code buttons to do so
				</div>
			</div>
		</div>

		<div class = "division">
			<div class = "division-header" style = "background: rgba( 155, 89, 182, 1 );">
				Buttons/Forms
			</div>
			<span>DButton</span>
			<div class = "dbutton">
				DButton
			</div>
			<br>
			<span>DColorButton</span>
			<div class = "dcolorbutton">
				Silly and useless button is here too!
			</div>
			<br>
			<span>DCheckBox</span>
			<div class = "dcheckbox">
				<div class = "dcheckbox-box">
				</div>
				<div class = "dcheckbox-label">
					Example label
				</div>
			</div>
		</div>

		<div class = "division">
			<div class = "division-header" style = "background: rgba( 231, 76, 60, 1 );">
				Tables/Lists
			</div>

			<span>DComboBox</span>
			<div class = "dcombobox">
				<div class = "dcombobox-button">
					DComboBox
				</div>
				<ul class = "dcombobox-menu">
					<li>Test1</li>
					<li>Test2</li>
					<li>Test3</li>
				</ul>
			</div>
			<br>

			<span>DIconLayout (+DButton)</span>
			<div class = "diconlayout">
				<?php
					for( $i = 0; $i<12; $i++ )
					{
						echo 	'<div class = "dbutton" style = "width: 20.5%;">
									DButton
								</div>';
					}
				?>
			</div>
			<br>

			<span>DListView</span>
			<table class = "dlistview" style = "width: 100%;">
				<th>Test1</th>
				<th>Test2</th>
				<th>Test3</th>
				<tr>
					<td>Test value1</td>
					<td>Test value2</td>
					<td>Test value3</td>
				</tr>
				<tr>
					<td>Test value4</td>
					<td>Test value5</td>
					<td>Test value6</td>
				</tr>
				<tr>
					<td>Test value7</td>
					<td>Test value8</td>
					<td>Test value9</td>
				</tr>
				<tr>
					<td>Test value10</td>
					<td>Test value11</td>
					<td>Test value12</td>
				</tr>
				<tr>
					<td>Test value13</td>
					<td>Test value14</td>
					<td>Test value15</td>
				</tr>
			</table>
		</div>
        
		<div class = "division" id = "test-division">
			<div class = "division-header" style = "background: rgba( 26, 188, 156, 1 );">
				Miscellaneous
			</div>
		</div>
	</body>
</html>
