var __templateData = function anonymous(locals) {
var buf = [];
buf.push("<!DOCTYPE html><html ng-app=\"modeller\"><head><meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\"><link rel=\"stylesheet\" type=\"text/css\" href=\"css/libraries.css\"><script type=\"text/javascript\" src=\"js/libraries.js\"></script><script src=\"js/app.js\"></script><title>Modeller</title></head><body style=\"\" ng-controller=\"ModellerCtrl\" ng-init=\"init()\"><div class=\"fluid-container main\"><div class=\"row\"><div><div class=\"btn-group\"><button data-toggle=\"modal\" data-target=\"#exportModal\" ng-click=\"form.export = export()\" class=\"btn btn-default\">Export</button><button data-toggle=\"modal\" data-target=\"#importModal\" class=\"btn btn-default\">Import</button><button data-toggle=\"modal\" data-target=\"#exportModal\" ng-click=\"form.export = exportAsStencil()\" class=\"btn btn-default\">Export As Stencil</button><button ng-click=\"clearCanvas()\" class=\"btn btn-default\">Clear</button></div></div></div><div class=\"row\"><div class=\"col-md-2\"><h3>Stencils</h3><div id=\"stencils\"><div ng-repeat=\"stencil in stencils\" class=\"stencil\"><details open><summary>{{stencil.name}}</summary><div ng-repeat=\"template in stencil.templates\"><span>{{template.name}}</span><span ng-click=\"addTemplateToCanvas(template)\" class=\"glyphicon glyphicon-plus\"></span></div></details></div></div><button data-toggle=\"modal\" data-target=\"#loadStencilModal\" class=\"btn btn-default\">Load Stencil</button></div><div class=\"col-md-7\"><h3>Canvas</h3><div><div class=\"btn-group\"><button ng-click=\"linkSelectedObject()\" class=\"btn btn-default\">Link</button><button ng-click=\"cloneSelectedObject()\" class=\"btn btn-default\">Clone</button><button data-toggle=\"modal\" data-target=\"#exportModal\" ng-click=\"form.export = exportSelectedObject()\" class=\"btn btn-default\">Export</button><button ng-click=\"removeSelectedObject()\" class=\"btn btn-default\">Delete</button></div></div><div id=\"canvas\"></div></div><div class=\"col-md-3\"><h3>Properties</h3><h5>Name</h5><div><pre>{{selectedObject.name}}</pre><button data-toggle=\"modal\" data-target=\"#renameObjectModal\" ng-click=\"form.objectName = selectedObject.name\" class=\"btn btn-default\">Rename</button></div><h5>Shape</h5><div><pre>{{selectedObject.shape.attributes.attrs | json}}</pre><button data-toggle=\"modal\" data-target=\"#editShapeModal\" ng-click=\"setFormJSON('shape', selectedObject.shape.attributes.attrs)\" class=\"btn btn-default\">Edit</button></div><h5>Model</h5><div id=\"model\"><pre>{{selectedObject.model | json}}</pre><button data-toggle=\"modal\" data-target=\"#editModelModal\" ng-click=\"setFormJSON('model', selectedObject.model)\" class=\"btn btn-default\">Edit</button></div></div></div></div><div id=\"modals\"><div id=\"editModelModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Edit Model</h4></div><div class=\"modal-body\"><textarea ng-model=\"form.model\"></textarea></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" data-dismiss=\"modal\" ng-click=\"updateModel()\" class=\"btn btn-primary\">Save</button></div></div></form></div></div><div id=\"editShapeModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Edit Shape</h4></div><div class=\"modal-body\"><textarea ng-model=\"form.shape\"></textarea></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" data-dismiss=\"modal\" ng-click=\"updateShape()\" class=\"btn btn-primary\">Save</button></div></div></form></div></div><div id=\"exportModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Export</h4></div><div class=\"modal-body\"><pre>{{form.export}}</pre></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button></div></div></form></div></div><div id=\"importModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Import</h4></div><div class=\"modal-body\"><textarea ng-model=\"form.import\"></textarea></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" data-dismiss=\"modal\" ng-click=\"import()\" class=\"btn btn-primary\">Import</button></div></div></form></div></div><div id=\"loadStencilModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Load Stencil</h4></div><div class=\"modal-body\"><textarea ng-model=\"form.stencil\"></textarea></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" data-dismiss=\"modal\" ng-click=\"loadStencil()\" class=\"btn btn-primary\">Load</button></div></div></form></div></div><div id=\"renameObjectModal\" role=\"dialog\" tabindex=\"-1\" class=\"modal fade\"><div class=\"modal-dialog\"><form><div class=\"modal-content\"><div class=\"modal-header\"><button type=\"button\" data-dismiss=\"modal\" aria-hidden=\"true\" class=\"close\">&times;</button><h4 class=\"modal-title\">Rename Object</h4></div><div class=\"modal-body\"><input type=\"text\" ng-model=\"form.objectName\"></div><div class=\"modal-footer\"><button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-default\">Close</button><button type=\"button\" data-dismiss=\"modal\" ng-click=\"renameObject()\" class=\"btn btn-primary\">Save</button></div></div></form></div></div></div></body></html>");;return buf.join("");
};
if (typeof define === 'function' && define.amd) {
  define([], function() {
    return __templateData;
  });
} else if (typeof module === 'object' && module && module.exports) {
  module.exports = __templateData;
} else {
  __templateData;
}
;
//# sourceMappingURL=templates.js.map