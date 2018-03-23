import Component from '@ember/component';

export default Component.extend({
	didInsertElement(){
		this._super(...arguments);
		const calificacion = this.get(calificacion);
		this.$('.color-detail')
		.css(
			'background-color',
		this.getColorByLeyenda(person.leyenda)
		);
	},
});
