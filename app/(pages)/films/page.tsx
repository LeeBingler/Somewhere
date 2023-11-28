import CardFilms from './components/CardFilms';

function Films() {
    const filmsArr = [
        { name: 'Nightmare Before CHRISMAS', source: '/Films/CorpseBrideFilm.mp4' },
        { name: 'CORPSE BRIDE', source: '/Films/CorpseBrideFilm.mp4' },
        { name: 'MISS PEREGRINE', source: '/Films/MissPeregrineFilm.mp4' },
        { name: 'Alice in WONDERLAND', source: '/Films/CorpseBrideFilm.mp4' }
    ];

    return (
        <main className='flex flex-col select-none'>
            {filmsArr.map((objFilm, index) => {
                return (
                    <CardFilms
                        key={objFilm.source}
                        film={objFilm.name}
                        source={objFilm.source}
                        index={index + 1}
                    />
                );
            })}
        </main>
    );
}

export default Films;
