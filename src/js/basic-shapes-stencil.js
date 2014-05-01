var basicShapesStencil = {
	"name": "Basic Shapes",
	"templates": [{
		"name": "Rectangle",
		"shape": {
			"type": "basic.Rect",
			"position": {
				"x": 0,
				"y": 0
			},
			"size": {
				"width": 150,
				"height": 75
			},
			"angle": 0,
			"z": 0,
			"attrs": {
				"rect": {
					"fill": "white",
					"height": 50,
				},
				"text": {
					"text": "Rectangle",
					"fill": "black"
				}
			}

		},
		"model": {}
	}, {
		"name": "Rounded Rectangle",
		"shape": {
			"type": "basic.Rect",
			"position": {
				"x": 0,
				"y": 0
			},
			"size": {
				"width": 150,
				"height": 75
			},
			"angle": 0,
			"z": 0,
			"attrs": {
				"rect": {
					"fill": "white",
					"height": 50,
					"rx": 10,
					"ry": 10
				},
				"text": {
					"text": "Rounded Rectangle",
					"fill": "black"
				}
			}

		},
		"model": {}
	}, {
		"name": "Circle",
		"shape": {
			"type": "basic.Circle",
			"position": {
				"x": 0,
				"y": 0
			},
			"size": {
				"width": 100,
				"height": 100
			},
			"angle": 0,
			"z": 0,
			"attrs": {
				"circle": {
					"fill": "white",
				},
				"text": {
					"text": "Circle",
					"fill": "black"
				}
			}
		}
	}, {
		"name": "Ellipse",
		"shape": {
			"type": "basic.Circle",
			"position": {
				"x": 0,
				"y": 0
			},
			"size": {
				"width": 100,
				"height": 50
			},
			"angle": 0,
			"z": 0,
			"attrs": {
				"circle": {
					"fill": "white",
				},
				"text": {
					"text": "Circle",
					"fill": "black"
				}
			}
		}
	}, {
		"name": "Triangle",
		"shape": {
			"type": "basic.polygon",
			"position": {
				"x": 0,
				"y": 0
			},
			"size": {
				"width": 100,
				"height": 80
			},
			"angle": 0,
			"z": 0,
			"attrs": {
				"polygon": {
					points: '0,100 50,0 100,100'
				},
				"text": {
					"text": "Triangle",
					"fill": "black",
					'ref-x': .5,
					'ref-y': .7,
				}
			}
		}
	}]
}