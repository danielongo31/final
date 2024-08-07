export default function page({
    params
}) {

    const { id } = params;

    return (
        <div>Este es el curso: {id}</div>
    )
}
