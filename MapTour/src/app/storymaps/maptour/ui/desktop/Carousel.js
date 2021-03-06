define(["dojo/has", 
		"storymaps/utils/Helper", 
		"storymaps/maptour/core/MapTourHelper"], 
	function(has, Helper, MapTourHelper)
	{
		/**
		 * Carousel
		 * @class Carousel
		 * 
		 * UI component that display a picture carousel
		 */
		return function Carousel(selector)
		{
			var ITEM_WIDTH = 161; // old layout: 161, modern layout: 156
	
			// Reference to the iScroll div
			var iscroll = null;
			// Does the last click/move/touch event was catched as a move event by iScroll
			var isMoveEvent = false;
			var mousePos = {
				onMove: [-1,-1],
				onScroll: [-1,-1]
			};

			this.init = function(slides, bgColor, hoverColor)
			{
				setColor(bgColor, hoverColor);
				render(slides);
				initEvents(slides);
				
				// Add a no-touch css class to the carousel if we are not on a touch device
				if ( ! has('touch') )
					$(selector + ' .carouselScroller').addClass('no-touch');
			}
			
			this.update = function(slides, bgColor, hoverColor)
			{
				setColor(bgColor, hoverColor);
				iscroll.destroy();
				render(slides);
				updateArrows();
			}
			
			this.resize = function()
			{
				updateArrows();
			}
			
			function render(slides, bgColor)
			{
				ITEM_WIDTH = MapTourHelper.isModernLayout() ? 156 : 161;
				
				var carouselHTML = "";
				$(slides).each(function(i, slide){
					var pinCssClass = MapTourHelper.getSymbolCss(slide.attributes.getColor());
	
					// Numbering is done through CSS (require IE8+)
					// The first div is necessary for vertical centering and the span around the image for the numbering
					// The color specification though class is not ideal, but to have that more dynamic all the rest is a pain
					carouselHTML += '<li>';
					carouselHTML += ' <div class="carousel-item-div">';
					carouselHTML += '  <span class="' + pinCssClass +'"><img src="' + slide.attributes.getThumbURL() + '" onerror="mediaNotFoundHandler(this)"/></span>';
					carouselHTML += '  <div>' + slide.attributes.getName() + '</div>';
					carouselHTML += ' </div>';
					carouselHTML += '</li>';
				});
				
				$(selector + ' .carouselScroller').css('width', (slides.length * ITEM_WIDTH) + 'px');
				$(selector + ' .carouselScroller ul').html(carouselHTML);
				
				$(selector + ' .carouselWrapper').mousemove(function(e){
					mousePos.onMove[0] = e.screenX;
					mousePos.onMove[1] = e.screenY;
				}); 
				
				iscroll = new iScroll($(selector + ' .carouselWrapper')[0], {
					hideScrollbar: true,
					onBeforeScrollMove: function(e){
						if( Math.abs(mousePos.onScroll[0] - e.screenX) > 5 || Math.abs(mousePos.onScroll[1] - e.screenY) > 5 )
							isMoveEvent = true;
							
						updateArrows();
					},
					onScrollStart: function(e){
						mousePos.onScroll = [mousePos.onMove[0], mousePos.onMove[1]]; 
					},
					onBeforeScrollEnd: function(){
						if( has("touch") )
							isMoveEvent = false;
					},
					// To detect scroll that end with the bounce effect
					onScrollEnd: updateArrows
				});
			}
			
			this.setSelectedIndex = function(index)
			{
				if( index == null )
					return;
				
				$(selector + ' .carousel-item-div').removeClass("selected");
				$(selector + ' .carousel-item-div:nth(' + index + ')').addClass("selected");
				
				scrollToIndex(index);
				updateArrows();
			}
			
			this.checkItemIsVisible = function(index)
			{
				if(! iscroll) return;
				scrollToIndex(index);
			}
			
			function initEvents(slides)
			{
				$(selector).click(onUserClick);
				dojo.subscribe("CORE_SELECTED_TOURPOINT_UPDATE", updateSlide);
			}
			
			function onUserClick(e)
			{
				if( ! e || ! e.target )
					return;
				
				if( e.target.className == "arrowLeft" )
					onArrowClick(-1);
				else if( e.target.className == "arrowRight" )
					onArrowClick(1)
				else
					// Process the event with a delay to be sure that isMoveEvent has been correctly set
					setTimeout(function(){ onUserClickTimed(e); } , 50);
			}
			
			function onUserClickTimed(e)
			{
				var index = $(e.target).closest("li").index();
				// If it's a real click, publish CAROUSEL_CLICK
				if( ! isMoveEvent && index != -1 )
					dojo.publish("CAROUSEL_CLICK", index);
				
				isMoveEvent = false;
			}
			
			function updateArrows(e)
			{
				if( ! iscroll )
					return;
				
				if( iscroll.x == iscroll.maxScrollX || iscroll.x == 0 )
					isMoveEvent = false;
				
				if( iscroll.x > - 25 )
					$(selector + ' .arrowLeft').addClass("disabled");
				else
					$(selector + ' .arrowLeft').removeClass("disabled").attr("src", "resources/icons/carousel-left.png");
					
				if( iscroll.scrollerW + iscroll.x - iscroll.wrapperW < 25 )
					$(selector + ' .arrowRight').addClass("disabled");
				else
					$(selector + ' .arrowRight').removeClass("disabled").attr("src", "resources/icons/carousel-right.png");
			}
			
			function updateSlide(param)
			{
				var node = $(selector + ' .carouselScroller li:nth-child(' + (param.index+1) + ')');
				node.find(".carousel-item-div > div").html(param.name);
				node.find(".carousel-item-div > span").attr('class', MapTourHelper.getSymbolCss(param.color));
			}
			
			function onArrowClick(direction)
			{
				var nbItemVisible =  Math.floor(iscroll.wrapperW / ITEM_WIDTH) + 1;
				scroll(iscroll.x - direction * nbItemVisible * ITEM_WIDTH, nbItemVisible);
			}
			
			function scrollToIndex(index)
			{
				if(! iscroll)
					return;
				
				// Get the first and last visible item index from the carousel position
				var firstVisibleItemIndex = Math.ceil(Math.abs(iscroll.x / ITEM_WIDTH)) + 1;
				var lastVisibleItemIndex = Math.floor(Math.abs((iscroll.x - iscroll.wrapperW - 15) / ITEM_WIDTH));
							
				// Do not slide if the item is already visible
				if( (index+1) >= firstVisibleItemIndex && (index+1) <= lastVisibleItemIndex )
					return;
				
				// If RWD switch from mobile to desktop, need to delay and disable animation 
				if( firstVisibleItemIndex == 1 && lastVisibleItemIndex == 0 ) {
					$(selector + ' .carousel-item-div').css("visibility", "hidden");
					setTimeout(function(){
						scroll(Math.max(- index * ITEM_WIDTH), Math.abs(firstVisibleItemIndex - index), true);
						$(selector + ' .carousel-item-div').css("visibility", "visible");
					}, 0);
				}
				else
					scroll(Math.max(- index * ITEM_WIDTH), Math.abs(firstVisibleItemIndex - index));
			}
			
			/**
			 * Scroll of nbItem to be at the x position 
			 * @param {Object} targetX
			 * @param {Object} nbItem
			 * @param {Object} noAnnimation
			 */
			function scroll(targetX, nbItem, noAnnimation)
			{
				// Avoid to scroll beyond the limits
				var newTarget = Math.max(Math.min(0, targetX), iscroll.maxScrollX);
				// If not scrolling on the last item
				if( iscroll.scrollerW + targetX - ITEM_WIDTH > 0 ) {
					// Make sure that the first item will be completly visible
					newTarget = Math.ceil(newTarget / ITEM_WIDTH) * ITEM_WIDTH;
				}
				// Scroll at the speed of 150ms / item with a minimum time of 500ms and a maximum of 2000ms
				iscroll.scrollTo(newTarget, 0, noAnnimation ? 0 : Math.min(2000, Math.max(500, nbItem * 150)));
			}
			
			function setColor(bgColor, hoverColor)
			{
				$("#footer, #builderPanel2").css("background-color", Helper.hex2rgba(bgColor, MapTourHelper.isModernLayout() ? 0.85 : 1));
				if( hoverColor != "rgb(125, 125, 125)") {
					Helper.addCSSRule(".carouselScroller.no-touch .carousel-item-div:not(.selected):hover { background-color: " + hoverColor + " !important; }");
				}
			}
		}
	}
);