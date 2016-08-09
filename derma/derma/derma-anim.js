function initialize()
{
	/*
		DCheckbox
	*/
	$( ".dcheckbox" ).click( function()
	{
		$( this ).find( ".dcheckbox-box" ).css( 'background-image', 'url( "images/dcheckbox-check.png" )' );
	} )

	/*
		DCategoryList
	*/
	$( ".dcategorylist" ).ready( function()
	{
		$( this ).find( ".dcategorylist-body" ).slideToggle( 0 );
	} )

	$( ".dcategorylist-bar" ).click( function()
	{
		$( this ).closest( ".dcategorylist" ).find( ".dcategorylist-body" ).slideToggle( 200 );
	} )

	/*
		DComboBox
	*/
	$( ".dcombobox" ).ready( function()
	{
		$( this ).find( ".dcombobox-menu" ).slideToggle( 0 );
	} )

	$( ".dcombobox" ).click( function()
	{
		$( this ).find( ".dcombobox-menu" ).slideToggle( 0 );
	} )
}
document.addEventListener( 'DOMContentLoaded', initialize, false );