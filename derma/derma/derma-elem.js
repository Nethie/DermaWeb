var types = [ "px", "vm", "hm", "%" ];
function separateVariableFromType( string )
{
	for( var i = 0; i < types.length; i++ )
	{
		if( string.search( types[ i ] ) )
		{
			return string.split( types[ i ] );
		}
	}
	return false
}

function DBase( object )
{
	object.isDerma = true;
	object.childrenContainer = false;

	object.setParent = function( parent )
	{
		if( parent.isDerma )
		{
			( parent.childrenContainer || parent.elem ).appendChild( this.elem );
		}
		else
		{
			if( parent.nodeName )
			{
				parent.appendChild( this.elem );
			}
			else
			{
				document.getElementById( parent ).appendChild( this.elem );
			}
		}
	}
}

class DButton
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "dbutton";
		this.elem.innerHTML = "DButton";

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
		this.elem.style.lineHeight = h;
	}

	setText( text )
	{
		this.elem.innerHTML = text;
	}
}

class DPanel
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "dpanel";
		this.elem.innerHTML = "DPanel";

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
	}

	setText( text )
	{
		this.elem.innerHTML = text;
	}
}

class DFrame
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "dframe";

		this.elem.bar = document.createElement( "div" );
		this.elem.bar.className = "dframe-bar";

		this.elem.body = document.createElement( "div" );
		this.elem.body.className = "dframe-body";

		this.elem.appendChild( this.elem.bar );
		this.elem.appendChild( this.elem.body );

		this.childrenContainer = this.elem.body;

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setPadding( t, b, l, r )
	{
		this.elem.style.padding = t + " " + b + " " + l + " " + r;
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
		//to-do, body doesn't resize properly
	}

	setText( text )
	{
		this.elem.body.innerHTML = text;
	}

	setTitle( text )
	{
		this.elem.bar.innerHTML = text;
	}
}

class DListView
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "table" );
		this.elem.className = "dlistview";

		if( parent )
		{
			this.setParent( parent );
		}
	}

	addSeparator()
	{
		var row = document.createElement( "tr" );
		this.elem.appendChild( row );

		return row;
	}

	addColumns()
	{
		var row = this.addSeparator();
		for( var i = 0; i < arguments.length; i++ )
		{
			var column = document.createElement( "th" );
			column.innerHTML = arguments[ i ];
			row.appendChild( column );
		}
	}

	addRow()
	{
		var row = this.addSeparator();
		for( var i = 0; i < arguments.length; i++ )
		{
			var line = document.createElement( "td" );
			line.innerHTML = arguments[ i ];
			row.appendChild( line );
		}
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
	}
}

class DCategoryList
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "dcategorylist";

		this.elem.bar = document.createElement( "div" );
		this.elem.bar.className = "dcategorylist-bar";

		this.elem.body = document.createElement( "div" );
		this.elem.body.className = "dcategorylist-body";

		this.elem.appendChild( this.elem.bar );
		this.elem.appendChild( this.elem.body );

		this.childrenContainer = this.elem.body;

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setSize( w, h )
	{
		this.elem.body.style.width = w;
		this.elem.body.style.height = h;
	}

	setText( text )
	{
		this.elem.body.innerHTML = text;
	}

	setTitle( text )
	{
		this.elem.bar.innerHTML = text;
	}
}

class DIconLayout
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "diconlayout";

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
	}

	setPadding( t, r, b, l )
	{
		this.elem.style.paddingTop = t;
		this.elem.style.paddingRight = r;
		this.elem.style.paddingBottom = b;
		this.elem.style.paddingLeft = l;
	}

	setMargin( t, r, b, l )
	{
		for( var i = 0; i < this.elem.children.length; i++ )
		{
			this.elem.children[ i ].style.marginTop = t;
			this.elem.children[ i ].style.marginRight = r;
			this.elem.children[ i ].style.marginBottom = b;
			this.elem.children[ i ].style.marginLeft = l;
		}
	}
}

class DComboBox
{
	constructor( parent )
	{
		DBase( this );

		this.elem = document.createElement( "div" );
		this.elem.className = "dcombobox";

		this.elem.button = document.createElement( "div" );
		this.elem.button.className = "dcombobox-button";
		this.elem.button.innerHTML = "DComboBox";

		this.elem.menu = document.createElement( "ul" );
		this.elem.menu.className = "dcombobox-menu";

		this.elem.appendChild( this.elem.button );
		this.elem.appendChild( this.elem.menu );

		if( parent )
		{
			this.setParent( parent );
		}
	}

	setText( text )
	{
		this.elem.button.innerHTML = text;
	}

	setSize( w, h )
	{
		this.elem.style.width = w;
		this.elem.style.height = h;
	}

	addOption( text )
	{
		var opt = document.createElement( "li" );
		opt.innerHTML = text;
		this.elem.menu.appendChild( opt );
	}
}
