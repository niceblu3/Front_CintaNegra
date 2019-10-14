import React from "react";
import PostCard from "./PostCard";
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';

const QUERY_POST = gql`
	query GETPOST{
		getPublicaciones{
			_id,
			titulo,
			autor{
				nombre,
				apellido
			}
		}
	}

`;

function Feed() {
	const { loading, errors, data  } = useQuery(QUERY_POST);

 if (errors) return <h2>{`Errores: ${errors}`}</h2>
  return (
    <div className="container">
      <div className="row">
        <div class="col-lg-8 col-md-10 mx-auto">
			{
			loading ? <h2>Cargando...</h2>
			: data.getPublicaciones.map( publicacion => (
					<PostCard
						titulo={publicacion.titulo}
						autor={`${publicacion.autor.nombre} ${publicacion.autor.apellido}` }
						id={publicacion._id}
						key={publicacion._id}
					/>
				))
			}
          <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">
              Older Posts &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feed;
