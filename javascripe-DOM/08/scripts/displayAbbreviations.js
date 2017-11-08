// 定义函数
function displayAbbreviations() {
	if (!document.getElementsByTagName || !document.createElement || !document.createTextNode) return false;
	// 遍历abbr
	var abbreviations = document.getElementsByTagName("abbr");
	// 判断是否包含缩略语
	if (abbreviations.length < 1) return false;
	// 定义defs的新数组
	var defs = new Array();
	// 遍历数组
	for (var i = 0; i < abbreviations.length; i++) {
		// 为了提高可读性，将abbreviations赋值给current_abbr
		var current_abbr = abbreviations[i];
		// 如果当前元素没有子节点，就立刻开始下一次循环
		if (current_abbr.childNodes.length < 1) continue;
		// 获取title的值
		var definition = current_abbr.getAttribute("title");
		// 获取abbr标签缩略语的第一个文本节点
		var key = current_abbr.lastChild.nodeValue;
		// 将值保存到数组
		defs[key] = definition;
	}
	// 创建定义列表并赋值
	var dlist = document.createElement("dl");
	// for/in循环，对于defs关联数组里的每个键，把它的值赋值给变量key
	for (key in defs) {
		var definition = defs[key];
		// 创建dt元素并赋值
		var dtitle = document.createElement("dt");
		// 用变量key的值去创建一个文本节点
		var dtitle_text = document.createTextNode(key);
		// 添加文本节点到元素节点
		dtitle.appendChild(dtitle_text);
		// 创建dd元素
		var ddesc = document.createElement("dd");
		// 用变量definition的值创建一个文本节点
		var ddesc_text = document.createTextNode(definition);
		// 把文本节点添加的元素节点
		ddesc.appendChild(ddesc_text);
		// 把dt和dd追加到dl元素上
		dlist.appendChild(dtitle);
		dlist.appendChild(ddesc);
	}
	if (dlist.childNodes.length < 1) return false;
	// 创建一个h2元素节点
	var header = document.createElement("h2");
	// 创建一个文本节点
	var header_text = document.createTextNode("Abbreviations");
	// 把文本节点追加的h2元素上
	header.appendChild(header_text);
	// 插入缩略语表的标题
	document.body.appendChild(header);
	// 插入缩略语表本身
	document.body.appendChild(dlist);
}
addLoadEvent(displayAbbreviations);