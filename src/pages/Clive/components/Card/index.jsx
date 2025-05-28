import profile from '../../assets/profile.png'

const Card = () => {
    return ( 
        <div className="bg-blue-100 rounded my-1.5 flex w-full">
            <img src={profile} alt="Imagem de perfil" className="w-1" />
            <p>Nome 1 </p>
            <p>Email 1</p>
        </div>
     );
}
 
export default Card;