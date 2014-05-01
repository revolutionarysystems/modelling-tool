var modeller = angular.module("modeller", []);
modeller.controller('ModellerCtrl', function($scope) {
	var objects = {};
	var linkObject = false;
	$scope.selectedObject = null;
	$scope.form = {};
	$scope.init = function() {
		var graph = new joint.dia.Graph;
		var paper = new joint.dia.Paper({
			el: $('#canvas'),
			width: $("#canvas").parent().width(),
			height: 600,
			model: graph,
			gridSize: 1
		});
		$scope.stencils = [basicShapesStencil];
		$scope.clearCanvas = function() {
			objects = {};
			$scope.selectedObject = {};
			$scope.form = {};
			linkObject = false;
			graph.clear();
		}
		$scope.addTemplateToCanvas = function(template) {
			template.shape.position = {
				x: 0,
				y: 0
			};
			template.shape.attrs.text.text = template.name;
			var shape = eval("new joint.shapes." + template.shape.type + "(" + JSON.stringify(template.shape) + ")");
			var object = {
				id: shape.id,
				name: template.name,
				shape: shape,
				model: template.model
			}
			objects[shape.id] = object;
			graph.addCells([shape]);
			$scope.selectedObject = object;
		}
		$scope.loadStencil = function() {
			$scope.stencils.push(JSON.parse($scope.form.stencil));
		}
		$scope.removeSelectedObject = function() {
			delete objects[$scope.selectedObject.id];
			$scope.selectedObject.shape.remove();
			$scope.selectedObject = null;
		};
		$scope.linkSelectedObject = function() {
			if ($scope.selectedObject != null) {
				linkObject = true;
			}
		};
		$scope.cloneSelectedObject = function() {
			var results = $scope.selectedObject.shape.clone({
				deep: true
			});
			for (var i in results) {
				var result = results[i];
				console.log(result);
				result.attributes.position = {
					x: 0,
					y: 0
				};
				var object = {
					id: result.attributes.id,
					name: $scope.selectedObject.name,
					shape: result,
					model: $scope.selectedObject.model
				}
				objects[result.attributes.id] = object;
				$scope.selectedObject = object;
			}
			graph.addCells(results);
		}
		$scope.updateModel = function() {
			$scope.selectedObject.model = JSON.parse($scope.form.model);
		}
		$scope.updateShape = function() {
			$scope.selectedObject.shape.attr(JSON.parse($scope.form.shape));
		}
		$scope.renameObject = function() {
			$scope.selectedObject.name = $scope.form.objectName;
			$scope.selectedObject.shape.attr({
				"text": {
					"text": $scope.form.objectName
				}
			});
		}
		$scope.setFormJSON = function(param, json) {
			$scope.form[param] = JSON.stringify(json, null, '\t');
		}
		$scope.export = function() {
			var json = graph.toJSON();
			json.models = [];
			for (id in objects) {
				var object = objects[id];
				json.models.push({
					id: id,
					name: object.name,
					model: object.model
				});
			}
			return JSON.stringify(json, null, '\t');
		}
		$scope.exportSelectedObject = function() {
			var object = $scope.exportObject($scope.selectedObject);
			return JSON.stringify(object, null, '\t');
		};
		$scope.exportObject = function(object) {
			var result = {
				name: object.name,
				properties: object.model,
				links: [],
				parts: []
			};
			var links = graph.getConnectedLinks(object.shape, {
				inbound: true
			});
			for (var i in links) {
				var link = links[i];
				var linkResult = $scope.exportObject(objects[link.attributes.source.id]);
				result.links.push(linkResult);
			}
			var embeds = object.shape.attributes.embeds;
			if (embeds) {
				for (var i in embeds) {
					var embedId = embeds[i];
					var embedResult = $scope.exportObject(objects[embedId]);
					result.parts.push(embedResult);
				}
			}
			return result;
		}
		$scope.exportAsStencil = function() {
			var stencilName = prompt("Stencil Name");
			var stencil = {
				name: stencilName,
				templates: []
			}
			for (var id in objects) {
				var object = objects[id];
				console.log(object.shape);
				var shape = object.shape.toJSON();
				delete shape.id;
				var template = {
					name: object.name,
					model: object.model,
					shape: shape
				}
				stencil.templates.push(template);
			}
			return JSON.stringify(stencil, null, '\t');
		}
		$scope.import = function() {
			var json = JSON.parse($scope.form.import);
			graph.fromJSON(json);
			for (i in json.models) {
				var model = json.models[i];
				var id = model.id;
				var shape = graph.getCell(id);
				var object = {
					id: id,
					name: model.name,
					shape: shape,
					model: model.model
				};
				objects[id] = object;
			}
		};
		paper.on("cell:pointerdown", function(cellView, evt, x, y) {
			if (cellView.model.attributes.parent) {
				graph.getCell(cellView.model.attributes.parent).unembed(cellView.model);
			}
			var objectId = cellView.model.id;
			if (linkObject) {
				if ($scope.selectedObject.id != objectId) {
					var link = new joint.dia.Link({
						source: {
							id: $scope.selectedObject.id
						},
						target: {
							id: objectId
						},
						attrs: {
							'.marker-source': {
								fill: 'red',
								d: 'M 10 0 L 0 5 L 10 10 z'
							},
							'.marker-target': {
								fill: 'yellow',
								d: 'M 10 0 L 0 5 L 10 10 z'
							}
						}
					});
					graph.addCells([link]);
					linkObject = false;
				}
			} else {
				if ($scope.selectedObject == null || $scope.selectedObject.id != objectId) {
					$scope.$apply(function() {
						$scope.selectedObject = objects[objectId];
					})
				}
			}
		});
		paper.on('cell:pointerup', function(cellView, evt, x, y) {
			// Find the first element below that is not a link nor the dragged element itself.
			var elementBelow = graph.get('cells').find(function(cell) {
				if (cell instanceof joint.dia.Link) return false; // Not interested in links.
				if (cell.id === cellView.model.id) return false; // The same element as the dropped one.
				var bbox = paper.findViewByModel(cell).getBBox();
				return new window.g.rect(bbox.x, bbox.y, bbox.width, bbox.height).containsPoint(g.point(x, y));
			});
			if (elementBelow && elementBelow.attributes.parent != cellView.model.id) {
				elementBelow.embed(cellView.model);
			}
		});
	};
});