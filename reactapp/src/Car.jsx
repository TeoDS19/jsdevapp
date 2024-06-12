export default function Car(props){
    const vinde=(car1)=>{
        alert('Se vinde o masina'+ car1);
      };
       
return(
    <li>
    {props.index} - I am a 
    <button onClick={() => vinde(props.brand)}>se vinde o masina {props.brand}
    </button>
    </li>
)
}