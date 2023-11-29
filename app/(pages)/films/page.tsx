import CardFilms from './components/CardFilms';

function Films() {
    const filmsArr = [
        { name: 'Nightmare Before CHRISTMAS' },
        { name: 'CORPSE BRIDE' },
        { name: 'MISS PEREGRINE' },
        { name: 'Alice in WONDERLAND' }
    ];

    return (
        <main className='flex flex-col select-none mt-[12vh] md:mt-0'>
            {filmsArr.map((objFilm, index) => {
                return <CardFilms key={objFilm.name} film={objFilm.name} index={index + 1} />;
            })}
        </main>
    );
}

export default Films;
