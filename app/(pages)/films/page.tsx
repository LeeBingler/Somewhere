import CardFilms from './components/CardFilms';

function Films() {
    const nameFilms = [
        'Spirited AWAY',
        'The FIFTH Element',
        "Pan's LABARYNTH",
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
