define(["storymaps/maptour/core/WebApplicationData", 
		"dojo/_base/lang",
		"storymaps/maptour/core/MapTourHelper"],
	function(WebApplicationData, lang, MapTourHelper)
	{
	/**
	 * TourPointAttributes
	 * @class TourPointAttributes
	 * 
	 * Attributes property of tour point graphics
	 * Handle the field abstraction
	 * Hold a reference to the original graphic for sending data back to server 
	 */
	
	// Mapping between tour fields and data fields
	// Common to all instance of TourPointAttributes
	var _fields = null;
	
	/**
	 * Create a tour point attributes property from the graphic, with optional URL for picture and thumbnail that are not stored in data attributes (attachments) 
	 * @param {Object} graphic
	 * @param {Object} imgURL
	 * @param {Object} thumbURL
	 * @param {Object} forceFieldElection force field at creation until all fields have been found, useful for webmap data where empty attributes are not present in graphic.attributes
	 */
	return function TourPointAttributes(graphic, imgURL, thumbURL, forceFieldElection)
	{
		var _attributes = lang.clone(graphic.attributes);
		var _graphic = graphic;
		var _FSImgURL = imgURL;
		var _FSThumbURL = thumbURL;
		var _visibility = true;
		
		// Field is a module variable will be only elected once
		if( ! _fields || (forceFieldElection && !_fields.allFieldsFound()) )
			_fields = app.data.electFields(_attributes, _FSImgURL != null);
		
		// Bind the ID field to a properties (for the renderer)
		if( _attributes && _fields )
			this[_fields.getIDField()] = _attributes[_fields.getIDField()];
		
		// Bind a getID function for simplicity
		this.getID = function()
		{
			return _attributes && _fields ? _attributes[_fields.getIDField()] : null;
		}
		
		this.getName = function()
		{
			if( ! _attributes || ! _fields)
				return null;
			
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var field = fieldsOverride ? fieldsOverride.getNameField() : _fields.getNameField();
			return _attributes[field] || '';
		}
		
		this.getDescription = function()
		{
			if( ! _attributes || ! _fields)
				return null;
			
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var field = fieldsOverride ? fieldsOverride.getDescriptionField() : _fields.getDescriptionField();
			return _attributes[field] || '';
		}
		
		this.getColor = function()
		{
			if( ! _attributes || ! _fields)
				return null;
			
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var field = fieldsOverride ? fieldsOverride.getIconColorField() : _fields.getIconColorField();
			
			return _attributes[field] || '';
		}
		
		this.getURL = function()
		{
			if( ! _attributes || ! _fields )
				return;
			
			if( _FSImgURL )
				return _FSImgURL;
			
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var field = fieldsOverride ? 
					fieldsOverride.getURLField() ? fieldsOverride.getURLField() : _fields.getURLField()
					: _fields.getURLField();
			
			return checkHostedFSToken(_attributes[field]) || MapTourHelper.getNotFoundMedia();
		}
		
		this.setURL = function(url)
		{
			if (_FSImgURL) 
				_FSImgURL = url;
			else {
				var fieldsOverride = WebApplicationData.getFieldsOverride();
				var urlField = fieldsOverride ? 
						fieldsOverride.getURLField() ? fieldsOverride.getURLField() : _fields.getURLField()
						: _fields.getURLField();
				_attributes[urlField] = url;
			}
		}
		
		this.getThumbURL = function()
		{
			if( ! _attributes || ! _fields )
				return;
			
			if( _FSThumbURL )
				return _FSThumbURL;
			
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var field = fieldsOverride ? 
					fieldsOverride.getThumbField() ? fieldsOverride.getThumbField() : _fields.getThumbField()
					: _fields.getThumbField();
			
			return checkHostedFSToken(_attributes[field]) || MapTourHelper.getNotFoundMedia();
		}
		
		this.setThumbURL = function(thumbUrl)
		{
			if (_FSThumbURL) 
				_FSThumbURL = thumbUrl;
			else {
				var fieldsOverride = WebApplicationData.getFieldsOverride();
				var thumbField = fieldsOverride ? 
					fieldsOverride.getThumbField() ? fieldsOverride.getThumbField() : _fields.getThumbField()
					: _fields.getThumbField();
				_attributes[thumbField] = thumbUrl;
			}
		}
		
		this.getOriginalGraphic = function()
		{
			return _graphic;
		}
		
		this.getIDField = function()
		{
			return _fields.getIDField();
		}
		
		this.updateNameAndDescription = function(name, description)
		{
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var nameField = fieldsOverride ? fieldsOverride.getNameField() : _fields.getNameField();
			var descField = fieldsOverride ? fieldsOverride.getDescriptionField() : _fields.getDescriptionField();
			
			_attributes[nameField] = name;
			_attributes[descField] = description;
		}
		
		this.setColor = function(color)
		{
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var colorField = fieldsOverride ? fieldsOverride.getIconColorField() : _fields.getIconColorField();
			_attributes[colorField] = color;
		}
		
		/**
		 * Return true if name or description has been updated
		 */
		this.hasBeenUpdated = function()
		{
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var nameField = fieldsOverride ? fieldsOverride.getNameField() : _fields.getNameField();
			var descField = fieldsOverride ? fieldsOverride.getDescriptionField() : _fields.getDescriptionField();
			var colorField= fieldsOverride ? fieldsOverride.getIconColorField() : _fields.getIconColorField();
			
			return _attributes[nameField] != _graphic.attributes[nameField]
					|| _attributes[descField] != _graphic.attributes[descField]
					|| _attributes[colorField] != _graphic.attributes[colorField];
		}
		
		/**
		 * Commit change to name and description to the original graphic
		 */
		this.commitUpdate = function()
		{
			var fieldsOverride = WebApplicationData.getFieldsOverride();
			var nameField = fieldsOverride ? fieldsOverride.getNameField() : _fields.getNameField();
			var descField = fieldsOverride ? fieldsOverride.getDescriptionField() : _fields.getDescriptionField();
			var colorField= fieldsOverride ? fieldsOverride.getIconColorField() : _fields.getIconColorField();

			_graphic.attributes[nameField] = _attributes[nameField];
			_graphic.attributes[descField] = _attributes[descField];
			_graphic.attributes[colorField] = _attributes[colorField];
		}
		
		this.restoreOriginal = function()
		{
			_attributes = lang.clone(_graphic.attributes);
		}
		
		this.getFieldsConfig = function()
		{
			return _fields;
		}
		
		this.getTourVisibility = function()
		{
			return _visibility;
		}
		
		this.setTourVisibility = function(visibility)
		{
			_visibility = visibility;
		}
		
		/**
		 * Add the token to the URL for hosted Feature Services
		 * @param {Object} url
		 */
		function checkHostedFSToken(url)
		{			
			var layer = app.data.getSourceLayer(); //_graphic._graphicsLayer;
			if(layer.credential && layer.credential.token )
				return url + "?token=" + layer.credential.token;
			else
				return url;
		}
	}
});