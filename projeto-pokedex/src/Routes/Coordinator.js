export const returnToLastPage = (navigate) => {
    navigate(-1)
}

export const goToDetailsPage = (navigate, id) => {
    navigate (`/details/${id}`)
}

export const goToPokedexPage = (navigate) => {
    navigate("/pokedex")
}

