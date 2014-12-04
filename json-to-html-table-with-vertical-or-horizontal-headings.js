function jsonToHTMLTable(parsedJson,headingType){
	var tableHeaders = new Array();
	if(headingType == "horizontal"){
		for(var i = 0 ;i < parsedJson.length ; i++){
			for( var j = 0 ; j < Object.keys(parsedJson[i]).length ; j++){
				if(tableHeaders.indexOf(Object.keys(parsedJson[i])[j]) == -1 )
					tableHeaders.push(Object.keys(parsedJson[i])[j]);
			}
		}
		var headersHtml = "<tr>";

		for( var k = 0; k < tableHeaders.length ; k++){
			headersHtml += "<th>"+tableHeaders[k]+"</th>";
		}
		headersHtml+="</tr>";

		var rows="";
		for(var l = 0 ;l < parsedJson.length ; l++){
			rows += "<tr>";
			for( var m = 0 ;m < tableHeaders.length ; m++){
				if(typeof parsedJson[l][tableHeaders[m]] == 'undefined')
					rows += "<td></td>";
				else
				rows += "<td>"+  parsedJson[l][tableHeaders[m]]  +"</td>";
			}
			rows += "</tr>";
		}

		var horizontal_table= "<table class=\"table table-striped table-bordered table-hover\">"+headersHtml+rows+"</table>";
	return horizontal_table;
	}
	else if(headingType == "vertical"){
		for(var i = 0 ;i < parsedJson.length ; i++){
			for( var j = 0 ; j < Object.keys(parsedJson[i]).length ; j++){
				if(tableHeaders.indexOf(Object.keys(parsedJson[i])[j]) == -1 )
					tableHeaders.push(Object.keys(parsedJson[i])[j]);
			}
		}

		var rows="";
		for( var k = 0 ;k < tableHeaders.length ; k++){
			rows += "<tr>";
			for(var l = 0 ;l < parsedJson.length ; l++){
				if(l == 0)
					rows += "<th>"+tableHeaders[k] +"</th>";
				if(typeof parsedJson[l][tableHeaders[k]] == 'undefined')
					rows += "<td></td>";
				else
					rows += "<td>"+  parsedJson[l][tableHeaders[k]] +"</td>";
			}
			rows += "</tr>";
		}

		var vertical_table= "<table class=\"table table-striped table-bordered table-hover\">"+rows+"</table>";
	return vertical_table;
	}
}