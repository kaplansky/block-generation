$(function() {
	$('form').submit(function() {
    return false;
  });
	// Custom JS

	$('#remove').click(function() {
		$('.block').remove();
	})

});

	var area = document.getElementById("work_area");

	but.onclick = function() {

		var amount = document.getElementById("val").value;
		var minWidth = document.getElementById("min_width").value;
		var maxWidth = document.getElementById("max_width").value;
		var minHeight = document.getElementById("min_height").value;
		var maxHeight = document.getElementById("max_height").value;
	
		for (var i = 0; i < amount; i++){

			if (minWidth == "", maxWidth == "", minHeight == "", maxHeight == "") {
			minWidth, minHeight = 1;
			maxWidth = 100, maxHeight = 100;
			} 
			
			var block = {
			width: Math.floor(Math.random() * ( maxWidth - minWidth ) + minWidth) + "px",
			height: Math.floor(Math.random() * ( maxHeight - minHeight ) + minHeight) + "px",
			top: Math.floor(Math.random() * ( 400 - 1 ) + 1) + "px",
			left: Math.floor(Math.random() * ( 1040 - 1 ) + 1) + "px",
			color: '#' + ((Math.random() * 0x1000000) | 0x1000000).toString(16).substr(1)
			};

			createBlock = function() {
				var c = document.createElement("div");
				area.appendChild(c);
				c.classList.add("block");
				c.style.width = block.width;
				c.style.height = block.height;
				c.style.top = block.top;
				c.style.left = block.left;
				c.style.backgroundColor = block.color; 
			};

			createBlock();
		}
	};

