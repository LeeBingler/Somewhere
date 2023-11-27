import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        'The FIFTH Element',
        'Spirited AWAY',
        "The PAN's Labyrinth",
        "MISS PEREGRINE",
    ];

    return (
        <main className='flex flex-col select-none'>
            {nameFilms.map((name, index) => {
                return <CardFilms key={name} film={name} index={index + 1} />
            })}
        </main>
    );
}

export default Films;
