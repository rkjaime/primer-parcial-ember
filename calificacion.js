import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		var ingresartodo;
		var message;
		var valoringresado;

		return{

			calificacion:[
			{
				nombre: "calificar parciales de diseno",
				leyenda:"por hacer",
			},
			{
				nombre: "subir notas de redes al sia",
				leyenda:"por hacer",
			},
			{
				nombre : "preparar clase de diseno",
				leyenda:"por hacer",
			},
			],
			
      message,
      
    
		}
	}
});
