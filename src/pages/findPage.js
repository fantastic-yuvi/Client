import { Showdetails } from "./showDetails";
export const FindPage=(props)=>{
    return(
        <>
            <h1>Deatails of relavent Collegue</h1>
            {props.act.map(elem=>{
                return <div key={elem._id}>
                    <Showdetails course={elem.course} branch={elem.branch} food={elem.food} movie={elem.movie} song={elem.song} sport={elem.sport}/>
                </div> 
            })}
        </>
    );
};