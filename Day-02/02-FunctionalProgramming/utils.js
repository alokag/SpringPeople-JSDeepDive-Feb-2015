Object.prototype.toTableHead = function(){
		var html = [];
		html.push("<tr>")
		Object.keys(this).map(function(key){
			html.push("<th>" + key + "</th>");
		});
		html.push("</tr>");
		return html.join('');
	}
	Object.prototype.toTableRow = function(){
		var html = [];
		html.push("<tr>")
		var self = this;
		Object.keys(this).map(function(key){
			if (typeof self[key] != "function")
				html.push("<td>" + self[key] + "</td>");
		});
		html.push("</tr>")
		return html.join('');
	}
	Array.prototype.toTable = function(parent){
		var html = ["<table>"];
		html.push(this[0].toTableHead());
		for(var i=0; i<this.length;i++)
			html.push(this[i].toTableRow());
		html.push("</table>");
		var div = document.createElement("div");
		div.innerHTML = html.join('');
		parent.appendChild(div.firstElementChild);
	}
	function print(heading, fn, parent){
		parent = parent || document.body;
		var h = document.createElement("h3");
		h.innerHTML = heading;
		parent.appendChild(h);
		fn(parent);
	}