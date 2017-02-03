//
// Permission is hereby granted, free of charge, to any person obtaining
// a copy of this software and associated documentation files (the
// 'Software'), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to
// the following conditions:
//
// The above copyright notice and this permission notice shall be
// included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
// EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
// IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
// CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
// TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
// SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//

/**
 * This function creating the wide screen plugin object.
 * @param {object} pluginsman Access to the plugins manager for pptx documents.
 * @constructor
 * @name makewidescreenplugin
 */
function makewidescreenplugin ( pluginsman ) {
	var funcThis = this;

	this.pluginsman = pluginsman;
	this.pptxData = pluginsman.getDataStorage ();

	// We want to extend the main API of the pptx document object:
	pluginsman.registerCallback ( 'makeDocApi', function ( docObj ) { funcThis.extendPptxApi ( docObj ); } );
	return this;
}

/**
 * This function extending the main document object with new API methods.
 * @param {object} docObj Document object.
 */
makewidescreenplugin.prototype.extendPptxApi = function ( docObj ) {
	var funcThis = this;

	docObj.setWidescreen = function ( wide ) {
		funcThis.pptxData.pptWidth 	= wide ? (960 * funcThis.pptxData.EMUS_PER_PT) 		: funcThis.pptxData.pptWidth;
		funcThis.pptxData.pptType 	= wide ? 'screen16x9' 	: 'screen4x3';
	};
}

module.exports = makewidescreenplugin;