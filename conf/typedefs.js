

// string ~> doc[fieldname]
// function ~> (dataset, type, doc) -> id
// array of ~> concat

exports.PIT = {
	node: {}
}

// if you don't specify and ID for edge,
// it is identified by {source, dataset, type, target}
exports.LIES_IN = {
	edge: {
		source: 'from',
		target: 'to'
	}
}

exports.SAME_AS = {
	edge: {
		source: 'from',
		target: 'to'
	}
}