joint.shapes.basic.polygon = joint.dia.Element.extend({

	markup: '<g class="rotatable"><g class="scalable"><polygon/></g><text/></g>',

	defaults: joint.util.deepSupplement({

		type: 'basic.polygon',
		attrs: {
			polygon: {
				fill: 'white',
				stroke: 'black'
			},
			text: {
				'font-size': 14,
				ref: '.',
				'ref-x': .5,
				'ref-y': .5,
				'x-alignment': 'middle',
				'y-alignment': 'middle'
			}
		}

	}, joint.dia.Element.prototype.defaults)

});