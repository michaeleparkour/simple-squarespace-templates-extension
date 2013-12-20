/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50 */
/*global define, $, brackets, window */

define(function (require, exports, module) {
	'use strict';
	
	var LanguageManager = brackets.getModule("language/LanguageManager");
	
	//Squarespace Refine
	var sstemplate_language = LanguageManager.getLanguage("html");
	
	//Squarespace Template File Extensions
	sstemplate_language.addFileExtension("region");
	sstemplate_language.addFileExtension("block");
	sstemplate_language.addFileExtension("list");
	sstemplate_language.addFileExtension("item");
	
});
