import React from "react";
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import Layout from '../common/Layout';


const SINGLE_POST = gql`

	query getSinglePost($id:ID!){
		getOnePublicacion(id:$id){
			titulo
			contenido
			imagen
			autor{
				nombre
				apellido
			}
		}
	}

`

function Post({match}){
	const { id } = match.params
	const { loading, data, errors } = useQuery(SINGLE_POST,{variables:{id}})

	if(loading) return <h2>Cargando...</h2>
	if(errors) return <h2>{`Errores: ${errors}`}</h2>

	return(
		<Layout head={data.getOnePublicacion.titulo}
		cover={data.getOnePublicacion.imagen}
		subhead={`Escrito por: ${data.getOnePublicacion.autor.nombre}  ${data.getOnePublicacion.autor.apellido} `}>
			<div className="container">
				<div className="row">
					<div className="col-md-8 col-lg-10 mx-auto">
						<p>{data.getOnePublicacion.contenido}</p>
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default Post;
