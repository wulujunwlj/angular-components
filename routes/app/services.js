var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
	next();
});

router.get('/getComponentsList', function(req, res) {
	res.send([
  		{
  			name: 'ksh-table',
  			title: '表格组件',
  			link: '/app/kshTable'
  		}, {
  			name: 'angular-form-for',
  			title: '表单验证',
  			link: '/app/formFor'
  		}, {
  			name: 'expanders',
  			title: '展开/折叠',
  			link: '/app/formFor'
  		}
  	]);
});

router.get('/getTableData', function(req, res) {
	res.send([
		{
			id: 1,
			name: 'abc',
			age: 3,
			telephone: '13888888888'
		}, {
			id: 2,
			name: 'abc',
			age: 3,
			telephone: '13888888888'
		}, {
			id: 3,
			name: 'abc',
			age: 3,
			telephone: '13888888888'
		}, {
			id: 4,
			name: 'abc',
			age: 3,
			telephone: '13888888888'
		}, 
	]);
});

router.get('/touch', function(req, res) {
	res.render('biz/touch', {
		title: 'touch Event'
	});
})

module.exports = router;