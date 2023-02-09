export default function teste({data}){
    return(
        <div>{data}</div>
    )
}

export async function getServerSideProps(){
    let data ="Server side mensagem 2"
    return {
        props: { data }
    }
}