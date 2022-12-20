//************************* AXIOS ************************************************************************************************
// import axios from "axios"
//     AXIOS - RESPONSE
// {data: {…}, status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
// AXIOS RESPONSE.DATA
// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 9704, …}
  
// FETCH - RECURSO
// {coord: {…}, weather: Array(1), base: 'stations', main: {…}, visibility: 9704, …}
// FETCH - RECURSO.MAIN
// {temp: 11.58, feels_like: 11.2, temp_min: 11.58, temp_max: 11.58, pressure: 1022, …}

// axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
// .then((response) => {
//   setCities((oldCities) => [...oldCities, response.data])
// })
//*********************************************************************************************************************************

//************************* FETCH (PROMESAS) *************************************************************************************
//fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
// const onSearch = (ciudad) =>{
//     fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=4ae2636d8dfbdc3044bede63951a019b&units=metric`)
//     .then(r => r.json())
//     .then((recurso) => { 
//         if(recurso.main !== undefined){
//             setCities(oldCities => [...oldCities, recurso]);
//         } else {
//             alert("Ciudad no encontrada");
//         }
//     })
// }
//***********************************************************************************************************************************

// const apiKey = "4ae2636d8dfbdc3044bede63951a019b"
// export const onSearch = async (ciudad) => {
//     let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
//     let commits = await response.json(); // leer respuesta del cuerpo y devolver como JSON
//     if(commits === undefined) alert("Ciudad no encontrada")
//     return commits
// }

