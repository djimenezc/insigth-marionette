define(function() {
	'use strict';

	/* return an array of specs to be run */
	return {
		specs: ['spec/collections/ProductCollection.js',
		'spec/components/controls/ReportFilterView.js',
		'spec/components/productTable/ProductItemView.js',
		'spec/components/productTable/ProductTableCompositeView.js',
		'spec/controllers/ConfigController.js',
		'spec/controllers/MessageController.js',
		'spec/controllers/ModuleManager.js',
		'spec/controllers/ReportController.js',
		'spec/controllers/ScoreCardController.js',
		'spec/exampleTest.js',
		'spec/routers/DefaultRouter.js',
		'spec/views/layout/HorizontalLayout.js',
		'spec/views/layout/VerticalLayout.js',
		'spec/views/reports/ReportHeaderView.js'
		]
	};
});
