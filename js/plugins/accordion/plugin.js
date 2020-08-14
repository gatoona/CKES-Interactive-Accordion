/*
* Image Enlarger Embed Plugin
*
* @author Washington County Webteam <webteam@co.washington.or.us>
* @version 1.0.0
*/
(function ($, Drupal) {
	CKEDITOR.plugins.add('accordion', {
		init: function (editor) {
			editor.addCommand('accordion', new CKEDITOR.dialogCommand('accordion', {
				allowedContent: 'div{*}(*); a[*]; img[*]'
			}));

			editor.ui.addButton('Accordion', {
				label : 'Insert Accordion',
				toolbar : 'insert',
				command : 'accordion',
				icon : this.path + 'images/icon.png'
			});

			CKEDITOR.dialog.add('accordion', function (instance) {

				return {
					title : 'Insert Accordion',
					minWidth : 510,
					minHeight : 200,
					contents :
						[{
							id : 'accordionPlugin',
							expand : true,
							elements :
							[
								{
									
									id : 'question',
									type : 'text',
									width: '100%',
									label : "Question: ",
								}

								
							]
						}
					],
					onOk: function()
					{
						var content = '';

						var question = this.getValueOf('accordionPlugin', 'question') || '';
						
						content += '<div class="accordion-item">';
						content += '<div class="accordion-header">' + question + '</div>';
						content += '<div class="accordion-content">Answer goes here</div>';
						content += '</div>';

						var element = CKEDITOR.dom.element.createFromHtml(content);
						var instance = this.getParentEditor();
						instance.insertElement(element);

			
					}
				};
			});
		}
	});

})(jQuery, Drupal);