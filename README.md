JSON to HTML Table with vertical or horizontal headings
=======================================================

A few lines of JavaScript to convert any JSON to HTML table with vertical or horizontal headings.


##How to use
There's only one function in this library and accept two parameters and both are required.
    
```javascript
    function jsonToHTMLTable(parsedJson, headingType)
```
Parameters:
 - First parameter is parsed JSON object. See below to know about JSON format.
 - First parameter is heading type i.e vertical or horizontal
 

Simply call `jsonToHTMLTable` method with `parsedJson` and `headingType` parameter.  

##Example

This is an example of using this library:  

```javascript
    //Example data, JSON Object 
    var input_json = [
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Mexico City",
						"countrycode": "MX",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Mexiko-Stadt",
						"wikipedia": "en.wikipedia.org/wiki/Mexico_City",
						"lng": -99.12766456604,
						"fcode": "PPLC",
						"geonameId": 3530597,
						"lat": 19.428472427036,
						"population": 12294193
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Beijing",
						"countrycode": "CN",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Peking",
						"wikipedia": "en.wikipedia.org/wiki/Beijing",
						"lng": 116.397228240967,
						"fcode": "PPLC",
						"geonameId": 1816670,
						"lat": 39.9074977414405,
						"population": 11716620
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Manila",
						"countrycode": "PH",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Manila",
						"wikipedia": "en.wikipedia.org/wiki/Manila",
						"lng": 120.9822,
						"fcode": "PPLC",
						"geonameId": 1701668,
						"lat": 14.6042,
						"population": 10444527
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Dhaka",
						"countrycode": "BD",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Dhaka",
						"wikipedia": "en.wikipedia.org/wiki/Dhaka",
						"lng": 90.40743827819824,
						"fcode": "PPLC",
						"geonameId": 1185241,
						"lat": 23.710395616597037,
						"population": 10356500
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Seoul",
						"countrycode": "KR",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Seoul",
						"wikipedia": "en.wikipedia.org/wiki/Seoul",
						"lng": 126.9784,
						"fcode": "PPLC",
						"geonameId": 1835848,
						"lat": 37.566,
						"population": 10349312
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Jakarta",
						"countrycode": "ID",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Jakarta",
						"wikipedia": "en.wikipedia.org/wiki/Jakarta",
						"lng": 106.84513092041016,
						"fcode": "PPLC",
						"geonameId": 1642911,
						"lat": -6.214623197035775,
						"population": 8540121
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Tokyo",
						"countrycode": "JP",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Tokio",
						"wikipedia": "de.wikipedia.org/wiki/Tokyo",
						"lng": 139.69171,
						"fcode": "PPLC",
						"geonameId": 1850147,
						"lat": 35.6895,
						"population": 8336599
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Taipei",
						"countrycode": "TW",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Taipeh",
						"wikipedia": "de.wikipedia.org/wiki/Taipei",
						"lng": 121.531846,
						"fcode": "PPLC",
						"geonameId": 1668341,
						"lat": 25.047763,
						"population": 7871900
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Bogotá",
						"countrycode": "CO",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Bogotá",
						"wikipedia": "en.wikipedia.org/wiki/Bogot%C3%A1",
						"lng": -74.08175468444824,
						"fcode": "PPLC",
						"geonameId": 3688689,
						"lat": 4.609705849789108,
						"population": 7674366
					  },
					  {
						"fcodeName": "capital of a political entity",
						"toponymName": "Hong Kong",
						"countrycode": "HK",
						"fcl": "P",
						"fclName": "city, village,...",
						"name": "Hong Kong",
						"wikipedia": "en.wikipedia.org/wiki/Hong_Kong",
						"lng": 114.157691001892,
						"fcode": "PPLC",
						"geonameId": 1819729,
						"lat": 22.2855225817732,
						"population": 7012738
					  }
					]
```

Code sample to get a HTML table from JSON:

```javascript
    var html = jsonToHTMLTable(input_json, 'vertical');
	//or
	var html = jsonToHTMLTable(input_json, 'horizontal');
```
##JSFiddle

http://jsfiddle.net/mkamithkumar/nu0pyhe9/embedded/result/

##Contributing

This is a open-source project. Fork the project, complete the code and send pull request.

##License

    Copyright (C) 2014 Amith Kumar M K 
    
    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated 
    documentation files (the "Software"), to deal in the Software without restriction, including without limitation 
    the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, 
    and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
    The above copyright notice and this permission notice shall be included in all copies or substantial portions 
    of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
    TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL 
    THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF 
    CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS 
    IN THE SOFTWARE.
