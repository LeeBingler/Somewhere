import CardFilms from './components/CardFilms';

function Films() {
    const filmsArr = [
        { name: 'Nightmare Before CHRISTMAS', source: '/Videos/Films/NightmareBeforeChristmas.mp4' },
        { name: 'CORPSE BRIDE', source: '/Videos/Films/CorpseBride.mp4' },
        { name: 'MISS PEREGRINE', source: '/Videos/Films/MissPeregrine.mp4' },
        { name: 'Alice in WONDERLAND', source: '/Videos/Films/AliceInWonderland.mp4' }
    ];

    return (
        <main className='flex flex-col select-none'>
            {filmsArr.map((objFilm, index) => {
                return (
                    <CardFilms
                    img='/Pictures/Home/CorpseBride.png'
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
