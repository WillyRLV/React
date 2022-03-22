import { useState } from "react";
import { Button, Dialog, DialogContent, Chip, Grid , Slider } from "@mui/material";
import { getDataFromPokemon } from "../../services";

const PokemonDetail = (props) => {
  const [abrir, setAbrir] = useState(false);

  const [pokemonData, setPokemondata] = useState({});

  // como se lee un atributo que estamos recibiendo del componente
  // padre
  const fetchDetailFromPokemon = async () => {
    const pokemon = await getDataFromPokemon(props.url);
    setPokemondata(pokemon);
  };

  // vamos a hacer una funcion la cual se encargue de cambiar el estado
  // Entra a la funcion
  // setea el valor setAbrir al valor contrario que tenga abrir
  // abrir = true
  // !abrir = false
  // abrir = false
  // !abrir = true

  const handleOpenDialog = async () => {
    //cuando se abre el modal
    // primero hace el console e abrir que es false y luego recien ása a true

    if (!abrir) {
      await fetchDetailFromPokemon();
    }
    setAbrir(!abrir);
  };

  return (
    <div>
      <Button onClick={handleOpenDialog} variant="contained" color="primary">
        Detalle pokemon
      </Button>
      <Dialog
        maxWidth={"md"}
        fullWidth={"md"}
        open={abrir}
        onClose={handleOpenDialog}
      >
        <DialogContent className="center">
          {Object.keys(pokemonData).length > 0 && (
            <div>
              <h4 className="name-pokemon">{props.nombre}</h4>
              <Grid container>
                <Grid item md={6}>
                  <h4>Habilidades</h4>
                  {pokemonData.abilities.map((abilitie) => (
                    <Chip
                      label={abilitie.ability.name}
                      color="primary"
                      sx={{ marginRight: 2 }}
                    />
                  ))}
                
                  <h4>Especie</h4>
                  <Chip label={pokemonData.species.name} color="warning" />
                  <h4>Altura</h4>
                  <Chip label={`${pokemonData.height/10} m`} color="success" />
                  <h4>Peso</h4>
                  <Chip label={`${pokemonData.weight/10} kg`}color="success" />
              
                  <h4>Estadisticas</h4>
                  {pokemonData.stats.map((stat) =>(
                  <div>
                    <h4>{stat.stat.name}</h4>
                    <Slider
                    defaultValue={stat.base_stat}
                    aria-label="Always visible"
                    // defaultValue={stat.stat.name}
                    valueLabelDisplay="on"
                    disabled
                    />
                  </div>
                
                  ))}
                </Grid>
                <Grid item md={6}>
                  <img
                    width={350}
                    src={
                      pokemonData.sprites.other["official-artwork"]
                        .front_default
                    }
                    alt=""
                  />
                </Grid>
              </Grid>
            </div>
          )}
          <Button onClick={handleOpenDialog}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PokemonDetail;
