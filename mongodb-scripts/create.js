conn = new Mongo();
db = conn.getDB("ng-blog");

db.record.drop();
db.comment.drop();

var recordsToInsert = [
	{
		title: "Awesome article number one",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
		content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack</p>" +
			"<p>Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”).</p>" +
			"<p>Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	},
	{
		title: "Awesome article number two",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
        content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	},
	{
		title: "Awesome article number three",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
        content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	},
	{
		title: "Awesome article number four",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
        content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	},
	{
		title: "Awesome article number five",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
        content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	},
	{
		title: "Awesome article number six",
		description: "Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным.",
        content: "<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>" +
			"<p>Когда я впервые увидел его файл конфигурации, он показался мне крайне странным и путанным. Но спустя некоторое время я понял, что всё дело в уникальном синтаксисе Webpack и несколько иной философии, которая может поначалу немного сбить с толку. Но, с другой стороны, именно эта новая философия и делает Webpack таким популярным. Философия Webpack Можно выделить 2 основных принципа философии Webpack: Что угодно может быть модулем. Модулями могут быть как JS-файлы, так и CSS-файлы, HTML-файлы или изображения. То есть можно использовать и require(“myJSfile.js”), и require(“myCSSfile.css”). Таким образом, вы можете разбивать любой артефакт на меньшие удобоуправляемые части, использовать их повторно и так далее. Загружайте только то, что вам нужно и когда вам нужно. Обычно сборщики модулей берут все модули и генерируют из них один большой файл bundle.js. Но во многих приложениях размер такого файла может достигать 10–15 MB – а это слишком много. Потому Webpack оснащен рядом функций, позволяющих делить код и генерировать множество bundle-файлов, а также асинхронно загружать необходимые части приложения тогда, когда это нужно. А теперь давайте наконец перейдем к особенностям Webpack.</p>",
		date: ISODate("2019-11-12T00:00:00.000Z")
	}
];
var result = db.record.insertMany(recordsToInsert);

result.insertedIds.forEach(function(recordId) {
    db.comment.insertOne({
            recordId: recordId.valueOf(),
            content: "Awesome, thanks",
        	date: ISODate("2019-11-12T00:00:00.000Z")
        }
    );
});