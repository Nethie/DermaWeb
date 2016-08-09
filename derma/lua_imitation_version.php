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
		<div class = "division" id = "main" style = "width: 98%;">
			<div class = "division-header" style = "background: rgba( 255, 190, 0, 1 );">
				Testing Area
			</div>
			<br>
			<script>
				var frame = new DFrame( "main" );
				frame.setTitle( "Testing for bugs" );
				frame.setText( "Only one 'label' is attached here - you'll need to add another DLabel if you want objects like buttons, listviews or such and another text below it" );
				frame.setSize( "25%", "auto" );

				var listtype = new DComboBox( frame );
				listtype.setText( "Lists: " );
				listtype.addOption( "Players" );
				listtype.addOption( "NPCs" );

				var list = new DListView( frame );
				list.addColumns( "Player", "Rank", "Icon" );
				list.addRow( "Neth", "Test", "<img src = 'http://www.famfamfam.com/lab/icons/silk/icons/emoticon_grin.png'></img>" );
				list.addRow( "Ted", "Test", "<img src = 'http://www.famfamfam.com/lab/icons/silk/icons/clock.png'></img>" );
				list.addRow( "Mikey", "Test", "<img src = 'http://www.famfamfam.com/lab/icons/silk/icons/emoticon_grin.png'></img>" );
				list.setSize( "100%", "auto" );

				var options = new DCategoryList( frame );
				options.setTitle( "Options" );

				var ban = new DButton( options );
				ban.setSize( "20%", "20px" );
				ban.setText( "Ban" );

				var kick = new DButton( options );
				kick.setSize( "20%", "20px" );
				kick.setText( "Kick" );

				var mute = new DButton( options );
				mute.setSize( "20%", "20px" );
				mute.setText( "Mute" );
			</script>
		</div>
	</body>
</html>
